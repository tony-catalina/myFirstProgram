/**
 模块名称: 人员信息补录
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');

    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ryxxblJkbl.html');
    var formtpljkbl = require('services/form/_ryxxblJcwh.html');
    var hideshow = require('modules/showHideClumn');
    var form1 = require('modules/form/_ryxxblJkbl');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd1 = require('modules/form/_ryxxblJkbl');
    var hdpzFormAdd2 = require('modules/form/_ryxxblJcwh');
    var jbxxgrid = require('modules/jbxxgrid');
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
                        id: 'add', name: '健康补录', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd1.init(url.saveByryxxbl, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                    {
                        id: 'add2', name: '检查维护', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd2.init(url.ryxxblUpdate, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '拘室号',
                        type: 'awdCombotree', url: url.jsComboxTree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'dah', title: '档案编号', type: 'textbox' },
                            { name: 'rsrqStart', title: '入所日期', type: 'datebox' },
                            { name: 'rsrqEnd', title: '至', type: 'datebox' }
                        ]
                    ],
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table', false, 200, {
                'state': 'R8',
                'processDefinitionKey': '',
                'taskDefinitionKey': ''
            }, function (rybh) {
            });
            // grid.init('table', {
            //     url: url.jbxxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['xm', 'jsh', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'],
            //         hidden: []
            //     })
            // });
            hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'], []);

            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /*  $('#add').unbind('click').bind('click', function() {
                 alert(111);
             }); */
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});