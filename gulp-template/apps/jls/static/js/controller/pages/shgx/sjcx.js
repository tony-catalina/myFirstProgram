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

                        { name: 'jbxx_xm', title: '在拘人员姓名', type: 'textbox' },
                    ],
                    more: [
                        [
                           
    
                        ],
                        [
                            { name: 'jbxx_rsrqStart', title: '入所时间', type: 'datebox' },
                            { name: 'jbxx_rsrqEnd', title: '至', type: 'datebox' }
                        ]
                    ],
                },
               
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'zjlx': '11',
                         'jbxx_cssjEnd':'',
                         'jbxx_cssjStart':''            
                    }, param);
                    grid.query('table', param);
                }
            });
            // jbxxgrid.initjbxx('table',false,200, {},function(rybh) { 
            //      });
            grid.init('table', {
                url: url.shgxList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['jbxx_xm', 'jbxx_jsh', 'xm', 'xbString', 'gxString', 'zjh', 'zjlxString'],
                    hidden: ['jsbh', 'gzdw']
                })
            });
            
            hideshow.init('modules/clumn/shgx',
                ['jbxx_xm', 'jbxx_jsh', 'xm', 'xbString', 'gxString', 'zjh', 'zjlxString'],
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