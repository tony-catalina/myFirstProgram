/**
模块名称： 巡检记录
开始时间： 2020-2-25
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
    var clumn = require('modules/clumn/_xjjl');
    var url = require('modules/url');
    var xjjlForm = require('modules/form/xjjl');
    var common=require('common');
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
                            var user =common.info.user.loginname;
                            var addData = { xjrq: currentTime, xjr: user, dbrzsfzc: '正常', fsrzsfzc: '正常', zsjcsbsfzc: '正常', id: '' };
                            xjjlForm.init(url.xjbAdd, addData, function () {
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
                                xjjlForm.init(url.xjbUpdate, addData, function () {
                                    grid.reload("table");
                                });
                            } else {
                                layer.alert('请选择一条记录进行修改!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function () { alert(3); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'xjrq_start',
                        title: '巡检时间',
                        type: 'datebox'
                    }, {
                        name: 'xjrq_end',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.xjbList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xjrq', 'xjr', 'dbrzsfzc', 'fsrzsfzc', 'zsjcsbsfzc'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/_xjjl', ['xjrq', 'xjr', 'dbrzsfzc', 'fsrzsfzc', 'zsjcsbsfzc'], []);
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