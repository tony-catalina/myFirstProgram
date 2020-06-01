/**
模块名称： 落实工作
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/szjdjl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');

    var ldlsForm = require('modules/form/ldjf_lsgz');
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
                        name: '领导落实',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                ldlsForm.init(url.lfjfupdate, data, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('请选择要落实的工作!');
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
                        name: 'jfldxm',
                        title: '接待领导姓名',
                        type: 'textbox'
                    }, {
                        name: 'lfrxm',
                        title: '来访人姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'jdmj', title: '接待民警', type: 'textbox' },
                            { name: 'ldjfrq_start', title: '领导接访日期', type: 'datebox' },
                            { name: 'ldjfrq_end', title: '至', type: 'datebox' },
                        ]
                    ]
                },
                query: function (param) {
                    param.dfyjnull = 0;
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.ldjfList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['sldxm', 'jdsj', 'zlfxm', 'lxfs', 'lsdz', 'fywt', 'lfsj', 'jdmj', 'lfrs', 'lfxb', 'lfnl', 'lfgzdw', 'lxdz', 'dfyj','lssj'],
                    hidden: [, 'jdmj', 'lfrs', 'lfxb', 'lfnl', 'lfgzdw', 'lxdz', 'dfyj','lfsj']
                })
            });
            hideshow.init('modules/clumn/szjdjl', ['sldxm', 'jdsj', 'zlfxm', 'lxfs', 'lsdz', 'fywt', 'lfsj', 'jdmj', 'lfrs', 'lfxb', 'lfnl', 'lfgzdw', 'lxdz', 'dfyj'],
                ['jdmj', 'lfrs', 'lfxb', 'lfnl', 'lfgzdw', 'lxdz', 'dfyj']);
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