/**
模块名称： 业务动态
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
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
                title: "业务动态",
                formItems: [{
                    itemTitle: { name: '来所信息', icon: 'icon-taizhang' ,searchBtn:true},
                    itemLists: [
                        { name: "来所人数", filed: "lfrs" },
                        { name: "来所车辆", filed: "sxcls" }
                    ]
                },{
                    itemTitle: { name: '来所事由', icon: 'icon-taizhang' ,searchBtn:true},
                    itemLists: [
                        { name: "提讯", filed: "tx" },
                        { name: "提解", filed: "tj" },
                        { name: "家属会见", filed: "jshj" },
                        { name: "律师会见", filed: "lshj" },
                        { name: "上访", filed: "sf" },
                        { name: "参观", filed: "cg" },
                        { name: "视察", filed: "sc" },
                        { name: "检查", filed: "jc" },
                        { name: "临时工作", filed: "lsgz" },
                        { name: "其他", filed: "qt" }
                    ]
                }],
                searchItem:{
                    total:[
                    ]
                },
                search:{
                    url: url.wlryYwdt,
                    parameter:{"dw":'北京市第一看守所'}
                }
            })
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