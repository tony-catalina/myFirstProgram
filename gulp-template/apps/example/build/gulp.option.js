/**
 * 业务模块gulp独立配置文件
 */

// 需要操作的文件
exports.src = {
  copy: [
    'apps/example/static/js/require.config.js',
    'apps/example/static/lib/**/*',
    'apps/example/static/image/**/*',
    'apps/example/views/**/*',
  ],
  js:'./apps/example/static/js/**/*.js'
}

// 不需要编译的文件
exports.filter = {
  js: ['apps/example/static/js/require.config.js'],
  css: ['!apps/example/static/css/lib/reset.css']
}
