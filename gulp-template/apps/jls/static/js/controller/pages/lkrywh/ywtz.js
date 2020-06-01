/**
 模块名称: 业务台账
 开始时间: 2020-3-11
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
    var clumn = require('modules/clumn/lkrywh');
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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
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
                    name : 'zjhm',
                    title: '被布控人证件号',
                    type: 'textbox'
                }, {
                    name : 'bbkrxm',
                    title: '被布控人姓名',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name : 'bdsjStart',title: '比对时间', type: 'datebox' },
                        { name : 'bdsjEnd',title: '至', type: 'datebox' },
                        { name : 'sdm',title: '所代码', type: 'textbox' }
                    ],
                ],
               },
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R2',
                                 }, param);
                 grid.query('table',param);
              }
            });
            grid.init('table', {
                url: url.lkrywhList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'zjhm', 'ajlb', 'xzdxz', 'sqrxm', 'lxdh', 'sqrdw','id' ,'bbkray','hjdxz','csrq','bdsj','sdm'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/lkrywh',['xm', 'zjhm', 'ajlb', 'xzdxz', 'sqrxm', 'lxdh', 'sqrdw','id' ,'bbkray','hjdxz','csrq','bdsj','sdm'],[]);

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