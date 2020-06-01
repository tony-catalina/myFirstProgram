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
    var clumn = require('modules/clumn/shgx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');

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
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table');} }
                ]
            });
            searchform.init('search', {
               pageRender:{
                primary: [
                    { name: 'jbxx_xm', title: '在拘人姓名', type: 'textbox' },
                    { name: 'jbxx_jsh', title: '拘室号', type: 'awdCombotree', url:url.jsComboxTree }
                ],
                more: [
                    [
                        { name: 'jbxx_bm', title: '别名', type: 'textbox' },
                        { name: 'jbxx_ayab', title: '案别', type: 'awdCombox' ,url:url.getDictionary+'?node=JLSAJLB'},
                        { name: 'xb', title: '家属性别', type: 'awdCombox' ,url:url.getDictionary+'?node=XB'}
                    ],
                    [
                        { name: 'jbxx_rsrqStart', title: '入所日期', type: 'datebox' },
                        { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' }
                    ]
                ],
               },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'zjlx': '11'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.shgxList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsbh', 'xbString', 'gxString', 'zjh', 'zjlxString', 'gzdw'],
                    hidden: ['jsbh', 'gzdw']
                })
            });
            hideshow.init('modules/clumn/shgx',
                ['xm', 'jsbh', 'xbString', 'gxString', 'zjh', 'zjlxString', 'gzdw'],
                ['jsbh', 'gzdw']);
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