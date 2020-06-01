/**
模块名称： 财务统计
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

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
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            $("#cwtj_zyry").click(function(){
                $(".cssj").hide();
            });
            $("#cwtj_lsry").click(function(){
                //	个人统计时间不要
                var text=$("input[name=tjlx]:checked").attr("text");
                if (text!="个人统计" && text!="消费类型统计") {
                    $(".cssj").show();
                }
    
            });
            $("#rytj").click(function(){
                $("#ry").show();
                $("#xbtj").hide();
                $(".jqjs").hide();
                //	个人统计时间不要
                $(".cssj").hide();
            });
            $("#xflxtj").click(function(){
                $("#ry").show();
                $("#xbtj").hide();
                $(".jqjs").hide();
                //	个人统计时间不要
                $(".cssj").hide();
            });
            $("#xflxzttj").click(function(){
                $("#ry").hide();
                $("#xbtj").show();
                $(".jqjs").show();
                //如果元素为R8,则将它显现
                if($("input[name='zyls']:checked").val()=="R7"){
                    $(".cssj").show();
                }
            });
            $("#zttj").click(function(){
                $("#ry").hide();
                $("#xbtj").show();
                $(".jqjs").show();
                //如果元素为R8,则将它显现
                if($("input[name='zyls']:checked").val()=="R7"){
                    $(".cssj").show();
                }
            });
            
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});