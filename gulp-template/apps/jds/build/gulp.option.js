/**
 * 业务模块gulp独立配置文件
 */

const path = require('path');
const cfg = global.cfg = require('../../../gulp/gulp.config');

// 需要操作的文件
exports.path = {
    dist: './dist/apps/'
};
exports.src = {
    copy: [
        'apps/jds/static/js/seajs.config.js',
        'apps/jds/static/lib/**/*',
        'apps/jds/static/fonts/**/*',
        'apps/jds/static/images/**/*',
        ]
};

// 不需要编译的文件
exports.filter = {
    tmp: ['apps/jds/static/controller/templates/**/*.html'],
    js: ['apps/jds/static/lib/**/*.js'],
    css: ['!apps/jds/static/css/**/*.css']
};
exports.seajsCombo = {
    ignore : [ 'jquery','easyui','easyuiZh','easyuiBufferview','easyuiDetailview','easyuiGroupview',
        'arttemplate','Swiper','echarts','sJI','yer','uikit','watermark','CountUp','UnderScore','mxclient','layerUI'],
    map : {
        //js 库
        jquery: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/jquery.min',
        easyui: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/jquery.easyui.min',
        easyuiZh: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/easyui-lang-zh_CN',
        easyuiBufferview: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/datagrid-bufferview',
        easyuiDetailview: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/datagrid-detailview',
        easyuiGroupview: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/datagrid-groupview',
        easyuiScrollview: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/datagrid-scrollview',
        arttemplate: path.resolve(cfg.path.app)+'/apps/jds/static/lib/arttemplate/template-web',
        Swiper: path.resolve(cfg.path.app)+'/apps/jds/static/lib/swiper/swiper.min',
        echarts: path.resolve(cfg.path.app)+'/apps/jds/static/lib/echarts/echarts.min',
        sJI: path.resolve(cfg.path.app)+'/apps/jds/static/lib/class/extends',
        yer: path.resolve(cfg.path.app)+'/apps/jds/static/lib/dper/yer.min',
        uikit: path.resolve(cfg.path.app)+'/apps/jds/static/lib/uikit/dist/js/uikit.min',
        watermark: path.resolve(cfg.path.app)+'/apps/jds/static/lib/jquery/jquery.watermark',
        CountUp: path.resolve(cfg.path.app)+'/apps/jds/static/lib/countUp/countUp.min',
        UnderScore: path.resolve(cfg.path.app)+'/apps/jds/static/lib/underscore/underscore-min',
        mxclient: path.resolve(cfg.path.app)+'/apps/jds/static/lib/flowchart/js/mxClient.min',
        layerUI: path.resolve(cfg.path.app)+'/apps/jds/static/lib/layer',
        //公共组件
        'awd/jquery/tools': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/jquery/tools',
        'awd/easyui/util': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/easyui/util',
        'awd/easyui/grid': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/easyui/grid',
        'awd/easyui/tree': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/easyui/tree',
        'awd/easyui/watermark': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/easyui/watermark',
        'awd/flowchart/mxgraph': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/flowchart/mxgraph',
        'awd/layui/utils': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/awd/layui/utils',
        //业务模块
        'modules/jbxxgrid': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/jbxxgrid',
        'modules/jbxxgridFlow': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/jbxxgridFlow',
        'modules/jdsclumns': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/jdsclumns',
        'modules/jqtree': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/jqtree',
        'modules/menus': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/menus',
        'modules/url': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/modules/url',
        'services/comTpls': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/services/comTpls',
        'services/formTpls': path.resolve(cfg.path.app)+'/apps/jds/static/js/controller/services/formTpls'
    }
};