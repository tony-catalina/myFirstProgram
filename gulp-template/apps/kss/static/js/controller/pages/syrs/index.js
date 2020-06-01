/**
 * 收押入所 页面入口
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
                    {name:'业务流程',icon:'icon-liucheng'},
                    {name:'业务动态',icon:'icon-dongtai-A'},
                    {name:'业务台账',icon:'icon-taizhang'},
                    {name:'文书补打',icon:'icon-zhangdanbulu'},
                    {name:'规范帮助',icon:'icon-tishishuoming'}
                ],
                contents: [
                    { id: 'ywlc', name: '业务流程', url: '/apps/kss/views/pages/syrs/ywlc_dv.html' },
                    { id: 'ywdt', name: '业务动态', url: '/apps/kss/views/pages/syrs/ywdt.html' },
                    { id: 'ywtz', name: '业务台账', url: '/apps/kss/views/pages/syrs/ywtz.html' },
                    { id: 'wsbd', name: '文书补打', url: '/apps/kss/views/pages/syrs/wsbd.html' },
                    { id: 'gfbz', name: '规范帮助', url: '/apps/kss/views/pages/syrs/gfbz.html' }
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