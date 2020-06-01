window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
   // var data = ywlcCount.init("KSS_WQSY");
    var main={
        init:function(){
            ywlcCount.init("KSS_WQSY", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '武器使用呈批',top: 280,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/wqsy/wqsycp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导审批(<font color="red">'+(data.KSS_WQSY_LDSP==undefined?"0":data.KSS_WQSY_LDSP)+'</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/wqsy/sldsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '武器归还(<font color="red">'+(data.KSS_WQSY_WQGH==undefined?"0":data.KSS_WQSY_WQGH)+'</font>)',top: 680,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/wqsy/wqgh.html' },

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