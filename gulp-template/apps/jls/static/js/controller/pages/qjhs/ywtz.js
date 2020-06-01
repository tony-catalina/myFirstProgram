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
                //     { name: 'jbxx_xm', title: '姓名', type: 'textbox' },
                //     { name: 'jbxx_jsh', title: '拘室号', type: 'awdCombotree', url:url.jsComboxTree }
                // ],
                // more: [
                //     [
                //         { name: 'jbxx_bm', title: '别名', type: 'textbox' },
                //         { name: 'jbxx_ay', title: '案别', type: 'awdCombox' ,url:url.getDictionary +'?node=JLSAJLB' },
                //         { name: 'szqm', title: '所长签名', type: 'textbox' },
                //     ],
                //     [
                //         { name: 'ksrqStart', title: '请假开始日期', type: 'datebox' },
                //         { name: 'ksrqEnd', title: '至', type: 'datebox' },
                //     ],
                //     [
                //         { name: 'jsrqStart', title: '请假结束日期', type: 'datebox' },
                //         { name: 'jsrqEnd', title: '至', type: 'datebox' },
                //     ]
                // ],
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.qjhsYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'ayString', 'rsxzString', 'badw', 'bar', 'bardh', 'jlrq', 'gyqx', 'gyts', 'hjdString', 'hyzkString', 'mzString', 'sfString', 'tssfString', 'whcdString', 'xzdString', 'bjlrjl', 'zjlxString', 'zjh', 'zyString', 'zzmmString', 'dwdz', 'dwlxString', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyyString', 'pzajbh', 'pzflwsh', 'pzrybh', 'rsldqm', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypzString', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'crjbjString', 'cwh'],
                    hidden: ['xbString', 'rsxzString', 'bar', 'bardh', 'gyts', 'hjdString', 'hyzkString', 'mzString', 'sfString', 'tssfString', 'whcdString', 'xzdString', 'bjlrjl', 'zjlxString', 'zjh', 'zyString', 'zzmmString', 'dwdz', 'dwlxString', 'fwh', 'gzdw', 'hjdszpcs', 'hjdxz', 'hzflwsh', 'jljdjg', 'jlrq', 'jyaq', 'ky', 'lscshssj', 'lscssj', 'lscsyyString', 'pzajbh', 'pzflwsh', 'pzrybh', 'sdnjccjg', 'sdnjcjsj', 'sdnjdw', 'sdnjjcr', 'sypzString', 'sypzwsh', 'syr', 'tmtbtz', 'wfdd', 'wfsj', 'yfh', 'crjbjString', 'cwh']
                })
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString']);
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