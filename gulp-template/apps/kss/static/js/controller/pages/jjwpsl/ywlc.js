/**
 * 救济物品申领
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');
    //获取流程节点代办数据
    //var data =ywlcCount.init("kss_jjwpsl");
    var main={
        init:function() {
            ywlcCount.init("kss_jjwpsl", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '救济物品申领',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jjwpsl/jjwpsl.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(data.KSS_JJWPSL_LDSP ==  undefined?'0':data.KSS_JJWPSL_LDSP)+'</font>)',top:400,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jjwpsl/ldsp.html' },
                    ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},

                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});