/**
 * 规范帮助 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var url = require('modules/url');
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
                url: url.zztxhjList,
                method: 'post',
                success: function(res) {
                    for(var i = 0 ; i < res.result.total; i++){
                        var jsxx = res.result.rows[i];
                        if(jsxx.fjlx=="1"){
                            $("#tx").append(" <button id='"+jsxx.jsh+"' style='width: 130px;background: #1296db;color: white;border: 0;border-radius: 5px;padding: 8px;' class='button btn1' name='jsbtn' typelx = '"+jsxx.fjlx+"' value='"+jsxx.rybh+"'    >"+jsxx.fjmc+"<span style='color:red;position:relative;left:10%;font-size:15px'>"+jsxx.fjrs+"</span></button>")
                        }
                        if(jsxx.fjlx=="2"){
                            $("#ls").append(" <button id='"+jsxx.jsh+"' style='width: 130px;background: #1296db;color: white;border: 0;border-radius: 5px;padding: 8px;' class='button btn1' name='jsbtn' typelx = '"+jsxx.fjlx+"' value='"+jsxx.rybh+"'    >"+jsxx.fjmc+"<span style='color:red;position:relative;left:5%;font-size:15px'>"+jsxx.fjrs+"</span></button>")
                        }
                        if(jsxx.fjlx=="3"){
                            $("#js").append(" <button id='"+jsxx.jsh+"' style='width: 130px;background: #1296db;color: white;border: 0;border-radius: 5px;padding: 8px;' class='button btn1' name='jsbtn' typelx = '"+jsxx.fjlx+"' value='"+jsxx.rybh+"'    >"+jsxx.fjmc+"<span style='color:red;position:relative;left:10%;font-size:15px'>"+jsxx.fjrs+"</span></button>")
                        }
                    }

                    $("button[name='jsbtn']").each(function(){
                        $(this).on('click',function(){
                            var jsh=$(this).attr('value');
                           // jshs = jsh;
                            $("#jsry").empty();
                            $.ajax({
                                url:url.listByPhoto,
                                type:"POST",
                                data:{
                                    "jsh":jsh,
                                    "state": "R8",
                                    "page":"1",
                                    "rows":"100",
                                },
                                success:function(result){
                                   // console.log(result,555)
                                    var data = result.result.rows;
                                    for(var i = 0;i<data.length;i++){
                                        var jbxx = data[i];
                                        var str = JSON.stringify(jbxx);
                                        $("#jsry").append(
                                            "<div class='jsry-tp' id='"+i+"' value='"+str+"'>"+"<div class='jsry-img'>"+
                                            "<img src='../../../static/images/Person.png'>"+
                                            "</div>"+
                                            "<div style='width:80px;color: #333;'>"+data[i].xm+"</div>"+
                                            "</div>"
                                        )
                                    }
                                    $(".jsry-tp").each(function(){
                                        var back = false;
                                        $(this).click(function(){
                                            if(back = !back){
                                                $(this).css("background","rgb(177, 219, 234)")
                                            }else{
                                                $(this).css("background","#dcdcdc")
                                            }
                                            var val =JSON.parse($(this).attr("value"));
                                            $("#xm").textbox('setValue',val.xm);
                                            $('#xb').textbox('setValue',val.xbString);
                                            $('#bm').textbox('setValue',val.bm);
                                            $('#csrq').textbox('setValue',val.csrq);
                                            $('#zjlx').textbox('setValue',val.zjlxString);
                                            $('#mz').textbox('setValue',val.mzString);
                                            $('#zzmm').textbox('setValue',val.zzmmString);
                                            $('#zy').textbox('setValue',val.zyString);
                                            $('#hf').textbox('setValue',val.hyzkString);
                                            $('#whcd').textbox('setValue',val.whcdString);
                                            $('#hjd').textbox('setValue',val.hjdString);
                                            $.ajax({
                                                type:"post",
                                                url:url.listByPhoto,
                                                data:{rybh:val.rybh},
                                                success:function(result){
                                                    console.log(result,111)
                                                    $("#rypic").attr("src",result);
                                                }
                                            })

                                        })

                                    })
                                }
                            });
                        })
                    })
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