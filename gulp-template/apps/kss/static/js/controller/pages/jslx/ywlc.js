window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount=require('modules/ywlc');
    //获取流程节点代办数据
   // var data=ymlcCount.init("kss_jslx");
    var main={
        init:function(){
            ywlcCount.init("kss_jslx", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '申请联系',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jslx/sqlx.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队长审批(<font color="red">'+(data.KSS_JSLX_ZDZSP == undefined ?"0":data.KSS_JSLX_ZDZSP) +'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jslx/zdzsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(data.KSS_JSLX_SZSP == undefined ? "0":data.KSS_JSLX_SZSP) +'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jslx/ldsp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '接待民警联系(<font color="red">'+(data.KSS_JSLX_JDMJLX == undefined ? "0":data.KSS_JSLX_JDMJLX) +'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jslx/jdmjlx.html' },
                ],

                lines: [{ from: 1, to: 2, type: 'edgeStyle=orthogonalEdgeStyle' },
                    { from: 2, to: 3, type: 'edgeStyle=orthogonalEdgeStyle;' },
                    { from: 3, to: 4, type: 'edgeStyle=orthogonalEdgeStyle;' },
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});