/**
模块名称： 业务台账
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
    var clumn = require('modules/clumn/wlry');
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
                    { id: 'print', name: '台账打印', icon: 'icon-taizhang' },
                    { id: 'excel', name: '导出excel', icon: 'icon-daochu' }
                ]
            });
            linkbar.init({
                links: [

                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        title: '来所事由',
                        name:'lssy',
                        type: 'awdCombox' ,url:url.getDictionary+'?node=LSSY' 
                    }, {
                        title: '带入民警',
                        name:'drmj',
                        type: 'textbox'
                    }],
                    more: [
                        [

                            { title: '带入时间', type: 'datebox' ,name:'drsj_start'},
                            { title: '至', type: 'datebox',name:'drsj_end' },
                          
                        ]
                    ]
                },
                query: function (param) {
                    grid.query('table', param);
                }
                
            });
            grid.init('table', {
                url: url.wlrylist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['drsj', 'jtsy','lfrs', 'sxcls', 'drmj','lssyString'],
                    hidden: []
                })
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