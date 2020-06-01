/**
 * 业务流程
 * @type {string}
 */
window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("jls_qmcs");
    var main = {
        init: function () {
            ywlcCount.init("jls_qmcs", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '管教核定', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qmcs/gjhd.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所长审批(<font color="red">' + (data.JLS_QMCS_SZSP == undefined ? "0" : data.JLS_QMCS_SZSP) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qmcs/szsp.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '开证打印(<font color="red">' + (data.JLS_QMCS_KZDY == undefined ? "0" : data.JLS_QMCS_KZDY) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qmcs/kzdy.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '出所(<font color="red">' + (data.JLS_QMCS_CS == undefined ? "0" : data.JLS_QMCS_CS) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qmcs/cs.html' },
                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物返还(<font color="red">' + (data.JLS_QMCS_FWTH == undefined ? "0" : data.JLS_QMCS_FWTH) + '</font>)', top: 500, left: 80, width: 80, height: 80, url: '/apps/jls/views/pages/qmcs/fwfh.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 2, to: 5, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});