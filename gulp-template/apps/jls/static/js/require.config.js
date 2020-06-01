requirejs.config({
    urlArgs: 'v=4.0.1',
    baseUrl: '/apps/jls/static/js/controller',
    shim: {
        'easyui': ['jquery'],
        'easyuiZh': ['easyui'],
        'watermark': ['jquery'],
        'mxclient': ['jquery'],
        'gridexport': ['easyui'],
        'layui': ['layer.config'],
        'charts': ['jquery'],
        'idangerous.swiper': ['jquery'],
        'tdrag': ['jquery'],
        'idangerous': ['jquery']
    },
    paths: {
        'jquery': '../../lib/jquery/jquery.min',
        'easyui': '../../lib/jquery/jquery.easyui.min',
        'mxclient': '../../lib/flowchart/js/mxClient',
        'gridexport': '../../lib/jquery/datagrid-export',
        'pdfmake': '../../lib/pdfmake/pdfmake.min',
        'vfsfonts': '../../lib/pdfmake/vfs_fonts',
        'easyuiZh': '../../lib/jquery/easyui-lang-zh_CN',
        'echarts': '../../lib/echarts/echarts.min',
        'artTemplate': '../../lib/arttemplate/template-web',
        'bootstrap': '../../lib/bootstrap/js/bootstrap.min',
        'swiper': '../../lib/swiper-4.1.6/js/swiper.min',
        'yer': '../../lib/dper/yer.min',
        'uikit': '../../lib/uikit/js/uikit.min',
        'uikiticon': '../../lib/uikit/js/uikit-icons.min',
        'sha1': '../../lib/sha1',
        'cookie': '../../lib/js.cookie',
        'watermark': '../../lib/jquery/jquery.watermark',
        'layerui': '../../lib/layer',
        'layui': '../../lib/layui/layui.all',
        'layer.config': '../../js/controller/modules/layer.config',
        'charts': '../../lib/charts/Chart.min',
        'time': '../../lib/time',
        'countUp': '../../lib/countUp/countUp.min',
        'depString': '../../lib/dper/dperUtils/string',
        'respond': '../../lib/respond',
        'idangerous.swiper': '../../lib/idangerous.swiper.min',
        'tdrag': '../../lib/tdrag/Tdrag',
        'idangerous': '../../lib/swiper-4.1.6/js/idangerous.swiper.min',
    }
});

require(["jquery"], function ($) {
    var currentPage = $("#current-page").attr("current-page");
    if(currentPage!=undefined){
        require([currentPage],function(){
        });
    }
});