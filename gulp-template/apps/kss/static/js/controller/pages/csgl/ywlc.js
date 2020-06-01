/**
 * 收押入所 页面入口
 */
window.mxBasePath = '/apps/kss/static/lib/flowchart';
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');

    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_cs");
   // console.log("==========="+data);
    /**
     * 界面控件
     */
    var main = {
        init: function() {
            ywlcCount.init("kss_csgl", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout: function(data) {
            mxgraph.init('flowmaps', {
                nodes: [{ id: 'node1', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '出所登记', top: 100, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/csdj.html' },
                    { id: 'node2', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '所领导审批(<font color="red">'+(data.KSS_CSGL_SLDSP==undefined?"0":data.KSS_CSGL_SLDSP)+'</font>)', top: 300, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/ldsp.html' },
                    { id: 'node3', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '文书补打(<font color="red">'+(data.KSS_CSGL_WSBD==undefined?"0":data.KSS_CSGL_WSBD)+'</font>)', top: 500, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/lcwsbd.html' },
                    { id: 'node4', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '出所(<font color="red">'+(data.KSS_CSGL_CS==undefined?"0":data.KSS_CSGL_CS)+'</font>)', top: 700, left: 200, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/cs.html' },

                    { id: 'node5', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '今日出所', top: 100, left: 70, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/jrcs.html' },
                    { id: 'node6', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '附物/财物退还(<font color="red">'+(data.KSS_CSGL_FWTH==undefined?"0":data.KSS_CSGL_FWTH)+'</font>)', top: 700, left: 70, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/fwth.html' },

                    { id: 'node7', style: { STYLE_IMAGE: '../../../static/images/lcttx.png' }, label: '出所通知', top: 700, left: 350, width: 80, height: 80, url: '/apps/kss/views/pages/csgl/cstz.html' },
                ],


                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;strokeColor=red;' },
                ]
            });
        },
        eventBind: function() {

        }
    };

    $(main.init);

});
