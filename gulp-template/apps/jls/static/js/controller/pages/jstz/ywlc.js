window.mxBasePath = '/apps/jls/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("jls_jstz");
    var main = {
        init: function () {
            ywlcCount.init("jls_jstz", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '拘室调整登记', top: 100, left: 120, width: 80, height: 80, url: '/apps/jls/views/pages/jstz/jstzdj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '警组意见(<font color="red">' + (data.JLS_JSTZ_JZYJ == undefined ? "0" : data.JLS_JSTZ_JZYJ) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/jstz/jzyj.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '主管所领导意见(<font color="red">' + (data.JLS_JSTZ_ZGSLDYJ == undefined ? "0" : data.JLS_JSTZ_ZGSLDYJ) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/jstz/zgsldyj.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '拘室调整确认(<font color="red">' + (data.JLS_JSTZ_JSTZQR == undefined ? "0" : data.JLS_JSTZ_JSTZQR) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/jstz/jstzqr.html' },
                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '批量拘室调整(<font color="red">' + (data.JLS_JSTZ_PLJSTZ == undefined ? "0" : data.JLS_JSTZ_PLJSTZ) + '</font>)', top: 100, left: 280, width: 80, height: 80, url: '/apps/jls/views/pages/jstz/pljstz.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
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