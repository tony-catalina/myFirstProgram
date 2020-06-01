define(function (__r__, exports, module) {

    // 由于 seajs 的 require 方式导入的模块无法触发 IntelliSense，故将 require 定义
    // 在 window 对象上，因此模块作用域内无 require 影响，IntelliSense 将会应用 CommonJS
    // 的 require 提示，同时在前端运行时 JS 引擎会沿着作用域链查找 require。
    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');
    // 页面导入字典
    var pageDicts = {
        '业务流程': {
            mod: require('/apps/jds/static/js/controller/pages/zbtz/thjytz/ywlc.js')
        },
    }

    var initContent = function () {
        var tabs = document.querySelector('.tab');
        var tabsContent = document.querySelector('.tab-item');
        // 初始化默认页面
        tabsContent.appendChild(pageDicts['业务流程'].mod.render());
        // 切换
        $(".tab-control-button", tabs).on('click', function () {

            if (!this.classList.contains('tab-active')) {
                // console.log(pageDicts[this.lastChild.nodeValue]);
                $(this).addClass('tab-active').siblings().removeClass('tab-active');
                tabsContent.innerHTML = '';
                tabsContent.appendChild(pageDicts[this.lastChild.nodeValue].mod.render());
            }
        })

    }

    var init = function () {
        initContent();
    };

    init();

});
