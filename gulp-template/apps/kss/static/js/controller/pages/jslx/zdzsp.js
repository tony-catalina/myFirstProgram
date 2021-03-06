/**
模块名称： 中队长审批
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var hideshow=require('modules/showHideClumn');
    var clumn = require('modules/clumn/jslx');
    var url = require('modules/url');
    require('layer.config');
    var zdzspForm=require('modules/form/jslxZdzsp');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jslxzdzsp.html');
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
                        id: 'add', name: '中队长审批', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                zdzspForm.init(url.jslxldsp+'?type=1', data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员');
                            }
                        }
                    },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { alert(2); } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_jslx_zdzsp',
                        'processDefinitionKey': 'kss_jslx'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',false,200, {'taskDefinitionKey': 'kss_jslx_zdzsp','processDefinitionKey': 'kss_jslx'},function(rybh) {
                
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
