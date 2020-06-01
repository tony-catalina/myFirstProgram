/**
 * 业务动态 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
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
                    title: "重点人员--业务动态",
                    formItems: [{
                        itemTitle: { name: '重点人员', icon: 'icon-taizhang' },
                        itemLists: [
                            { name: "重点人员", filed: "zdry" },
                            { name: "解除呈批人员", filed: "jccpry" }
                        ]
                    }],
                    searchItem:{
                        total:[
                            {name:"总人数", filed: "", justfly:'left'}
                        ]
                    },
                    search:{
                        url: url.zdryYwdt,
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