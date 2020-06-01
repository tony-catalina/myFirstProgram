/**
 * 协助破案
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

   // var data =ywlcCount.init("kss_xzpa");
    var main={
        init:function(){
            ywlcCount.init("kss_xzpa", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '线索登记',top: 100,left: 240,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/xsdj.html' },
                {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data.KSS_XZPA_LDSP==undefined?0:data.KSS_XZPA_LDSP)+'</font>)',top: 300,left: 240,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/ldyj.html' },
                {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '材料转递(<font color="red">'+(data.KSS_XZPA_CLZD==undefined?0:data.KSS_XZPA_CLZD)+'</font>)',top: 500,left: 240,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/clzd.html' },
                {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '转递反馈(<font color="red">'+(data.KSS_XZPA_ZDDJ==undefined?0:data.KSS_XZPA_ZDDJ)+'</font>)',top: 700,left: 240,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/cdfk.html' },
                {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '政策兑现(<font color="red">'+(data.KSS_XZPA_ZCDX==undefined?0:data.KSS_XZPA_ZCDX)+'</font>)',top: 900,left: 240,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/zcdx.html' },
                {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '线索登记表打印(<font color="red">'+(data.KSS_XZPA_XSDJ==undefined?0:data.KSS_XZPA_XSDJ)+'</font>)',top: 300,left: 80,width: 80,height: 80,url: '/apps/kss/views/pages/xzpa/xsdjbdy.html' }
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:2,to:6,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});