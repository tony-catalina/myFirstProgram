/**
模块名称： 个别教育
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var jxcx = require("pages/thjy/gbjyJxcx");
    var dbth = require("pages/thjy/gbjyDbth");

    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn2 = require('modules/clumn/thjy');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });


            $(".gbjy-record .tab .tab-item").click(function () {
                $(this).addClass("active").css("background", "#0060eb").siblings().removeClass("active").css("background", "#5191f0");
                $(".products .mainCont").eq($(this).index()).show().siblings().hide();
                var clickTitle = this.dataset.title;
                if(clickTitle == 'jxcx') {
                    jxcx.init();
                    jqtree.init('jqtree','table');//有监区树就加，没有不加
                }else if(clickTitle == 'dbth') {
                    dbth.init();
                    jqtree.init('jqtree','table',{
                        'taskDefinitionKey': 'kss_thjy',
                        'processDefinitionKey': 'kss_thjy_add'
                    });
                }
            })
            jqtree.init('jqtree','table');
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