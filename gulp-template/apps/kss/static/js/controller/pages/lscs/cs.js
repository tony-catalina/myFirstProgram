/**
模块名称： 安全检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var addForm = require('modules/form/lscs')
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var url = require('modules/url');
    var common=require('common');
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
                        id: 'add', name: '离所确认', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var rows = $('#table').datagrid('getSelections');
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { createtime: currentTime, creator: common.info.user.loginname, blsj: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.addLscsCs, addData,rows, function () {
                                    grid.reload("table");
                                });
                            } else {
                                utils.alert('请选择离所人员!');
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
                        'taskDefinitionKey': 'kss_lscs_cs',
                        'processDefinitionKey': 'kss_lscs'
                    }, param);
                    grid.query('table', param);
                }
            });
            jbxxgrid.initJbxxflow('table',true,200, {'taskDefinitionKey': 'kss_lscs_cs','processDefinitionKey': 'kss_lscs'},function(rybh) {   //流程中的节点使用这个
               
            });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /* $('#add').unbind('click').bind('click',function () {
                  alert(111);
            }); */
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});