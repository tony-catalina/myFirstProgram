requirejs.config({
    //基目录
    baseUrl: '/apps/swj/static/js/controller',
    waitSeconds: 200,
    shim: {
        'easyui': ['jquery'],
        'watermark':['jquery']
    },
    paths: {
        //jquery
        'jquery':       '../../lib/jquery.min',
        //easyui
        'easyui':       '../../lib/jquery.easyui.min',
        //
        'mxgraph':      '../../lib/flowchart/js/mxClient',
        //
        'gridexport':   '../../lib/datagrid-export',
        //
        'pdfmake':      '../../lib/pdfmake/pdfmake.min',
        'vfsfonts':     '../../lib/pdfmake/vfs_fonts',
        //easyui本地化
        'easyuiZh':     '../../lib/easyui-lang-zh_CN',
        //echars图表
        'echarts':      '../../lib/echarts.min',
        //Template模板
        'artTemplate':  '../../lib/arttemplate/template-web',
        //bootstrap
        'bootstrap':    '../../lib/bootstrap/js/bootstrap.min',
        //swiper轮播图插件
        'swiper':       '../../lib/swiper-4.1.6/js/swiper.min',
        'uikit':        '../../lib/uikit/dist/js/uikit.min',
        'uikiticon':    '../../lib/uikit/dist/js/uikit-icons.min',
        'sha1':         '../../lib/sha1',
        'cookie':       '../../lib/js.cookie',
        'watermark':    '../../lib/jquery.watermark',
        //layer弹窗
        'layerui'  :    '../../lib/layer',
        'layui':        '../../lib/layui/layui.all',
        'layer.config': '../../js/controller/modules/layer.config',
        'charts':       '../../lib/charts/Chart.min',
        'time':         '../../lib/time',
        'countUp':      '../../lib/countUp/countUp.min',
        'dep_string':   '../../lib/dper/dperUtils/string'
    }
});
