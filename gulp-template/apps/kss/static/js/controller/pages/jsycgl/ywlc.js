window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');



    var main={
        init:function(){
            ywlcCount.init("kss_jsbjd", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '精神异常登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jsycgl/jsycdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除精神异常(<font color="red">'+(data.KSS_JSBJD_JDKS==undefined?"0":data.KSS_JSBJD_JDKS)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jsycgl/jcjsyc.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '精神异常查询(<font color="red">'+(data.KSS_JSBJD_JDJS==undefined?"0":data.KSS_JSBJD_JDJS)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jsycgl/jsyccx.html' },

                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});