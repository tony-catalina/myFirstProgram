'use strict';

const cfg = global.cfg;

const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const through = require('through2');
const fs = require('fs');
const afs = fs.promises;

/**
 * 递归删除目录
 * @param {String}} dir 需要删除的目录路径
 */
const rimraf = async dir => {
  let resolvedDir = path.resolve(dir);
  if (fs.existsSync(resolvedDir)) {
    for (let entry of await afs.readdir(resolvedDir)) {
      let resolvedEntry = path.resolve(dir, entry);
      if ((await afs.lstat(resolvedEntry)).isDirectory()) {
        await rimraf(resolvedEntry);
      } else {
        await afs.unlink(resolvedEntry);
      }
    }
    await afs.rmdir(resolvedDir);
  }
};
/**
 * Gulp 递归删除插件
 */
const rimrafPrefixer = () => {
  return through.obj((file, encoding, cb) => {
    if (file.isDirectory() && file.path) {
      rimraf(file.path).then(() => {
        cb(null, null);
      }, err => {
        cb(err, null);
      });
    } else {
      cb(null, file);
    }
  });
};

/**
 * 清除dist目录
 * @return
 */
function gulpClean() {
  return gulp.src(cfg.path.dist)
    .pipe(rimrafPrefixer());
}

module.exports = gulpClean;
