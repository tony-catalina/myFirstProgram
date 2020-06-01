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
                    title: "拘室调整--业务动态",
                    formItems: [{
                        itemTitle: { name: '拘室调整', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "按调班理由", filed: '0' },
                            { name: "打架", filed: 'dj' },
                            { name: "管理需求", filed: 'glxy' },
                            { name: "安全管理", filed: 'aqxy' },
                            { name: "其他", filed: 'qt' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"调仓总人数", filed:'tczrs', justfly:'center'},
                            {name:"未调仓总人数", filed:'wtczrs', justfly:'center'}
                        ]
                    },
                    search:{
                        url: url.jstzCount,
                        parameter:{"state":'R2'}
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