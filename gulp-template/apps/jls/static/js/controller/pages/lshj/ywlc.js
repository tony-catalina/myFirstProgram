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

    var main = {
        init: function () {
            ywlcCount.init('jls_lshj', function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '核对凭证', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/lshj/hdpz.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '登记呈批(<font color="red">' + (data.JLS_LSHJ_DJCP == undefined ? "0" : data.JLS_LSHJ_DJCP) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/lshj/djcp.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '拘留区提人登记(<font color="red">' + (data.JLS_LSHJ_JLQTRDJ == undefined ? "0" : data.JLS_LSHJ_JLQTRDJ) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/lshj/jlqtrdj.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '会见完毕安全检查(<font color="red">' + (data.JLS_LSHJ_HJWBAQJC == undefined ? "0" : data.JLS_LSHJ_HJWBAQJC) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/lshj/hjwbjc.html' },
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
