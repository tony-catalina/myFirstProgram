/**
模块名称： 领导查询
开始时间： 2020-2-25
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
                    { name: '耳目', icon: 'icon-taizhang' },
                    { name: '提审', icon: 'icon-taizhang' },
                    { name: '械具', icon: 'icon-taizhang' },
                    { name: '家属会见', icon: 'icon-taizhang' },
                    { name: '律师会见', icon: 'icon-taizhang' },
                    { name: '重点人员', icon: 'icon-taizhang' },
                    { name: '临时出所', icon: 'icon-taizhang' },
                    { name: '收押台账', icon: 'icon-taizhang' },
                    { name: '出所台账', icon: 'icon-taizhang' },
                    { name: '谈话教育', icon: 'icon-taizhang' },
                    { name: '出所指纹比对', icon: 'icon-taizhang' },
                    { name: '留所服刑', icon: 'icon-taizhang' },
                    { name: '待家属会见人员', icon: 'icon-taizhang' },
                    { name: '动态巡视查询', icon: 'icon-taizhang' },
                    { name: '出狱管理查询', icon: 'icon-taizhang' }
                ],
                contents: [
                    { name: '耳目', url: '/apps/kss/views/pages/ldcx/em.html' },
                    { name: '提审', url: '/apps/kss/views/pages/ldcx/ts.html' },
                    { name: '械具', url: '/apps/kss/views/pages/ldcx/xj.html' },
                    { name: '家属会见', url: '/apps/kss/views/pages/ldcx/jshj.html' },
                    { name: '律师会见', url: '/apps/kss/views/pages/ldcx/lshj.html' },
                    { name: '重点人员', url: '/apps/kss/views/pages/ldcx/zdry.html' },
                    { name: '临时出所', url: '/apps/kss/views/pages/ldcx/lscs.html' },
                    { name: '收押台账', url: '/apps/kss/views/pages/ldcx/sytz.html' },
                    { name: '出所台账', url: '/apps/kss/views/pages/csgl/ywtz.html' },
                    { name: '谈话教育', url: '/apps/kss/views/pages/ldcx/thjy.html' },
                    { name: '出所指纹比对', url: '/apps/kss/views/pages/ldcx/cszwbd.html' },
                    { name: '留所服刑', url: '/apps/kss/views/pages/ldcx/lsfx.html' },
                    { name: '待家属会见人员', url: '/apps/kss/views/pages/ldcx/djshjry.html' },
                    { name: '动态巡视查询', url: '/apps/kss/views/pages/ldcx/dtxscx.html' },
                    { name: '出狱管理查询', url: '/apps/kss/views/pages/ldcx/cyglcx.html' },
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