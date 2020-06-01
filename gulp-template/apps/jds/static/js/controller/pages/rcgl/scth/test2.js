define(function (__r__, exports, module) {

    window.require = window.require || __r__;

    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    var pageHtml = require('/apps/jds/views/pages/rcgl/scth/test2.html');

    exports.render = function() {
        var div = document.createElement('div');
        div.innerHTML = pageHtml;
        return div.firstElementChild;
    }


});