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
    // var data = ywlcCount.init("jls_qjhs");
    var main = {
        init: function () {
            ywlcCount.init("jls_qjhs", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '回所登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qjhs/hsdj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '健康检查(<font color="red">' + (data.JLS_QJHS_JKJC == undefined ? "0" : data.JLS_QJHS_JKJC) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qjhs/jkjc.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物登记(<font color="red">' + (data.JLS_QJHS_FWDJ == undefined ? "0" : data.JLS_QJHS_FWDJ) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qjhs/fwdj.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '带入拘室(<font color="red">' + (data.JLS_QJHS_DRJS == undefined ? "0" : data.JLS_QJHS_DRJS) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/qjhs/drjs.html' },
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