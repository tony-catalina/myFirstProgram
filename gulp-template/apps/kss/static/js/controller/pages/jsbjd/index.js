/**
模块名称： 精神病鉴定
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
                    {name:'精神病鉴定流程',icon:'icon-liucheng'},
                    {name:'精神异常人员',icon:'icon-taizhang'}

                ],
                contents:[
                    {name:'精神病鉴定流程',url:'/apps/kss/views/pages/jsbjd/jsbjdlc_dv.html'},
                    {name:'精神异常人员',url:'/apps/kss/views/pages/jsbjd/ycry.html'}
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
