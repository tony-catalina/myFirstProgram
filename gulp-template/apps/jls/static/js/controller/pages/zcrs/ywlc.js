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
   
    var main = {
        init: function () {
            ywlcCount.init("jls_zcrs", function (data) {
                main.layout(data);
                main.eventBind(data);
            });

        },
        layout: function (data) {
            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '检验凭证', top: 100, left: 170, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/jypz.html' },
                { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '简要登记(<font color="red">' + (data.JLS_ZCRS_JYDJ == undefined ? 0 : data.JLS_ZCRS_JYDJ) + '</font>)', top: 300, left: 170, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/jydj.html' },
                { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '健康检查(<font color="red">' + (data.JLS_ZCRS_JKJC == undefined ? 0 : data.JLS_ZCRS_JKJC) + '</font>)', top: 500, left: 170, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/jkjc.html' },
                { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '告知后带入拘室(<font color="red">' + (data.JLS_ZCRS_DRJS == undefined ? 0 : data.JLS_ZCRS_DRJS) + '</font>)', top: 900, left: 170, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/gzhdrjs.html' },

                { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '快速入所', top: 100, left: 50, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/ksrs.html' },
                { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物登记(<font color="red">' + (data.JLS_ZCRS_FWDJ == undefined ? 0 : data.JLS_ZCRS_FWDJ) + '</font>)', top: 700, left: 50, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/fwdj.html' },

                { id: 'node7', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '入所登记(<font color="red">' + (data.JLS_ZCRS_RSDJ == undefined ? 0 : data.JLS_ZCRS_RSDJ) + '</font>)', top: 700, left: 290, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/rsdj.html' },

                { id: 'node8', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.JLS_ZCRS_LDSP == undefined ? 0 : data.JLS_ZCRS_LDSP) + '</font>)', top: 500, left: 410, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/ldsp.html' },
                { id: 'node9', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '另行处理(<font color="red">' + (data.JLS_ZCRS_LXCL == undefined ? 0 : data.JLS_ZCRS_LXCL) + '</font>)', top: 700, left: 410, width: 80, height: 80, url: '/apps/jls/views/pages/zcrs/lxcl.html' },

                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 8, to: 9, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 3, to: 8, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 3, to: 6, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 3, to: 7, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 6, to: 4, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 7, to: 4, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                { from: 8, to: 7, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });
        },
        eventBind: function () {

        }
    };

    $(main.init);

});
