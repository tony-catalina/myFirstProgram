/**
 * 业务动态 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            ywdt.init('ywdt', {
                title: "临时出所--业务动态",
                formItems: [{
                    itemTitle: { name: '临时出所', icon: 'icon-taizhang', searchBtn: 'defaultBtn' },
                    itemLists: [
                        { name: "昨日临时出所", filed: "zrcs" },
                        { name: "昨日临时出所未回", filed: "zrcswg" },
                        { name: "今日临时出所", filed: "jrcs" },
                        { name: "今日临时出所未回", filed: "jrcswg" },
                        { name: "本周临时出所", filed: "bzcs" },
                        { name: "本周临时出所未回", filed: "bzcswg" },
                        { name: "本月临时出所", filed: "bycs" },
                        { name: "本月临时出所未回", filed: "bycswg" }
                    ]
                }],

                search: {
                    url: url.lscsYwdt,
                    parameter: { "jsbh": 110000114 }
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