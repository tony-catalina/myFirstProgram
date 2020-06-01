/**
模块名称： 撤销登记
开始时间： 2020-2-25
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
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var cxdjForm = require('modules/form/emglCxdj');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                    id: 'edit',
                    name: '撤销登记',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            cxdjForm.init(url.emdjCXAdd, data, function () {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert('请选择要修改的记录!');
                        }
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
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1'
                    }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        //01 狱侦耳目 02 安全耳目
                        'emlx_in': "01,02",
                        'emsz': 'false',
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {
                'emlx': ["01", "02"],
                'emsz': 'false'
            }, function (rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree', 'table');
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