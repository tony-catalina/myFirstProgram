/**
模块名称： 一日生活制度
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
                    { name: '放风', icon: 'icon-taizhang' },
                    { name: '洗澡', icon: 'icon-taizhang' },
                    { name: '理发', icon: 'icon-taizhang' },
                    { name: '发水', icon: 'icon-taizhang' },
                    { name: '接济物品发放', icon: 'icon-taizhang' },
                    { name: '带领晾晒衣服被褥', icon: 'icon-taizhang' },
                ],
                contents: [
                    { name: '放风', url: '/apps/kss/views/pages/yrshzd/ff.html' },
                    { name: '洗澡', url: '/apps/kss/views/pages/yrshzd/xz.html' },
                    { name: '理发', url: '/apps/kss/views/pages/yrshzd/lf.html' },
                    { name: '发水', url: '/apps/kss/views/pages/yrshzd/fs.html' },
                    { name: '接济物品发放', url: '/apps/kss/views/pages/yrshzd/jjwpff.html' },
                    { name: '带领晾晒衣服被褥', url: '/apps/kss/views/pages/yrshzd/dlsyflbr.html' },
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