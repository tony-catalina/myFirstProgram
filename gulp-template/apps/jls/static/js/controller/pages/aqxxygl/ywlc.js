/**
 模块名称: 安全信息管理
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
            ywlcCount.init("jls_aqxxygl",function(data){
                main.layout(data);
            main.eventBind(data);
            });
            
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '物建呈批',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqxxygl/wjcp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data. JLS_AQXXYGL_SLDYJ==undefined?'0':data. JLS_AQXXYGL_SLDYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqxxygl/sldyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '信息员管理(<font color="red">'+(data. JLS_AQXXYGL_XXYGL==undefined?'0':data. JLS_AQXXYGL_XXYGL)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqxxygl/xxygl.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '撤销登记(<font color="red">'+(data. JLS_AQXXYGL_CXDJ==undefined?'0':data. JLS_AQXXYGL_CXDJ)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/aqxxygl/cxdj.html' }
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'}
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});