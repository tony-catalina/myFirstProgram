/**
 * 业务模块gulp独立配置文件
 */


// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/swj/static/js/require.config.js',
        'apps/swj/static/lib/**/*',
        'apps/swj/static/fonts/**/*',
        'apps/swj/static/images/**/*',
        ]
};
// 不需要编译的文件
exports.filter = {
    tmp: ['apps/swj/static/controller/templates/**/*.html'],
    js: ['apps/swj/static/lib/**/*.js'],
    css: ['!apps/swj/static/css/**/*.css']
};
