/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
    //单栏
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            ywdt.init('ywdt', {
                title: "出所管理--业务动态",
                formItems: [{
                    itemTitle: { name: '出所原因', icon: 'icon-taizhang'},
                    itemLists: [
                        { name: "刑满释放", filed: "xmsf" },
                        { name: "撤案释放", filed: "casf" },
                        { name: "取保候审", filed: "qbhs" },
                        { name: "假释", filed: "js" },
                        { name: "其他", filed:"qt"}
                    ]
                }],
                searchItem:{
                    total:[
                        {name:"总人数", filed: "zrs", justfly:'left'},
                
                    ]
                },
                search:{
                    url:url.clcsYwdt,
                    parameter:{"jsbh":110000114}
                }
                
            })
        },
        eventBind: function() {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function() {
                alert(111);
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
