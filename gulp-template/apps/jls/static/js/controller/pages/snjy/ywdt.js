/**
 模块名称: 业务动态
 开始时间: 2020-3-11
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
                title: "所内就医--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '所内就医',
                        icon: 'icon-taizhang',
                    },
                    itemLists: [{
                            name: "登记人数",
                            filed: 'djrs'
                        },
                        {
                            name: "已派药人数",
                            filed: 'ypyrs'
                        },
                        {
                            name: "派药医人数",
                            filed: 'pyyrs'
                        }
                    ]
                }],
                searchItem: {
                   
                },
                search:{
                    url: url.snjyCount,
                    parameter:{}
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