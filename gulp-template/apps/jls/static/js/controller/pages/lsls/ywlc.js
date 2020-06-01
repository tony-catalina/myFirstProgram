/**
 * 业务流程
 * @type {string}
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
     
    var main={
        init:function(){
            ywlcCount.init("jls_lsls",function(data){
                main.layout(data);
                main.eventBind(data);
            });
            
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '证件核对',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/zjhd.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '登记呈批(<font color="red">'+(data.JLS_LSLS_DJCP ==undefined?'0':data.JLS_LSLS_DJCP)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/djcp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">'+(data.JLS_LSLS_SZYJ ==undefined?'0':data.JLS_LSLS_SZYJ)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/szyj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '离所登记(<font color="red">'+(data.JLS_LSLS_LSDJ ==undefined?'0':data.JLS_LSLS_LSDJ)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/lsdj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '回所登记(<font color="red">'+(data.JLS_LSLS_HSDJ ==undefined?'0':data.JLS_LSLS_HSDJ)+'</font>)',top: 900,left: 100,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/hsdj.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '带入拘室(<font color="red">'+(data.JLS_LSLS_DRJS ==undefined?'0':data.JLS_LSLS_DRJS)+'</font>)',top: 900,left: 300,width: 80,height: 80,url: '/apps/jls/views/pages/lsls/drjs.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:4,to:6,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});