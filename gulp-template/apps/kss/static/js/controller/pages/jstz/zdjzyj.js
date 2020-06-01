/**
 模块名称： 中队/警组意见
 开发时间： 2020-2-25
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var utils = require('awd/layui/utils');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var zdjzyjForm = require('modules/form/jstz_zdjzyj')
    var jbxxgrid = require('modules/jbxxgrid');
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
                    {
                        id: 'add',
                        name: '中队/警组意见',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var rows = $('#table').datagrid('getSelections');
                            if (rows.length>0) {
                                zdjzyjForm.init(url.ldspByjstz, rows, 
                                    function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }

                            //

                        }
                    }
                ]
            });

            linkbar.init({
                links: [
                    {
                        id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {
                        }
                    }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_jstz_zdzyj',
                        'processDefinitionKey': 'kss_jstz'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', true, 200, {
                'taskDefinitionKey': 'kss_jstz_zdzyj',
                'processDefinitionKey': 'kss_jstz'
            }, function (rybh) {   //流程中的节点使用这个
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
