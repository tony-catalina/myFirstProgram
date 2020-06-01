/**
 模块名称: 业务流程
 开始时间: 2020-3-11
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    var main={
        init:function(){
            ywlcCount.init('jls_sw', function (data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '送物登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/sw/swdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '接收(<font color="red">'+(data.JLS_SW_JS == undefined ? "0" : data.JLS_SW_JS)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/sw/js.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '派发物品(<font color="red">'+(data.JLS_SW_PFWP == undefined ? "0" : data.JLS_SW_PFWP)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/sw/pfwp.html' },

                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});
