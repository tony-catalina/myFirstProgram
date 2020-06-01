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
                    {name:'业务流程',icon:'icon-liucheng'},
                    {name:'业务动态',icon:'icon-taizhang'},
                    {name:'业务台账',icon:'icon-taizhang'},
                    {name:'文书补打',icon:'icon-tishishuoming'},
                    {name:'规范帮助',icon:'icon-tishishuoming'}

                ],
                contents:[
                    {name:'业务流程',url:'/apps/kss/views/pages/jshj/ywlc_dv.html'},
                    {name:'业务动态',url:'/apps/kss/views/pages/jshj/ywdt.html'},
                    {name:'业务台账',url:'/apps/kss/views/pages/jshj/ywtz.html'},
                    {name:'文书补打',url:'/apps/kss/views/pages/jshj/wsbd.html'},
                    {name:'规范帮助',url:'/apps/kss/views/pages/jshj/gfbz.html'}
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