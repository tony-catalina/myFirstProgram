/**
 模块名称: 心理咨询
 开始时间: 2020-3-7
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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '心理咨询登记',top: 280,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xlzx/xlzxdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '心理咨询处理(<font color="red">2</font>)',top: 480,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xlzx/xlzxcl.html' },
                    {id: 'node3',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '心理咨询查询(<font color="red">3</font>)',top: 680,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/xlzx/xlzxcx.html' },

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