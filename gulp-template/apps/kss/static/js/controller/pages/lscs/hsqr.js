/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/lscs');
    var url = require('modules/url');
    var addForm = require('modules/form/lscshsqd')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        id: 'add', name: '回所确认', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var rows = $('#table').datagrid('getSelections');
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { blsj: currentTime, dlmj: common.info.user.loginname, updatetime: currentTime, creator: common.info.user.loginname, createtime: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.addLscsHsqr, addData, rows, function () {
                                    grid.reload('table');
                                });
                            } else {
                                layer.alert('请选择回所人员!');
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
                pageRender:{
                    primary:[
                        {
                            name: 'snbh',
                            title: '人员编号',
                            type: 'textbox' 
                        },{
                            name: 'lsdjr',
                            title: '操作人',
                            type: 'textbox'
                        }
                    ],
                    more:[
                        [
                            { name: 'yjmj', title: '押解民警', type: 'textbox' },
                            { name: 'cssj_start', title: '出所时间', type: 'datebox' },
                            { name: 'cssj_end', title: '至', type: 'datebox' },
                        ]
                        
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_lscs_hsqr',
                        'processDefinitionKey': 'kss_lscs'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',true,200,{'taskDefinitionKey': 'kss_lscs_hsqr','processDefinitionKey': 'kss_lscs'},function(rybh){
                
            });
            /**布局初始化**/
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