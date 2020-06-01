/**
模块名称： 会见登记
开始时间： 2020-3-7
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jshjHjdj.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree=require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var hjdjForm = require('modules/form/jshj_hjdj');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                    {
                        id: 'edit',
                        name: '会见登记',
                        icon: 'icon-jiahao',
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                hjdjForm.init(url.jshjAdd, data, function() {
                                });
                            }else {
                                utils.alert('请选择要修改的记录!');
                            }
                        }
                    }
                  
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() {hideshow.show('table');} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() { } }
                ]
            });
            searchform.init('search', {
                query: function(param) {
                    param = $.extend({}, {
                        'zszt_in':'12,13',
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);

                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {'zszt_in':'12,13'},function(rybh) {
                console.log(rybh);
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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