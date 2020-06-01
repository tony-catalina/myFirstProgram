/**
 * 重点人员
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

        var ywlcCount = require('modules/ywlc');

        //获取流程节点代办数据
      //  var data =ywlcCount.init("kss_zdrysz");
       // var dataCx =ywlcCount.init("kss_zdrycx");
    var main={
        init:function(){
            ywlcCount.init("kss_zdrysz", function(data) {
                getData2(data);
            });
            var getData2 = function(data) {
                ywlcCount.init("kss_zdrycx", function(data2) {
                    main.layout(data, data2);
                });
            };
        },
        layout:function(data,data2){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '人员维护',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/sysz.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '中队警组意见(<font color="red">'+(data.KSS_ZDRYSZ_ZDJZYJ==undefined?"0":data.KSS_ZDRYSZ_ZDJZYJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/szzdjzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data.KSS_ZDRYSZ_SLDYJ==undefined?"0":data.KSS_ZDRYSZ_SLDYJ)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/szldyj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除呈批(<font color="red">0</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/jccp.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除中队/警组意见(<font color="red">'+(data2.KSS_ZDRYCX_ZDJZYJ==undefined?"0":data2.KSS_ZDRYCX_ZDJZYJ)+'</font>)',top:900,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/jczdjzyj.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除所领导意见(<font color="red">'+(data2.KSS_ZDRYCX_SLDYJ==undefined?"0":data2.KSS_ZDRYCX_SLDYJ)+'</font>)',top: 1100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/zdry/jcldyj.html' },],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle;'},
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
