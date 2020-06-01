/**
 * 处罚管理
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("KSS_CFSZ");
    var main = {
        init: function() {
            ywlcCount.init("KSS_CFSZ", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function(data) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '处罚呈报', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/cfcp.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '中队/警署意见(<font color="red">' + (data.KSS_CFSZ_ZDZJSYJ == undefined ? 0 : data.KSS_CFSZ_ZDZJSYJ) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/szzdjzyj.html' },
                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '解除处罚登记(<font color="red">' + (data.KSS_CFSZ_CFJC == undefined ? 0 : data.KSS_CFSZ_CFJC) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/jccfdj.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所长意见(<font color="red">' + (data.KSS_CFSZ_SZYJ == undefined ? 0 : data.KSS_CFSZ_SZYJ) + '</font>)', top: 400, left: 80, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/szszyj.html' },
                    { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '延长呈报(<font color="red">' + (data.KSS_CFSZ_YCCB == undefined ? 0 : data.KSS_CFSZ_YCCB) + '</font>)', top: 500, left: 340, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/yccp.html' },
                    { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '延长所领导意见(<font color="red">' + (data.KSS_CFSZ_YCSLDYJ == undefined ? 0 : data.KSS_CFSZ_YCSLDYJ) + '</font>)', top: 700, left: 340, width: 80, height: 80, url: '/apps/kss/views/pages/cfgl/ycszyj.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 2, to: 5, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 5, to: 6, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 6, to: 3, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                ]
            });

        },
        eventBind: function() {

        }
    };

    $(main.init);

});