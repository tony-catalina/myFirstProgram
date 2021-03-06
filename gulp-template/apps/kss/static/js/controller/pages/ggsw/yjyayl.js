/**
模块名称： 公共事务-应急预案演练
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/yjyayl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var ggswyyyaylForm = require('modules/form/ggswyyyayl');
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

                buttons: [
                    {
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = { ylsj: currentTime, id: '' };
                            ggswyyyaylForm.init(url.ggswyjyaylAdd, addData, function () {
                                grid.reload('table')
                            });
                        }
                    },
                    {
                        id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var addData1 = { id: data.id };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                ggswyyyaylForm.init(url.ggswyjyaylUpdate, addData, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
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
                        name: 'ylsj_start',
                        title: '演练时间',
                        type: 'datebox'
                    }, {
                        name: 'ylsj_end',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.yjyaylList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['ylsj', 'zzzhz', 'hyjlr', 'ksscjry', 'wjzdcjry', 'qtry'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/yjyayl', ['ylsj', 'zzzhz', 'hyjlr', 'ksscjry', 'wjzdcjry', 'qtry'], []);
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