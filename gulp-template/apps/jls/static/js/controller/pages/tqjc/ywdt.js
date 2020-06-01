/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            ywdt.init('ywdt', {
                title: "提前解除--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '解除羁押',
                        icon: 'icon-taizhang'
                    },
                    itemLists: [{
                            name: "总数",
                            filed: 'sum'
                        },
                        {
                            name: "拘留期满",
                            filed: 'jlqm'
                        },
                        {
                            name: "提前解除拘留",
                            filed: 'tqjc'
                        },
                        {
                            name: "转劳动教养",
                            filed: 'zldjy'
                        },
                        {
                            name: "转收容教育",
                            filed: 'zsrjy'
                        },
                        {
                            name: "转少年管教",
                            filed: 'zsngj'
                        },
                        {
                            name: "转强制隔离戒毒或责令社区戒毒",
                            filed: 'zjdfm'
                        },
                        {
                            name: "转刑事拘留",
                            filed: 'zxsjl'
                        },
                        {
                            name: "转逮捕",
                            filed: 'zdb'
                        },
                        {
                            name: "临时寄拘带走",
                            filed: 'lsjjdz'
                        },
                        {
                            name: "逃跑",
                            filed: 'tp'
                        },
                        {
                            name: "死亡",
                            filed: 'sw'
                        },
                        {
                            name: "转本省（区、市）其他所",
                            filed: 'zbsfm'
                        },
                        {
                            name: "转外省（区、市）其他所",
                            filed: 'zwsfm'
                        },
                        {
                            name: "其他",
                            filed: 'qt'
                        }
                    ]
                }],
                searchItem: {
                    // total: [{
                    //         name: "总人数",
                    //         filed: 0,
                    //         justfly: 'center'
                    //     },
                    //     {
                    //         name: "关押总量",
                    //         filed: 0,
                    //         justfly: 'center'
                    //     },
                    //     {
                    //         name: "拒收人数",
                    //         filed: 0,
                    //         justfly: 'center'
                    //     },
                    // ]
                },
                search:{
                    url: url.tqjcYwdt,
                    parameter:{

                    }
                }
            })
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});