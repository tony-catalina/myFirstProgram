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
                    title: "严管人员--业务动态",
                    formItems: [{
                        itemTitle: { name: '严管人员', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "按性别", filed: '图形' },
                            { name: "男", filed: 'xman' },
                            { name: "女", filed: 'xwoman' }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"现严管对象人数", filed:'xry', justfly:'center'},
                            {name:"历史严管对象人数", filed:'xry', justfly:'center'},
                            {name:"严管对象总人数", filed:'lsry', justfly:'center'}
                        ]
                    },
                    search:{
                        url: url.ygryCount,
                        parameter:{"state":'R2'}
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