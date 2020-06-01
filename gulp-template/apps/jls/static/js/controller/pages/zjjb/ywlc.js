/**
 模块名称: 业务流程
 开始时间: 2020-3-12
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("jls_zjjb");
   
    var main={
        init:function(){
            ywlcCount.init("jls_zjjb",function(data){
                main.layout(data);
            main.eventBind(data);
            });
            
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '交班登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zjjb/jbdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '交班领导确认(<font color="red">'+(data.JLS_ZJJB_JBLDQR== undefined ? "0" : data.JLS_ZJJB_JBLDQR)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zjjb/jbldqr.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '接班确认(<font color="red">'+(data.JLS_ZJJB_JBQR== undefined ? "0" : data.JLS_ZJJB_JBQR)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zjjb/jbqr.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '接班领导确认(<font color="red">'+(data.JLS_ZJJB_JJBLDQR== undefined ? "0" : data.JLS_ZJJB_JJBLDQR)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zjjb/gbldqr.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
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
