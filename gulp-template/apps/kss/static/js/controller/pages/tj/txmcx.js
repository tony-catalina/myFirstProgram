/**
模块名称： 出所登记
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');

    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var add = require('services/form/_tjtafrytxmcx.html');
    var hideshow = require('modules/showHideClumn');
    var formTable = require('modules/Form_Table');
    var csdjForm = require('modules/form/tj_csdj');
    var jbxxgrid=require('modules/jbxxgrid');
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
                        name: '提解登记',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                csdjForm.init(url.addTjdj, data, function() {
                                    grid.reload('table');
                                });
                            }else {
                                utils.alert('请选择人员!');
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
                pageRender:{
                    primary: [{
                        name: 'txm',
                        title: '条形码',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_tj_tjcsdj',
                        'processDefinitionKey': 'kss_tj'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',false,200, {'taskDefinitionKey': 'kss_tj_tjcsdj','processDefinitionKey': 'kss_tj'},function(rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息的

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
