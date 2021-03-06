/**
模块名称： 监室调整登记
开发时间： 2020-2-25
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
    var formtpl = require('services/form/_jstzJstzdj.html');
    var hideshow = require('modules/showHideClumn');
    var jstzdjForm = require('modules/form/jstz_jstzdj');
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
                buttons: [{
                    id: 'add',
                    name: '监室调整登记',
                    icon: 'icon-jiahao',
                    ryyw: true,
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            jstzdjForm.init(url.jstzAdd, data, function () {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert('请选择人员!');
                        }
                    }
                }]
            });

            linkbar.init({
                links: [{
                        id: 'list',
                        name: '数据列选择',
                        icon: 'icon-gengduo7',
                        fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color',
                        name: '分色示例',
                        icon: 'icon-gengduo1',
                        fun: function () {}
                    }
                ]
            });

            searchform.init('search', {

                query: function (param) {
                    param = $.extend({}, {
                        state: 'R8'
                    }, param);
                    grid.query('table', param);

                }
            });

            jbxxgrid.initjbxx('table', false, 200, {
                state: 'R8',
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