/**
模块名称： 出所登记
开始时间： 2020-2-25
*/
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var hideshow = require('modules/showHideClumn');
    var csdjFormAdd = require('modules/form/csdjAdd');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');
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
                buttons: [{
                    id: 'add',
                    name: '出所登记',
                    icon: 'icon-jiahao',
                    fun: function() {
                        var data = grid.getSelected('table');
                        if (data.length > 0) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { cssj: currentTime};
                                var addData = {};
                                Object.assign(addData, data, addData1);
                            var rows = $('#table').datagrid('getSelections');
                            csdjFormAdd.init(url.clcsAdd, addData,rows, function() {});
                        } else {
                            utils.alert("请选择人员");
                        }

                    }
                }, ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {} }
                ]
            });
            searchform.init('search', {
                query: function(param) {
                    param = $.extend({}, {
                        state:'R8'
                    }, param);
                    grid.query('table', param);
                    
                }
            });
        
            jbxxgrid.initjbxx('table', false, 200, { 'taskDefinitionKey': 'kss_csgl_csdj', 'processDefinitionKey': 'kss_csgl' }, function (rybh) {
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