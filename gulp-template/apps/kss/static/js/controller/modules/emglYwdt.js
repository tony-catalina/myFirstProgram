/**
 * 业务动态页面
 */
define(function(require) {
    require('jquery');
    require('easyui');
    require('layer.config');
    var ywdtPage = require('services/com/emglYwdt.html');

    var main = {
        init: function(className, option) {
            var ywdtHtml = ywdtPage('com/emglYwdt', option);
            document.querySelector('.' + className).innerHTML = ywdtHtml;
            $.parser.parse('.' + className);
            main.initEvents(option.search, className);
        },
        initEvents: function(arg, className) {
            //
            // var title =['西二监区','东三监区','西三监区','西五监区','住院监区','单独关押监区','东二监区','西四监区','东五监区','东一监区','西一监区','东四监区','安康医院']
            // var conjs =['0701','0702','0703','0704','0705','0706','0707','0708','0709','0710','0711','0712','0713','0714','0715','0716','0717','0718','0719','0720']
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
                            var con='<div style="background:white;text-align:center;width:15%;margin:10px 0px 0px 10px;">'+
                                '<div style="border-bottom:1px solid #ccc;">'+(emtj[qujq[i].JSH][0].jsh==undefined?0:emtj[qujq[i].JSH][0].jsh)+'</div>'+
                                '<div style="display:flex;">'+
                                '<div style="width:100px;height: 80px;line-height: 80px;">管教：'+(emtj[qujq[i].JSH][0].zgmj==undefined?0:emtj[qujq[i].JSH][0].zgmj)+'</div>'+
                                '<div style="width:100px;border-left:1px solid #ccc;">'+
                                '<div style="border-bottom:1px solid #ccc;">人数：'+(emtj[qujq[i].JSH][0].jshrs==undefined?0:emtj[qujq[i].JSH][0].jshrs)+'</div>'+
                                '<div>耳目：'+(emtj[qujq[i].JSH][0].emrs==undefined?0:emtj[qujq[i].JSH][0].emrs)+'</div>'+
                                '</div>'+
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