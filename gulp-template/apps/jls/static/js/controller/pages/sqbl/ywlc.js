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
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '伤情登记',top: 280,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/sqbl/sqdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '伤情查询(<font color="red">2</font>)',top: 580,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/sqbl/sqcx.html' },

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