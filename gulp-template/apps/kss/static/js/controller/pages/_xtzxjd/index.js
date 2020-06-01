/**
模块名称： 协同执行监督
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var tab=require('modules/tab');

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
                    {name:'业务流程',icon:'icon-liucheng'},
                    // {name:'纠正违法反馈',icon:'icon-taizhang'}
                ],
                contents:[
                    {name:'业务流程',url:'/apps/kss/views/pages/xtzxjd/ywlc_dv.html'},
                    // {name:'纠正违法反馈',url:'/apps/kss/views/pages/xtzxjd/jzwffk.html'}
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