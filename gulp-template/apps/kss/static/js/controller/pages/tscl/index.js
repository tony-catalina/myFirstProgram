/**
模块名称： 投诉处理
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var tab= require('modules/tab');

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
            tab.init('Layout',{
                activeIndex:0,
                items:[
                    {name:'投诉处理流程图',icon:'icon-liucheng'},
                    {name:'投诉处理人员信息',icon:'icon-taizhang'},

                ],
                contents:[
                    {name:'投诉处理流程图',url:'/apps/kss/views/pages/tscl/ywlc_dv.html'},
                    {name:'投诉处理人员信息',url:'/apps/kss/views/pages/tscl/ryxx.html'},

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