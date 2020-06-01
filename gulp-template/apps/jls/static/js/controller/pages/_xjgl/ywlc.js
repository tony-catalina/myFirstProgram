/**
 模块名称： 信件管理
 开始时间： 2020-2-25
 */
window.mxBasePath ='/apps/jls/static/lib/flowchart';
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    var mxgraph = require('awd/flowchart/mxgraph');

    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("JLS_XJGL");

    var main={
        init:function(){
            ywlcCount.init("JLS_XJGL",function(data){
                getData2(data);
            });
            var getData2 = function(data){
                ywlcCount.init("JLS_WLDX",function(data2){
                    main.layout(data,data2);
                }); 
            }    
            
            main.eventBind();
        },
        layout:function(data,data2){
           
            mxgraph.init('flowmaps', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '办案机关书面委托',top: 100,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xjgl/bajgsmwt.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '收发信件登记(<font color="red">'+(data.JLS_XJGL_SFXJDJ==undefined?"0":data.JLS_XJGL_SFXJDJ)+'</font>)',top: 300,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xjgl/sfxjdj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '信件传递(<font color="red">'+(data.JLS_XJGL_XJCD==undefined?"0":data.JLS_XJGL_XJCD)+'</font>)',top: 500,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xjgl/xjcd.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '往来电讯登记(<font color="red">'+(data2.JLS_WLDX_WLDXDJ==undefined?"0":data2.JLS_WLDX_WLDXDJ)+'</font>)',top: 700,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xjgl/lwdxdj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '电讯传递(<font color="red">'+(data2.JLS_WLDX_DXCD==undefined?"0":data2.JLS_WLDX_DXCD)+'</font>)',top: 900,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xjgl/dxcd.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });
        },
        eventBind:function(){

        }
    };

    $(main.init);

});