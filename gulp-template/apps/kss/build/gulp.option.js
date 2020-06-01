/**
 * 业务模块gulp独立配置文件
 */


// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/kss/static/js/require.config.js',
        'apps/kss/static/lib/**/*',
        'apps/kss/static/fonts/**/*',
        'apps/kss/static/images/**/*',
        ]
};

// 不需要编译的文件
exports.filter = {
    tmp: ['apps/kss/static/controller/templates/**/*.html'],
    js: ['apps/kss/static/lib/**/*.js'],
    css: ['!apps/kss/static/css/**/*.css']
};
