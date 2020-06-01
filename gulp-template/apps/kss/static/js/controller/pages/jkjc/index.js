/**
 * 健康检查 页面入口
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
                    { name: '健康检查', icon: 'icon-taizhang' },
                    { name: '待办半年检查', icon: 'icon-taizhang' },
                    { name: '五项体检补录', icon: 'icon-taizhang' },
                ],
                contents: [
                    { name: '健康检查', url: '/apps/kss/views/pages/jkjc/jkjc.html' },
                    { name: '待办半年检查', url: '/apps/kss/views/pages/jkjc/dbbnjc.html' },
                    { name: '五项体检补录', url: '/apps/kss/views/pages/jkjc/wxtjbl.html' },
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