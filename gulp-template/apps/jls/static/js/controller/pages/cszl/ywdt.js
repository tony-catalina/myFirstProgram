/**
 模块名称: 出所治疗
 开始时间: 2020-3-7
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdt = require('modules/ywdt')
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
                title: "出所治疗--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '出所治疗',
                        icon: 'icon-taizhang',
                    },
                    itemLists: [{
                            name: "所外就医登记",
                            filed: 'swjydj'
                        },
                        {
                            name: "所外就医未归",
                            filed: 'swjywg'
                        },
                        {
                            name: "所外就医释放",
                            filed: 'swjysf'
                        }
                    ]
                }],
                searchItem: {
                   
                },
                search:{
                    url: url.swjyCount,
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