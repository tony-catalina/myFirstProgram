/**
模块名称： 健康检查
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jkjc.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/jkqk');
    var url = require('modules/url');
    var rightmenu = require('modules/rightmenu');
    var jkjcJkjcForm = require('modules/form/jkjcJkjc');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');

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
                        id: 'add', name: '健康检查', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jkjcJkjcForm.init(url.saveJkqkAndTmtzByYw, data, function () {
                                    grid.reload('subtable');

                                });
                            } else {
                                utils.alert('请选择人员');
                            }
                        }
                    },
                    { id: 'excel', name: '查询结果导入到Excel中', icon: 'icon-jiahao', fun: function () { alert(2); } },
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

            jbxxgrid.initjbxx('table', false, 250, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    'gcbh': rybh,
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
                                url: url.jkqkAndTmtzList,
                                fit: false,
                                width: '100%',
                                height: '300',
                                queryParams: { "gcbh": data[0].rybh },
                                firstLoad: true,
                                columns: clumn1({
                                    check: false,
                                    clumns: ['sg', 'tz', 'zc', 'jkzkString', 'jcys', 'ysjcrqString', 'jclxString'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
            }
            ]
            );





            hideshow.init('modules/clumn/jbxx',
                ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            jqtree.init('jqtree', 'table');//有监区树就加，没有不加
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