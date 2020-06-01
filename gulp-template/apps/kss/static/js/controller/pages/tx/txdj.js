/**
模块名称： 提讯登记
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    
    var tab= require('modules/tab');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            tab.init('Layout',{
                activeIndex:0,
                items:[
                    {name:'简项查询',icon:'icon-taizhang'},
                    {name:'同案人员查询',icon:'icon-taizhang'},
                    {name:'条形码查询',icon:'icon-taizhang'},
                    

                ],
                contents:[
                    {name:'简项查询',url:'/apps/kss/views/pages/tx/txJxcx.html'},
                    {name:'同案人员查询',url:'/apps/kss/views/pages/tx/txTarycx.html'},
                    {name:'条形码查询',url:'/apps/kss/views/pages/tx/txTxmcx.html'},
                ]
            });
       
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
           
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});