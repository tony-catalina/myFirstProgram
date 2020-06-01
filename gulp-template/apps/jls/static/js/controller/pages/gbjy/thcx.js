/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/thjy');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
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
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.initLc('search', {
                // primary: [{
                //     name: 'jbxx_xm',
                //     title: '姓名',
                //     type: 'textbox'
                // }, {
                //     name: 'state',
                //     title: '状态',
                //     type: 'awdCombox' ,url:url.getDictionary +'?node=YWSTATE'
                // }],
                // more: [
                //     [
                //         { name: 'jbxx_rsrqStart', title: '入所时间', type: 'datebox' },
                //         { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' }
                //     ], [
                //         { name: 'jbxx_cssjStart', title: '出所日期', type: 'datebox' },
                //         { name: 'jbxx_cssjEnd', title: '至', type: 'datebox' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': '',
                        'taskDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.thjyList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'rsrqString', 'thyy', 'thkssj','tbr', 'tbrq', 'zrgj', 'thr', 'ly', 'thnr', 'jbxx_gyqx', 'jsbh', 'jynr','thjssj', 'jbxx_xb'],
                    hidden: ['tbr', 'tbrq', 'zrgj', 'thr', 'ly', 'thnr', 'jbxx_gyqx', 'jsbh', 'jynr','thjssj', 'jbxx_xb']
                })
            });
            hideshow.init('modules/clumn/thjy',['xm', 'jsh', 'rsrqString', 'thyy', 'thkssj','tbr', 'tbrq', 'zrgj', 'thr', 'ly', 'thnr', 'jbxx_gyqx', 'jsbh', 'jynr','thjssj', 'jbxx_xb'],
                ['tbr', 'tbrq', 'zrgj', 'thr', 'ly', 'thnr', 'jbxx_gyqx', 'jsbh', 'jynr','thjssj', 'jbxx_xb']);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function () {
                alert(111);
            });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});