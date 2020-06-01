/**
 * 提解
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    //var data =ywlcCount.init("kss_tj");
    var main={
        init:function(){
            ywlcCount.init("kss_tj", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '核对凭证',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tj/hdpz.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '提解出所登记(<font color="red">'+(data.KSS_TJ_TJCSDJ == undefined?0:data.KSS_TJ_TJCSDJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tj/csdj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '监区提人登记(<font color="red">'+(data.KSS_TJ_JQTRDJ == undefined?0:data.KSS_TJ_JQTRDJ)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tj/trdj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '提解回所安全检查(<font color="red">'+(data.KSS_TJ_TJHSAQJC == undefined?0:data.KSS_TJ_TJHSAQJC)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/tj/hsjc.html' } ,
                    ],
                lines:[{from:1,to:2,line:'',type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,line:'',type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,line:'',type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
