/**
 模块名称: 业务流程
 开始时间: 2020-3-12
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var mxgraph = require('awd/flowchart/mxgraph');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            mxgraph.init('flowmap', {
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号登记',top: 280,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zbhdj/zbhdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '解除重病号(<font color="red">2</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zbhdj/jczbh.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号查询(<font color="red">3</font>)',top: 680,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zbhdj/zbhcx.html' },
                    {id: 'node4',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '重病号分配图(<font color="red">4</font>)',top: 880,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/zbhdj/zbhfpt.html' },
                ],

                lines:[{from:1,to:2,type:'edgeStyle=orthogonalEdgeStyle'},

                    {from:3,to:4,type:'edgeStyle=orthogonalEdgeStyle;'},
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