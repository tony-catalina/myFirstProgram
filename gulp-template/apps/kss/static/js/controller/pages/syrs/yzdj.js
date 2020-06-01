/**
模块名称： 验证登记
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var tab = require('modules/tab');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () { 
            /**布局初始化**/
            tab.init('Layout',{
                activeIndex:0,
                items:[
                    {name:'简项查询',icon:'icon-taizhang'},
                    {name:'信息补录',icon:'icon-taizhang'},
                ],
                contents: [
                    { id: 'jxcx', name: '简项查询', url: '/apps/kss/views/pages/syrs/jxcx.html' },
                    { id: 'xxbl', name: '信息补录', url: '/apps/kss/views/pages/syrs/xxbl.html' },
                ]
            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/

            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});