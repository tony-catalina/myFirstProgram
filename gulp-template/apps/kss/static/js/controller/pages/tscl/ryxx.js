/**
模块名称： 投诉处理-人员信息
开始时间： 2020-2-29
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/tscl');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },

        layout: function() {
            toolbar.init({
                buttons:[

                    {id:'add',name:'处理投诉',icon:'icon-jiahao',fun:function(){

                        }},
                ]
            });
            /**布局初始化**/
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {  } }
                ]
            });
            searchform.init('search', {

                primary: [{
                        name:'tssj_start',
                        title: '投诉时间',
                        type: 'datebox'
                }, {
                        name:'tssj_end',
                        title: '至',
                        type: 'datebox'
                }],

                query:function(param){
                    grid.query('table',param);
                }
            });
            grid.init('table', {
                url: url.tsclTableList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'xm','tsrxm', 'btsdx', 'tsdxString', 'tslxString', 'slr', 'tssj','slsj', 'spyj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/tscl',['rybh', 'xm','tsrxm', 'btsdx', 'tsdxString', 'tslxString', 'slr', 'tssj','slsj', 'spyj'],[]);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function() {
                alert(111);
            });
            /**事件绑定**/
        }
    };


    /**
     *运行入口
     */
    $(main.init);

});