/**
模块名称： 文书补打
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws=require('modules/glws');
    var clumn = require('modules/clumn/lshj');
    var url = require('modules/url');
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

            linkbar.init({
                links: [
                ]
            });
            searchform.initWsbd('search', {
                 query: function(param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.lshjwsbdQuery,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                method : 'post',
                columns: clumn({
                    check: false,
                    clumns: [ 'xm', 'jsh', 'ayString', 'xbString', 'lsxm', 'zjh', 'dw', 'hjsj','jssj','hjs'],
                    hidden: []
                })
            });
            glws.init('glws', {
                files:[
                    {name:"律师会见提人通知单",label:'kss_lshjtrtzd'},

                    {name:"律师会见登记表",label:'kss_lshjdjb'}
                ]
            });
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