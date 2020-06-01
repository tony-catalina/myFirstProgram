/**
 模块名称: 健康检查
 开始时间: 2020-3-11
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_qjhsJkjc.html');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/_qjhsJkjc');
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
                    id: 'bldj',
                    name: '办理登记',
                    icon: 'icon-taizhang',
                    fun: function () {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = {
                                jcrq: currentTime,  qmrq: currentTime, tbzk: '正常', jwbs: '无', crb: '无',
                                jtbs: '无或不清楚', sss: '无', ysyj: '符合入所要求', wss: '无', zszz: '无', sbq: '无'
                            };
                            var addData1 = {}
                            Object.assign(addData1,data,addData)
                            hdpzFormAdd.init(url.qjhsJkqkSave, addData1, function () {
                                grid.reload('table');
                            });

                        } else {
                            utils.alert("请选择人员");
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
            searchform.initLc('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'processDefinitionKey': 'jls_qjhs',
                        'taskDefinitionKey': 'jls_qjhs_jkjc'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', false, 200, {
                'processDefinitionKey': 'jls_qjhs',
                'taskDefinitionKey': 'jls_qjhs_jkjc'
            }, function (rybh) {});


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