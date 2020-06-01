/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
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
            ywdt.init('ywdt', {
                title: "收押入所--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '按性别',
                        icon: 'icon-taizhang',
                        searchBtn: 'xb',
                    },
                    itemLists: [{
                            name: "男",
                            filed: "nan"
                        },
                        {
                            name: "女",
                            filed: "nv"
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按入所原因',
                        icon: 'icon-taizhang',
                        searchBtn: 'rsxz'
                    },
                    itemLists: [{
                            name: "正常入所",
                            filed: "zcrs"
                        },
                        {
                            name: "收回",
                            filed: "sh"
                        },
                        {
                            name: "投送未收",
                            filed: "tsws"
                        },
                        {
                            name: "非拘捕入所",
                            filed: "fjbrs"
                        },
                        {
                            name: "其他",
                            filed: "rsqt"
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按户籍',
                        icon: 'icon-taizhang',
                        searchBtn: 'hjd'
                    },
                    itemLists: [{
                            name: "本省",
                            filed: "bs"
                        },
                        {
                            name: "外省",
                            filed: "ws"
                        },
                        {
                            name: "外籍",
                            filed: "wj"
                        }
                    ]
                }, {
                    itemTitle: {
                        name: '按文化程度',
                        icon: 'icon-taizhang',
                        searchBtn: 'whcd'
                    },
                    itemLists: [{
                            name: "大专以上",
                            filed: "dzys"
                        },
                        {
                            name: "高中",
                            filed: "gz"
                        },
                        {
                            name: "初中",
                            filed: "cz"
                        },
                        {
                            name: "小学",
                            filed: "xx"
                        },
                        {
                            name: "文盲",
                            filed: "wm"
                        }
                    ]
                }],
                searchItem: {
                    total: [{
                            name: "总人数",
                            filed: "rszrs",
                            justfly: 'center'
                        },
                        {
                            name: "关押总量",
                            filed: "zyzrs",
                            justfly: 'center'
                        },
                        {
                            name: "拒收人数",
                            filed: "jszrs",
                            justfly: 'center'
                        },
                    ]
                },
                search: {
                    url: url.syrsYwdt,
                    parameter: {}
                },
            });

        },
        eventBind: function () {


        }
    };

    /**
     *运行入口
     */
    $(main.init);

});