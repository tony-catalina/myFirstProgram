/**
模块名称： 权益保障
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
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            tab.init('Layout', {
                activeIndex: 0,
                items: [
                    { name: '点名', icon: 'icon-taizhang' },
                    { name: '发饭', icon: 'icon-taizhang' },
                    { name: '陪同巡诊', icon: 'icon-taizhang' },
                    { name: '维修跟随', icon: 'icon-taizhang' }
                ],
                contents: [
                    { name: '点名', url: '/apps/kss/views/pages/dm/index.html' },
                    { name: '发饭', url: '/apps/kss/views/pages/ff/index.html' },
                    { name: '陪同巡诊', url: '/apps/kss/views/pages/ptxz/index.html' },
                    { name: '维修跟随', url: '/apps/kss/views/pages/wxgs/index.html' },
                ]
            });

        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});