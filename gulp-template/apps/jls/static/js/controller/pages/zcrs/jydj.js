/**
 模块名称: 简要登记
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    //var add = require('services/form/_zcrsJydj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var zcrsJydjForm = require('modules/form/_zcrsJydj');
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
                    { id: 'jydj', name: '简要登记', icon: 'icon-taizhang', fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            zcrsJydjForm.init(url.xyrSave,data, function () {
                                grid.reload('table');
                            });
                            
                        } else {
                            utils.alert('请选择要办理的记录!');
                        }
                     } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender:{primary: [
                    { name: 'xm', title: '姓名', type: 'textbox' },
                    {name: 'jsh', title: '拘室号', type: 'awdCombotree', url:url.jsComboxTree }
                ],
                more: [
                    [
                        { name: 'bm', title: '别名', type: 'textbox' },
                        { name: 'ay', title: '案别',type: 'awdCombox' ,url:url.getDictionary+'?node=JLSAJLB' }
                    ]
                ],},
                
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'jls_zcrs',
                        'taskDefinitionKey': 'jls_zcrs_jydj',
                        'xb':'',
                        'rsrqStart':'',
                        'rsrqEnd':''
                    }, param);
                    grid.query('table', param);
                }
            });
            // jbxxgrid.initJbxxflow('table',false,200, {},function(rybh) {
            //  });
            grid.init('table', {
                url: url.processTaskList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                    hidden: [  'bm','rsxzString', 'bar', 'bardh', 'badw', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx']
                })
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['bm','rsxzString', 'bar', 'bardh', 'badw', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx']);
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
