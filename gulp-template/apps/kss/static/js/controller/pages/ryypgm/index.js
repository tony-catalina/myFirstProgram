/**
模块名称： 人员药品购买
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_ryypgm.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ypjhjl');
    var url = require('modules/url');

    var ryypgmXzForm = require('modules/form/ryypgmXz');

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
                           
                            var currentTime = new Date().Format("yyyy-MM-dd");
                            var postData = Object.assign({},{jhsj:currentTime});
                                ryypgmXzForm.init(url.addYpjhjlAndYpkc, postData, function () {
                                    grid.reload('table');
                                });
                           

                        }
                    },
                    { id: 'excel', name: '导出Excel', icon: 'icon-jiahao' },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jhsjStartTime',
                        title: '进货时间',
                        type: 'datebox'
                    }, {
                        name: 'jhsjEndTime',
                        title: '至',
                        type: 'datebox'
                    },{ name: 'ypbh', title: '药品名称', type: 'awdCombox', url: url.getDictionary + '?node=YPMC' }]
                    
                } ,
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.ypjhjlList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['ypbhString', 'jhsl', 'pzwh', 'pch', 'jg', 'jhsj', 'dqsj'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/ypjhjl', ['ypbhString', 'jhsl', 'pzwh', 'pch', 'jg', 'jhsj', 'dqsj'], []);
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