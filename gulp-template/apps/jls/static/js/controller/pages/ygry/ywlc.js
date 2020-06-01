window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    var main={
        init:function(){
            ywlcCount.init("JLS_YGRY", function (data) {
                main.layout(data);
                main.eventBind(data);
            });
           
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '严管呈批',top: 100,left: 120,width: 80,height: 80,url: '/apps/jls/views/pages/ygry/ygcp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所长意见(<font color="red">' + (data.JLS_YGRY_SLDYJ == undefined ? "0" : data.JLS_YGRY_SLDYJ) + '</font>)',top: 400,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/ygry/szyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '严管解除(<font color="red">' + (data.JLS_YGRY_SZJC == undefined ? "0" : data.JLS_YGRY_SZJC) + '</font>)',top: 100,left: 280,width: 80,height: 80,url: '/apps/jls/views/pages/ygry/ygjc.html' },

                ],

                lines:[{from:1,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},
                {from:3,to:2,type:'edgeStyle=elbowEdgeStyle;rounded=1;'},

                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});