/**
 模块名称: 出所治疗
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    // var data =ywlcCount.init("jls_swjy");
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            ywlcCount.init("jls_swjy",function(data){
                main.layout(data);
                main.eventBind(data);
            });
            
            /**界面初始化**/
        },
        layout:function(data){
            /**布局初始化**/
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '医生呈批',top: 180,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/cszl/yscp.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '警长意见(<font color="red">'+(data. JLS_SWJY_JZYJ==undefined?'0':data. JLS_SWJY_JZYJ)+'</font>)',top: 380,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/cszl/jzyj.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所领导意见(<font color="red">'+(data. JLS_SWJY_SLDYJ==undefined?'0':data. JLS_SWJY_SLDYJ)+'</font>)',top: 580,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/cszl/sldyj.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '离所登记(<font color="red">'+(data. JLS_SWJY_CSDJ==undefined?'0':data. JLS_SWJY_CSDJ)+'</font>)',top: 780,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/cszl/lsdj.html' },
                    {id: 'node5',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '回所登记(<font color="red">'+(data. JLS_SWJY_HSDJ==undefined?'0':data. JLS_SWJY_HSDJ)+'</font>)',top: 980,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/cszl/hsdj.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:2,to:3,type:'edgeStyle=orthogonalEdgeStyle'},
                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
                    {from:4,to:5,type:'edgeStyle=orthogonalEdgeStyle;'},
                ]
            });

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});