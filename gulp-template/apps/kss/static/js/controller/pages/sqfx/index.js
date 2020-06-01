/**
模块名称： 所情分析
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
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            tab.init('Layout',{
                activeIndex:0,
                items:[
                    {name:'所务会议',icon:'icon-taizhang'},
                    {name:'专案会议',icon:'icon-taizhang'}
                ],
                contents:[
                    {name:'所务会议',url:'/apps/kss/views/pages/sqfx/swhy.html'},
                    {name:'专案会议',url:'/apps/kss/views/pages/sqfx/zahy.html'}
                ]
            });

        },
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});