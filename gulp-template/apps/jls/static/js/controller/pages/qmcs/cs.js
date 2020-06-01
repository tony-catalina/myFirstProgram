/**
 模块名称: 出所
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_qmcsCs.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jshjHjdjForm = require('modules/form/_qmcsCs');
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
                        id: 'bldj', name: '办理登记', icon: 'icon-taizhang', fun: function () {

                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jshjHjdjForm.init(url.qmcsZxflow + '?type=2', data, function () {
                                    grid.reload('table');
                                });

                            } else {
                                utils.alert('请选择要修改的记录!');
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
            searchform.initLc('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'jls_qmcs',
                        'taskDefinitionKey': 'jls_qmcs_cs'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', false, 200, {
                'processDefinitionKey': 'jls_qmcs',
                'taskDefinitionKey': 'jls_qmcs_cs'
            }, function (rybh) {

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
