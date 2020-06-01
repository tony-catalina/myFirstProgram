/**
 * 监室调整
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    var main={
        init:function(){
            ywlcCount.init("kss_jstz", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            var zdjsyj=data.KSS_JSTZ_ZDJZYJ==undefined?"0":data.KSS_JSTZ_ZDJZYJ;
            var jstzqd=data.KSS_JSTZ_TZQR==undefined?"0":data.KSS_JSTZ_TZQR;
            var ldsp=data.KSS_JSTZ_LDSP==undefined?"0":data.KSS_JSTZ_LDSP;
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '监室调整登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/jstzdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队/警署意见(<font color="red">'+zdjsyj+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/zdjzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '监室调整确定(<font color="red">'+jstzqd+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/tzqr.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+ldsp+'</font>)',top: 500,left: 100,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/ldsp.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '名单打印',top: 700,left: 40,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/mddy.html' },
                    // {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '批量监室调整',top: 100,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/pltz.html' },
                    {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '主协管设置',top: 900,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/jstz/zxgsz.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,line:'监区内',type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:2,to:4,line:'跨监区',type:'edgeStyle=elbowEdgeStyle;rounded=1;strokeColor=red;'},
                    {from:4,to:5,type:'edgeStyle=elbowEdgeStyle;rounded=1;strokeColor=red;'},
                    {from:4,to:3,type:'edgeStyle=elbowEdgeStyle;rounded=1;strokeColor=red;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});