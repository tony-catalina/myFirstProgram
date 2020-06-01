/**
模块名称： 离开登记
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_wlrylk.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/wlry');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var lkdjForm = require('modules/form/wllkdjAdd');
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
                        id: 'add', name: '离开登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                lkdjForm.init(url.lkdjUpdata, data, function () {
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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name:'lssy',
                        title: '来所事由',
                        type: 'awdCombox', url: url.getDictionary + '?node=LSSY'
                    }, {
                        name:'damj',
                        title: '带入民警',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            {name:'sxrs', title: '随行人数', type: 'textbox' },
                            {name:'drsj_start', title: '来所时间', type: 'datebox' },
                            {name:'drsj_end', title: '至', type: 'datebox' },

                        ]
                    ]
                },
                query: function (param) {
                    param = $.extend({}, {}, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.wlrylist + '?crdjbz=1',
                method: 'post',
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['drsj', 'lssy', 'lfrs', 'sxcls', 'drmj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/wlry', ['drsj', 'lssy', 'lfrs', 'sxcls', 'drmj'], []);
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