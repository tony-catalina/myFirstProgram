/**
模块名称： 出所管理
开始时间： 2020-3-7
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/sjyy');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');//引用
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
                        id: 'add', name: '接收', icon: 'icon-jiahao', fun: function () {
                            var sjjs = $("#table").datagrid('getSelected');
                            if (sjjs) {
                                $.messager.confirm('提示', '您确定要接收该人员吗？', function (r) {
                                    if (r) {
                                        var data = "";
                                        var rows = $('#table').datagrid('getSelections');
                                        for (var i = 0; i < rows.length; i++) {
                                            data += rows[i].rybh;
                                            if (i + 1 != rows.length) {
                                                data += ",";
                                            }
                                        }
                                        $.ajax({
                                            type: "POST",  // 提交方式
                                            url: url.startSjyy,// 路径
                                            data: { "rybhs": data },
                                            success: function (data) {
                                                console.log(data)
                                                if (data.success) {
                                                    utils.alert(data.msg);
                                                } else {
                                                    utils.alert(data.msg);
                                                }
                                            }
                                        });
                                    }
                                });
                            } else {
                                utils.alert('请选择要接收的人员!');
                            }
                        }
                    },
                    {
                        id: 'jus', name: '拒收', icon: 'icon-jiahao', fun: function () {
                            var sjjs = $("#table").datagrid('getSelected');
                            if (sjjs) {
                                $.messager.confirm('提示', '您确定要拒收该人员吗？', function (r) {
                                    if (r) {
                                        var data = "";
                                        var rows = $('#table').datagrid('getSelections');
                                        for (var i = 0; i < rows.length; i++) {
                                            data += rows[i].rybh;
                                            if (i + 1 != rows.length) {
                                                data += ",";
                                            }
                                        }
                                        $.ajax({
                                            type: "POST",  // 提交方式
                                            url: url.startJs,// 路径
                                            data: { "rybhs": data },
                                            success: function (data) {
                                                if (data.success) {
                                                    utils.alert(data.msg);
                                                } else {
                                                    utils.alert(data.msg);
                                                }
                                            }
                                        });
                                    }
                                });
                            } else {
                                utils.alert('请选择要拒收的人员!');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } }
                ]
            });
            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'asbh',
                        title: '移押监所',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });
            
            grid.init('table', {
                url: url.sjjsList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                singleSelect: false,
                columns: clumn({
                    check: true,
                    
                    clumns: ['xm', 'asbhString', 'ysyy', 'asblr', 'asblsj', 'yyzt'],
                    hidden: []
                })
            });

            hideshow.init('modules/clumn/sjyy', ['xm', 'asbhString', 'ysyy', 'asblr', 'asblsj', 'yyzt'], []);
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});