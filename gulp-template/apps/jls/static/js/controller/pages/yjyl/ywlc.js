window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var main={
        init:function(){
            main.layout();
            main.eventBind();
        },
        layout:function(){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '演练登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/yjyl/yldj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '演练情况(<font color="red">2</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/yjyl/ylqk.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '改进落实(<font color="red">3</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/yjyl/gjls.html' },

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