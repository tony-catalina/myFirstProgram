window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_gwgl");
    var main={
        init:function(){
            ywlcCount.init("kss_gwgl", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '在押人员申请',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/zyrysq.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '管教确认(<font color="red">'+(data.KSS_GWGL_GJQR==undefined?"0":data.KSS_GWGL_GJQR)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/gjqr.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '管教中队审批(<font color="red">'+(data.KSS_GWGL_GJZDSP==undefined?"0":data.KSS_GWGL_GJZDSP)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/gjzdsp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导审批(<font color="red">'+(data.KSS_GWGL_SLDSP==undefined?"0":data.KSS_GWGL_SLDSP)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/sldsp.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '综合中队审批(<font color="red">'+(data.KSS_GWGL_ZHZDSP==undefined?"0":data.KSS_GWGL_ZHZDSP)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/zhzdsp.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '在押人员确认(<font color="red">'+(data.KSS_GWGL_ZYRYQR==undefined?"0":data.KSS_GWGL_ZYRYQR)+'</font>)',top: 1100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwgl/zyryqr.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:5,to:6,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});