/**
模块名称： 文书补打
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var cljgSddjForm = require('modules/form/_cljgSddj');
    var cljgZxtzsForm = require('modules/form/cljgZxtzs');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var common=require('common');
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
                        id: 'add', name: '结果登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData = { qsrq: currentTime, sdrq: currentTime };
                                cljgSddjForm.init(url.pjdjAdd, addData, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的记录!');
                            }
                        }
                    },
                    {
                        id: 'save', name: '执行通知书送达登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData = { sdrq: currentTime, updator: common.info.user.loginname, updatetime: currentTime };
                                cljgZxtzsForm.init(url.pjdjUpdate, addData, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的记录!');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });
            searchform.init('search', {
                query: function (param) {

                    param = $.extend({},  param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table', false, 200, { 'taskDefinitionKey': 'kss_cljg_cljg', 'processDefinitionKey': 'kss_cljg' }, function (rybh) {
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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