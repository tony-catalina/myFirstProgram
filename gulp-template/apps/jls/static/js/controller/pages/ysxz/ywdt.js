/**
 模块名称: 业务动态
 开始时间: 2020-3-12
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var ywdt = require('modules/ywdt')
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var clumn = require('modules/clumn/jbxx');

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
                title: "医生巡诊--业务动态",
                formItems: [{
                    itemTitle: {
                        name: '医生巡视',
                        icon: 'icon-taizhang',
                    },
                    itemLists: [{
                            name: "所外就医人数",
                            filed: 'swjyrs'
                        },
                        {
                            name: "现场发药人数",
                            filed: 'xcfyrs'
                        },
                        {
                            name: "所内就医人数",
                            filed: 'snjyrs'
                        }
                    ]
                }],
                searchItem: {
                    total: [{
                            name: "登记总人数",
                            filed: 'rszrs',
                            justfly: 'center'
                        }
                    ]
                },
                search:{
                    url: url.ysxzCount,
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