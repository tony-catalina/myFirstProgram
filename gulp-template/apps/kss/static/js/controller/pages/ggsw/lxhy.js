/**
模块名称： 公共事务-联席会议
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/lxhy');
    var url = require('modules/url');
    var ggswlxhyForm = require('modules/form/ggswlxhy')
    //单栏
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
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {
                                lxhysj: currentTime,
                                id: ''
                            };
                            ggswlxhyForm.init(url.lxhyAdd, addData, function () {
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
                                var addData1 = {
                                    id: data.id
                                };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                ggswlxhyForm.init(url.lxhyUpdate, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                layer.alert('请选择要修改的记录!');
                            }
                        }
                    },
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
                    }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'lxhysj_start',
                        title: '联席会议时间',
                        type: 'datebox'
                    }, {
                        name: 'lxhysj_end',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.lxhyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['lxhysj', 'hydd', 'hyzcr', 'hyjlr', 'cjhyry'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/lxhy', ['lxhysj', 'hydd', 'hyzcr', 'hyjlr', 'cjhyry'], []);
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