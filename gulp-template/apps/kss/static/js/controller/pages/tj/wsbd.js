/**
 * 文书补打 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws = require('modules/glws');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var jbxxgrid = require('modules/jbxxgrid');

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
                ]
            });
            searchform.initWsbd('search', {
                query: function (param) {
                    param = $.extend({}, {}, param);
                    grid.query('table', param);
                }
            });
            grid.init('table',{
                url: url.jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 250,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                                hidden: [ 'sykzrq', 'xbString','dwlx','rsxzString','csrq','zjlxString','zjh','hjdString','xzdString','hyzkString','mzString','gjString','whcdString','zyString','sfString','tssfString','jyrq','ayString']})
                        });
            glws.init('glws', {
                files:[
                    {name:"入所体检表",label:"kss_rstjb"},
                    {name:"提人通知单_提解",label:"kss_tjtrtzd"}
                ]
            });
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