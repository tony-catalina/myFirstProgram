define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tree = require('awd/easyui/tree');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var util= require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/qjgl');
    var url = require('modules/url');
    var formtpl = require('services/form/_qjglTj.html');
    var hideshow = require('modules/showHideClumn');
    var hdpzFormAdd = require('modules/form/qjgl');
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
                buttons: [{
                    id: 'add',
                    name: '添加',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var jqhstring=util.getTreeSelectionNos($('#jqtree'));
                        if(jqhstring=='') {
                            utils.alert('请先选择监室!');
                            return false;
                        }
                        hdpzFormAdd.init(url.qjglAdd, {jsh:jqhstring}, function () {
                            grid.reload('table');
                        });

                    }
                }]
            });
            linkbar.init({
                links: [{
                    id: 'list',
                    name: '数据列选择',
                    icon: 'icon-gengduo7',
                    fun: function () {
                        hideshow.show('table');
                    }
                }]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'qjsjBengin',
                        title: '检查时间',
                        type: 'datebox'
                    }, {
                        name: 'qjsjEnd',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [{
                            name: 'jsh',
                            title: '监室号',
                            type: 'awdCombotree',
                            url: url.getJqCombotree
                        }, ]
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.qjglList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jsh', 'qjsj', 'qjmj', 'jjwj', 'qjqk', 'bz'],
                    hidden: ['qjqk', 'bz']
                })
            });
            hideshow.init('modules/clumn/qjgl', ['jsh', 'qjsj', 'qjmj', 'jjwj', 'qjqk', 'bz'], ['qjqk', 'bz']);
            /**布局初始化**/
            tree.initTree('jqtree', {
                checkbox: true,
                url: url.jqtree,
                select: function () {
                    grid.query('table', {
                        jsh: util.getTreeSelected($(this), '监区树').id
                    });
                },
                BeforeExpand: function(node) {
                    $("#jqtree").tree('options').url = url.jqtree + "?id=" + node.id;
                }
            });
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});