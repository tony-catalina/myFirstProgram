/**
 模块名称:
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var tab = require('modules/tab');
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
                    {name:'男监室',icon:'icon-liucheng'},
                    {name:'女监室',icon:'icon-taizhang'},
                    {name:'普通监室',icon:'icon-taizhang'}

                ],
                contents:[
                    {name:'男监室',url:'/apps/jls/views/pages/dqcsry/manjs.html'},
                    {name:'女监室',url:'/apps/jls/views/pages/dqcsry/womanjs.html'},
                    {name:'普通监室',url:'/apps/jls/views/pages/dqcsry/ptjs.html'}
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