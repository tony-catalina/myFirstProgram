/**
 * 禁闭管理
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var canshu = { STYLE_IMAGE: '../../../static/images/lcttx.png', STYLE_IMAGE_WIDTH: '60', STYLE_IMAGE_HEIGHT: '60', STYLE_SPACING_TOP: '65' };
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    var main = {
        init: function() {
            ywlcCount.init("kss_jbsz", function(data) {
                getData1(data);
            });

            var getData1 = function(data) {
                ywlcCount.init("kss_jbyc", function(data1) {
                    getData2(data, data1);
                });
            }

            var getData2 = function(data, data1) {
                ywlcCount.init("kss_jbjc", function(data2) {
                    main.layout(data, data1, data2);
                    main.eventBind(data, data1, data2);
                });
            }
        },
        layout: function(data, dataJbyc, dataJbjc) {

            mxgraph.init('flowmap', {
                nodes: [{ id: 'node1', style: canshu, label: '禁闭设置', top: 100, left: 200, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jbsz.html' },
                    { id: 'node2', style: canshu, label: '医生意见(<font color="red">' + (data.KSS_JBSZ_YSYJ == undefined ? "0" : data.KSS_JBSZ_YSYJ) + '</font>)', top: 220, left: 200, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/szysyj.html' },
                    { id: 'node3', style: canshu, label: '中队长意见(<font color="red">' + (data.KSS_JBSZ_ZDZYJ == undefined ? "0" : data.KSS_JBSZ_ZDZYJ) + '</font>)', top: 360, left: 200, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/szzdzyj.html' },
                    { id: 'node4', style: canshu, label: '领导审批(<font color="red">' + (data.KSS_JBSZ_LDSP == undefined ? "0" : data.KSS_JBSZ_LDSP) + '</font>)', top: 480, left: 200, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/szldsp.html' },


                    { id: 'node5', style: canshu, label: '禁闭延长', top: 600, left: 100, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jbyc.html' },
                    { id: 'node6', style: canshu, label: '医生意见(<font color="red">' + (dataJbyc.KSS_JBYC_YSYJ == undefined ? "0" : dataJbyc.KSS_JBYC_YSYJ) + '</font>)', top: 720, left: 100, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/ycysyj.html' },
                    { id: 'node7', style: canshu, label: '中队长意见(<font color="red">' + (dataJbyc.KSS_JBYC_ZDZYJ == undefined ? "0" : dataJbyc.KSS_JBYC_ZDZYJ) + '</font>)', top: 840, left: 100, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/yczdzyj.html' },
                    { id: 'node8', style: canshu, label: '领导审批(<font color="red">' + (dataJbyc.KSS_JBYC_LDSP == undefined ? "0" : dataJbyc.KSS_JBYC_LDSP) + '</font>)', top: 960, left: 100, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/ycldsp.html' },


                    { id: 'node9', style: canshu, label: '禁闭解除', top: 600, left: 300, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jbjc.html' },
                    { id: 'node10', style: canshu, label: '医生意见(<font color="red">' + (dataJbjc.KSS_JBJC_YSYJ == undefined ? "0" : dataJbjc.KSS_JBJC_YSYJ) + '</font>)', top: 720, left: 300, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jcysyj.html' },
                    { id: 'node11', style: canshu, label: '中队长意见(<font color="red">' + (dataJbjc.KSS_JBJC_ZDZYJ == undefined ? "0" : dataJbjc.KSS_JBJC_ZDZYJ) + '</font>)', top: 840, left: 300, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jczdzyj.html' },
                    { id: 'node12', style: canshu, label: '领导审批(<font color="red">' + (dataJbjc.KSS_JBJC_LDSP == undefined ? "0" : dataJbjc.KSS_JBJC_LDSP) + '</font>)', top: 960, left: 300, width: 60, height: 60, url: '/apps/kss/views/pages/jbgl/jcldsp.html' },

                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },

                    { from: 5, to: 6, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 6, to: 7, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 7, to: 8, type: 'edgeStyle=orthogonalEdgeStyle;' },

                    { from: 9, to: 10, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 10, to: 11, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 11, to: 12, type: 'edgeStyle=orthogonalEdgeStyle;' },

                ]
            });

        },
        eventBind: function() {

        }
    };

    $(main.init);

});