/**
模块名称： 文书补打
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var tree = require('awd/easyui/tree');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ypcl');
    var url = require('modules/url');
    var addForm = require('modules/form/yqplyq')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '导出excel', icon: 'icon-jiahao', fun: function () {}
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function () { alert(3); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name:'ypbh',
                        title: '药品名称',
                        type: 'awdCombox',
                        url: url.getDictionary + '?node=YPMC'
                    }, {
                        name:'pch',
                        title: '批次号',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.ypclList,
                fit: false,
                width: '100%',
                singleSelect: false,
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsbhString', 'sl', 'stateString', 'clr', 'clsj','ypbhString','pch','creator'],
                    hidden: [   'clbj','js', 'bz',  'createtime',  'updator', 'updatetime'],
                })
            });

            hideshow.init('modules/clumn/ypcl', ['jsbhString', 'sl', 'stateString', 'clr', 'clsj','ypbhString','pch','creator'],
                ['jsbhString', 'ypbhString', 'pch', 'clbj', 'sl', 'clsj', 'js', 'bz', 'stateString', 'createtime', 'creator', 'updator', 'updatetime']);
            tree.initTree('jqtree', {
                url: url.jqtree,
                select: function () {
                    grid.query('table', { jsh: util.getTreeSelected($(this), '监区树').id });
                },
                BeforeExpand: function(node) {
                    $("#jqtree").tree('options').url = url.jqtree + "?id=" + node.id;
                }
            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});