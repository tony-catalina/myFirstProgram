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
    var ypjhjl = require('services/form/_ypjhjl.html');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ypjhjl');
    var url = require('modules/url');
    var addForm = require('modules/form/ypjhjl')
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
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            addForm.init(url.addYpjhjlAndYpkc,{}, function () {});
                        }
                    },
                    {
                        id: 'print', name: '导出excel', icon: 'icon-jiahao', fun: function () {
                            alert(1)
                        }
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
                        name:'jhsjStartTime',
                        title: '进货时间',
                        type: 'datebox'
                    }, {
                        name:'jhsjEndTime',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.ypjhjlList,
                fit: false,
                width: '100%',
                singleSelect: false,
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['ypbh', 'ypbhString', 'jhsl', 'jg', 'scrq', 'bzq','dqsj','jhsj',],
                    hidden: ['jsbh','pzwh','pch','jhr','state','createtime','creator','updator','updatetime','jhbh','zje'],
                })
            });

            hideshow.init('modules/clumn/ypjhjl', ['ypbh', 'ypbhString',  'jhsl', 'jg', 'scrq', 'bzq','dqsj','jhsj'],
                ['jsbh','pzwh','pch','jhr','state','createtime','creator','updator','updatetime','jhbh','zje']);
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