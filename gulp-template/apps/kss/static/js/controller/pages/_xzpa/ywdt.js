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
                    title: "协助破案--业务动态",
                    formItems: [{
                        itemTitle: { name: '申请原因', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "检举", filed: 'jj' },
                            { name: "坦白", filed: 'tb' },
                            { name: "已查实", filed: 'ycs' },
                            { name: "破获刑事案件", filed: 'phxsaj' },
                            { name: "查获人员", filed: 'chry' },
                            { name: "抓逃人员", filed: 'ztry' },
                            { name: "追赃金额", filed: 'je' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"获取线索(件)", filed:'zs', justfly:'left'}
                        ]
                    },
                    search:{
                        url: url.cxzpaYwdt,
                        parameter:{"dw":'北京市第一看守所'}
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