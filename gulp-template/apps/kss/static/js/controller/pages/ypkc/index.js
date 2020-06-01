/**
模块名称： 药品信息记录
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_ypxxkcXz.html');
    var cl = require('services/form/_ypxxkcCl.html');
    var hideshow=require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/ypxx');
    var url = require('modules/url');

    var sgFormModify = require('modules/form/ypkcXz');
    var sgFormAdd = require('modules/form/ypkcXg');
    var sgFormCl = require('modules/form/ypkcCl');
    //单栏
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
                    { id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () { 
                         sgFormModify.init(url.ypxxAdd, {}, function() {
                            grid.reload('table');
                        });      
                     } },
                    { id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
                        var data = grid.getSelected('table')[0];
                            if(data) {
                                sgFormAdd.init(url.ypxxUpdate, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                     } },
                    { id: 'del', name: '药品处理', icon: 'icon-jiahao', fun: function () { 
                        var data = grid.getSelected('table')[0];
                            if(data) {
                                sgFormCl.init(url.ypclAdd, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择要处理的记录!');
                            }
                     } },
                    { id: 'excel', name: '打印药品信息表', icon: 'icon-jiahao', tableId: 'table' },
                    { id: 'kcck', name: '打印库存查看表', icon: 'icon-jiahao', fun: function () { alert(3); } }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'ypmc',
                        title: '药品名称',
                        type: 'awdCombox' ,url:url.getDictionary + '?node=YPMC' 
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.findYpxxAndYpzs,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['ypmc', 'fydwString', 'ypdwString', 'jg', 'gg', 'sfcfyString', 'syffString', 'dzkcl', 'ypkc'],
                    hidden: []
                })
            });
            hideshow.init('modules/clumn/ypxx',['ypmc', 'fydwString', 'ypdwString', 'jg', 'gg', 'sfcfyString', 'syffString', 'dzkcl', 'ypkc'],[]);
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
