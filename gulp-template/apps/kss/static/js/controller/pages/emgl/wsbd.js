/**
模块名称： 文书补打
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var jbxxgrid = require('modules/jbxxgrid');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/emdj');
    var url=require('modules/url');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
        	toolbar.init({
                buttons:[
                ]
            });

            linkbar.init({
                links:[
                ]
            });

            searchform.initWsbd('search',{
                query:function(param){
                    grid.query('table',param);
                }
            });
            jbxxgrid.initjbxx('table',true,200,{},function(rybh){
            });

            glws.init('glws', {
                files:[
                    {name:"布建、撤销耳目审批表",label:"kss_bjcxemspb"}
                ]
            });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});