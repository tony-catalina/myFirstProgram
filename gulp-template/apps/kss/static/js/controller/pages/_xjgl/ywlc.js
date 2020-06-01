/**
 * 信件管理
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');


    var main = {
        init: function() {
            ywlcCount.init("kss_sxdj", function(data) {
                getData2(data);
            });
            var getData2 = function(data) {
                ywlcCount.init("kss_fxdj", function(data2) {
                    main.layout(data, data2);
                });
            };
        },
        layout: function(data, data2) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '收信登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/sxdj.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.KSS_SXDJ_LDSP == undefined ? 0 : data.KSS_SXDJ_LDSP) + '</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/ldsp.html' },
                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '信件转接处理(<font color="red">' + (data.KSS_SXDJ_XJZYCL == undefined ? 0 : data.KSS_SXDJ_XJZYCL) + '</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/zjcl.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '发信登记', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/fxdj.html' },
                    { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '处理审批(<font color="red">' + (data2.KSS_FXDJ_LDSP == undefined ? 0 : data2.KSS_FXDJ_LDSP) + '</font>)', top: 900, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/clsp.html' },
                    { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '信件寄出处理(<font color="red">' + (data2.KSS_FXDJ_XJJCCL == undefined ? 0 : data2.KSS_FXDJ_XJJCCL) + '</font>)', top: 1100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/xjgl/xjjc.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;strokeColor=red;' },
                    { from: 4, to: 5, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 5, to: 6, type: 'edgeStyle=orthogonalEdgeStyle;strokeColor=red;' },
                ]
            });

        },
        eventBind: function() {

        }
    };

    $(main.init);

});