/**
 * 业务模块gulp独立配置文件
 */


// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/jls/static/js/require.config.js',
        'apps/jls/static/lib/**/*',
        'apps/jls/static/fonts/**/*',
        'apps/jls/static/images/**/*',
        ]
};

// 不需要编译的文件
exports.filter = {
    tmp: ['apps/jls/static/controller/templates/**/*.html'],
    js: ['apps/jls/static/lib/**/*.js'],
    css: ['!apps/jls/static/css/**/*.css']
};
