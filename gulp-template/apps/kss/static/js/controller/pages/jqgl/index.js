/**
模块名称： 警情管理
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jqglAdd.html');
    var jlcl = require('services/form/_jqglJlcl.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jqfb');
    var url = require('modules/url');

    var jqglFormAdd = require('modules/form/jqglAdd');
    var jqglFormModify = require('modules/form/jqglModify');
    var jqglJlclFormModify = require('modules/form/jqglJlclFormModify');

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
                        name: '新增',
                        icon: 'icon-jiahao',
                        fun: function () {

                            jqglFormAdd.init(url.jqfbAdd, {}, function () {
                                grid.reload('table');
                            });

                        }
                    },
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jqglFormModify.init(url.jqfbUpdate, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    },
                    {
                        id: 'del',
                        name: '处理记录',
                        icon: 'icon-jiahao-',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jqglJlclFormModify.init(url.jqfbUpdate, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {}
                    },
                    // {
                    //     id: 'return',
                    //     name: '页面返回',
                    //     icon: 'icon-gengduo6',
                    //     fun: function () {
                    //         alert(3);
                    //     }
                    // }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                            name: 'fbr',
                            title: '发布人',
                            type: 'textbox'
                        }, {
                            name: 'startTime',
                            title: '发布时间',
                            type: 'datebox'
                        },
                        {
                            name: 'endTime',
                            title: '至',
                            type: 'datebox'
                        }
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.jqfbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jqnr', 'fbr', 'fbsj', 'fbdd', 'ly', 'clr', 'clsj', 'cljg', 'bz', 'jh', 'xm'],
                    hidden: ['jh', 'xm']
                })
            });
            hideshow.init('modules/clumn/jqfb', ['jqnr', 'fbr', 'fbsj', 'fbdd', 'ly', 'clr', 'clsj', 'cljg', 'bz', 'jh', 'xm'], ['jh', 'xm']);
            /**布局初始化**/
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