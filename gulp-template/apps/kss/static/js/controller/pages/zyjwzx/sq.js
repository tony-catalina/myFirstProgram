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
    var hideshow = require('modules/showHideClumn');
    var sqFormAdd = require('modules/form/zyjwzx_sqAdd');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var url = require('modules/url');
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
                        id: 'add', name: '申请', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var postData = Object.assign({},data,{tfrq:currentTime});
                            if (data) {
                                sqFormAdd.init(url.jwzxAdd, postData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的人员信息!');
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
                    param = $.extend({}, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息的
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