/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
/**
 * 业务动态 页面入口
 */
define(function (require) {
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
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            ywdt.init('ywdt', {
                title: "重大安全风险人员分布",
                formItems: [{
                    itemTitle: {
                        name: '重大安全风险人员分布',
                        icon: 'icon-taizhang'
                    },
                    itemLists: [{
                            name: "一级重大安全风险",
                            filed: 'qjlsfm'
                        },
                        {
                            name: "二级重大安全风险",
                            filed: 'yqhsfm'
                        },
                        {
                            name: "三级重大安全风险",
                            filed: 'hscpfm'
                        }
                    ]
                }],
                
                search:{
                    url: url.fxpgYwdt,
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