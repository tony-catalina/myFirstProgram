/**
模块名称： 领导审批
开发时间： 2020-2-25
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
                    { name: '监区秩序', icon: 'icon-taizhang' },
                    { name: '监室内务', icon: 'icon-taizhang' },
                    { name: '民警执法', icon: 'icon-taizhang' },
                    { name: '相关工作要求', icon: 'icon-taizhang' },
                ],
                contents: [
                    { name: '监区秩序', url: '/apps/kss/views/pages/ldjc/jqzx.html' },
                    { name: '监室内务', url: '/apps/kss/views/pages/ldjc/jsnw.html' },
                    { name: '民警执法', url: '/apps/kss/views/pages/ldjc/mjzf.html' },
                    { name: '相关工作要求', url: '/apps/kss/views/pages/ldjc/xggzyq.html' },
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