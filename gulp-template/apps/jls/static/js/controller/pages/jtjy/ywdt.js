/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdt = require('modules/ywdt')

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
            ywdt.init('ywdt', {
                title: "安全信息员管理--业务动态",
                formItems: [{
                    itemTitle: { name: '集体教育', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "管教姓名", data: 'wffz' },
                        { name: "集体管教次数", filed: 'jsaq' },
                    ]
                }],
                // searchItem:{
                //     total:[
                //         {name:"单位", filed:'xem', justfly:'center'}
                //     ]
                // },
                search:{
                    // url: '/jls/emdj/emCount',
                    // parameter:{"state":'R2'}
                }
            })
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