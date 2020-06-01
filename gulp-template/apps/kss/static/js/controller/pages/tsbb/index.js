/**
模块名称： 特殊报表
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var toolbar = require('modules/toolbar');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');
    var common=require('common');
    var jbxxgrid=require('modules/jbxxgrid');
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
            $("#print").click(function(){
                //var reportValue = $('input[name="sbbb"]:checked').val();
                var reportValue = $('input[name="tsbb"]:checked').val();
                    if(!reportValue) {
                        utils.alert('请先选择报表');
                    }else{
                        //window.open(common.info.reporturl+'?labName='+reportValue+'&%26jsbh%3d='+ common.info.user.jsbh);
						window.open(common.info.reporturl+'?displaytoolbar=true&label='+reportValue+'&name='+reportValue+'%26jsbh%3d'+ common.info.user.jsbh);
                    }
            })
            
                        // var reportValue = $('input[name="tsbb"]:checked').val();
                        // if(!reportValue) {
                        //     utils.alert('请先选择报表');
                        // }else{
                        //     window.open(common.info.reporturl+'?labName='+reportValue+'&start_time%3d='+startTime+'&%26end_time%3d='+endTime+'&%26jsbh%3d='+ common.info.user.jsbh);
                        // }
                    
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });
            
            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {

            });

            $(".tsbb-record .tab .tab-item").click(function() {
				$(this).addClass("active").css("background-image","linear-gradient(to right top, #005ee9, #5498ff)").siblings().removeClass("active").css("background","#5191f0");
				$(".products .mainCont").eq($(this).index()).show().siblings().hide();
			})

            /**布局初始化**/
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