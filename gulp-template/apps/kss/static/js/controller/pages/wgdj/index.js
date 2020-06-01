/**
模块名称： 违规登记
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tab = require('modules/tab');

    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            //布局初始化
            tab.init('Layout', {
                activeIndex: 0,
                items: [
                    { name: '监区违规', icon: 'icon-taizhang' },
                    { name: '监室违规', icon: 'icon-taizhang' },
                    { name: '在押人员违规', icon: 'icon-taizhang' },
                ],
                contents: [
                    { name: '监区违规', url: '/apps/kss/views/pages/wgdj/jqwg.html' },
                    { name: '监室违规', url: '/apps/kss/views/pages/wgdj/jswg.html' },
                    { name: '在押人员违规', url: '/apps/kss/views/pages/wgdj/rywg.html' },
                ]
            });

        },
        eventBind: function() {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});