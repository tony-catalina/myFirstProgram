/**
 *  页面入口
 */
window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    //获取流程节点代办数据
    /**
     * 界面控件
     */
    var main = {
        init: function () {
            /**
             * 界面初始化
             */
            main.layout();
            main.eventBind();
        },
        layout: function () {
            /**布局初始化
             *流程图绘制  
             */
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '错录人员删除', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/cwsjwh/cwrysc.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '误出所人员恢复', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/cwsjwh/wcshf.html' }],

                lines: []
            });
            /**流程图绘制 **/
        },
        eventBind: function () {
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
