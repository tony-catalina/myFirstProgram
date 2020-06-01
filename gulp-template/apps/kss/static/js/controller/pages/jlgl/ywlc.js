/**
 * 暂予监外执行
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_jlgl");
    var main={
        init:function(){
            ywlcCount.init("kss_jlgl", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '奖励呈批',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jlgl/jlcp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队/警组意见(<font color="red">'+(data.KSS_JLGL_ZDJZYJ ==  undefined?'0':data.KSS_JLGL_ZDJZYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jlgl/zdjzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导审批(<font color="red">'+(data.KSS_JLGL_SLDSP==  undefined?'0':data.KSS_JLGL_SLDSP)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jlgl/sldsp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '奖励情况登记(<font color="red">'+(data.KSS_JLGL_JLQKDJ==  undefined?'0':data.KSS_JLGL_JLQKDJ)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jlgl/jlqkdj.html' },
                    ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
