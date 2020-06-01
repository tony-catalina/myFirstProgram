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

const requirejsOptimize = require('gulp-requirejs-optimize');
const through = require('through2');
const gutil=require('gulp-util');
const babel=require('gulp-babel');
const es2015Preset = require("babel-preset-es2015");
const changed=require('gulp-changed');
const debug=require('gulp-debug');
const cache=require('gulp-cached');

/**
 * 编译javascript
 * @return
 */
function gulpJavascript() {
  // 获取require 配置文件
  // 有个很重要的事情是把：static/common之类的url路径替换成common/static的文件路径
  let modRequireCfg = getRequireCfg();

  let distPath = cfg.distPath +'static/js';
  let jsFilter = filter(['**/*.js', '!**/*.min.js', '!**/*-min.js'].concat(cfg.filter.js), { restore: true });
  let requireFilter = filter(['**/controller/*.js','**/pages/**/*.js'].concat(cfg.filter.require), { restore: true });
  let jsLibFilter = filter(['**/*.js'], { restore: true });

  // 复制公共模块到输出目录
  // Modified by 黄露 on 2020/4/11：直接输出到 dist 目录，避免输出到源代码目录尚未完成时，
  //   后续将源代码复制到输出目录导致文件为空。同时，亦要保证公共 awd 目录中的文件在项目级 awd 目录
  //   中没有，以确保文件不会被覆盖。
  gulp.src('./awd/**').pipe(changed(distPath+"/controller/awd")).pipe(gulp.dest(distPath+"/controller/awd"));

  if (cfg.options.isProduction) {
    // 如果有require配置，则通过gulp-requirejs-optimize打包
    // 否则不用做任何处理
    if(modRequireCfg){
      return gulp.src(cfg.src.js)
                  .pipe(cfg.readStream())
                  .pipe(plumber())
          .pipe(babel({presets: ['es2015']}))
          .pipe(requireFilter)
          .pipe(requirejsOptimize(function(file) {
            // var subpath=path.dirname(file.relative);
            // if(subpath!='.'){
            //   subpath='/'+subpath.replace(/\\/g,'/');
            // }else{
            //   subpath='';
            // }
            // console.log(file.relative.replace(/\\/g,'/'));
            return {
              // name: file.name,
              baseUrl: modRequireCfg.baseUrl,
              paths: modRequireCfg.paths,
              include: file.relative.replace(/\\/g,'/'),
              optimize: 'none' // 不压缩
            };

          }))
          .pipe(requireFilter.restore)
          // 排除不需要压缩的文件
          .pipe(jsFilter)
          // .pipe(uglify()).on('error', function(err) {
          //   gutil.log(gutil.colors.red('[Error]'), err.toString());
          // })
          .pipe(jsFilter.restore)
          .pipe(gulp.dest(distPath+"/controller/"));
          // .pipe(rev())
          // .pipe(gulp.dest(distPath+"/controller/"));
          // .pipe(rev.manifest())
          // .pipe(gulp.dest(distPath+"/controller/"));
    }else{
      return gulp.src(cfg.src.js, { cwd: path.resolve(cfg.path.app) , base: cfg.path.base })
          // .pipe(plumber())
          // 排除不需要压缩的文件
          .pipe(jsFilter)
          // .pipe(uglify())
          .pipe(jsFilter.restore)
          .pipe(gulp.dest(distPath))
          .pipe(rev())
          .pipe(gulp.dest(distPath))
          .pipe(rev.manifest())
          .pipe(gulp.dest(distPath));
    }
  } else {
    return gulp.src(cfg.src.js, { cwd: path.resolve(cfg.path.app) , base: cfg.path.base })
        .pipe(plumber())
        .pipe(cache('caching-js'))
        // .pipe(changed(cfg.path.dist))
        .pipe(debug({title: '编译:'}))
        .pipe(gulp.dest(cfg.path.dist));

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

module.exports = gulpJavascript;
