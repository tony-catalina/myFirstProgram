window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("JLS_SWFZ");
    var main={
        init:function(){
            ywlcCount.init("JLS_SWFZ",function(data){
                main.layout(data);
                main.eventBind(data);
            });
           
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '线索登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/xsdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data.JLS_SWFZ_SLDYJ==undefined?'0':data.JLS_SWFZ_SLDYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/sldyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '材料转递(<font color="red">'+(data.JLS_SWFZ_CLZD==undefined?'0':data.JLS_SWFZ_CLZD)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/clzd.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '传递反馈(<font color="red">'+(data.JLS_SWFZ_CDFK==undefined?'0':data.JLS_SWFZ_CDFK)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/cdfk.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '政策兑现(<font color="red">'+(data.JLS_SWFZ_ZCDX==undefined?'0':data.JLS_SWFZ_ZCDX)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/zcdx.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '材料登记表打印(<font color="red">4</font>)',top: 300,left: 80,width: 80,height: 80,url: '/apps/jls/views/pages/swfz/cldjbdy.html' },
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