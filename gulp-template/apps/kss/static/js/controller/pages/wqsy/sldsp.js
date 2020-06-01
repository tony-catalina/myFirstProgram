/**
 * 武器使用 所领导审批
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
    var clumn = require('modules/clumn/wqsyProcess');
    var url = require('modules/url');
    var wqsysldspForm = require('modules/form/wqsysldsp')
    var common = require('common');
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
                        name: '审批',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var user = common.info.user.loginname;
                                var addData = {
                                    ldpssj: currentTime,
                                    ldxm: user
                                };
                                var dataall = {};
                                Object.assign(dataall, addData, data);
                                wqsysldspForm.init(url.wqsyldspAdd, dataall, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要审批的记录!');
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
                    }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_wqsy_ldsp',
                        'processDefinitionKey': 'kss_wqsy'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wqsyProcess,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jh', 'xm', 'wqzl', 'syly', 'syts', 'sykssj', 'syjssj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/wqsyProcess', ['jh', 'xm', 'wqzl', 'syly', 'syts', 'sykssj', 'syjssj'], []);
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