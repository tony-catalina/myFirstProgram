/**
模块名称： 文秘宣传
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_wmxc.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/wmxc');
    var url = require('modules/url');

    var wmxcFormAdd = require('modules/form/wmxcAdd');
    var wmxcFormModify = require('modules/form/wmxcModify');
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
                            var data = grid.getSelected('table')[0];
                            wmxcFormAdd.init(url.wmxcAdd, {}, function () { });


                        }
                    },
                    /*{ id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function() {
                        var html = add('form/_wmxc', {});
                        utils.showWin({
                            title:'文秘宣传',
                            area: ['90%', '85%'],
                            content:html,
                            maxmin:true,
                            success:function(){
                                $.parser.parse('#fm');
                            },
                            yes:function(){
                                alert('第一个按钮');
                            }
                        });
                    } },*/
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                wmxcFormModify.init(url.wmxcUpdate, data, function () {
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
                pageRender: {
                    primary: [{
                        name: 'fzr',
                        title: '负责人',
                        type: 'textbox'
                    }, {
                        name: 'kssj',
                        title: '时间',
                        type: 'datebox'
                    }, {
                        name: 'jssj',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wmxcList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xcnr', 'xcdx', 'xcsj', 'yxq', 'fzr', 'xcfw'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/wmxc', ['xcnr', 'xcdx', 'xcsj', 'yxq', 'fzr', 'xcfw'], []);
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