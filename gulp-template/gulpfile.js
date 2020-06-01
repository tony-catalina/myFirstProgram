'use strict';

const fs = require('fs');
const eventstream = require('event-stream');

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence').use(gulp);
const requirejsOptimize = require('gulp-requirejs-optimize');

const cfg = global.cfg = require('./gulp/gulp.config');
const gulpClean = require('./gulp/gulp.clean');
const gulpJavascript = require('./gulp/gulp.javascript');
const gulpCss = require('./gulp/gulp.css');
const gulpHtml = require('./gulp/gulp.html');
const gulpImage = require('./gulp/gulp.image');
const gulpCopy = require('./gulp/gulp.copy');
const gulpDeploy = require('./gulp/gulp.deploy');
const gulpServer = require('./gulp/gulp.server');
const gulpTomod = require('./gulp/gulp.tomod');
const gulpTest = require('./gulp/gulp.test');
const l_mock = require('./gulp/l-mock');
const gulpSeajs = require('./gulp/gulp.seajs');
var livereload = require('gulp-livereload');


/* 清除dist目录 */
gulp.task('clean', () => gulpClean());

/* 编译JS文件 */
gulp.task('build:js', () => gulpJavascript());

/* 编译JS文件 */
gulp.task('build:seajs', () => gulpSeajs());

/* 编译CSS文件 */
gulp.task('build:css', () => gulpCss());

/* 编译HTML文件 */
gulp.task('build:html', () => gulpHtml());

/* 编译图片 */
gulp.task('build:image', () => gulpImage());

/* 拷贝文件 */
gulp.task('build:copy', () => gulpCopy());

/* 启动web服务*/
gulp.task('server',()=>gulpServer());

/* 模块转换 */
gulp.task('tomod', ()=>gulpTomod());

/* lmock server */
gulp.task('mock', ()=>l_mock());

gulp.task('test',()=>gulpTest());

/**
 * build
 * @uses gulp build [option]
 *       gulp build  编译全部
 *       gulp build  --mod=doc  编译doc模块
 *       gulp build  --env=production  线上编译模式，包括压缩、合并等操作
 */
gulp.task('build', gulpSequence('clean','build:image', 'build:css','test','tomod','build:seajs', 'build:html', 'build:copy','server','mock'));


/**
 * watch
 * @uses gulp watch [option]
 *       gulp watch  监听全部模块
 *       gulp watch  --mod=doc  监听doc模块
 *       gulp watch  --env=production  线上监听编译模式，包括压缩、合并等操作
 */
gulp.task('watch', ['build'], function() {
  gulp.watch([cfg.src.js,'./awd/**'], { cwd: cfg.path.cwd } ,['build:seajs']);
  gulp.watch([cfg.src.image], { cwd: cfg.path.cwd } ,['build:images']);
  gulp.watch([cfg.src.css], { cwd: cfg.path.cwd } ,['build:css']);
  gulp.watch([cfg.src.views], { cwd: cfg.path.cwd } ,['build:html']);
  gulp.watch(cfg.src.copy, { cwd: cfg.path.cwd } ,['build:copy'])
});

/**
 * build
 * @uses gulp build [option]
 *       gulp build  编译全部
 *       gulp build  --mod=doc  编译doc模块
 *       gulp build  --env=production  线上编译模式，包括压缩、合并等操作
 */
gulp.task('requirebuild', gulpSequence('clean','build:image', 'build:css','test','tomod','build:js', 'build:html', 'build:copy','server','mock','watch'));


/**
 * watch
 * @uses gulp watch [option]
 *       gulp watch  监听全部模块
 *       gulp watch  --mod=doc  监听doc模块
 *       gulp watch  --env=production  线上监听编译模式，包括压缩、合并等操作
 */
gulp.task('requirewatch', ['requirebuild'],function(event) {
  console.log('Event type: ' + event.type); // added, changed, or deleted
  console.log('Event path: ' + event.path); // The path of the modified file
  gulp.watch([cfg.src.js,'./awd/**'], { cwd: cfg.path.cwd, interval: 750} ,['build:js']);
  gulp.watch([cfg.src.image], { cwd: cfg.path.cwd , interval: 750} ,['build:image']);
  gulp.watch([cfg.src.css], { cwd: cfg.path.cwd , interval: 750} ,['build:css']);
  gulp.watch([cfg.src.views], { cwd: cfg.path.cwd, interval: 750 } ,['build:html']);
  gulp.watch(cfg.src.copy, { cwd: cfg.path.cwd , interval: 750} ,['build:copy']);
  gulp.watch([cfg.src.tmp], { cwd: cfg.path.cwd , interval: 750} ,['tomod']);
});

gulp.task('watch', function () {
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});


