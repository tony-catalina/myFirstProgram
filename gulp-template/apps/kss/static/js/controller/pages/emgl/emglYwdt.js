/**
 * 业务动态页面
 */
define(function(require) {
    require('jquery');
    require('easyui');
    require('layer.config');
    var ywdtPage = require('services/form/_emglYwdt.html');
    var url=require('modules/url');
    console.log(ywdtPage,888)
    var main = {
        init: function(className, option) {
            
            var ywdtHtml = ywdtPage('form/_emglYwdt', option);
            document.querySelector('.' + className).innerHTML = ywdtHtml;
            $.parser.parse('.' + className);
            main.initEvents(option.search, className);
            console.log(option,578)
        },
        initEvents: function(option, className) {
            var emgl = '';
            var embj='';
            $.ajax({
                url: url.emYwdt,
                type: 'post',
                success: function(res) {
                    embj+='<div style="margin-left:-12%;">已布建耳目：'+res.result.emzs[0].emzs+'</div>'+
                          '<div>已布建耳目监室：'+res.result.emYbjjs[0].ybjemjs+'</div>'+
                          '<div>未布建耳目监室：'+res.result.emWbjjs[0].wbjjs+'</div>'
                    $("#bjem").append(embj);
                //    console.log(res.result.queryJq.东一监区[0].JQMC,999)
                //循环监室   
                var emgljs = [];
                for (var index in res.result.queryJq) {
                    emgljs.push(index);
                }
                emgljs;  
                for(var i=0;i<emgljs.length;i++){
                    emgl +='<span style="padding:12px;border-right: 1px solid white;background:#1e6dec;color:white;cursor: pointer">'+emgljs[i]+'</span>'
                }
                $("#emglTit").append(emgl);
                $("#emglTit span").each(function(){
                    $(this).click(function(){
                        $(".show").html("");
                        $(this).siblings().removeClass('select');
                        $(this).addClass('select');
                        var tit = $(this).text()
                        var qujq=res.result.queryJq[tit];
                        var emtj=res.result.emTj;
                       

                        for(var i=0;i<qujq.length;i++){
                                var con ='<div style="color:black;background:white;width:15%;height: 120px;margin:15px 10px 10px 15px;box-shadow: 1px 1px 12px 2px #ccc;">'+
                                '<div style="border-bottom:1px solid #f2f2f2;">'+
                                '<div style="margin-left: 20px;font-weight: bold;height: 38px;line-height: 37px;font-size:17px;">监室：'+(emtj[qujq[i].JSH][0].jsh==undefined?0:emtj[qujq[i].JSH][0].jsh)+'</div>'+
                                '</div>'+
                                '<div style="margin-left:20px;">'+
                                '<div style="height:25px;font-size: 14px;margin-top: -5px;">耳目：'+(emtj[qujq[i].JSH][0].emrs==undefined?0:emtj[qujq[i].JSH][0].emrs)+'</div>'+
                                '<div style="height:25px;font-size: 14px;">人数：'+(emtj[qujq[i].JSH][0].jshrs==undefined?0:emtj[qujq[i].JSH][0].jshrs)+'</div>'+
                                '<div style="font-size: 14px;">管教：'+(emtj[qujq[i].JSH][0].zgmj==undefined?'':emtj[qujq[i].JSH][0].zgmj)+'</div>'
                                '</div>'+
                                '</div>';
                                $(".show").append(con);
                        }
                    })
                    $(this).mouseover(function(){
                        $(this).css("background-color","#0038b7")
                    })
                    $(this).mouseout(function(){
                        $(this).css("background-color","#1e6dec")
                    })
                })
                //每个监室的点击事件
                $("#emglTit").children().eq(0).click();
                }
            })
            
            
            
        }
    };
    return main;
});