/**
 * 加减刑
 */
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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '加减刑申请',top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jjx/jjxsq.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导审批(<font color="red">0</font>)',top: 400,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/jjx/ldsp.html' },

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