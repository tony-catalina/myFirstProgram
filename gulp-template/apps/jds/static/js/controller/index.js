define(function (require, exports, module) {
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('uikit');
    var menu=require('modules/menus');
    $(function () {
      menu.init();
    });
});
