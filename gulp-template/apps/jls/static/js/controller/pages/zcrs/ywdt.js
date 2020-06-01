/**
 * 业务动态 页面入口
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
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            ywdt.init('ywdt', {
                title: "入所--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '按性别',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                            name: "男",
                            filed: 'man'
                        },
                        {
                            name: "女",
                            filed: 'woman'
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按入所原因',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                            name: "行政拘留",
                            filed: 'xzjl'
                        },
                        {
                            name: "司法拘留",
                            filed: 'sfjl'
                        },
                        {
                            name: "治安拘留",
                            filed: 'zajl'
                        },
                        {
                            name: "临时羁押",
                            filed: 'lsjy'
                        },
                        {
                            name: "本省转入",
                            filed: 'bszr'
                        },
                        {
                            name: "外省转入",
                            filed: 'wszr'
                        },
                        {
                            name: "其他",
                            filed: 'qt'
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按户籍',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                            name: "本省",
                            filed: 'bsr'
                        },
                        {
                            name: "外省",
                            filed: 'wsr'
                        },
                        {
                            name: "外籍",
                            filed: 'wgr'
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按文化程度',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                            name: "大专以上",
                            filed: 'dzys'
                        },
                        {
                            name: "高中",
                            filed: 'gz'
                        },
                        {
                            name: "初中",
                            filed: 'cz'
                        },
                        {
                            name: "小学",
                            filed: 'xx'
                        },
                        {
                            name: "文盲",
                            filed: 'wm'
                        }
                    ]
                }],
                searchItem: {
                    total: [{
                            name: "入所总人数",
                            filed: 'rszrs',
                            justfly: 'center'
                        },
                        {
                            name: "总关押量",
                            filed: 'gyzl',
                            justfly: 'center'
                        },
                        {
                            name: "拒收人数",
                            filed: 'yth',
                            justfly: 'center'
                        },
                    ]
                },
                search:{
                    url: url.zcrsCount,
                    parameter:{"state":'R2'}
                }
            })
        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});