/**
模块名称： 安全检查
开始时间： 2020-2-25
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
    var addForm = require('modules/form/syrsxxbl');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var url = require('modules/url');
    var syrsyzdjForm = require('modules/form/syrsxxbl');

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '信息补录',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var addData1 = {
                                rybh: '',
                                gcbh: '',
                                xxbl_taskid: '',
                                id: ''
                            };
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            syrsyzdjForm.init(url.saveAsLegal, addData, function () {
                                grid.reload('table');
                            });
                        } else {
                            utils.alert('请选择一条记录，然后再进行人员补录!');
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
                }]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_rsdj_xxbl',
                        'processDefinitionKey': 'kss_rsdj',
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initXyrflow('table', false, 200, {
                'taskDefinitionKey': 'kss_rsdj_xxbl',
                'processDefinitionKey': 'kss_rsdj'
            }, function (rybh) { //流程中的节点使用这个

            });

            syrsyzdjForm.cache();
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