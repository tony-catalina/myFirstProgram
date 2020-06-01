'use strict';

const cfg = global.cfg;
const plumber = require('gulp-plumber');
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const gulpTmod = require('gulp-tmod');
const replace = require('gulp-replace');
const changed=require('gulp-changed');
const debug=require('gulp-debug');
const cache=require('gulp-cached');



module.exports = function () {

    let basePath = path.join(cfg.path.cwd, cfg.options.mod+'/static/js/controller/templates');
    let files = fs.readdirSync(basePath);

    files.forEach((val, index) => {
        let dirPath = path.join(basePath, val);
        let stat = fs.statSync(dirPath);

        if (stat.isDirectory()) {
            let subPath = path.join(cfg.path.cwd, cfg.options.mod+'/static/js/controller/templates/'+val);
            let subfiles = fs.readdirSync(subPath);
            subfiles.forEach((subval, index) => {
                var fileter = cfg.options.mod+'/static/js/controller/templates/'+val+'/' + subval;
                gulp.src(fileter)
                    .pipe(plumber())
                    // .pipe(changed(path.join(cfg.path.dist, cfg.options.mod+'/static/js/controller/services/'+val)))
                    .pipe(cache('caching-tomod'))
                    .pipe(debug({title: '编译:'}))
                    .pipe(gulpTmod({
                        templateBase: 'templates',
                        runtime: subval + '.js',
                    }))
                    .pipe(replace((path.join(cfg.path.cwd)+'/'+cfg.options.mod+'/static/js/controller/templates/').replace(/\\/g,'/'), ''))
                    // Modified by 黄露 on 2020/4/11：取消输出到源代码目录
                    .pipe(gulp.dest(path.join(cfg.path.dist, cfg.options.mod+'/static/js/controller/services/'+val)));
            });
        } else {
            var fileter = cfg.options.mod+'/static/js/controller/templates/' + val;
            gulp.src(fileter)
                .pipe(plumber())
                // .pipe(changed(path.join(cfg.path.dist, cfg.options.mod+'/static/js/controller/services')))
                .pipe(cache('caching-tomod'))
                .pipe(debug({title: '编译:'}))
                .pipe(gulpTmod({
                    templateBase: 'templates',
                    runtime: val + '.js',
                }))
                .pipe(replace((path.join(cfg.path.cwd)+'/'+cfg.options.mod+'/static/js/controller/templates/').replace(/\\/g,'/'), ''))
                // Modified by 黄露 on 2020/4/11：取消输出到源代码目录
                .pipe(gulp.dest(path.join(cfg.path.dist, cfg.options.mod+'/static/js/controller/services')));
        }


    });
}
