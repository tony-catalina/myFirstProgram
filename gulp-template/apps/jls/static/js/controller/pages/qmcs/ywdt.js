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
                title: "期满出所--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '期满出所人数',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                        name: "出所总人数",
                        filed: 'xmsf'
                    }, ]
                }, {
                    itemTitle: {
                        name: '拟出所人数',
                        icon: 'icon-taizhang',
                        searchBtn: true
                    },
                    itemLists: [{
                            name: "明天",
                            filed: 'mtcs'
                        },
                        {
                            name: "后天",
                            filed: 'htcs'
                        }
                    ]
                }, ],
                searchItem: {
                    // total: [{
                    //         name: "总人数",
                    //         filed: 0,
                    //         justfly: 'center'
                    //     },
                    //     {
                    //         name: "关押总量",
                    //         data: 0,
                    //         justfly: 'center'
                    //     },
                    //     {
                    //         name: "拒收人数",
                    //         data: 0,
                    //         justfly: 'center'
                    //     },
                    // ]
                },
                search:{
                    url: url.qmcsYwdt,
                    parameter:{}
                }
            })
            //布局初始化
            var ywdtHtml = ywdtPage('com/ywdt', options);
            document.querySelector('.ywdt').innerHTML = ywdtHtml;
            $.parser.parse('.ywdt');

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