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
                    title: "外来人员登记--业务动态",
                    formItems: [{
	                        itemTitle: { name: '来所信息', icon: 'icon-taizhang'},
	                        itemLists: [
	                            { name: "来所人数", filed: 'sxrs' },
	                            { name: "来所车辆", filed: 'sxcls' },
	                        ]
                    	},
                    	{
                    		itemTitle: { name: '', icon: ''},
                    		itemLists: [
                    			{ name: "来所事由", filed: '10' },
                    			{ name: "提讯", filed: 'tx' },
                    			{ name: "提解", filed: 'tj' },
                    			{ name: "亲属会见", filed: 'qshj' },
                    			{ name: "律师会见", filed: 'lshj' },
                    			{ name: "上访", filed: 'sf' },
                    			{ name: "参观", filed: 'cg' },
                    			{ name: "视察", filed: 'sc' },
                    			{ name: "检查", filed: 'jc' },
                    			{ name: "临时工作", filed: 'lsgz' },
                    			{ name: "其他", filed: 'qt' }
                    			]
                    	}
                    ],
                    searchItem:{
                    },
                    search:{
                        url: url.wlrydjCount,
                        parameter:{"state":'R2'}
                    }
                })
            /**布局初始化**/
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