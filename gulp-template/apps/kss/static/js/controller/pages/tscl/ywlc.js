/**
 * 投诉处理
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
   // var data =ywlcCount.init("kss_tscl");
    var main={
        init:function(){
            ywlcCount.init("kss_tscl", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '投诉处理登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tscl/tsdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(data.KSS_TSCL_LDSP==undefined?"0":data.KSS_TSCL_LDSP)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tscl/ldsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '登记处理结果(<font color="red">'+(data.KSS_TSCL_DJCLJG==undefined?"0":data.KSS_TSCL_DJCLJG)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tscl/tscljgdj.html' },
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