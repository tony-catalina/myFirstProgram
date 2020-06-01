/**
 * 岗位交接班
 */
window.mxBasePath ='/apps/kss/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');
     var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("KSS_GWJJB");
    var main={
        init:function(){
            ywlcCount.init("KSS_GWJJB", function(data) {
                main.layout(data);
                main.eventBind(data);
            });
        },
        layout:function(data){
            var num=data.KSS_GWJJB_JBQR==undefined?"0":data.KSS_GWJJB_JBQR;
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '交班',top: 280,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwjjb/jb.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '接班(<font color="red">'+num+'</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwjjb/gb.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '领导查看',top: 680,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/gwjjb/ldck.html' },
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