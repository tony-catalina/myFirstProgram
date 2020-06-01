/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var addForm = require('modules/form/jsbjdjdjssdj')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                    {
                        id: 'add', name: '鉴定结束登记', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd");
                                var addData1 = { jsrq: currentTime, xgyqx: currentTime, jdjg: '有精神病' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.jsbjdUpdate, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_jsbjd_jdjs',
                        'processDefinitionKey': 'kss_jsbjd'
                    }, param);
                    grid.query('table', param);
                }
            });


            jbxxgrid.initJbxxflow('table',false,200, {'taskDefinitionKey': 'kss_jsbjd_jdjs','processDefinitionKey': 'kss_jsbjd'},function(rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});