/**
模块名称： 领导审批
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jyglLdsp.html');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var tree = require('awd/easyui/tree');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jy');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jyglLdspForm = require('modules/form/jyglLdsp');
    var jbxxgrid=require('modules/jbxxgrid');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                        id: 'add', name: '审批', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            // data.ldpsxx.sqyy = "11";
                            // data.ldpsxx.sqr = "11";
                            // data.ldpsxx.sqrq = "2020-01-20";
                            if (data) {
                                jyglLdspForm.init(url.ldspAddByYw, data, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert('请选择要审批的记录!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_jy_ldsp',
                        'processDefinitionKey': 'kss_jy'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_jy_ldsp','processDefinitionKey':'kss_jy'},function(rybh) {   //流程中的节点使用这
            });

            jqtree.init('jqtree', 'table');

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
