define(function (__r__, exports, module) {
    window.require = window.require || __r__;

    require("jquery");
    require("easyui");
    require("easyuiZh");
    require("arttemplate");

    // 引入此页面的布局
    var pageHtml = require("/apps/jds/views/pages/rcgl/thjy/jsry.html");


    var initPage = function (element) {

    };

    exports.render = function () {
        var element = document.createElement("div");
        element.innerHTML = pageHtml;
        initPage(element);
        return element.firstElementChild;
    };
});