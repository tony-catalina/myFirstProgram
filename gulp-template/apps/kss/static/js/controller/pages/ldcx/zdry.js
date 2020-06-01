/**
模块名称： 领导查询-重点人员
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var hideshow = require('modules/showHideClumn');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/zdry');
    var url = require('modules/url');

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
                        name: 'jbr',
                        title: '经办人',
                        type: 'awdCombox',
                        url: url.getUsers
                    }, {
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree

                    }],
                    more: [
                        [{
                                name: 'blrq_start',
                                title: '办理时间',
                                type: 'datebox'
                            },
                            {
                                name: 'blrq_end',
                                title: '至',
                                type: 'datebox'
                            },
                            {
                                name: 'bllx',
                                title: '办理类型',
                                type: 'awdCombox',
                                url: url.getDictionary + '?node=ZDRYBLLX'
                            },
                        ]
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.zdzyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'jbxx_xm', 'jsh', 'lyString', 'kzcs', 'blrqString', 'zdzyj', 'ldyj', 'bllx'],
                    hidden: ['zdzyj', 'ldyj', 'bllx']
                })
            });
            hideshow.init('modules/clumn/zdry', ['rybh', 'jbxx_xm', 'jsh', 'ly', 'kzcs', 'blrq', 'zdzyj', 'ldyj', 'bllx'], ['zdzyj', 'ldyj', 'bllx']);
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