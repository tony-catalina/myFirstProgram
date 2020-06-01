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
                    title: "动态分析会议--业务动态",
                    formItems: [{
                        itemTitle: { name: '动态分析', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "动态分析会议次数", filed: 'total' }
                        ]
                    }],
                    searchItem:{
                       
                    },
                    search:{
                        url: url.dtfxlist,
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