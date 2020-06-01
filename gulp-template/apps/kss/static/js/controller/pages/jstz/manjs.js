/**
 * 规范帮助 页面入口
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
                url: url.jqAndList+'?xb=1',
                type: 'post',
                success: function(res) {
                    for(var i=0;i<res.length;i++){
                        var jq = "jq"+i;
                        $("#jstz-pltz").append("<div class='pljstz-top'><div class='pljstz-jq'><a class='bluebutton'>"+res[i][jq]+"监区</a></div> <div class='pljstz-js' id='jqList"+i+"' style='float:left;margin-left:2%;width:81%;display:inline-block'></div></div>")
                        var js = "js"+i;
                        for(var j=0;j<res[i][js].length;j++){
                            var jsliat = "jqList"+i;
                            var jsxx = res[i][js];
                            $("#"+jsliat).append('<button id="'+res[i][js][j].jsh+'" name="jsbtn" type="'+jsxx[j].type+'" value="'+res[i][js][j].jsh+'">'+res[i][js][j].jsmc+'<span>'+res[i][js][j].innum+'</span>'+'</button>')
                        }
                    }
                    $("button[name='jsbtn']").each(function(){
                        $(this).on('click',function(){
                            var jsh=$(this).attr('value');
                            jshs = jsh;
                            $("#jsry").empty();
                            $.ajax({
                                url:url. jbxx,
                                type:"POST",
                                data:{
                                    "jsh":jsh,
                                },
                                success:function(result){
                                    var data = result.result.rows;
                                    for(var i = 0;i<data.length;i++){
                                        var jbxx = data[i];
                                        var str = JSON.stringify(jbxx);
                                        $("#jsry").prepend(
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
                                                url:url.photosList,
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