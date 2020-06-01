/**
 * 处理结果
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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/zh.png'},label: '结案(<font color="red">0</font>)',enable:false,top: 100,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/cljg/jz.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/zh.png'},label: '执行(<font color="red">0</font>)',enable:false,top: 300,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/cljg/zx.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '处理结果登记',top: 500,left: 200,width: 80,height: 80,url: '/apps/kss/views/pages/cljg/cljg.html' },
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