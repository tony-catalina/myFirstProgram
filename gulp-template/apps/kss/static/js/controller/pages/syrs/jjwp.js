/**
模块名称： 出所管理
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
    var hideshow = require('modules/showHideClumn');
    var syrsJjwpForm = require('modules/form/syrsJjwp');
    var jbxxgrid = require('modules/jbxxgrid');
    var url = require('modules/url');
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
                        id: 'add', name: '接济物品', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
                                var addData = { djsj: currentTime, jjrq: currentTime, djr: common.info.user.loginname, jjyy: '基本生活用品', wp: '洗漱用品，被子' };
                                syrsJjwpForm.init(url.jjwpSave+'?taskid=' + data.taskid, addData, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的记录!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_rsdj_jjwp',
                        'processDefinitionKey': 'kss_rsdj'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table', false, 200, {
                'taskDefinitionKey': 'kss_rsdj_jjwp',
                'processDefinitionKey': 'kss_rsdj'
            }, function (rybh) {
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