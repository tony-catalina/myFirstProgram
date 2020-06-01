/**
模块名称： 违规登记
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_lsWgdj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/lswg');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var combox = require('awd/easyui/combox');
    var lswgdjForm = require('modules/form/lswgdjAdd')
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
                        id: 'add',
                        name: '律师违规登记',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                lswgdjForm.init(url.lswgAdd, data, function () {
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
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'lsxm',
                        title: '律师姓名',
                        type: 'textbox'
                    }, {
                        name: 'zjh',
                        title: '证件号',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'dw', title: '律师单位', type: 'awdCombox', url: url.getDictionary + '?node=LSDW' },

                        ]
                    ]
                },
                query: function (param) {
                    
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.lswgdjQuery,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['zjh', 'lsxm', 'dwString', 'hjsj', 'jssj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/lswg', ['zjh', 'lsxm', 'dwString', 'hjsj', 'jssj'], []);
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