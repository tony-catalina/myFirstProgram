/**
 模块名称: 业务动态
 开始时间: 2020-3-11
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdt.html');
    var ywdt = require('modules/ywdt');
    var url = require('modules/url');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            ywdt.init('ywdt', {
                    title: "领导接访--业务动态",
                    formItems: [{
	                        itemTitle: { name: '接访统计', icon: ''},
	                        itemLists: [
	                            { name: "来访次数", filed: 'lfcs' },
	                            { name: "答复或已处理", filed: 'ycl' },
	                        ]
                    	}
                    ],
                    searchItem:{
                    },
                    search:{
                        url: url.szjdjlCount,
                        parameter:{"state":'R2'}
                    }
                })
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});