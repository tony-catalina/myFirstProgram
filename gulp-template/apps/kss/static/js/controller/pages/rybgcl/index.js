/**
模块名称： 人员报告处理
开始时间： 2020-2-25
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
    var clumn1 = require('modules/clumn/zyrybgcl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var rybgdjclForm = require('modules/form/rybgdjcl');
    var jqtree = require('modules/jqtree');//监区树引用
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
                        id: 'add', name: '报告登记', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                rybgdjclForm.init(url.zyrybgclAdd, data, function () {
                                    grid.reload('subtable')
                                });
                            } else {
                                utils.alert('请选择人员!');
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
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            }, [{
                id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                    layer.open({
                        title: "业务信息",
                        area: ['90%', '600px'],
                        content: "<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: url.zyrybgclList,
                                fit: false,
                                width: '100%',
                                height: '400',
                                queryParams: { "rybh": data[0].rybh },
                                firstLoad: true,
                                columns: clumn1({
                                    check: false,
                                    clumns: ['bgsj', 'bgnr', 'clr', 'clqk', 'clsj', 'bz'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
            }
            ]);

            jqtree.init('jqtree', 'table');

            // grid.init('subtable', {
            //         url: url.zyrybgclList,
            //         fit: false,
            //         width: '100%',
            //         height: '300',
            //         firstLoad: false,
            //         columns: clumn1({
            //             check: false,
            //             clumns: ['bgsj', 'bgnr', 'clr', 'clqk', 'clsj', 'bz'],
            //             hidden: []
            //         })
            // });
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