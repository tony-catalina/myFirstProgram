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
    // var data =ywlcCount.init("jls_tqjc");
    var main = {
        init: function () {
            ywlcCount.init("jls_tqjc", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '管教意见', top: 100, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/gjyj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '警组审核(<font color="red">' + (data.JLS_TQJC_JZYJ == undefined ? '0' : data.JLS_TQJC_JZYJ) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/jzsh.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所长审批(<font color="red">' + (data.JLS_TQJC_SZSP == undefined ? '0' : data.JLS_TQJC_SZSP) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/szsp.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '分管局领导意见(<font color="red">' + (data.JLS_TQJC_FGJLDYJ == undefined ? '0' : data.JLS_TQJC_FGJLDYJ) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/fgjldyj.html' },
                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '登记离所(<font color="red">' + (data.JLS_TQJC_DJLS == undefined ? '0' : data.JLS_TQJC_DJLS) + '</font>)', top: 900, left: 100, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/djls.html' },
                { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物返还(<font color="red">' + (data.JLS_TQJC_FWTH == undefined ? '0' : data.JLS_TQJC_FWTH) + '</font>)', top: 900, left: 300, width: 80, height: 80, url: '/apps/jls/views/pages/tqjc/fwfh.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 4, to: 5, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 4, to: 6, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});