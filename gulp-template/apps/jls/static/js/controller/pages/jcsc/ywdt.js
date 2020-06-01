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
                    title: "视察情况--业务动态",
                    formItems: [{
	                        itemTitle: { name: '视察统计', icon: ''},
	                        itemLists: [
	                            { name: "视察次数", filed: 'sccs' },
	                            { name: "提出意见和建议", filed: 'tcyjhjy' },
	                            { name: "情况已落实", filed: 'qkyls' },
	                        ]
                    	}
                    ],
                    searchItem:{
                    },
                    search:{
                        url: url.scqkCount,
                        parameter:{}
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