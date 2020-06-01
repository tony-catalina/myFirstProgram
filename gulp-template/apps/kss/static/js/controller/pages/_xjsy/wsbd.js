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

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/_xj');
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

            grid.init('table',{
                url: url.xjYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxx_xm','jbxx_jsh','jbxx_dabh','rsrqString','syts','xjmcString','kssjString','jssjString'],
                    hidden:[]})
            });
            glws.init('glws', {
                files:[
                    {name:"使用械具审批表",label:"kss_syxjspb"}
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