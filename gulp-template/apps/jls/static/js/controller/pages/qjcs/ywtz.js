/**
 模块名称: 业务台账
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/qjcs');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');

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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.initYwtz('search', {
                // primary: [
                //     { name: 'dbr', title: '担保人', type: 'textbox' },
                //     { name: 'gjqm', title: '管教民警', type: 'textbox' }
                // ],
                // more: [
                //     [
                //         { name: 'gjqmrqStart', title: '管教签名时间', type: 'datebox' },
                //         { name: 'gjqmrqEnd', title: '至', type: 'datebox' },

                //     ],
                //     [
                //         { name: 'qjkssjStart', title: '请假开始日期', type: 'datebox' },
                //         { name: 'qjkssjEnd', title: '至', type: 'datebox' },
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'csbllx': '1',
                        'jbxx_state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.qjcsList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'jbxx_jsh', 'sqr', 'qjly', 'zjqx', 'qjkssj', 'qjjssj', 'gjqm', 'dh', 'zgldyjnr', 'dbrdw', 'szyjnr', 'szqm', 'flwsh'],
                    hidden: ['dh', 'zgldyjnr', 'dbrdw', 'szyjnr', 'szqm', 'flwsh']
                })
            });
            hideshow.init('modules/clumn/qjcs',
                ['rybh', 'jbxx_jsh', 'sqr', 'qjly', 'zjqx', 'qjkssj', 'qjjssj', 'gjqm', 'dh', 'zgldyjnr', 'dbrdw', 'szyjnr', 'szqm', 'flwsh'],
                ['dh', 'zgldyjnr', 'dbrdw', 'szyjnr', 'szqm', 'flwsh']);

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