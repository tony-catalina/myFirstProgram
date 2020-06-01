/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('respond');
    require('tdrag');
    require('idangerous.swiper');
    var card = require('modules/card');
    var urls = require('modules/url');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var carditemtpl = require('services/card/carditems.html');
    var common = require('common');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
        },
        layout: function() {
            //初始化
            //加载可以使用的模块
            main.loadUserMode(common.info.roles);
            //加载已经配置的模块
            main.loadMode(common.info.user);
        },
        eventBind: function() {
            $(".div8").Tdrag({
                scope: ".boxList",
                pos: true,
                dragChange: true
            });

            $('.dialogdiv').hide();

            //弹窗关闭
            $(".diglog_close").on('click', function() {
                $(".selft-widow-shadow").hide();
                $(".dialogdiv").hide();
                $("body").css("overflow", "auto");
            });
            $('.item_hide').on('click', function() {
                main.add($(this).attr("index"));
            });
            $('.remove').on('click', function() {
                main.nshow($(this).attr("index"));
            });
        },
        addshow: function(select, name, title, modelid) {
            $(".dialogdiv").hide();
            if (tools.isFunction(card[name])) {
                $('.item' + select + '>img').show();
                $('.item' + select + '>.show' + select).show();
                $('.item' + select + '>.hide' + select).hide();
                $('.item' + select + '>.show' + select + ' .title').html('<span>' + title + '</span>');
                card[name]($('.item' + select + '>.show' + select + ' .echarts').find('div').attr('id'), {
                    url: urls,
                    index: select
                });
            }
            $('.selft-widow-shadow').hide();
            if (!tools.isUndefined(modelid)) {
                util.ajax({
                    url: urls.customizeSave,
                    data: { moduleId: modelid, location: select },
                    func: function() {

                    }
                });
            }
        },
        nshow: function(index) {
            $('.item' + index + '>img').hide();
            $('.item' + index + '>.show' + index).hide();
            $('.item' + index + '>.hide' + index).show();
            event.stopPropagation();
            util.ajax({
                url: urls.deleteModule,
                data: { location: index },
                func: function() {
                    layer.alert('删除成功',{icon:1,closeBtn:0,btnAlign:'c'});
                }
            });
        },
        add: function add(ob) {
            $(".dialogdiv").show();
            select = ob;
            //添加遮罩并且禁止页面滚动
            $("body").append("<div class='selft-widow-shadow' style='width: 100%;height:100%;" +
                "display: block;z-index: 9003;background: rgba(6,18,30,1);position: fixed;top: 0;left: 0;" +
                "opacity: 0.40;'></div>");
            $("body").css("overflow", "hidden");
            var mySwiper = new Swiper('.chartview', {
                    loop: true // 循环模式选项
                })
                //mySwiper.stopAutoplay();
            $(".pre").on('click', function() {
                mySwiper.swipePrev();
            });
            $(".next").on('click', function() {
                mySwiper.swipeNext();
            });
            $('.pop-item .item_show').on('click', function() {
                main.addshow(select, $(this).attr('modename'), $(this).attr('title'), $(this).attr('modelid'));
            });
            event.stopPropagation();
        },
        loadUserMode:function(roles){
            var result = [];
            $.ajax({
                url:urls.allModules,type:'POST',async:false,data:{},
                beforeSend:()=>util.loadProgress($,true),
                success:res=>{
                    const ResRow = res.result.rows
                    for(var i=0,len=ResRow.length;i<len;i+=6){
                        result.push(ResRow.slice(i,i+6));
                    }
                }
            })
            var cardhtml= carditemtpl('card/carditems',{groups:result});
            $('#carditemlist').html(cardhtml);
        },
        loadMode: function(user) {
            for (var i = 1; i < 10; i++) {
                $('.item' + i + '>img').hide();
                $('.item' + i + '>.show' + i).hide();
                $('.item' + i + '>.hide' + i).show();
            }
            util.ajax({
                url: urls.customizeQuery,
                func: function(data) {
                    for (i = 0; i < data.result.total; i++) {
                        main.addshow(parseInt(data.result.rows[i].location), data.result.rows[i].module, data.result.rows[i].modulename);
                    }
                }
            });
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});