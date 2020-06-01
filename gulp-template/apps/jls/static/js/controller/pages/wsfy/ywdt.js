/**
 模块名称: 业务动态
 开始时间: 2020-3-12
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdt = require('modules/ywdt')
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
                title: "医生巡诊--业务动态",
                formItems: [{
                        itemTitle: {
                            name: '全拘所',
                            icon: 'icon-taizhang',
                        },
                        itemLists: [{
                                name: "今日防疫次数",
                                filed: 'jrqs'
                            },
                            {
                                name: "昨日防疫次数",
                                filed: 'zrqs'
                            },
                            {
                                name: "本周防疫次数",
                                filed: 'bzqs'
                            },
                            {
                                name: "上周防疫次数",
                                filed: 'szqs'
                            },
                            {
                                name: "该时间段防疫次数",
                                filed: 'dqqs'
                            }

                        ]
                    },
                    {
                        itemTitle: {
                            name: '工厂',
                            icon: 'icon-taizhang',
                        },
                        itemLists: [{
                                name: "今日防疫次数",
                                filed: 'jrgc'
                            },
                            {
                                name: "昨日防疫次数",
                                filed: 'zrgc'
                            },
                            {
                                name: "本周防疫次数",
                                filed: 'bzgc'
                            },
                            {
                                name: "上周防疫次数",
                                filed: 'szgc'
                            },
                            {
                                name: "该时间段防疫次数",
                                filed: 'dqgc'
                            }

                        ]
                    },
                    {
                        itemTitle: {
                            name: '拘室',
                            icon: 'icon-taizhang',
                        },
                        itemLists: [{
                                name: "今日防疫次数",
                                filed: 'jrjs'
                            },
                            {
                                name: "昨日防疫次数",
                                filed: 'zrjs'
                            },
                            {
                                name: "本周防疫次数",
                                filed: 'bzjs'
                            },
                            {
                                name: "上周防疫次数",
                                filed: 'szjs'
                            },
                            {
                                name: "该时间段防疫次数",
                                filed: 'dqjs'
                            }

                        ]
                    }
                ],
                searchItem: {
                    total: []
                },
                search: {
                    url: url.wsfyCount,
                    parameter: {
                        "state": 'R2'
                    }
                }
            })
            /**布局初始化**/
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