window.mxBasePath ='/apps/jls/static/lib/flowchart';
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
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '文明个人登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/wmgrdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '取消文明个人(<font color="red">2</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/qxwmgr.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '文明个人查询(<font color="red">3</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/wmgrcx.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '文明拘室登记(<font color="red">4</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/wmjsdj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '取消文明拘室(<font color="red">4</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/qxwmjs.html' },
                    {id: 'node6',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '文明拘室查询(<font color="red">4</font>)',top: 1100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/wmpb/wmjscx.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});