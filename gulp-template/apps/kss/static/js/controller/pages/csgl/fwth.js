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
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var fwdhForm = require('modules/form/_csglfwth');

    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        wfwthflow: function () {
            var selected = $('#table').datagrid('getSelected');
            if (selected) {
                util.ajax({
                    type: "POST",  //提交方式
                    url: url.deleteFlowSfz,
                    data: { "taskid": selected.taskid, "rybh": selected.rybh, "xm": selected.xm, "jsh": selected.jsh, "snbh": selected.snbh },//数据，这里使用的是Json格式进行传输
                    func: function (result) {
                        if (result.success) {
                            utils.alert(result.result.result);
                            $('#table').datagrid('reload')
                        } else {
                            utils.alert(result.msg);
                        }
                    }
                });
            } else {
                utils.alert("请选择操作人员！");
            }
        },
        layout: function () {
            /**布局初始化**/

            toolbar.init({
                buttons: [{
                    id: 'fwdh',
                    name: '附物退还',
                    icon: 'icon-jiahao',
                    fun: function () {
                        var data = grid.getSelected('table')[0];

                        if (data) {
                            if (data.sfyfw != "1") {
                                $.ajax({
                                    type: "POST",
                                    url: url.xjhzList,
                                    data: { "rybh": data.rybh },
                                    success: function (result) {
                                        if (result.rows.length > 0 && result.rows[0].je > 0) {
                                            var ye = result.rows[0].je;
                                            var xjhzId = result.rows[0].id;
                                            var user = result.rows[0].creator;
                                            $.messager.confirm("提示", "该人无附物退还，有<b style='color:red;'>" + ye + "</b>元现金可退还，是否退还现金？", function (r) {
                                                if (r) {
                                                    util.ajax({
                                                        type: "POST",
                                                        url: url.xjth,
                                                        data: { "rybh": data.rybh, "ye": ye, "id": xjhzId, "blr": user },
                                                        func: function (result) {
                                                            if (result.result == 'success') {
                                                                main.wfwthflow();
                                                            } else {
                                                                utils.alert("保存失败!");
                                                            }
                                                        }
                                                    });
                                                }
                                            })
                                        } else {
                                            ye = 0;
                                            $.messager.confirm("提示", "该人无附物、无现金退还，是否直接结束该流程？", function (r) {
                                                if (r) {
                                                    main.wfwthflow();
                                                }
                                            })
                                        }
                                    }
                                });
                                return false;
                            } else {
                                var sfyxj = false;
                                var ye = 0;
                                var xjhzId = "";
                                var user;;
                                util.ajax({
                                    type: "POST",  
                                    url: url.xjhzList,
                                    data: { "rybh": data.rybh },
                                    func: function (result) {
                                        if (result.rows.length > 0 && result.rows[0].je > 0) {
                                            ye = result.rows[0].je;
                                            xjhzId = result.rows[0].id;
                                            user = result.rows[0].creator;
                                            sfyxj = true;
                                            $("#kthje").append('<span>' + ye + '</span>');
                                        } else {
                                            $("#kthje").append('<span>0</span>');
                               
                                        }
                                    }
                                });
                            }
                            fwdhForm.init(url.plFlowwpgl, data,function () {
                                var param = { 'taskDefinitionKey': 'kss_csgl_fwth', 'processDefinitionKey': 'kss_csgl' };
                                grid.query('table', param);
                            });
                        } else {
                            utils.alert('请选择操作人员！');
                        }
                    }
                },]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            var dataTj = { taskDefinitionKey: 'kss_csgl_fwth', processDefinitionKey: 'kss_csgl'};

            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': dataTj.taskDefinitionKey,
                        'processDefinitionKey': dataTj.processDefinitionKey
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initJbxxflow('table', false, 200, { 'taskDefinitionKey': 'kss_csgl_fwth', 'processDefinitionKey': 'kss_csgl' }, function (rybh) { //流程中的节点使用这个

            });

            jqtree.init('jqtree', 'table',dataTj);
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