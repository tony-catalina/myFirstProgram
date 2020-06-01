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
    var utils=require('awd/layui/utils');
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
                title: "收押入所--业务动态",
                formItems: [{
                    itemTitle: { name: '现办案环节', icon: 'icon-taizhang', searchBtn:'xbahj', },
                    itemLists: [
                        { name: "形式拘留", filed: "xsjl" },
                        { name: "逮捕", filed: "db" },
                        { name: "公安补充侦察（1）", filed: "gabczc1" },
                        { name: "公安补充侦察（2）", filed: "gabczc2" },
                        { name: "审查起诉（1）", filed: "scqs1" },
                        { name: "审查起诉（2）", filed: "scqs2" },
                        { name: "审查起诉（3）", filed: "scqs3" },
                        { name: "检查补充侦查", filed: "jcbczc" },
                        { name: "一审", filed: "ys" },
                        { name: "二审", filed: "es" },
                        { name: "发回重审", filed: "fhcs" },
                        { name: "死刑复核", filed: "sxfh" },
                        { name: "待执行", filed: "dzx" },
                        { name: "已决", filed: "yj" },
                        { name: "一审上诉期", filed: "ysssq" },
                        { name: "再审", filed: "zs" },
                        { name: "其他", filed: "qt" },
                    ]
                }],
                searchItem: {
                    total: [
                        { name: "入所总人数", filed: "rszrs", justfly: 'center' },
                        // { name: "关押总量", filed: "zyzrs", justfly: 'center' },
                        // { name: "拒收人数", filed: "jszrs", justfly: 'center' },
                    ]
                },
                search: {
                    url: url.hjbdYwdt,
                    parameter: {}
                },
            });

        },
        eventBind: function() {
            

        }
    };

    /**
     *运行入口
     */
    $(main.init);

});