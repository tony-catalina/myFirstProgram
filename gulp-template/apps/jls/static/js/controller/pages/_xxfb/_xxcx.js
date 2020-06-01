/**
 模块名称: 信息发布
 开始时间: 2020-3-7
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
    var clumn = require('modules/clumn/_xxfb');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    
                primary: [{
                    name : 'fbjb',
                    title: '发布级别',
                    type: 'awdCombox' ,url: url.getDictionary +'?node=FBDJ'
                }, {
                    name : 'fbr',
                    title: '发布人',
                    type: 'textbox'
                }],
                more: [
                    [
                        { name : 'fbgw',title: '发布岗位',  type: 'awdCombox' ,url: url.getDictionary +'?node=JLSROLE' }
                    ]
                ],
                },
                query:function(param){
                    param=$.extend({}, {
                                     'state':'R2',
                                 }, param);
                 grid.query('table',param);
              }
            });
            // jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息的
               
            //  });
            grid.init('table', {
                url: url.xxfbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['fbr', 'fbjb', 'fbgw', 'fbkssj', 'fbjssj', 'fbnr'],
                    hidden: []
                })
            });

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