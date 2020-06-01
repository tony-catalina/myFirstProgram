/**
 模块名称： 公共事务
 开始时间： 2020-2-25
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
                    {name:'安全检查',icon:'icon-liucheng'},
                    {name:'视察情况',icon:'icon-taizhang'},
                    {name:'集体教育',icon:'icon-taizhang'},
                    {name:'狱情分析',icon:'icon-taizhang'},
                    {name:'所长接待记录',icon:'icon-taizhang'},
                    {name:'应急预案演练',icon:'icon-taizhang'},
                    {name:'所务会议',icon:'icon-taizhang'},
                    {name:'联席会议',icon:'icon-taizhang'},
                    {name:'在押人员动态分析会议',icon:'icon-taizhang'}

                ],
                contents:[
                    {name:'安全检查',url:'/apps/kss/views/pages/ggsw/aqjc.html'},
                    {name:'视察情况',url:'/apps/kss/views/pages/ggsw/scqk.html'},
                    {name:'集体教育',url:'/apps/kss/views/pages/ggsw/jtjy.html'},
                    {name:'狱情分析',url:'/apps/kss/views/pages/ggsw/yqfx.html'},
                    {name:'所长接待记录',url:'/apps/kss/views/pages/ggsw/szjdjl.html'},
                    {name:'应急预案演练',url:'/apps/kss/views/pages/ggsw/yjyayl.html'},
                    {name:'所务会议',url:'/apps/kss/views/pages/ggsw/swhy.html'},
                    {name:'联席会议',url:'/apps/kss/views/pages/ggsw/lxhy.html'},
                    {name:'在押人员动态分析会议',url:'/apps/kss/views/pages/ggsw/zyrydtfxhy.html'}
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