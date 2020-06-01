/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function(require) {
    //公共控件、组件、工具导入
    var $=require('jquery');
    require('modules/commFun');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/aqjc');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var aqjcFormAdd = require('modules/form/aqjcAdd');
    var aqjcFormModify = require('modules/form/aqjcModify');
    var common=require('common');
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {sj:currentTime,fzr:common.info.user.loginname};
                            aqjcFormAdd.init(url.aqjcAdd, addData, function() {
                            });
                        }
                    },
                    {
                        id: 'edit',
                        name: '修改',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                aqjcFormModify.init(url.aqjcUpdate, data, function() {
                             });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {} },
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                    name: 'jcsj_start',
                    title: '检查时间',
                    type: 'datebox'
                }, {
                    name: 'jcsj_end',
                    title: '至',
                    type: 'datebox'
                }],
                more: [
                    [
                        { name: 'fzr', title: '负责人', type: 'textbox' },
                        { name: 'zsjcry', title: '住所检查人员', type: 'textbox' },
                    ]
                ]
                }
                ,
                query: function(param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.aqjcList,
                fit: false,
                width: '100%',
                striped: true,
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jcxs', 'fzr', 'sj', 'zsjcry', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
                    hidden: ['fw', 'nr']
                })
            });
            hideshow.init('modules/clumn/aqjc',
                ['jcxs', 'fzr', 'sj', 'zsjcry', 'ksscjrs', 'wjcjrs', 'jskcjrs', 'fw', 'nr'],
                ['fw', 'nr']);
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});