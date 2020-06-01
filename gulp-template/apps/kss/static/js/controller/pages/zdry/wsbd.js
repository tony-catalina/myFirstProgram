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
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/zdry');
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
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table') ;}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}}
                ]
            });

            searchform.initWsbd('search',{
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxx_xm','jsh','xbString','csrqString','jbxx_sxzm','rygllbString','blrqString'],
                    hidden:[]})
            });

            glws.init('glws', {
                files:[
                    {name:"重点在押人员管理登记表",label:'kss_zdzyrygldjb'}
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