/**
模块名称：事故事件登记
开发时间： 2020-2-25
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
                    {name:'事故',icon:'icon-taizhang'},
                    {name:'重大事件',icon:'icon-taizhang'},
                    {name:'一般事件',icon:'icon-taizhang'}
                ],
                contents:[
                    {name:'事故',url:'/apps/kss/views/pages/sgsjdj/sg.html'},
                    {name:'重大事件',url:'/apps/kss/views/pages/sgsjdj/zdsj.html'},
                    {name:'一般事件',url:'/apps/kss/views/pages/sgsjdj/ybsj.html'}
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