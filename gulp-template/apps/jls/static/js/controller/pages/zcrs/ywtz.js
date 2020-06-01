/**
 模块名称: 业务台账
 开始时间: 2020-3-11
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
    var clumn = require('modules/clumn/jbxx');
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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.initYwtz('search', {
                // primary: [
                //     { name: 'xm', title: '姓名', type: 'textbox' },
                //     { name: 'ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' }
                // ],
                // more: [
                //     [
                //         { name: 'rsrqStart', title: '入所时间', type: 'datebox' },
                //         { name: 'rsrqEnd', title: '至', type: 'datebox' },
                //         { name: 'mz', title: '民族', type: 'awdCombox' ,url:url.getDictionary +'?node=MZ' },
                //     ], [
                //         { name: 'csrqStart', title: '出生日期', type: 'datebox' },
                //         { name: 'csrqEnd', title: '至', type: 'datebox' }
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.jbxxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                     clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                     hidden: ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']
                })
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']);
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