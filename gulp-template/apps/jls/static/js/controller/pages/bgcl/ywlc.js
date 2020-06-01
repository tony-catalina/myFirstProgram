/**
 模块名称: 变更处理
 开始时间: 2020-3-7
 */
window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("jls_bgcl");
    var main = {
        init: function () {
            ywlcCount.init("jls_bgcl", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '管教鉴定', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/gjjd.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '警组意见(<font color="red">' + (data.JLS_BGCL_JZYJ == undefined ? "0" : data.JLS_BGCL_JZYJ) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/jzyj.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所长意见(<font color="red">' + (data.JLS_BGCL_SZSP == undefined ? "0" : data.JLS_BGCL_SZSP) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/szyj.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '开证打印(<font color="red">' + (data.JLS_BGCL_KZDY == undefined ? "0" : data.JLS_BGCL_KZDY) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/kzdy.html' },
                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '离所(<font color="red">' + (data.JLS_BGCL_LS == undefined ? "0" : data.JLS_BGCL_LS) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/ls.html' },
                { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '财务返还(<font color="red">' + (data.JLS_BGCL_FWTH == undefined ? "0" : data.JLS_BGCL_FWTH) + '</font>)', top: 700, left: 360, width: 80, height: 80, url: '/apps/jls/views/pages/bgcl/cwfh.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 4, to: 5, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 3, to: 6, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});