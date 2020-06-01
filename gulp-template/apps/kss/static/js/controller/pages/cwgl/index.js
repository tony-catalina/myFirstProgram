/**
*模块名称： 床位管理
*开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var hideshow = require('modules/showHideClumn');
    var cwglFormAdd = require('modules/form/cwglTj');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var jqtree=require('modules/jqtree');//监区树引用
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
                        name: '添加',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                cwglFormAdd.init(url.addcwgl, data, function () {
                                });
                            } else {
                                utils.alert('请选择要出所的人员!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                            { name: 'gyqx_end', title: '至', type: 'datebox' },
                            { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                        ],
                        [
                            { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                            { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                            { name: 'rsrq_end', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree', 'table');
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