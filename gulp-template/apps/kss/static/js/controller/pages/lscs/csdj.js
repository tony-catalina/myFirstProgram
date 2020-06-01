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
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var tree = require('awd/easyui/tree');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var lscsclumn = require('modules/clumn/lscs');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/lscsdj');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                        id: 'add', name: '出所登记', icon: 'icon-jiahao', ryyw: true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var rows = $('#table').datagrid('getSelections');
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { cssj: currentTime };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                addForm.init(url.lscsAddFlow, addData, rows, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('请选择要办理的人员!');
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
                    param = $.extend({}, { state: 'R8' }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', true, 250, { state: 'R8' }, function (rybh) {
                // $("#subtable").datagrid('reload', {
                //     "rybh": rybh
                // });
            },[
                // { id: 'rymx', icon: '', name: '人员详情', fun: function (data) { 
                    
                //  }},
                {
                    id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                        layer.open({
                            title: "业务信息",
                            area: ['90%', '600px'],
                            content: "<table id='subtable'></table>",
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.lscsList,
                                    fit: false,
                                    width: '100%',
                                    height: '300',
                                    queryParams: { "rybh": data[0].rybh },
                                    firstLoad: true,
                                    columns: lscsclumn({
                                        check: false,
                                        clumns: ['csyyString', 'csqx', 'cssj', 'yjmj'],
                                        hidden: []
                                    })
                                });

                            }
                        })
                    }
                }
                ]
            );
            // grid.init('table', {
            //     url: url.jbxx,
            //     fit: false,
            //     width: '100%',
            //     method: 'post',
            //     singleSelect: false,
            //     height: window.innerHeight - 200,
            //     firstLoad: true,
            //     columns: clumn({
            //         check: true,
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            //         hidden: ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
            //     }),
            //     onRowContextMenu: function (e, rowIndex, rowData) {
            //         e.preventDefault();
            //         var popwin = layer.open({
            //             title: '业务信息',
            //             area: ['90%', '600px'],
            //             content: '<table id="subtable"></table>',
            //             maxmin: true,
            //             btn: ['取消'],
            //             success: function () {
            //                 grid.init('subtable', {
            //                     url: url.lscsList,
            //                     fit: false,
            //                     width: '100%',
            //                     height: window.innerHeight - 300,
            //                     firstLoad: false,
            //                     columns: lscsclumn({
            //                         check: false,
            //                         clumns: ['csyyString', 'csqx', 'cssj', 'yjmj'],
            //                         hidden: []
            //                     })
            //                 });
            //                 $("#subtable").datagrid('reload', {
            //                     "rybh": rowData.rybh
            //                 });
            //             },
            //         })
            //     }
            // });
            hideshow.init('modules/clumn/jbxx',
                ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);

            jqtree.init('jqtree', 'table');

            // grid.init('subtable', {
            //     url: url.lscsList,
            //     fit: false,
            //     width: '100%',
            //     height: '200',
            //     //height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: lscsclumn({
            //         check: false,
            //         clumns: ['csyyString', 'csqx', 'cssj', 'yjmj'],
            //         hidden: []
            //     })
            // });
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