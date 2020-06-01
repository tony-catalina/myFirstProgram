define([
    'jquery',
    'easyui',
    'easyuiZh',
    'arttemplate',
    '/apps/jds/views/pages/common/dialog.html'
],function(require, exports, module) {
    var dialogHtml = require('/apps/jds/views/pages/common/dialog.html');
    var render = function(data) {
        var tem = template.render(dialogHtml, data);
        var div = document.createElement('div');
        div.innerHTML = tem;
        return div.firstElementChild;
    }
    exports.render = render;
})

