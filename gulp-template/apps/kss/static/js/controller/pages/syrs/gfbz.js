/**
 * 规范帮助 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化

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