window.mxBasePath ='/apps/kss/static/lib/flowchart';
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
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '伤情补录',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ylxxbl/sqbl.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '入所体检补录',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ylxxbl/rstjbl.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '半年体检补录',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ylxxbl/bntjbl.html' },

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