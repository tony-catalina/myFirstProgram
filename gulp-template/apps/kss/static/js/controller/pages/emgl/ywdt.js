/**
模块名称： 业务动态
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var emgl = require('pages/emgl/emglYwdt')

    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            emgl.init('emgl', {});

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