/**
模块名称： 文书补打
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layerui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var glws=require('modules/glws');
    var clumn = require('modules/clumn/jshj');
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
            toolbar.init({
                buttons: [
                ]
            });
            linkbar.init({
                links: [
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm_like',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'blrqstart', title: '办理日期', type: 'datebox' },
                            { name: 'blrqend', title: '至', type: 'datebox' }
                        ]
                    ]
                },
                 query: function(param) {
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.jshjywtzQuery,
                fit: false,
                width: '100%',
                height: "250%",
                firstLoad: false,
                method : 'post',
                columns: clumn({
                    check: false,
                    clumns: [ 'xm', 'jsh', 'ayString', 'hjsjString', 'jssjString', 'jsxm', 'bhjrgxString', 'tfrs'],
                    hidden: []
                })
            });

            glws.init('glws', {
                files:[
                    {name:"家属会见提人通知单",label:'kss_jshjtrtzd'},
                    
                    {name:"家属会见登记列表",label:'kss_jshjdjlb'}
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