/**
 模块名称: 快速入所
 开始时间: 2020-3-11
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');

    require('layer.config');
    var hdpzFormAdd = require('modules/form/_zcrsKsrs');
    var jbxxgrid = require('modules/jbxxgrid');
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
                buttons: [{
                    id: 'rsdj',
                    name: '入所登记',
                    icon: 'icon-taizhang',
                    fun: function() {
                        hdpzFormAdd.init(url.ksrsSave, {}, function() {
                            grid.reload('table');
                        });
                    }
                }]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [
                        { name: 'xm', title: '姓名', type: 'textbox' },
                        { name: 'jsh', title: '拘室号', type: 'awdCombotree', url: url.jsComboxTree }
                    ],
                    more: [
                        [
                            { name: 'bm', title: '别名', type: 'textbox' },
                            { name: 'ay', title: '案别', type: 'awdCombox', url: url.getDictionary + '?node=JLSAJLB' }
                        ]
                    ],
                },
                query: function(param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'processDefinitionKey': '',
                        'taskDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initXyrflow('table', false, 200, {}, function(rybh) {});
            // grid.init('table', {
            //     url: url.xyrList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //          clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
            //          hidden: ['rsxzString', 'bar', 'bardh', 'hjdString', 'mzString', 'gyts', 'jlrq', 'gyqx']
            //     })
            // });
            // hideshow.init('modules/clumn/jbxx',
            //     ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
            //     ['rsxzString', 'bar', 'bardh', 'hjdString', 'mzString', 'gyts', 'jlrq', 'gyqx']);
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