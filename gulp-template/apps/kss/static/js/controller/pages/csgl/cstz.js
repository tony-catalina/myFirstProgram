/**
模块名称： 文书补打
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
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');
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
                        id: 'add', name: '出所通知', icon: 'icon-jiahao', ryyw:true,fun: function () {
                            var selected = grid.getSelected('table')[0];
                            if (selected) {
                                layer.confirm('您确定要办理出所通知吗？', {
                                    btn: ['确定', '取消'] //按钮
                                }, function () {
                                    util.ajax({
                                        type: "POST",  //提交方式
                                        url: url.tzcsSend,
                                        data: { "taskid": selected.taskid, "rybh": selected.rybh, "xm": selected.xm, "jsh": selected.jsh, "snbh": selected.snbh },
                                        func: function (data) {
                                            if (data.success) {
                                                layer.alert(data.msg);
                                            } else {
                                                layer.alert(data.msg);
                                            }
                                        }
                                    });
                                }, function () {
                                });
                            } else {
                                layer.alert('请选择人员!');
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
                        'taskDefinitionKey': 'kss_csgl_cstz',
                        'processDefinitionKey': 'kss_csgl'
                    }, param);
                    param.state='R7';
                    grid.query('table', param);
                }
            });

            /*jbxxgrid.initJbxxflow('table',false,200, {'taskDefinitionKey': 'kss_csgl_cstz','processDefinitionKey': 'kss_csgl'},function(rybh) {   //流程中的节点使用这个
            });*/

            jbxxgrid.initjbxx('table',true,200, {state:'R7'},function(rybh) {

            });

            jqtree.init('jqtree','table');
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