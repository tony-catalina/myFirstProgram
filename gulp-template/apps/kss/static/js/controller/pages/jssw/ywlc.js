window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    //var data = ywlcCount.init('KSS_JSSW');
    var main={
        init:function(){
            ywlcCount.init("KSS_JSSW", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '在押人员申请',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/zyrysq.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '管教审批(<font color="red">'+(data.KSS_JSSW_GJSP==undefined?"0":data.KSS_JSSW_GJSP)+'</font>)',top: 250,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/gjsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '管教队确认(<font color="red">'+(data.KSS_JSSW_GJQR==undefined?"0":data.KSS_JSSW_GJQR)+'</font>)',top: 400,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/gjdqr.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '邮寄家属(<font color="red">'+(data.KSS_JSSW_YJJS==undefined?"0":data.KSS_JSSW_YJJS)+'</font>)',top: 550,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/yjjs.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '前台办理(<font color="red">'+(data.KSS_JSSW_QTBL==undefined?"0":data.KSS_JSSW_QTBL)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/qtbl.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '安检机安检(<font color="red">'+(data.KSS_JSSW_AJJAJ==undefined?"0":data.KSS_JSSW_AJJAJ)+'</font>)',top: 850,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/ajjaj.html' },
                    {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '管教送物(<font color="red">'+(data.KSS_JSSW_GJSW==undefined?"0":data.KSS_JSSW_GJSW)+'</font>)',top: 1000,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/gjsw.html' },
                    {id: 'node8',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '在押人员确认(<font color="red">'+(data.KSS_JSSW_ZYRYQR==undefined?"0":data.KSS_JSSW_ZYRYQR)+'</font>)',top: 1150,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/zyryqr.html' },
                    {id: 'node9',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '物品补领(<font color="red">'+(data.KSS_JSSW_WPBL==undefined?"0":data.KSS_JSSW_WPBL)+'</font>)',top: 100,left: 80,width: 80,height: 80,url: '/apps/kss/views/pages/jssw/wpbl.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:5,to:6,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:6,to:7,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:7,to:8,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});