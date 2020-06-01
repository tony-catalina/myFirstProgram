/**
 * 提讯
 */

window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("kss_tsdj");
    var main = {
        init: function () {
            ywlcCount.init("kss_tsdj", function (data) {
                main.layout(data);
                main.eventBind(data);

            });
        },
        layout: function (data) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '核对凭证', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/tx/hdpz.html' },
                {
                    id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '提讯登记(<font color="red">' + (data.KSS_TSDJ_TSDJ == undefined ? 0 : data.KSS_TSDJ_TSDJ) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/tx/txdj.html'
                },
                {
                    id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '监区提人登记(<font color="red">' + (data.KSS_TSDJ_JQTRDJ == undefined ? 0 : data.KSS_TSDJ_JQTRDJ) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/tx/jqtr.html'
                },
                {
                    id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '安全检查(<font color="red">' + (data.KSS_TSDJ_AQJC == undefined ? 0 : data.KSS_TSDJ_AQJC) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/tx/aqjc.html'
                },
                {
                    id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' },
                    label: '退讯(<font color="red">' + (data.KSS_TSDJ_TX == undefined ? 0 : data.KSS_TSDJ_TX) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/tx/tx.html'
                },],
                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                { from: 4, to: 5, type: 'edgeStyle=orthogonalEdgeStyle;' }
                ]
            });

        },
        eventBind: function () {

        }
    };

    $(main.init);

});
