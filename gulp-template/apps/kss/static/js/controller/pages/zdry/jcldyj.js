/**
模块名称： 解除 领导意见
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hdpzFormAdd = require('modules/form/zdryJcsldyj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    {
                        id: 'add', name: '领导意见', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");  
                                var addData1 = {  ldpssj: currentTime, ldyj: '同意' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                hdpzFormAdd.init(url.zdrySpAdd+'?type=2', addData, function () { 
                                    //刷新table
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    {id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table') ; } },
                    {id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_zdrycx_sldyj',
                        'processDefinitionKey': 'kss_zdrycx'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_zdrycx_sldyj','processDefinitionKey':'kss_zdrycx'},function(rybh) {   //流程中的节点使用这个

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