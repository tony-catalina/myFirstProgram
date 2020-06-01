/**
模块名称： 重病号管理-重病号查询
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
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
                    { id: 'excel', name: '查询结果导入', icon: 'icon-jiahao', tableId: 'table' }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {  } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'zbhjc_bhlx': '2'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {

            });
            hideshow.init('modules/clumn/jbxx',['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],['xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString']);
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
