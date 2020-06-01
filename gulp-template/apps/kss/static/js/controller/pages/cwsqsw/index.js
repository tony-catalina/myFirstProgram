/**
 模块名称： 财务管理送钱送物
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
    var clumn = require('modules/clumn/jslx');
    var clumnXjjs = require('modules/clumn/_xjjs');
    var clumnShgx = require('modules/clumn/shgx');
    var url = require('modules/url');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_cwsqsw.html');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var form = require('modules/form/cwsqsw');
    var common = require('common');
    var hideshow = require('modules/showHideClumn');

    //ref start


    var ryxxAjqkTpl = require('services/com/ryxxajqk.html'); //引入基本信息案件情况HTML模板
    var ryxxJkqkTpl = require('services/com/ryxxjkqk.html'); //引入基本信息健康情况HTML模板
    var ryxxLshjTpl = require('services/com/ryxxlshj.html'); //引入基本信息历史环节HTML模板
    var ryxxTpl = require('services/com/ryxxjbxx.html');
    var ajqkTpl = require('services/com/ryxxajqk.html');
    var jkqkTpl = require('services/com/ryxxjkqk.html');
    var combox = require('awd/easyui/combox');
    var clumnPjdj = require('modules/clumn/pjdj');//引入判决登记clumn
    var clumnTaf = require('modules/clumn/taf');//同案犯clumn
    var clumnJjfjl = require('modules/clumn/jkfjl');//加减分记录clumn
    var clumnJb = require('modules/clumn/jb');//禁闭表格clumn
    var clumnHjbd = require('modules/clumn/hjbd');//历史环节clumn
    var clumnXqbd = require('modules/clumn/jjx');//刑期变动clumn
    var clumnYqxx = require('modules/clumn/yq');//延期信息clumn
    var clumnJy = require('modules/clumn/jy');//就医clumn
    var clumnLshj = require('modules/clumn/lshj');//律师会见clumn
    var clumnTsdj = require('modules/clumn/tsdj');//提审登记clumn
    var clumnDjjl = require('modules/clumn/jstz');//监室调整clumn

    //ref end

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
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = {
                                    blr: common.info.user.loginname,
                                    blrq: currentTime,
                                    creator: common.info.user.loginname,
                                    createtime: currentTime,
                                    id: ''
                                };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                form.init(url.xjjsAdd, addData, function () {
                                    grid.reload('table');
                                });
                            } else {
                                utils.alert('必须选中一个人来办理');
                            }


                        }
                    },
                    // {
                    //     id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () {
                    //         var data = grid.getSelected('table')[0];
                    //         if (data) {
                    //             var data1 = grid.getSelected('leftTable')[0];
                    //             if (data1) {
                    //                 var data2 = grid.getSelected('rightTable')[0];
                    //                 if (data2) {
                    //                     var obj = Object.assign(data, data1, data2);
                    //                     console.log(obj);
                    //                     form.init(url.xjjsUpdate, obj, function () {
                    //                     });
                    //                 } else {
                    //                     utils.alert('请选择一条记录');
                    //                 }
                    //             } else {
                    //                 utils.alert('请选择一条记录');
                    //             }
                    //         } else {
                    //             utils.alert('请选择一条记录');
                    //         }

                    //     }
                    // }
                ]
            });
            linkbar.init({
                links: [
                    {
                        id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () {
                            hideshow.show('table');
                        }
                    },
                    {
                        id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {
                        }
                    }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    param = $.extend({}, {
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                // $("#leftTable").datagrid("clearSelections");
                // $("#leftTable").datagrid('reload', {
                //     "rybh": rybh,
                //     'srlx': '2'
                // });
                // $("#rightTable").datagrid("clearSelections");

                // var item = $('#rightTable').datagrid('getRows');
                // console.log(item,888)
                // if (item) {
                //     for (var i = item.length - 1; i >= 0; i--) {
                //         var index = $('#rightTable').datagrid('getRowIndex', item[i]);
                //         $('#rightTable').datagrid('deleteRow', index);
                //     }
                // }
            },[
                {
                    id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                        layer.open({
                            title: "业务信息",
                            area: ['90%', '600px'],
                            zIndex: 1000,
                            type:1,
                            content: '<div class="section-container">' +
                                '<div class="section-item section-item-one section-item-padding">' +
                                '<div class="section-header" style="margin-bottom:1%;">' +
                                '<div class="section-controls single-colors" id="tools">' +
                                '<button type="button" id="edit">' +
                                '<span class="iconfont icon-jiahao"></span>修改' +
                                '</button>' +
                                '</div>' +
                                ' </div>' +
                                ' <div class="section-item-content border-top">' +
                                '<form id="search" class="search-form"></form>' +
                                '<table id="leftTable" ><caption align="top">' + '现金接济信息' + '</caption></table>' + '<table id="rightTable" ><caption align="top">家属记录信息</caption></table>' +
                                '</div>' +
                                '</div>' +
                                ' </div> ',
                            btn: ['取消'],
                            success: function () {
                                grid.init('leftTable', {
                                    url: url.xjjsList,
                                    fit: false,
                                    width: '100%',
                                    height: '300',
                                    queryParams: { "rybh": data[0].rybh, 'srlx': '2' },
                                    firstLoad: true,
                                    columns: clumnXjjs({
                                        check: false,
                                        clumns: ['currencyString', 'srlxString', 'jszjh', 'jsje', 'blrq'],
                                        hidden: []
                                    }),
                                    onSelect: function (rowIndex, rowData) {
                                        if (rowData.rybh != null && rowData.rybh != undefined && rowData.rybh != "") {
                                            $("#rightTable").datagrid('load', {
                                                "rybh": rowData.rybh,
                                                "jszjh": rowData.jszjh
                                            })
                                        }
                                    }
                                });
                                grid.init('rightTable', {
                                    url: url.shgxList,
                                    fit: false,
                                    width: '100%',
                                    height: window.innerHeight - 200,
                                    firstLoad: true,
                                    
                                    columns: clumnShgx({
                                        check: false,
                                        clumns: ['jsxm', 'xbString', 'gxString', 'dh'],
                                        hidden: []
                                    })
                                });
                                $("#edit").click(function () {
                                    var data1 = grid.getSelected('leftTable')[0];
                                    if (data1) {
                                        var data2 = grid.getSelected('rightTable')[0];
                                        if (data2) {
                                            var obj = Object.assign(data2, data1);
                                            form.init(url.xjjsUpdate, obj, function () {
                                                $("#rightTable").datagrid('load', {
                                                    "rybh": data1.rybh,
                                                    "jszjh": data1.jszjh
                                                })
                                                $('#leftTable').datagrid('reload');
                                            });

                                        } else {
                                            utils.alert('请选择一条记录');
                                        }
                                    } else {
                                        utils.alert('请选择一条记录');
                                    }
                                })

                            }
                        })
                    }
                }
                ]
            );

            jqtree.init('jqtree', 'table');

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
            //         layer.open({
            //             title: '业务信息',
            //             area: ['90%', '600px'],
            //             content: '<table id="subtable"></table>',
            //             maxmin: true,
            //             btn: ['取消'],
            //             success: function () {

            //                 // grid.init('leftTable', {
            //                 //     url: url.xjjsList,
            //                 //     fit: false,
            //                 //     width: '100%',
            //                 //     height: window.innerHeight - 200,
            //                 //     firstLoad: false,
            //                 //     columns: clumnXjjs({
            //                 //         check: false,
            //                 //         clumns: ['currencyString', 'srlx', 'jszjh', 'jsje', 'blrq'],
            //                 //         hidden: []
            //                 //     }),
            //                 //     onSelect: function (rowIndex, rowData) {
            //                 //         if (rowData.rybh != null && rowData.rybh != undefined && rowData.rybh != "") {
            //                 //             $("#rightTable").datagrid('load', {
            //                 //                 "rybh": rowData.rybh,
            //                 //                 "jszjh": rowData.jszjh
            //                 //             })
            //                 //         }
            //                 //     } 
            //                 // });
            //             },
            //         })
            //     }
            // });


            // grid.init('leftTable', {
            //     url: url.xjjsList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumnXjjs({
            //         check: false,
            //         clumns: ['currencyString', 'srlx', 'jszjh', 'jsje', 'blrq'],
            //         hidden: []
            //     }),
            //     onSelect: function (rowIndex, rowData) {
            //         if (rowData.rybh != null && rowData.rybh != undefined && rowData.rybh != "") {
            //             $("#rightTable").datagrid('load', {
            //                 "rybh": rowData.rybh,
            //                 "jszjh": rowData.jszjh
            //             })
            //         }
            //     } 
            // });

            // grid.init('rightTable', {
            //     url: url.shgxList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: false,
            //     columns: clumnShgx({
            //         check: false,
            //         clumns: ['jsxm', 'xb', 'gxString', 'dh'],
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