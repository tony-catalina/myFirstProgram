define([
    'jquery',
    'easyui',
    'easyuiZh',
    'arttemplate',
    '/apps/jds/views/pages/common/zpwh.html'
], function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('arttemplate');

    var zpwhHtml = require('/apps/jds/views/pages/common/zpwh.html');

    exports.html = '<div class="section-container qa-container">' + zpwhHtml + '</div>';
});

