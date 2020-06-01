/**
 * 亲情电话 页面入口
 */

define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var tab = require('modules/tab');
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            /**
             * 界面初始化
             */
            main.layout();
            main.eventBind();
        },
        layout: function() {
            /**布局初始化*/
            tab.init('Layout',{
                activeIndex:0,
                items:[
                    {name:'业务流程',icon:'icon-liucheng'}
                ],
                contents: [
                    { id: 'ywlc', name: '业务流程', url: '/apps/kss/views/pages/qqdh/ywlc_dv.html' }
                ]
            });
            /**布局初始化*/
        },
        eventBind: function() {
            /**
             * 事件绑定
             */

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});



define(function(require) {
    var mxgraph = require('awd/flowchart/mxgraph');
    var main = {
        init: function() {

        }
    };
    $(main.init);
});