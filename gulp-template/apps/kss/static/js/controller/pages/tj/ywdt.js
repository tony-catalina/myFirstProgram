/**
模块名称： 业务动态
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var url = require('modules/url');
    var ywdt = require('modules/ywdt');
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
                title: '提解--业务动态',
                formItems: [{
                    itemTitle: { name: '提审原因', icon: 'icon-taizhang'},
                    itemLists: [
                        { name: '开庭审理', filed: 'ktsl'},
                        { name: '宣布判决', filed: 'xbpj'},
                        { name: '辨认现场', filed: 'brxc'},
                        { name: '取证取脏', filed: 'qzqz'},
                        { name: '司法鉴定', filed: 'sfjd' },
                        { name: '法律文书送达', filed: 'flwssd' },
                        { name: '聆讯', filed: 'lx'},
                        { name: '其他', filed: 'qt'}
                    ]
                }],
                searchItem:{
                    total:[
                        {name:'总人数', filed: 'zrs', justfly:'left'}
                    ]
                },
                search:{
                    url:url.tjYwdt,
                    parameter:{}
                }
            });
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
