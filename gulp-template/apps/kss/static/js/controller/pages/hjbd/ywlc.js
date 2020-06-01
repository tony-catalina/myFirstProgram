/**
 * 环节变动
 */
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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/zh.png'},enable:false,label: '签收',top: 280,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/hjbd/qs.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/zh.png'},enable:false,label: '回执(<font color="red">0</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/hjbd/hz.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '办案环节变动',top: 680,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/hjbd/hjbd.html' },
                    ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});