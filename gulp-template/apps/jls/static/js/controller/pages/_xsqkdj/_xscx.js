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

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xsjl');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');

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
                    /*{ id: 'add', name: '信息查询', icon: 'icon-jiahao', fun: function() { alert(1); } },*/
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {  hideshow.show('table'); } },
                    {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name : 'yfh',
                        title: '衣服号',
                        type: 'textbox'
                    }, {
                        name : 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name : 'zbr', title: '值班人', type: 'textbox' },
                            { name : 'clr',title: '处理人', type: 'textbox' },
                            { name : 'clqk',title: '处理情况',type: 'awdCombox' ,url:url.getDictionary +'?node=WGCLQK'},
                        ],
                        [
                            { name : 'clsjStart',title: '处理日期', type: 'datebox' },
                            { name : 'clsjEnd',title: '至', type: 'datebox' }
                        ]
                    ],
                },
                query:function(param){
                    param=$.extend({}, {
                        'state':'R2',
                        'processDefinitionKey':'jls_xsqkdj',
                        'taskDefinitionKey':'jls_xsqkdj_xscx'
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
                    clumns: ['jsh', 'xm', 'yfh', 'wgrs','wgdd', 'clr','cljg'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/_xsjl',['jsh', 'xm', 'yfh', 'wgrs','wgdd', 'clr','cljg'],[]);

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