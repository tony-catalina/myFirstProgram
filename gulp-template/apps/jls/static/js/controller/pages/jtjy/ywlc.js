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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '集体教育登记',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/jtjy/jtjydj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '集体教育检索(<font color="red">2</font>)',top: 400,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/jtjy/jtjycx.html' },

                ],

                lines:[
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});