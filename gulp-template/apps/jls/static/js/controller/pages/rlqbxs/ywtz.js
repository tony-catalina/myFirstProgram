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
    var clumn = require('modules/clumn/_xsdj');
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
                    { id: 'add', name: '办理登记', icon: 'icon-jiahao', fun: function () { alert(1); } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1'}
                ]
            });
            searchform.initYwtz('search', {
                // primary: [
                //     { name : 'djrqStart',title: '登记日期', type: 'datebox' },
                //     { name : 'djrqEnd',title: '至', type: 'datebox' },],
                // more: [
                //     [
                //         { name : 'cdr',title: '传递人', type: 'textbox' },
                //         { name : 'cdsjStart',title: '传递日期', type: 'datebox' },
                //         { name : 'cdsjEnd',title: '至', type: 'datebox' }
                //     ], [{ name : 'czqk',title: '查证结果', type: 'textbox' },
                //     { name : 'fkrqStart',title: '反馈日期', type: 'datebox' },
                //     { name : 'fkrqEnd',title: '至', type: 'datebox' }
                //     ]
                // ],
				query:function(param){
					   param=$.extend({}, {
										 'state':'R2',
									}, param);
				    grid.query('table',param);
				 }
            });
            grid.init('table', {
                url: url.rlqbxsList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xslxString', 'xslr', 'cdr', 'cdsj', 'jsr', 'czqk', 'fkrq','sar', 'sars', 'afsj', 'afdd', 'saje', 'jjrq', 'jjaxz', 'saqy', 'djr','djrq', 'jyjg', 'sldyj', 'sldyjnr', 'sldqm', 'sldqmsj', 'cdrdh', 'cddw', 'jsrdh',
                        'phxsajs', 'phzaajs', 'xsjlrs', 'zajurs', 'dbrs', 'ljrs', 'ysqsrs', 'qtrs', 'bdbtjrs', 'sdbtjrs', 'wsztrs','zzje', 'zwdw'],
                    hidden: ['sar', 'sars', 'afsj', 'afdd', 'saje', 'jjrq', 'jjaxz', 'saqy', 'djr','djrq', 'jyjg', 'sldyj', 'sldyjnr', 'sldqm', 'sldqmsj', 'cdrdh', 'cddw', 'jsrdh',
                        'phxsajs', 'phzaajs', 'xsjlrs', 'zajurs', 'dbrs', 'ljrs', 'ysqsrs', 'qtrs', 'bdbtjrs', 'sdbtjrs', 'wsztrs','zzje', 'zwdw']
                })
            });
            hideshow.init('modules/clumn/_xsdj',
                ['xslxString', 'xslr', 'cdr', 'cdsj', 'jsr', 'czqk', 'fkrq','sar', 'sars', 'afsj', 'afdd', 'saje', 'jjrq', 'jjaxz', 'saqy', 'djr','djrq', 'jyjg', 'sldyj', 'sldyjnr', 'sldqm', 'sldqmsj', 'cdrdh', 'cddw', 'jsrdh',
                    'phxsajs', 'phzaajs', 'xsjlrs', 'zajurs', 'dbrs', 'ljrs', 'ysqsrs', 'qtrs', 'bdbtjrs', 'sdbtjrs', 'wsztrs','zzje', 'zwdw'],
                ['sar', 'sars', 'afsj', 'afdd', 'saje', 'jjrq', 'jjaxz', 'saqy', 'djr','djrq', 'jyjg', 'sldyj', 'sldyjnr', 'sldqm', 'sldqmsj', 'cdrdh', 'cddw', 'jsrdh',
            'phxsajs', 'phzaajs', 'xsjlrs', 'zajurs', 'dbrs', 'ljrs', 'ysqsrs', 'qtrs', 'bdbtjrs', 'sdbtjrs', 'wsztrs','zzje', 'zwdw']);
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