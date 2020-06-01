/**
 * 业务台账 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/yq');
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
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1' }
                ]
            });
            searchform.initYwtz('search', {
				query:function(param){
				       grid.query('table',param);
				    }
            });
            grid.init('table', {
                url: url.yqjbxxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
				method : 'post',
                columns: clumn({
                    check: false,
                    clumns: ['xm','jsh','ayString','blrqString','ygyqxString','xgyqxString','yqyyString','pzrqString'],
                    hidden: []
                })
            });
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/
            $('#add').unbind('click').bind('click', function() {
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