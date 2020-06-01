/**
模块名称： 列控管理
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_lkgl.html');
    var hideshow=require('modules/showHideClumn'); 
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var  sgFormModify = require('modules/form/lkLkgl');
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
                    { id: 'add', name: '病人列控', icon: 'icon-jiahao', fun: function () {
                        var data = grid.getSelected('table')[0];
                            if(data) {
                                sgFormModify.init(url.lkglAdd, data, function() {
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                     } },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {hideshow.show('table');} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': '',
                        'processDefinitionKey': '',
                        'cljg': '',
                        'zszt': ''
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                console.log(rybh);
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