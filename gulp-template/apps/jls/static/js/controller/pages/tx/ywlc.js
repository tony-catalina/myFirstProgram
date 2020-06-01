/**
 模块名称: 业务流程
 开始时间: 2020-3-11
 */
window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("jls_tx");
    var main = {
        init: function () {
            ywlcCount.init("jls_tx", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '核对凭证', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tx/hdpz.html' },
                {
                    id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '登记呈批(<font color="red">' + (data.JLS_TX_DJCP == undefined ? 0 : data.JLS_TX_DJCP) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tx/djcp.html'
                },
                {
                    id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '所长意见(<font color="red">' + (data.JLS_TX_SZYJ == undefined ? 0 : data.JLS_TX_SZYJ) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tx/szyj.html'
                },
                {
                    id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '安排提讯(<font color="red">' + (data.JLS_TX_APTX == undefined ? 0 : data.JLS_TX_APTX) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tx/aptx.html'
                },
                {
                    id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '讯完登记(<font color="red">' + (data.JLS_TX_XWDJ == undefined ? 0 : data.JLS_TX_XWDJ) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tx/xwdj.html'
                },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 4, to: 5, type: 'edgeStyle=orthogonalEdgeStyle;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});
