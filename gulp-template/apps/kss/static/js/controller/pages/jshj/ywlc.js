/**
 * 家属会见
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_jshj");
    var main={
        init:function(){
            ywlcCount.init("kss_jshj", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '会见登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jshj/hjdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(data.KSS_JSHJ_LDSP==undefined?"0":data.KSS_JSHJ_LDSP)+'</font>)',top: 300,left: 80,width: 80,height: 80,url: '/apps/kss/views/pages/jshj/ldsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '监区提人登记(<font color="red">'+(data.KSS_JSHJ_JQTRDJ==undefined?"0":data.KSS_JSHJ_JQTRDJ)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jshj/jqtr.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '会见完毕安全检查(<font color="red">'+(data.KSS_JSHJ_AQJC==undefined?"0":data.KSS_JSHJ_AQJC)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jshj/aqjc.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '带入监室(<font color="red">'+(data.KSS_JSHJ_DRJS==undefined?"0":data.KSS_JSHJ_DRJS)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jshj/drjs.html' },],

                lines:[{from:1,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                    {from:2,to:3,type:'edgeStyle=elbowEdgeStyle;strokeColor=red;rounded=1;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:1,to:3,type:'edgeStyle=orthogonalEdgeStyle;'}
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
