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
                nodes:[{id: 'node1',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '医生巡诊登记',top: 280,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/ysxz/xsxzdj.html' },
                    {id: 'node2',style: {STYLE_IMAGE:'../../../static/images/lcttx.png'},label: '巡诊查询(<font color="red">2</font>)',top: 580,left: 200,width: 80,height: 80,url: '/apps/jls/views/pages/ysxz/xzcx.html' },

                ],

                lines:[
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