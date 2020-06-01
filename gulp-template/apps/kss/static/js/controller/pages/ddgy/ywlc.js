/**
 * 暂予监外执行
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var util = require('awd/easyui/util');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    //var data =ywlcCount.init("KSS_DDGY");
    var main={
        init:function(){
            ywlcCount.init("KSS_DDGY", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '单独关押设置',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ddgy/ddgysz.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队长审批(<font color="red">'+(data.KSS_DDGY_ZDSSP==undefined?'0':data.KSS_DDGY_ZDSSP)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ddgy/zdzsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(data.KSS_DDGY_LDSP==undefined?'0':data.KSS_DDGY_LDSP)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ddgy/ldsp.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '带入关押监室(<font color="red">'+(data.KSS_DDGY_DRJS==undefined?'0':data.KSS_DDGY_DRJS)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/ddgy/drgyjs.html' }],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
