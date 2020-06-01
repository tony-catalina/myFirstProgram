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


    var main = {
        init: function () {
            ywlcCount.init('jls_qshj', function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '会见登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qshj/hjdj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + data.JLS_QSHJ_LDSP + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qshj/ldsp.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '安排会见(<font color="red">' + data.JLS_QSHJ_APHJ + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qshj/aphj.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '会毕登记(<font color="red">' + data.JLS_QSHJ_HBDJ + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qshj/hbdj.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});
