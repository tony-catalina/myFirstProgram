/**
 * 械具使用
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var ywlcCount = require('modules/ywlc');
    var mxgraph = require('awd/flowchart/mxgraph');

    //var data =ywlcCount.init("kss_xjsy");
    

    var main={
        init:function(){
            ywlcCount.init("kss_xjsy", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                label: '械具使用呈批',top: 100,left: 120,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/sycp.html' },
                {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '中队/警署意见(<font color="red">'+(data.KSS_XJSY_ZDJSYJ==undefined?"0":data.KSS_XJSY_ZDJSYJ)+'</font>)',top: 300,left: 120,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/syzdjzyj.html' },
                {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '所领导审批(<font color="red">'+(data.KSS_XJSY_SYLDSP==undefined?"0":data.KSS_XJSY_SYLDSP)+'</font>)',top: 500,left: 120,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/syszyj.html' },
                {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '械具使用登记(<font color="red">'+(data.KSS_XJSY_XJSYDJ==undefined?"0":data.KSS_XJSY_XJSYDJ)+'</font>)',top: 700,left: 120,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/sydj.html' },
                {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '械具提前解除(<font color="red">'+(data.KSS_XJSY_XJTQJC==undefined?"0":data.KSS_XJSY_XJTQJC)+'</font>)',top: 900,left: 120,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/jc.html' },
                {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '延长或提前解除呈报(<font color="red">'+(data.KSS_XJSY_YCJCCP==undefined?"0":data.KSS_XJSY_YCJCCP)+'</font>)',top: 500,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/ychtqjc.html' },
                {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '延长中队/警署意见(<font color="red">'+(data.KSS_XJSY_YCZDJSYJ==undefined?"0":data.KSS_XJSY_YCZDJSYJ)+'</font>)',top: 700,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/yc.html' },
                {id: 'node8',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},
                    label: '领导审批(<font color="red">'+(data.KSS_XJSY_YCLDSP==undefined?"0":data.KSS_XJSY_YCLDSP)+'</font>)',top: 900,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/xjsy/ycszsp.html' }
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:6,to:7,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:7,to:8,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:8,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});