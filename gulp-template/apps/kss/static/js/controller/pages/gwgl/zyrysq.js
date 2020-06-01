/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_gwglZyrysq.html');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var zyrysqAddForm = require('modules/form/gwglzyrysq');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var selectFun;
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
                        id: 'add', name: '添加', icon: 'icon-jiahao', ryyw: true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                zyrysqAddForm.init(url.saveSpdetailAndDeduct, data, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('必须选中一人办理!');
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
                        'processDefinitionKey': '',
                        'taskDefinitionKey': '',
                        'zszt': '',
                        'cljg': '',
                    }, param)
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                selectFun(rybh);

            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            selectFun = function (rybh) {
                $.ajax({
                    url: url.getYeWithRybhAndBz,
                    type: "POST",
                    data: { "rybh": rybh },
                    success: function (res) {
                        $('#money').text(res.result)
                        localStorage.setItem("rymoney", res.result);
                    }
                })
            }


        }
    };

    /**
     *运行入口
     */
    $(main.init);

});