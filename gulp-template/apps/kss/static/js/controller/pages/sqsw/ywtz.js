/**
模块名称： 业务台账
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xjjs');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    { id: 'print', name: '台账打印', icon: 'icon-jiahao'},
                    { id: 'excel', name: '导出Excel', icon: 'icon-jiahao' },
                ]
            });
            linkbar.init({
                links: [

                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.initYwtz('search', {
                query: function(param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.sqswList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'rsrqString', 'dah', 'jsxm', 'jsje', 'jszjh', 'dz','blrqString'],
                    hidden: []})
            });
            hideshow.init('modules/clumn/_xjjs',['xm', 'jsh', 'rsrqString', 'dah', 'jsxm', 'jsje', 'jszjh', 'dz','blrqString'],[]);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});