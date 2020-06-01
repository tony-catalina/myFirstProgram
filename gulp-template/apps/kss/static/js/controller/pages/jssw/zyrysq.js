/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jsswZyrysq.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumns = require('modules/clumn/jssw');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var zyrysqForm = require('modules/form/jsswZyrysq');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'edit',
                        name: '添加',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                zyrysqForm.init(url.saveWp,data, function () {
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                        'zszt': '',
                        'cljg': '',

                    }, param)
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                });
            });

            grid.init('subtable',{
                url: url.QueryJsswByYwzt,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumns({
                    check: false,
                    clumns: ['xm', 'ybjjrgx', 'sqwp', 'sqsj', 'spyj', 'spnr', 'lqbz', 'lqsj'],
                    hidden: []
                })
            });
        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});