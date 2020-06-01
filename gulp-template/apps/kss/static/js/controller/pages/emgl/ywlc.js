/**
 * 耳目管理
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_emsz");
   // var dataCx =ywlcCount.init("kss_emcx");
    var main={
        init:function(){

            ywlcCount.init("kss_emsz", function(data) {
               getData2(data);
            });
            var getData2 = function(data) {
                ywlcCount.init("kss_emcx", function (data2) {
                    main.layout(data, data2);

                });
            };
        },

        layout:function(data,dataCx){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '物建呈报',top: 100,left: 150,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/wjcp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队/警署意见(<font color="red">'+(data.KSS_EMSZ_ZDZYJ==undefined?"0":data.KSS_EMSZ_ZDZYJ)+'</font>)',top: 300,left: 150,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/zdjzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data.KSS_EMSZ_SZYJ==undefined?"0":data.KSS_EMSZ_SZYJ)+'</font>)',top: 500,left: 150,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/sldyj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '撤销登记',top: 500,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/cxdj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '撤销中队长/警署意见(<font color="red">'+(dataCx.KSS_EMCX_ZDZYJ==undefined?"0":dataCx.KSS_EMCX_ZDZYJ)+'</font>)',top: 700,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/cxzdjzyj.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+(dataCx.KSS_EMCX_SZYJ==undefined?"0":dataCx.KSS_EMCX_SZYJ)+'</font>)',top: 900,left: 320,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/ldps.html' },
                    {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '情况反馈',top: 900,left: 150,width: 80,height: 80,url: '/apps/kss/views/pages/emgl/qkfy.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;strokeColor=red;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:5,to:6,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
