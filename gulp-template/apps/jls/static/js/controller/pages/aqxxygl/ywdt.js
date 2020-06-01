/**
 模块名称: 安全信息管理
 开始时间: 2020-3-7
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url=require('modules/url');
    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            ywdt.init('ywdt', {
                    title: "安全信息员管理--业务动态",
                    formItems: [{
                        itemTitle: { name: '安全信息员', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "按性别", data: '图形' },
                            { name: "男", filed: 'xman' },
                            { name: "女", filed: 'xwoman' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"现安全信息员人数", filed:'xem', justfly:'center'},
                            {name:"历史安全信息员人数", filed:'lsem', justfly:'center'}
                        ]
                    },
                    search:{
                        url: url.emCount,
                        parameter:{state:'R2'}
                    }
                });

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