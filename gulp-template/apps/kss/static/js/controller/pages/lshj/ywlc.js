/**
 * 律师会见
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_lshj");

    var main={
        init:function(){
            ywlcCount.init("kss_lshj", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

             mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '核对凭证(<font color="red">'+data.KSS_LSHJ_HDPZ+'</font>)',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/lshj/hdpz.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '登记呈报(<font color="red">'+data.KSS_LSHJ_DJCB+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/lshj/djcb.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '监区提人登记(<font color="red">'+data.KSS_LSHJ_JQTRDJ+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/lshj/jqtr.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '会见完毕安全检查(<font color="red">'+data.KSS_LSHJ_AQJC+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/lshj/aqjc.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/zh.png'},enable:false,label: '预约会见(<font color="red">'+data.KSS_LSHJ_JS+'</font>)',top: 300,left: 330,width: 80,height: 80,url: '/apps/kss/views/pages/lshj/yyhj.html' },],

                lines:[{from:1,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:5,to:3,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});