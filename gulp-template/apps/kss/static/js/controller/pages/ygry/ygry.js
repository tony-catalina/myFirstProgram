/**
模块名称： 严管人员
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
    var clumn=require('modules/clumn/ygry');
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

            linkbar.init({
                links:[
                    
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){alert(2);}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'kssj$gte',
                        title: '办理日期',
                        type: 'datebox'
                    }, {
                        name: 'jssj$gte',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.ygrySyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxxSnbh','jbxxXm','lyString','blr','bllxString','blrq','kssj','jssj','ldyj'],
                    hidden:[]})
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