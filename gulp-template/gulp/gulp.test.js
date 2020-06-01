'use strict';

const cfg = global.cfg;

const path = require('path');
const gulp = require('gulp');
const mocha = require('gulp-mocha');

function gulpTest() {
  return gulp.src(['test/test-*.js'], { read: false })
      .pipe(mocha({
        reporter: 'spec',
        globals: {
          should: require('should')
        }
      }));
}

module.exports = gulpTest;
