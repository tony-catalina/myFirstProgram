/**
 * 业务流程
 * @type {string}
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
    // var data =ywlcCount.init("jls_qjcs");
    var main={
        init:function(){
            ywlcCount.init("jls_qjcs", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
           
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '申请担保',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/sqdb.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '请假呈批(<font color="red">'+(data.JLS_QJCS_QJCP==undefined?"0":data.JLS_QJCS_QJCP)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/qjcp.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">'+(data.JLS_QJCS_SZYJ==undefined?"0":data.JLS_QJCS_SZYJ)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/szyj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '主管意见(<font color="red">'+(data.JLS_QJCS_ZGYJ==undefined?"0":data.JLS_QJCS_ZGYJ)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/zgyj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '离所登记(<font color="red">'+(data.JLS_QJCS_LSDJ==undefined?"0":data.JLS_QJCS_LSDJ)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/lsdj.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '保证金收取(<font color="red">'+(data.JLS_QJCS_BZJSQ==undefined?"0":data.JLS_QJCS_BZJSQ)+'</font>)',top: 900,left: 80,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/bzjsq.html' },
                    {id: 'node7',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '到期未归处理(<font color="red">'+(data.JLS_QJCS_DQWGCL==undefined?"0":data.JLS_QJCS_DQWGCL)+'</font>)',top: 1100,left: 80,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/dqwgcl.html' },
                    {id: 'node8',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '财务返还(<font color="red">'+(data.JLS_QJCS_CWFH==undefined?"0":data.JLS_QJCS_CWFH)+'</font>)',top: 900,left: 320,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/cwfh.html' },
                    {id: 'node9',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '已请假人员(<font color="red">'+(data.JLS_QJCS_YQJRY==undefined?"0":data.JLS_QJCS_YQJRY)+'</font>)',top: 1100,left: 320,width: 80,height: 80,url: '/apps/jls/views/pages/qjcs/yqjry.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:6,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});