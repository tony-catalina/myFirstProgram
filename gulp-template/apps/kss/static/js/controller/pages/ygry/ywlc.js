/**
 * 严管人员
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    var main = {
        init: function() {
            ywlcCount.init("kss_ygsz", function(data) {
                getData1(data);
            });

            var getData1 = function(data) {
                ywlcCount.init("kss_ygjc", function(data1) {
                    getData2(data, data1);
                });
            }

            var getData2 = function(data, data1) {
                ywlcCount.init("kss_ygyc", function(data2) {
                    main.layout(data, data1, data2);
                    main.eventBind(data, data1, data2);
                });
            }

        },
        layout: function(data, data1, data2) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '严管设置', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/ygsz.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data.KSS_YGSZ_LDSP == undefined ? "0" : data.KSS_YGSZ_LDSP) + '</font>)', top: 320, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/szldsp.html' },


                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '严管撤销(<font color="red">' + (data1.KSS_YGJC_JC == undefined ? "0" : data1.KSS_YGJC_JC) + '</font>)', top: 500, left: 80, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/ygcx.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data1.KSS_YGJC_LDSP == undefined ? "0" : data1.KSS_YGJC_LDSP) + '</font>)', top: 720, left: 80, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/cxldsp.html' },


                    { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '严管延长(<font color="red">' + (data2.KSS_YGYC_YC == undefined ? "0" : data2.KSS_YGYC_YC) + '</font>)', top: 500, left: 320, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/ygyc.html' },
                    { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '领导审批(<font color="red">' + (data2.KSS_YGYC_LDSP == undefined ? "0" : data2.KSS_YGYC_LDSP) + '</font>)', top: 720, left: 320, width: 80, height: 80, url: '/apps/kss/views/pages/ygry/ycldsp.html' },

                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 3, to: 4, type: 'edgeStyle=elbowEdgeStyle;rounded=1;' },
                    { from: 5, to: 6, type: 'edgeStyle=orthogonalEdgeStyle' },
                ]
            });

        },
        eventBind: function() {

        }
    };

    $(main.init);

});