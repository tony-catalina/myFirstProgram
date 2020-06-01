/**
 模块名称： 文明监室撤销
 开始时间： 2020-3-9
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
                    { name: '文明监室撤销', icon: 'icon-taizhang' },
                    { name: '文明监室历史记录查询', icon: 'icon-taizhang' },
                ],
                contents: [
                    { name: '文明监室撤销', url: '/apps/kss/views/pages/wmjs/wmjscx1.html' },
                    { name: '文明监室历史记录查询', url: '/apps/kss/views/pages/wmjs/wmjslsjl.html' },
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