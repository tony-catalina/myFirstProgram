/**
模块名称： 使用登记
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');

    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/_xj');
    var url = require('modules/url');
    var formtpl = require('services/form/_xjsyXjsydj.html');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/xjsyxjsydj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        id: 'add',
                        name: '械具使用登记',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { xjsyblr: common.info.user.loginname, kssj: currentTime, jssj: currentTime, xjsyblsj: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.xjAddSpflow + '?type=有械具', addData, function () {
                                    grid.reload('table')
                                });
                            } else {
                                utils.alert("请选择人员");
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
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_xjsy_xjsydj',
                        'processDefinitionKey': 'kss_xjsy'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_xjsy_xjsydj','processDefinitionKey':'kss_xjsy'},function(rybh) {   //流程中的节点使用这个
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