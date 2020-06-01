define(function(require) {
    //公共控件、组件、工具导入
    const $ = require('jquery');
    require('easyui');

    //界面控件
    var main = {
        init: function() {
            console.log('aaa');
            main.bindEvent();
        },
        bindEvent: function() {

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});