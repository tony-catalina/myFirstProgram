define(function (__r__, exports, module) {

    // 由于 seajs 的 require 方式导入的模块无法触发 IntelliSense，故将 require 定义
    // 在 window 对象上，因此模块作用域内无 require 影响，IntelliSense 将会应用 CommonJS
    // 的 require 提示，同时在前端运行时 JS 引擎会沿着作用域链查找 require。
    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    var tabs = require('tabs');

    var tabControl = new tabs.TabControl({
        items: [
            { name: '业务流程', icon: 'icon-liucheng', mod: require('/apps/jds/static/js/controller/pages/rcgl/djst/ywlc.js') },
            { name: '业务台账', icon: 'icon-taizhang', mod: require('/apps/jds/static/js/controller/pages/rcgl/djst/ywtz.js') }, 
            { name: '规范说明', icon: 'icon-tishishuoming', mod: require('/apps/jds/static/js/controller/pages/rcgl/djst/gfsm.js') }
        ],
        onTabChange: function (element) {
            $.parser.parse(element);
        }
    });

    var initContent = function () {
        tabControl.mount(document.body);
    };

    var init = function () {
        initContent();
    };

    init();

});
