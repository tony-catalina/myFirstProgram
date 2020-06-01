/**
 模块名称： 核对凭证
 开始时间： 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var utils = require('awd/layui/utils');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var subclumn = require('modules/clumn/hdpz');
    var hideshow = require('modules/showHideClumn');
    var hdpzForm = require('modules/form/tj_hdpz');
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
                buttons: [
                    {
                        id: 'add',
                        name: '核对凭证',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {lfsj: currentTime};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                hdpzForm.init(url.tjHdpz, addData, function () {
                                });
                            } else {
                                utils.alert('请选择要办理的人员记录!');
                            }
                        }
                    }

                ]
            });
            linkbar.init({
                links: [{
                        id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table');}
                    },
                    {
                        id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {}
                    }
                ]
            });


            searchform.init('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {
                'taskDefinitionKey': 'kss_tj_hdpz',
                'processDefinitionKey': 'kss_tj'
            }, function (rybh) {
            }, [{
                    id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                        layer.open({
                            title: '业务信息',
                            area: ['90%', '600px'],
                            content: '<table id="subtable"></table>',
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.jbxxForTj,
                                    fit: false,
                                    width: '100%',
                                    height: '450px',
                                    queryParams: {rybh: data[0].rybh},
                                    firstLoad: true,
                                    columns: subclumn({
                                        check: false,
                                        clumns: ['tjdw', 'tjry', 'tjkksjString', 'tjjssjString'],
                                        hidden: []
                                    })
                                });
                            }
                        });
                    }
                }
            ]);

            jqtree.init('jqtree', 'table');

            /**布局初始化**/
        },
        eventBind: function () {
            // /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});