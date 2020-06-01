window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var main={
        init:function(){
            main.layout();
            main.eventBind();
        },
        layout:function(){
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/zh.png'},label: '接收纠正违法',enable:false,top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/xtzxjd/jsjzwf.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/zh.png'},label: '纠正违法反馈(<font color="red">2</font>)',enable:false,top: 400,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/xtzxjd/jzwffk.html' },

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