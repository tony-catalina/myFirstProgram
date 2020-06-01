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
   // var data =ywlcCount.init("kss_jwzx");
    var main={
        init:function() {
            ywlcCount.init("kss_jwzx", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            var num=data.KSS_JWZX_SWHYJ==undefined?"0":data.KSS_JWZX_SWHYJ;
            var num2=data.KSS_JWZX_JD==undefined?"0":data.KSS_JWZX_JD;
            var num3=data.KSS_JWZX_SCDB==undefined?"0":data.KSS_JWZX_SCDB;
            var num4=data.KSS_JWZX_CS==undefined?"0":data.KSS_JWZX_CS;
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '申请',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zyjwzx/sq.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所务会意见(<font color="red">'+num+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zyjwzx/swhyyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '鉴定(<font color="red">'+num2+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zyjwzx/jd.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '审查担保(<font color="red">'+num3+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zyjwzx/scdb.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '出所(<font color="red">'+num4+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zyjwzx/cs.html' }],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
