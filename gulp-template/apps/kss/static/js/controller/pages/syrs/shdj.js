/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tree = require('awd/easyui/tree');
    var url = require('modules/url');
    var jxcx = require("pages/syrs/shdjJxcx");
    var wcshf = require("pages/syrs/shdjWcshf");
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
            jqtree.init('jqtree','table');//有监区树就加，没有不加
            
            $(".shdj-record .tab .tab-item").click(function() {
				$(this).addClass("active").css("background","rgb(16, 81, 177)").siblings().removeClass("active").css("background-image","linear-gradient(to right top, #005ee9, #5498ff)");
                $(".products .mainCont").eq($(this).index()).show().siblings().hide();
                var clickTitle = this.dataset.title;
                if(clickTitle == 'jxcx') {
                    jxcx.init();
                }else if(clickTitle == 'wcshf') {
                    wcshf.init();
                }
                
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