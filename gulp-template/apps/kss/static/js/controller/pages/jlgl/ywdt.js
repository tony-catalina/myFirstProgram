/**
 * 业务动态 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt')
    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            ywdt.init('ywdt', {
                    title: "奖励管理--业务动态",
                    formItems: [{
                        itemTitle: { name: '申请原因', icon: 'icon-taizhang'},
                        itemLists: [
                            { name: "物质奖励",filed: "wzjl" },
                            { name: "减刑",filed: "jx" },
                            { name: "立功",filed: "lg" },
                            { name: "劳动改造积极分子",filed: "ldjjgzfz" },
                            { name: "其他奖励",filed: "qtjl" }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"奖励总人数", filed: "zrs", justfly:'left'}
                        ]
                    },
                    search:{
                        url: url.jcjlYwdt,
                        parameter:{"dw":'北京市第一看守所'}
                    }
                })
            

        },
        eventBind: function() {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});