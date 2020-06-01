/**
 * 文明监室
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据

    var main = {
        init: function() {
            ywlcCount.init("KSS_WMJSSZ", function(data) {
                getData1(data);
            });

            var getData1 = function(data) {
                ywlcCount.init("KSS_WMJSCX", function(data1) {
                    main.layout(data, data1);
                    main.eventBind(data, data1);
                });
            }
        },
        layout: function(data, data1) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '文明监室设置', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/wmjs/wmjssz.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.KSS_WMJSSZ_LDSP == undefined ? "2" : data.KSS_WMJSSZ_LDSP) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/wmjs/szldsp.html' },
                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '文明监室撤销(<font color="red">' + (data1.KSS_WMJSCX_CX == undefined ? "0" : data1.KSS_WMJSCX_CX) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/wmjs/wmjscx.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data1.KSS_WMJSCX_LDSP == undefined ? "1" : data1.KSS_WMJSCX_LDSP) + '</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/wmjs/cxldsp.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                ]
            });

        },
        eventBind: function() {

        }
    };

    $(main.init);

});