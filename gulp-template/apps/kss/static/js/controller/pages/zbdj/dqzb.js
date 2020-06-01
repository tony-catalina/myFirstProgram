/**
模块名称： 值班登记-历史值班
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var url=require('modules/url');

    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            $.ajax({
                url: url.syQueryOne,
                type: 'POST',
                success: function(res) {
                    console.log(res);
                    $("#sld").text(res.rows[0].sld);
                    $("#sy").text(res.rows[0].sy);
                    $("#xkzb").text(res.rows[0].xkzb);
                    $("#zkzb").text(res.rows[0].zkzb);
                    $("#yszb").text(res.rows[0].yszb);
                    $("#ts").text(res.rows[0].ts);
                    $("#xkzhb").text(res.rows[0].xkzhb);
                    $("#zkzhb").text(res.rows[0].zkzhb);
                    $("#yszhb").text(res.rows[0].yszhb);
                    $("#gj").text(res.rows[0].gj);
                    $("#xkwb").text(res.rows[0].xkwb);
                    $("#zkwb").text(res.rows[0].zkwb);
                    $("#yswb").text(res.rows[0].yswb);
                },
                error:function(error){
                    console.log(error);
                }
            })
            

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