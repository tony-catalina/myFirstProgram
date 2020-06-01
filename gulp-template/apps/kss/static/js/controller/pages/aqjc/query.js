/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var hideshow=require('modules/showHideClumn');
    var clumn = require('modules/clumn/aqjc');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    {id:'excel',name:'查询结果导出到excel表',icon:'icon-daochu'}
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table');}}
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                    name: 'jcsj_start',
                    title: '检查时间',
                    type: 'datebox'
                }, {
                    name: 'jcsj_end',
                    title: '至',
                    type: 'datebox'
                }],
                more: [
                    [
                        { name: 'fzr', title: '负责人', type: 'textbox' },
                        { name: 'zsjcry', title: '住所检查人员', type: 'textbox' },
                    ]
                ]
                }
                ,
                query: function(param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.aqjcList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jcxs', 'fzr', 'sj', 'zsjcry', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
                    hidden: [, 'fw', 'nr']
                })
                
            });
            hideshow.init('modules/clumn/aqjc',
                ['jcxs', 'fzr', 'sj', 'zsjcry', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
                ['fw', 'nr']);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});