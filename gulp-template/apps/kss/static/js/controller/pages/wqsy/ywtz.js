/**
 * 业务台账 页面入口
 */
define(function (require) {
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
    var clumn = require('modules/clumn/wqsy');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    // { id: 'add', name: '导出', icon: 'icon-jiahao', fun: function () { alert("导出"); } }
                    { id: 'print', name: '台账打印', icon: 'icon-jiahao'},
                    { id: 'excel', name: '导出Excel', icon: 'icon-jiahao' },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                primary: [{
                    title: '使用理由',
                    type: 'textbox',
                    name: 'syly'
                }, {
                    title: '使用天数',
                    type: 'textbox',
                    name: 'syts'
                }, {
                    title: '武器种类', type: 'textbox', name: 'wqzl'
                }],
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wqsyYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jh', 'wqzl', 'syly', 'syts', 'syjssjString', 'psbz'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/wqsy', ['xm', 'jh', 'wqzl', 'syly', 'syts', 'syjssjString', 'psbz'], []);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function () {
                alert(111);
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
