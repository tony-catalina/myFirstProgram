/**
 * 延期
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_yq");
    var main={
        init:function(){
            ywlcCount.init("kss_yq", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){

            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '证件核对',top: 100,left: 160,width: 80,height: 80,url: '/apps/kss/views/pages/yq/zjhd.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '延期登记(<font color="red">'+(data.KSS_YQ_YQDJ == undefined?0:data.KSS_YQ_YQDJ)+'</font>)',top: 300,left: 160,width: 80,height: 80,url: '/apps/kss/views/pages/yq/yqdj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '批量延期',top: 500,left: 160,width: 80,height: 80,url: '/apps/kss/views/pages/yq/plyq.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/zh.png'},enable:false,label: '变更羁押期限',top: 100,left: 300,width: 80,height: 80,url: '/apps/kss/views/pages/yq/bgqx.html' },
                ],
                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                ]
            });

        },
        eventBind:function(){

        }
    };

    $(main.init);

});
