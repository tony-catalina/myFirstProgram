/**
 * 出所管理 页面入口
 */
define(function(require) {
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
                    { name: '业务流程', icon: 'icon-liucheng' },
                    { name: '业务动态', icon: 'icon-dongtai-A' },
                    { name: '业务台账', icon: 'icon-taizhang' },
                    { name: '文书补打', icon: 'icon-tishishuoming' },
                    { name: '规范帮助', icon: 'icon-tishishuoming' },
                ],
                contents: [
                    { name: '业务流程', url: '/apps/kss/views/pages/csgl/ywlc_dv.html' },
                    { name: '业务动态', url: '/apps/kss/views/pages/csgl/ywdt.html' },
                    { name: '业务台账', url: '/apps/kss/views/pages/csgl/ywtz.html' },
                    { name: '文书补打', url: '/apps/kss/views/pages/csgl/wsbd.html' },
                    { name: '规范帮助', url: '/apps/kss/views/pages/csgl/gfbz.html' },
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