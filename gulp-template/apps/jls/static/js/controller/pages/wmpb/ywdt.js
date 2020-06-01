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
                    title: "拘室文明分布图",
                    // formItems: [{
                    //     itemTitle: { name: '', icon: '' },
                    //     itemLists: [
                    //          { name: "昨日临时出所", data: '0' },
                    //          { name: "昨日临时出所未回", data: '0' },
                    //          { name: "今日临时出所", data: '0' },
                    //          { name: "今日临时出所未回", data: '0' },
                    //          { name: "本周临时出所", data: '0' },
                    //          { name: "本周临时出所未回", data: '0' },
                    //          { name: "本月临时出所", data: '0' },
                    //          { name: "本月临时出所", data: '0' }
                    //     ]
                    // }],
                    searchItem:{
                        total:[
                            {name:"已评选文明个人", filed:'wmgr', justfly:'center'},
                            {name:"已评选文明拘室", filed:'wmjs',justfly:'center'}
                        ]
                    },
                    search:{
                        url: url.wmpbCount,
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