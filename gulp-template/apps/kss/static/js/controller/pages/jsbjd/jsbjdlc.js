window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');

    //获取流程节点代办数据
   // var data =ywlcCount.init("kss_jsbjd");
    var main={
        init:function(){
            ywlcCount.init("kss_jsbjd", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '鉴定开始登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jsbjd/jdksdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '鉴定结束登记(<font color="red">'+data.KSS_JSBJD_JDJS+'</font>)',top: 400,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jsbjd/jdjcdj.html' },

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
