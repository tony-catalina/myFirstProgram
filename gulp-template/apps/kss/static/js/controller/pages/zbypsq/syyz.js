/**
模块名称： 送药验证
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
    var clumn = require('modules/clumn/zbypsq');
    var url = require('modules/url');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var zbypsqSyyzForm = require('modules/form/zbypsqSyyz');
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
                        id: 'add', name: '送药验证', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                zbypsqSyyzForm.init(url.syyz, data, function() {
                                   var  param = {
                                        'taskDefinitionKey': 'kss_zbypsq_syyz',
                                        'processDefinitionKey': 'kss_zbypsq'
                                    };
                                    grid.query('table', param);
                                });
                            }else {
                                utils.alert('请选择要验证的记录!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table') ; } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { alert(2); } }
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url:url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_zbypsq_syyz',
                        'processDefinitionKey': 'kss_zbypsq'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_zbypsq_syyz','processDefinitionKey':'kss_zbypsq'},function(rybh) {   //流程中的节点使用这
            });

            jqtree.init('jqtree','table');
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