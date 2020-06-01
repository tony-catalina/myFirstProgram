define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var url = require('modules/url');
    var ywdt = require('modules/ywdt');
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
                title: "延期--业务动态",
                formItems: [{
                    itemTitle: { name: '延期原因', icon: 'icon-taizhang' },
                    itemLists: [
                        { name: "不评真实姓名", filed: "bpzsxm" },
                        { name: "案情复杂", filed: "aqfz" },
                        { name: "流窜作案", filed: "lcza" },
                        { name: "精神病鉴定", filed: "jsbjd" },
                        { name: "团伙作案", filed: "thza" },
                        { name: "一审延期", filed: "ysyq" },
                        { name: "二审延期", filed: "esyq" },
                        { name: "审查起诉延期", filed: "scqsyq" },
                        { name: "其他", filed: "qt" }
                    ]
                }],
                searchItem:{
                    total:[
                        {name:"总人数", filed: "zrs", justfly:'left'}
                    ]
                },
                search:{
                    url: url.yqYwdt,
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
