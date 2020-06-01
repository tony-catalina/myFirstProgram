/**
模块名称： 业务操作日志查询
开始时间： 2020-3-7
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
    var clumn = require('modules/clumn/operaterlogs');
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
                    { id: 'edit', name: '查询结果导出到excel表', icon: 'icon-daochu' }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'logtime_start',
                        title: '日志时间',
                        type: 'datebox'
                    }, {
                        name: 'logtime_end',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            { name: 'loginname_like', title: '操作人', type: 'textbox' },
                            { name: 'logtype_like', title: '操作类型', type: 'textbox' }
                        ]
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.logList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['optime', 'optype', 'operator', 'url', 'opcontent', 'opresult'],
                    hidden: []
                })
            });
            /**布局初始化**/
            hideshow.init('modules/clumn/operaterlogs',['optime', 'optype', 'operator', 'url', 'opcontent', 'opresult'],[]);
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});