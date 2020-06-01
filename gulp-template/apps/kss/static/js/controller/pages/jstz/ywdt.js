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
                    title: "业务动态",
                    formItems: [{
                        itemTitle: { name: '申请原因', icon: 'icon-taizhang' ,searchBtn:true},
                        itemLists: [
                            { name: "按调班理由	", data: '统计' },
                            { name: "打架", filed: 'dj' },
                            { name: "有牢头狱霸倾向", filed: 'yltybqx' },
                            { name: "聚众闹事", filed: 'jzls' },
                            { name: "办案需要", filed: 'naxy' },
                            { name: "转逮捕", filed: 'zdb' },
                            { name: "过渡期满", filed: 'gdqm' },
                            { name: "已决", filed: 'yj' },
                            { name: "其他", filed: 'qt' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"调整监室总次数", filed:'zrs', justfly:'center'},
                            {name:"未调整监室总次数", filed:'wtcs', justfly:'center'}
                        ]
                    },
                    search:{
                        url: url.jstzYwtz,
                        parameter:{}
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