/**
 模块名称： 加减刑-领导审批
 开始时间： 2020-3-9
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jjxLdsp.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jjx');
    var url = require('modules/url');
    var jjxLdspForm = require('modules/form/jjxLdsp');
    var jbxxgrid = require('modules/jbxxgrid');
    var common=require('common');
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
                    { id: 'add', name: '审批', icon: 'icon-jiahao', fun: function() { 
                        var data = grid.getSelected('table')[0];
                        if(data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var user=common.info.user.loginname;
                            var addData1 = { blsj: currentTime,ldxm: user };
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            jjxLdspForm .init(url.ldspAddByZh, addData, function() {
                                grid.reload('table');
                            });
                        }else {
                            utils.alert('请选择要修改的记录!');
                        }
                     } },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        title: '监室号',
                        name:'jsbh',
                        type: 'awdCombotree', url:url.getJqCombotree
                    }, {
                        title: '姓名',
                        name:'xm',
                        type: 'textbox'
                    }]
                },
                query:function(param){
                    param=$.extend({}, {
                        'taskDefinitionKey':'kss_jjx_ldsp',
                        'processDefinitionKey':'kss_jjx'
                    }, param);
                    grid.query('table',param);
                },
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_jjx_ldsp','processDefinitionKey':'kss_jjx'},function(rybh) {   //流程中的节点使用这个
            });
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