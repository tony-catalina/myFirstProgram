/**
 模块名称: 业务流程
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var mxgraph = require('awd/flowchart/mxgraph');
    var ywlcCount = require('modules/ywlc');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            ywlcCount.init("jls_snjy",function(data){
                main.layout(data);
            main.eventBind(data);
            });
            /**界面初始化**/
        },
        layout:function(data){
            /**布局初始化**/
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '诊断结果录入(<font color="red">'+(data. JLS_SNJY_ZDJGLR==undefined?'0':data. JLS_SNJY_ZDJGLR)+'</font>)',top: 280,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/snjy/zdjglr.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '医生派药(<font color="red">'+(data. JLS_SNJY_YSPY==undefined?'0':data. JLS_SNJY_YSPY)+'</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/snjy/yspy.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '所内就医查询(<font color="red">1</font>)',top: 680,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/snjy/snjycx.html' },

                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},
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