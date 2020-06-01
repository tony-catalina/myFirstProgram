'use strict';

const cfg = global.cfg;

const path = require('path');
const gulp = require('gulp');
var webserver = require('gulp-webserver');

function gulpServer() {
  var options = {
    port: 8080,
    /*自定义端口*/
    livereload: true,

    /*实现自动刷新，从此不再需要手动刷新页面了*/
    open: './' + cfg.options.mod + '/views/index.html',

    // /*服务器启动时自动打开网页*/
    proxies: [{
        source: '/mock',
        target: 'http://localhost:4000'
      },
      {
        source: '/kss',
        target: 'http://192.168.4.50:11112/'
      },
      {
        source: '/jls',
        target: 'http://192.168.4.50:11445/'
      },
      {
        source: '/api',
        target: 'http://awdnj.cross.echosite.cn'
      },
      {
        source: '/fwf',
        target: 'http://192.168.4.24:92'
      },
      {
        //新建swj代理地址
        source: '/swj',
        target: 'http://192.168.4.77:11105'
      },{
        //平台
        source: '/platform',
        target: 'http://192.168.4.24:12104/'
      }
    ]
  };
  return gulp.src(cfg.path.dist)
    .pipe(webserver(options));
}

module.exports = gulpServer;
