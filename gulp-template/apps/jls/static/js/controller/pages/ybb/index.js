/**
 模块名称: 指纹管理
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');

    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/

            $("#cz").on("click",function(){
                $("#ksrq").datebox("setValue","");
                $("#jsrq").datebox("setValue","");
            })

            $("#tj").on("click",function(){
                var starttime=$("#ksrq").datebox("getValue");
                var endtime=$("#jsrq").datebox("getValue");
                console.log(starttime,endtime)
                $.messager.confirm("提示","确定打印?",function(){})
                // layer.open({
                //     title:"拘留所年报表",
                //     area:['325px'],
                //     content:'确定打印?',
                //     btn:['确定','取消'],
                //     yes:function(){}
                // })
                
            })
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});