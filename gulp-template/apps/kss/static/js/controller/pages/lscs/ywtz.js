/**
 * 业务台账 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function() {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function() {
            //布局初始化
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
            searchform.initYwtz('search', {
                query:function(param){
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                       grid.query('table',param);
                    }
            });
            grid.init('table', {
                url: url.lscsjbxxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
				method : 'post',
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'xbString', 'bahjString', 'rsrqString', 'csyyString', 'cssjString', 'hssjString'],
                    hidden: []
                })
            });
        },
        eventBind: function() {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});