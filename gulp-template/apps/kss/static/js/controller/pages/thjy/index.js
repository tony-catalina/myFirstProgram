/**
模块名称： 谈话教育
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tab = require('modules/tab');

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
            tab.init('Layout', {
                activeIndex: 0,
                items: [
                    { name: '个别教育', icon: 'icon-liucheng' },
                    { name: '集体教育', icon: 'icon-taizhang' },
                    { name: '个别教育查询', icon: 'icon-liucheng' }
                ],
                contents: [
                    { name: '个别教育', url: '/apps/kss/views/pages/thjy/gbjy.html' },
                    { name: '集体教育', url: '/apps/kss/views/pages/thjy/jtjy.html' },
                    { name: '个别教育查询', url: '/apps/kss/views/pages/thjy/gbjycx.html' }
                ]
            });
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