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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zbhgl/zbhdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除重病号',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zbhgl/jczbh.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号查询',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zbhgl/zbhcx.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号分布图',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zbhgl/zbhfbt.html' },
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