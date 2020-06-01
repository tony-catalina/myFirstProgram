/**
 模块名称: 安全检查
 开始时间: 2020-3-7
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
                    title: "安全检查--业务动态",
                    formItems: [{
                        itemTitle: { name: '安全4检查动态', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "检查次数", filed: 'jccs' },
                            { name: "处理情况", filed: 'clqk' }
                        ]
                    }],
                    searchItem:{
                       
                    },
                    search:{
                        url: url.aqjcCount,
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