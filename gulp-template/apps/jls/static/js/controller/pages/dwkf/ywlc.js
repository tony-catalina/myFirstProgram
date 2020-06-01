/**
 模块名称: 业务流程
 开始时间: 2020-3-11
 */

window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ymlcCount=require('modules/ywlc');
    //获取流程节点代办数据
    // var data=ymlcCount.init("jls_dwkf");

    var main={
        init:function(){
            ymlcCount.init("jls_dwkf",function(data){
                main.layout(data);
                main.eventBind(data);
            });
            
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '申请登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/dwkf/sqdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">'+(data.JLS_DWKF_SZYJ==undefined ? "0" : data.JLS_DWKF_SZYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/dwkf/szyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '上级审查(<font color="red">'+(data.JLS_DWKF_SJSC==undefined ? "0" : data.JLS_DWKF_SJSC)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/dwkf/sjsc.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '活动安排(<font color="red">'+(data.JLS_DWKF_HDAP==undefined ? "0" : data.JLS_DWKF_HDAP)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/dwkf/hdap.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '完毕登记(<font color="red">'+(data.JLS_DWKF_WBDJ==undefined ? "0" : data.JLS_DWKF_WBDJ)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/dwkf/wbdj.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});
