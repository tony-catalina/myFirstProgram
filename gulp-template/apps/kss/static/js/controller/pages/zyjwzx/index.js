/**
 * 暂予监外执行 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
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
                    { name: '文书补打', icon: 'icon-zhangdanbulu' },
                    { name: '业务台账', icon: 'icon-taizhang' }
                ],
                contents: [
                    { name: '业务流程', url: '/apps/kss/views/pages/zyjwzx/ywlc_dv.html' },
                    { name: '业务动态', url: '/apps/kss/views/pages/zyjwzx/ywdt.html' },
                    { name: '文书补打', url: '/apps/kss/views/pages/zyjwzx/wsbd.html' },
                    { name: '业务台账', url: '/apps/kss/views/pages/zyjwzx/ywtz.html' }
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