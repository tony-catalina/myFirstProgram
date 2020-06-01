/**
 * 业务模块gulp独立配置文件
 */


// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/sh_fyweb/static/js/require.config.js',
        'apps/sh_fyweb/static/js/controller/**/*.js',
        'apps/sh_fyweb/static/lib/**/*',
        'apps/sh_fyweb/static/fonts/**/*',
        'apps/sh_fyweb/static/images/**/*',
        ]
};

// 不需要编译的文件
exports.filter = {
    tmp: ['apps/sh_fyweb/static/controller/templates/**/*.html'],
    js: ['apps/sh_fyweb/static/lib/**/*.js'],
    css: ['!apps/sh_fyweb/static/css/**/*.css']
};
