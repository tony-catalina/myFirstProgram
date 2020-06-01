/**
 模块名称: 械具使用
 开始时间: 2020-3-7
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
      //获取流程节点代办数据
    //   var data =ywlcCount.init("jls_xjsy");
    //   var dataCx =ywlcCount.init("jls_ycjcxjsy");
      var main={
        init:function(){
            ywlcCount.init("jls_xjsy",function(data){
                getData2(data);
            });
            var getData2 = function(data){
                ywlcCount.init("jls_ycjcxjsy",function(data2){
                    main.layout(data,data2);
                }); 
            }    
            
            main.eventBind();
        },
        layout:function(data,data2){
            mxgraph.init('flowmaps', {
                nodes:[
                    {id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '械具使用呈批',top: 100,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/xjsycp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">'+(data.JLS_XJSY_SZYJ==undefined?"0":data.JLS_XJSY_SZYJ)+'</font>)',top: 300,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/szyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '使用登记(<font color="red">'+(data.JLS_XJSY_SYDJ==undefined?"0":data.JLS_XJSY_SYDJ)+'</font>)',top: 500,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/sydj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除械具使用(<font color="red">'+(data.JLS_XJSY_JCXJSY==undefined?"0":data.JLS_XJSY_JCXJSY)+'</font>)',top: 900,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/jcxjsy.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '提前解除登记',top: 700,left: 270,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/tqjcdj.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '延长登记',top: 500,left: 420,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/ycdj.html' },
                    {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">'+(data2.JLS_YCJCXJSY_SZYJ==undefined?"0":data2.JLS_YCJCXJSY_SZYJ)+'</font>)',top: 900,left: 420,width: 80,height: 80,url: '/apps/jls/views/pages/xjsy/jcszyj.html' },
                ],

                lines:[
                    {from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:3,to:6,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:6,to:7,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:7,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:3,to:5,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:5,to:7,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},

                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});