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

            var nowdate = new Date();
            //获取系统前一个月的时间
            nowdate.setMonth(nowdate.getMonth() - 1);
            var y = nowdate.getFullYear();
            var m = nowdate.getMonth() + 1;
            var d = nowdate.getDate();
            if (m < 10) {
                m = "0" + m;
            }
            if (d < 10) {
                d = "0" + d;
            }
            var toward = y + '-' + m + '-' + d;
            $('#starttime').datebox('setValue', toward)

            $("#tjBtn").on("click",function(){
                var starttime=$("#starttime").datebox("getValue");
                var endtime=$("#endtime").datebox("getValue");
                
				var labName = $("input[type='radio']:checked").val();
                var title = $("input[type='radio']:checked").attr("title");
                
                console.log(starttime,endtime,labName,title)
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