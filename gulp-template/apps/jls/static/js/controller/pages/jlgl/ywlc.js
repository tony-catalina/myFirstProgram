window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');
    // var data = ywlcCount.init("jls_jlgl");

    var main={
        init:function(){
            ywlcCount.init("jls_jlgl",function(data){
                main.layout(data);
            main.eventBind(data);
            });
            
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '奖励呈批',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/jlgl/jlcp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '警组意见(<font color="red">'+(data.JLS_JLGL_JZYJ==undefined?"0":data.JLS_JLGL_JZYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/jlgl/jzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '奖励情况(<font color="red">'+(data.JLS_JLGL_JLQK==undefined?"0":data.JLS_JLGL_JLQK)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/jlgl/jlqk.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});