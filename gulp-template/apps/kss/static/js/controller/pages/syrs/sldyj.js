/**
模块名称： 出所管理
开始时间： 2020-3-7
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
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/syrssldyj');
    var jbxxgrid = require('modules/jbxxgrid');
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
                        id: 'add', name: '领导意见', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var currentTime1 = new Date().Format("yyyy-MM-dd");
                                var addData1 = { ldpssj: currentTime, ldxm: common.info.user.loginname, ysjcrq: currentTime1, ldyj: '同意入所' };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.ldspForRsdj, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
                            }
                        }
                    },
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
                        'taskDefinitionKey': 'kss_rsdj_sldyj',
                        'processDefinitionKey': 'kss_rsdj',
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initXyrflow('table', false, 200, {
                'taskDefinitionKey': 'kss_rsdj_sldyj',
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