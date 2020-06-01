/**
 模块名称： 处理审批
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
    var clumn = require('modules/clumn/_xjgl');
    var url = require('modules/url');
    var addForm = require('modules/form/xjglclsp')
    var hideshow = require('modules/showHideClumn');
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
                        id: 'add',
                        name: '寄出审核意见',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd");
                                var addData1 = { ldqmrq: currentTime, ldzs: '转交被监督人', ldqm: common.info.user.loginname };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.xjglldspAdd, addData, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('必须选中一人办理!');
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
                    
                },
                query: function (param) {
                    param = $.extend({}, {
                        'xjlx': '2',
                        'ywjd': '1'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.xjglList,
                fit: false,
                width: '100%',
                queryParams:{'xjlx': '2','ywjd': '1'},
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: clumn({
                    check: false,
                    clumns: ['jbxx_jsh', 'jbxx_xm', 'djr', 'djrq', 'jsr', 'xjrq', 'xjdz', 'xjnr'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/_xjgl', ['jbxx_jsh', 'jbxx_xm', 'djr', 'djrq', 'jsr', 'xjrq', 'xjdz', 'xjnr'], []);

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