/**
模块名称： 文秘宣传
开始时间： 2020-2-25
*/
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //界面控件
    var main = {
        init: function () {
            /**
             * 界面初始化
             */
            ywlcCount.init("kss_zbypsq" , function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function (data) {
            /**布局初始化**/
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '购药申请', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/zbypsq/gysq.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '管教审批(<font color="red">'+data.KSS_ZBYPSQ_GJSP+'</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/zbypsq/gjsp.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '医生确认(<font color="red">'+data.KSS_ZBYPSQ_YSQR+'</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/zbypsq/ysqr.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所领导审批(<font color="red">'+data.KSS_ZBYPSQ_SLDSP+'</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/zbypsq/sldsp.html' },
                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '送药验证(<font color="red">'+data.KSS_ZBYPSQ_SYYZ+'</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/zbypsq/syyz.html' },],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 4, to: 5, type: 'edgeStyle=orthogonalEdgeStyle;' },
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