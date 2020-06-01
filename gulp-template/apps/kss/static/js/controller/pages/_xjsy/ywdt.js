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
                    title: "械具使用--业务动态",
                    formItems: [{
                        itemTitle: { name: '械具使用', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "械具使用呈批", filed: 'sycp' },
                            { name: "械具使用登记", filed: 'sydj' },
                            { name: "延长使用登记", filed: 'ycdj' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"惩罚总人数", filed:'zrs', justfly:'left'}
                        ]
                    },
                    search:{
                        url: url.xjYwdt,
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