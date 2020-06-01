'use strict';

const cfg = global.cfg;

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const minimist = require('minimist');

const through = require('through2');
var seajsCombo = require('gulp-seajs-combo');

function seajsConcat() {

  let modRequireCfg = getRequireCfg();

  let distPath = cfg.distPath +'static/js';
  let jsFilter = filter(['**/*.js', '!**/*.min.js', '!**/*-min.js'].concat(cfg.filter.js), { restore: true });
  let requireFilter = filter(['**/*.js'].concat(cfg.filter.require), { restore: true });
  let buildFilter = filter(['**/controller/*.js','**/pages/**/*.js'].concat(cfg.filter.require), { restore: true });
  let jsLibFilter = filter(['**/*.js'], { restore: true });

  let options = exports.options = getArgv();
  //复制公共模块到指定文件下
  if(cfg.src.public==undefined){
  gulp.src('./awd/**')
    .pipe(gulp.dest(cfg.appPath+'/static/js/controller/awd'));
  }
  if (cfg.options.isProduction) {
    // 如果有require配置，则通过gulp-requirejs-optimize打包
    // 否则不用做任何处理
    if(modRequireCfg){
      console.log('---------------------------------处理入口文件----------------------------------------------');

      return gulp.src(cfg.src.js)
        // .pipe(cfg.readStream())
        // .pipe(plumber())
        .pipe(buildFilter)
        .pipe(seajsCombo({
          ignore:['jquery','exports', 'require','define']
        }))
        .pipe(buildFilter.restore)
        // 排除不需要压缩的文件
        .pipe(jsFilter)
        // .pipe(uglify({
        //         mangle: {
        //             except: ['easyloader', 'exports', 'require','define']//这几个变量不能压缩混淆，否则会引发seajs的一些意外问题
        //         }
        //     }))
        // .pipe(babel())
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(distPath+"/controller/"))
        .pipe(rev())
        .pipe(gulp.dest(distPath+"/controller/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest(distPath+"/controller/"));
    }else{
      console.log('==================================处理入口文件============================================');
      console.log(cfg.src.js);
      console.log(path.resolve(cfg.path.app));
      console.log(cfg.path.base);
      return gulp.src(cfg.src.js, { cwd: path.resolve(cfg.path.app) , base: cfg.path.base })
        // .pipe(plumber())
        // 排除不需要压缩的文件
        .pipe(jsFilter)
        // .pipe(babel())
        .pipe(seajsCombo(cfg.modOption.seajsCombo))
        // .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(gulp.dest(cfg.path.dist))
        .pipe(rev())
        .pipe(gulp.dest(cfg.path.dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(cfg.path.dist));
    }
  } else {
    return gulp.src(cfg.src.js, { cwd: path.resolve(cfg.path.app) , base: cfg.path.base })
      .pipe(plumber())
      // .pipe(babel())
      .pipe(gulp.dest(cfg.path.dist))
  }
}

/**
 * 获取require配置，并以对象形式返回
 * @return {object}     配置项
 */
function getRequireCfg() {
  let filePath = path.resolve(cfg.path.cwd , cfg.appPath + cfg.path.requireConfig),
    fileContent, result;
  if (!fs.existsSync(filePath)) {
    return result;
  }
  fileContent = fs.readFileSync(filePath, 'UTF-8');

  try {
    result = Function(" var output," +
      " requirejs = require = function() {}," +
      " define = function () {};" +
      " require.config = function (options) { output = options; };" +
      fileContent + ";" +
      " return output;")()
  } catch (err) {}

  // 调整baseUrl
  result.baseUrl = path.resolve(cfg.path.app) + result.baseUrl;

  // 调整map
  for(let key in result.map){
    let mapItem = result.map[key];
    if (typeof mapItem === 'object') {
      for(let subKey in mapItem){
        let subItem = mapItem[subKey];
        result.map[key][subKey] = subItem.replace(/^\//,'');
      }
    }
  }

  return result;
}

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

module.exports = seajsConcat;
