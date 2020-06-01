/**
模块名称： 亲情电话
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    require('modules/commFun');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var addForm = require('modules/form/qqdhqqdhsq')
    var add = require('services/form/_qqdhsq.html');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var common = require('common');
    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '亲情电话申请', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {  sqsj: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.qqdhStart, addData, function () {
                                   
                                });
                            } else {
                                utils.alert('必须选中一人办理!');
                            }
                        }
                    }
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
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {
                'state': 'R8'
            }, function (rybh) {

            });

            jqtree.init('jqtree', 'table');

        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});