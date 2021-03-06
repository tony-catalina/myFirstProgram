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
    var clumn = require('modules/clumn/yjyayl');
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
                //     { name: 'kssjStart', title: '应急预演时间始', type: 'datebox' },
                //     { name: 'kssjEnd', title: '至', type: 'datebox' },
                // ],
                // more: [
                //     [
                //         { name: 'jssjStart', title: '应急预演时间止', type: 'datebox' },
                //         { name: 'jssjEnd', title: '至', type: 'datebox' },
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'dqjd': '3'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.yjyllist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['kssj', 'jssj', 'yaylnr', 'zzzhz', 'yllb','cjdw', 'cjrs', 'ylqk', 'czwt', 'gjcs', 'zcld', 'dqjd', 'hyjlr', 'jsbh'],
                    hidden: ['yaylnr', 'dqjd', 'hyjlr', 'jsbh']
                })
            });
            hideshow.init('modules/clumn/yjyayl', ['kssj', 'jssj', 'yaylnr','cjdw', 'zzzhz', 'yllb', 'cjrs', 'ylqk', 'czwt', 'gjcs', 'zcld', 'dqjd', 'hyjlr', 'jsbh'],
            ['yaylnr', 'dqjd', 'hyjlr', 'jsbh']);
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