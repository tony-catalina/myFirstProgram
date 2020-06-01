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
                title: "处理结果--业务动态",
                formItems: [{
                    itemTitle: { name: '处理结果', icon: 'icon-taizhang'},
                    itemLists: [
                        { name: "刑事处罚", filed: "cf" },
                        { name: "行政治安处理", filed: "cl" },
                        { name: "工作措施", filed: "cs" },
                        { name: "其他", filed: "cl" }
                    ]
                }],
                searchItem:{
                    total:[
                        {name:"总人数", filed: "zrs", justfly:'left'}
                    ]
                },
                search:{
                    url: url.pjdjYwdt,
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
