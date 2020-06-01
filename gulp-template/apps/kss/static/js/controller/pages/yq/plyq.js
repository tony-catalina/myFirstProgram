/**
模块名称： 文书补打
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var addForm = require('modules/form/yqplyq')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    var common=require('common');
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
                        id: 'add', name: '办案登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var rows = $('#table').datagrid('getSelections');
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { blrq: currentTime, pzrq: currentTime, pzr: common.info.user.loginname };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.plyqAdd, addData, rows, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择登记人员!');
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

            var dataTj = { taskDefinitionKey: 'kss_yq_yqdj', processDefinitionKey: 'kss_yq'};


            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': dataTj.taskDefinitionKey,
                        'processDefinitionKey': dataTj.processDefinitionKey
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',true,200,{'taskDefinitionKey':'kss_yq_yqdj','processDefinitionKey':'kss_yq'},function(rybh) {   //流程中的节点使用这个
            });

            jqtree.init('jqtree','table',dataTj);//有监区树就加，没有不加
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