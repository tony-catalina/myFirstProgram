/**
 模块名称: 安全检查
 开始时间: 2020-3-7
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("jls_aqxxygl");
    var main={
        init:function(){
            main.layout();
            main.eventBind();
        },
        layout:function(){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '日常清监',top: 100,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/aqjc/rcqj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '处理(<font color="red">2</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqjc/cl.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导讲评(<font color="red">3</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqjc/sldjp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导确认(<font color="red">4</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqjc/sldqr.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '安全大检查',top: 100,left: 280,width: 80,height: 80,url: '/apps/jls/views/pages/aqjc/aqdjc.html' },
                ],

                lines:[
                    {from:1,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:5,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});