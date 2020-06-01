/**
 * 所外就医
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    //var data =ywlcCount.init("kss_jy");
    var main={
        init:function(){
            ywlcCount.init("kss_jy", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '就医登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/jydj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">'+data.KSS_JY_LDSP+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/ldsp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '带出监室(<font color="red">'+data.KSS_JY_DCJS+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/dcjs.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '住院治疗确认(<font color="red">'+data.KSS_JY_ZYZLQR+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/zyzlqr.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '带入监室(<font color="red">'+data.KSS_JY_DHJS+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/drjs.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '治疗信息录入(<font color="red">'+data.KSS_JY_ZLXXQR+'</font>)',top: 1100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jygl/zlxxlr.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:5,to:6,type:'edgeStyle=orthogonalEdgeStyle'},

                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});