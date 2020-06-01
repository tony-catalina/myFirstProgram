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
                    itemTitle: { name: '北京拘留所', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "违法犯罪线索", data: 'wffz' },
                        { name: "监所安全信息", filed: 'jsaq' },
                        { name: "社会动态信息", filed: 'shdt' },
                        { name: "合计", filed: 'hj' }
                    ]
                },{
                    itemTitle: { name: '违法犯罪线索', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "新增线索", data: 'xzxs' },
                        { name: "核实线索", filed: 'hsxs' },
                        { name: "无法核实", filed: 'wfhs' }
                    ]
                },{
                    itemTitle: { name: '核实线索', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "破获刑事案件	", data: 'phxsaj' },
                        { name: "查获刑事拘留人数", filed: 'ch' },
                        { name: "破获治安案件", filed: 'phzaaj' },
                        { name: "破获追赃金额(元)", filed: 'phzzje' },
                        { name: "总数", filed: 'zs' }
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