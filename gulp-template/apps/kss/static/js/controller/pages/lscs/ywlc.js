/**
 * 临时出所
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("kss_lscs");

    var main = {
        init: function () {
            ywlcCount.init("kss_lscs", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function (data) {
            // var data=
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '临时出所登记', top: 200, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/lscs/csdj.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.KSS_LSCS_LDSP == undefined ? "0" : data.KSS_LSCS_LDSP) + '</font>)', top: 400, left: 50, width: 80, height: 80, url: '/apps/kss/views/pages/lscs/ldsp.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '出所(<font color="red">' + (data.KSS_LSCS_CS == undefined ? "0" : data.KSS_LSCS_CS) + '</font>)', top: 650, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/lscs/cs.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '回所确认(<font color="red">' + (data.KSS_LSCS_HSQR == undefined ? "0" : data.KSS_LSCS_HSQR) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/lscs/hsqr.html' },

                ],

                lines: [{ from: 1, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 1, to: 2, type: 'edgeStyle=elbowEdgeStyle;rounded=1;strokeColor=red;' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });

        },
        eventBind: function () {

        }
    };

    $(main.init);

});
