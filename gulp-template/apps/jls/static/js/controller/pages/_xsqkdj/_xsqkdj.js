/**
 模块名称: 信息查询
 开始时间: 2020-3-12
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var formtpl=require('services/form/_xsqkdj.html');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xsjl');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form=require('modules/form/_xsqkdj');
    var common=require('common');
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
            toolbar.init({
                buttons: [
                    { id: 'add', name: '办理登记', icon: 'icon-jiahao', fun: function() {
                        var data = grid.getSelected('table')[0];
                        //if (data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {tbrq: currentTime,tbr: common.info.user.loginname};
                            form.init(url.xsjlSave,addData, data, function () {
                                grid.reload('table');
                            });
                        // } else {
                        //     layer.alert('请选择要办理的记录!');
                        // }
                        } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name : 'clsjStart',
                        title: '处理时间',
                        type: 'datebox'
                    }, {
                        name : 'clsjEnd',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            { name : 'clqk', title: '处理情况', type: 'awdCombox' ,url:url.getDictionary +'?node=WGCLQK' },
                            { name : 'clr',title: '处理人', type: 'textbox' },
                            { name : 'xm',title: '姓名', type: 'textbox' },
                        ],
                        [
                            { name : 'yfh',title: '衣服号', type: 'textbox' },
                            { name : 'zbr',title: '值班人', type: 'textbox' },
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                        'state':'R2',
                        'processDefinitionKey':'',
                        'taskDefinitionKey':''
                    }, param);
                    grid.query('table',param);
                }
            });
            grid.init('table', {
                url: url.xsjlList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsh', 'xm', 'fssj', 'yfh', 'wgrs','wgdd', 'clsj','clqk','clr'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/_xsjl',['jsh', 'xm', 'fssj', 'yfh', 'wgrs','wgdd', 'clsj','clqk','clr'],[]);

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