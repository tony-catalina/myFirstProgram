/**
模块名称： 当前鉴定人员查询
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                        id: 'add', name: '撤销', icon: 'icon-jiahao', fun: function () {
                            var row = $("#table").datagrid('getSelected');
                            if (row){
                                cxk = layer.confirm('确认撤销' + '<font style="color:red">' + row.xm +"？" + '</font>', {
                                        btn: ['确定', '取消']},
                                    function () {
                                        layer.close(cxk);
                                        util.ajax({type: "POST", url: url.jsbjdCx,
                                            data: {id: row.id,jsycbz:'0'},
                                            func: function (result) {
                                                grid.reload('table');
                                                utils.alert(result.msg);
                                            },
                                        });
                                    });
                            } else{
                                utils.alert('请选择撤销人员!')
                            }

                        }
                    }
                ]
            });
            linkbar.init({
                links: [
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
                        'jsycbz': '1',
                        'processDefinitionKey': 'kss_jsbjd',
                        'state': 'R8',
                        'snbh_type':'0',
                        'xm_type':'1'
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {'jsycbz': '1','processDefinitionKey': 'kss_jsbjd','state': 'R8','snbh_type':'0','xm_type':'1'},function(rybh) {
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
