/**
 * 业务模块gulp独立配置文件
 */


// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/platform/static/js/require.config.js',
        'apps/platform/static/lib/**/*',
        'apps/platform/static/fonts/**/*',
        'apps/platform/static/images/**/*',
        ]
};

// 不需要编译的文件
exports.filter = {
    tmp: ['apps/platform/static/controller/templates/**/*.html'],
    js: ['apps/platform/static/lib/**/*.js'],
    css: ['!apps/platform/static/css/**/*.css']
};
