/**
 * 业务台账 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    { id: 'excel', name: '查询结果导出到excel表', icon: 'icon-daochu' }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
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
                more: [
                    [
                        { name: 'bm', title: '别名', type: 'textbox' },
                        { name: 'gyqx_start', title: '关押期限', type: 'datebox' },
                        { name: 'gyqx_end', title: '至', type: 'datebox' },
                        { name: 'xb', title: '性别', type: 'awdCombox', url: url.getDictionary + '?node=XB' }
                    ],
                    [
                        { name: 'bahj', title: '办案环节', type: 'awdCombox', url: url.getDictionary + '?node=BAJD' },
                        { name: 'rsrq_start', title: '入所日期', type: 'datebox' },
                        { name: 'rsrq_end', title: '至', type: 'datebox' },
                        { name: 'state', title: '在所状态', type: 'awdCombox', url: url.getDictionary + '?node=STATE' }
                    ]
                ],
                query: function (param) {
                    param = $.extend({}, param);
                    grid.query('table', param);
                }
            });


            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {   
                
             });


           

            hideshow.init('modules/clumn/jbxx', ['snbh', 'xm', 'jsh', 'bahjString', 'rssj', 'gyqx', 'badw'], ['xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);

        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});