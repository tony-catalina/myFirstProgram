'use strict';

const fs = require('fs');
const path = require('path');

const minimist = require('minimist');
const glob = require('glob');
const through = require('through2');

/* 文件路径 */
let _path = exports.path = {
    app: './', // 应用业务代码路径，相对于path.cwd的路径
    dist: './dist/', // 产出文件路径
    cwd: path.resolve('./'), //
    base: path.resolve('./'),
    requireConfig: 'static/js/require.config.js' // reqirejs配置文件路径
}

/* 获取命令行参数 */
let options = exports.options = getArgv();

// 获取基本路径
let appPath = exports.appPath = _path.app + options.mod + '/';
console.log(appPath);
let distPath = exports.distPath = _path.dist + options.mod + '/';

/* 获取对应模块下的配置 */
let modOption = exports.modOption = getModoption();
//console.log(modOption);

/* 浏览器兼容配置 */
exports.autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

/* src路径 */
exports.src = Object.assign({}, {
    views: [`${appPath}views/**/*.html`], // views泛路径
    tmp: `${appPath}static/js/controller/templates/**/*.html`, // js文件泛路径
    js: `${appPath}static/js/controller/**/*.js`, // js文件泛路径
    css: `${appPath}static/css/**/*`, // css文件泛路径
    image: `${appPath}static/images/**/*`, // 图片泛路径
    copy: [ // 需要拷贝的文件泛路径
        `${appPath}fonts/**/*`,
        `${appPath}images/**/*`,
        `${appPath}deploy/**/*`,
        `${appPath}mock/**/*`,
        `${appPath}lib/**/*`
    ],
    manifest: `${distPath}**/rev-manifest.json` // 隐射文件泛路径，注意是在distPath路径下
}, modOption.src);

/* 文件编译过滤器，把不需要编译的文件添加到这里 */
exports.filter = Object.assign({}, {
    css: ['!example/static/css/test.css'],
    js: [],
    image: [],
    require: [],
    copy: []
}, modOption.filter);

/**
 * 给mainfest文件添加模块空间
 */
exports.gulpManifestAddMod = function(filetype) {
    return through.obj(function(file, enc, callback) {
        let fileContent = file.contents.toString('UTF-8');
        fileContent = fileContent.replace(/(\")([a-zA-Z0-9\-\_]{1,})/g, '$1/' + options.mod + '/static/' + filetype + '/$2');
        file.contents = new Buffer(fileContent);
        callback(null, file);
    }, function(cb) {
        cb();
    })
}

/**
 * 获取模块的独立配置
 * @return {Object}
 */
function getModoption() {
    let modOptionPath = path.resolve(_path.app + options.mod + '/build/gulp.option.js');
    console.log('----------------获取应用里配置----------------------');
    if (fs.existsSync(modOptionPath)) {
        return require(modOptionPath);
    }

    return {};
}

/**
 * 输出gulp stream 中文件信息
 * @return {Obejct}
 */
exports.readStream = function(showContents) {
    return through.obj((file, enc, callback) => {
        //console.log('base:' + file.base, '\n', 'cwd:' + file.cwd, '\n', 'path:' + file.path, '\n', 'relative:' + file.relative);
        showContents && console.log(file.contents.toString('UTF-8'))
        callback(null, file);
    }, (cb) => cb())
}

/**
 * 获取命令行参数
 * @return {Object} 参数对象
 */
function getArgv() {
    let options = minimist(process.argv.slice(2), {
        string: ['env', 'mod'],
        boolean: ['hash'],
        default: {
            env: process.env.ENV || 'development',
            mod: null,
            hash: true
        }
    });
    options.isDevelopment = (options.env == 'development');
    options.isProduction = (options.env == 'production');

    if (!options.mod) {
        throw ('请输入模块名，例如：gulp build --mod=bi...');
    }

    return options;
}