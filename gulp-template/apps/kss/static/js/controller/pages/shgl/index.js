/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var subclumn = require('modules/clumn/shff');
    var url = require('modules/url');
    var formtpl = require('services/form/_shglShbd.html');
    var formtplshjb = require('services/form/_shglShjb.html');
    var formtplshbf = require('services/form/_shglShbf.html');
    var hideshow = require('modules/showHideClumn');
    var addForm = require('modules/form/shglshbd');
    var addForm2 = require('modules/form/shglshjb');
    var addForm3 = require('modules/form/shglshbf');
    var jbxxgrid = require('modules/jbxxgrid');
    var util = require('awd/easyui/util');
    var jqtree = require('modules/jqtree');
    ryxxTpl = require("services/com/ryxxjbxx.html");
    var ajqkTpl = require("services/com/ryxxajqk.html");
    var jkqkTpl = require("services/com/ryxxjkqk.html");
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
    var rybh_ = ""; 
    var selectFun = function (rybh) {
        if (!rybh == rybh_) {
            $("#subtable").datagrid('reload', {

                'rybh': rybh,

            });
            rybh_ = rybh;
        } else {
            rybh_ = ""
        }

    }
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
                        id: 'add', name: '手环绑定', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {

                                util.ajax({
                                    url: url.shffList,
                                    data: { 'rybh': data.rybh },
                                    func: function (res) {
                                        
                                        var res = res.result.rows
                                        if(res.length=="0"){
                                            console.log(res);
                                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                            var addData1 = { bdsj: currentTime, bdr: '管理员' };
                                            var addData = {};
                                            Object.assign(addData, data, addData1);
                                            addForm.init(url.shffAdd, addData, function () {
                                                grid.reload('table');
                                            });
                                        }else{
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].bdzt == '3') {
                                                    var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                                    var addData1 = { bdsj: currentTime, bdr: '管理员' };
                                                    var addData = {};
                                                    Object.assign(addData, data, addData1);
                                                    addForm.init(url.shffAdd, addData, function () {
                                                        grid.reload('table');
                                                    });
                                                } else {
                                                    utils.alert('该人员已绑定手环!');
                                                    break;
                                                }
                                            }
                                        }
                                       

                                        // if (data.success) {
                                        //     utils.alert(data.msg);
                                        //     if (tools.isFunction(callback)) {
                                        //         callback();
                                        //         utils.closeWin(popwin);
                                        //     }
                                        // } else {
                                        //     utils.alert(data.msg);
                                        // }
                                    }
                                });
                                // var datadown = grid.getSelected('subtable')[0];
                                // if (datadown) {
                                //     if (datadown.bdzt == 3) {
                                //         var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                //         var addData1 = { bdsj: currentTime, bdr: '管理员' };
                                //         var addData = {};
                                //         Object.assign(addData, data, addData1);
                                //         addForm.init(url.shffAdd, addData, function () {
                                //         });
                                //     } else {
                                //         utils.alert('该人员已绑定手环!');
                                //     }

                                // } else {
                                //     var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                //     var addData1 = { bdsj: currentTime, bdr: '管理员' };
                                //     var addData = {};
                                //     Object.assign(addData, data, addData1);
                                //     addForm.init(url.shffAdd, addData, function () {
                                //     });
                                // }
                            } else {
                                utils.alert('请选择要绑定手环的人员!');
                            }
                        }
                    },
                    { id: 'excel', name: '导出Excel', icon: 'icon-daochu' },
                ]
            });
            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function () { alert(3); } }
                ]
            });
            searchform.init('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });
            jbxxgrid.initjbxx('table', false, 200, { 'taskDefinitionKey': 'kss_shgl', 'processDefinitionKey': 'kss_shgl' }, function (rybh) {
                $("#subtable").datagrid('reload', {

                    'rybh': rybh,

                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     zIndex:1000,
                     type:1,
                     content: '<div class="section-container">' +
                            '<div class="section-item section-item-one section-item-padding">' +
                            '<div class="section-header" style="margin-bottom:1%;">' +
                            '<div class="section-controls single-colors" id="tools">' +
                            '<button type="button" id="edit">' +
                            '<span class="iconfont icon-jiahao"></span>手环解除' +
                            '</button>' +
                            '<button type="button" id="del">' +
                            '<span class="iconfont icon-jiahao"></span>手环补发' +
                            '</button>' +
                            '</div>' +
                            ' </div>' +
                            ' <div class="section-item-content border-top">' +
                            '<form id="search" class="search-form"></form>' +
                            '<table id="subtable" ></table>' +
                            '</div>' +
                            '</div>' +
                            ' </div> ',
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.shffList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: subclumn({
                                 check: false,
                                 clumns: ['shid', 'bdzt', 'bdsj', 'bdr', 'jbsj', 'jbr', 'jbyy'],
                                 hidden: []
                             })
                         });
                         $('#edit').on('click', function () {
                            var data = grid.getSelected('table')[0];
                            // if (data) {
                            var datadown = grid.getSelected('subtable')[0];
                            if (datadown) {
                                if (datadown.bdzt == 3) {
                                    utils.alert('该手环已解绑，不能重复解绑!');
                                    
                                    // return false;
                                } else {
                                    var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                    var addData1 = { jbsj: currentTime, jbr: '管理员' };
                                    var addData = Object.assign(data, datadown, addData1);
                                    addForm2.init(url.updateShff, addData, function () {
                                        grid.reload('subtable');
                                    });
                                }
                            } else {
                                utils.alert('该人员未绑定手环，不能解绑!');
                            }
                            // } else {
                            // utils.alert('请选择要解除手环的人员!');
                            // }
                            })
                            $('#del').on('click', function () {
                                var data = grid.getSelected('table')[0];
                                var datadown = grid.getSelected('subtable')[0];
                                if (datadown) {
                                    if (datadown.bdzt == 3) {
                                        utils.alert('该手环已解绑!请选择已绑定手环或重新绑定新手环!');
                                    } else {
                                        var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                        var addData1 = { xgqk: currentTime, bdr: '管理员', bufaid: datadown.id };
                                        var addData = Object.assign(datadown, data, addData1);
                                        addForm3.init(url.shffBf, addData, function () {
                                            grid.reload('table');
                                        });
                                    }
                                } else {
                                    utils.alert('请选择一条绑定记录!');
                                }
                            })

                     }
                 })
             }
         }
         ]
            
            );
            // hideshow.init('modules/clumn/jbxx', ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //     ['xbString', 'dwlx', 'rsxz', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            // grid.init('table', {
            //     url: url.jbxx,
            //     fit: false,
            //     width: '100%',
            //     method: 'post',
            //     height: window.innerHeight - 200,
            //     firstLoad: true,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            //         hidden: ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
            //     }),
            //     onRowContextMenu: function (e, rowIndex, rowData) {
            //         e.preventDefault();
            //         var ywxx = layer.open({
            //             title: '业务信息',
            //             type: 1,
            //             area: ['90%', '600px'],
            //             zIndex: 100,
            //             // content: '<div>' +
            //             //     '<table id="subtable"></table>' +
            //             //     '</div>',
            //             content: '<div class="section-container">' +
            //                 '<div class="section-item section-item-one section-item-padding">' +
            //                 '<div class="section-header" style="margin-bottom:1%;">' +
            //                 '<div class="section-controls single-colors" id="tools">' +
            //                 '<button type="button" id="edit">' +
            //                 '<span class="iconfont icon-jiahao"></span>手环解除' +
            //                 '</button>' +
            //                 '<button type="button" id="del">' +
            //                 '<span class="iconfont icon-jiahao"></span>手环补发' +
            //                 '</button>' +
            //                 '</div>' +
            //                 ' </div>' +
            //                 ' <div class="section-item-content border-top">' +
            //                 '<form id="search" class="search-form"></form>' +
            //                 '<table id="subtable" ></table>' +
            //                 '</div>' +
            //                 '</div>' +
            //                 ' </div> ',
            //             maxmin: true,
            //             btn: ['取消'],
            //             success: function () {
            //                 grid.init('subtable', {
            //                     url: url.shffList,
            //                     fit: false,
            //                     width: '100%',
            //                     height: '300',
            //                     firstLoad: false,
            //                     columns: subclumn({
            //                         check: false,
            //                         clumns: ['shid', 'bdzt', 'bdsj', 'bdr', 'jbsj', 'jbr', 'jbyy'],
            //                         hidden: [],
            //                     })
            //                 });
            //                 $("#subtable").datagrid('reload', {
            //                     "rybh": rowData.rybh
            //                 });
            //                 $('#edit').on('click', function () {
            //                     var data = grid.getSelected('table')[0];
            //                     // if (data) {
            //                     var datadown = grid.getSelected('subtable')[0];
            //                     if (datadown) {
            //                         if (datadown.bdzt == 3) {
            //                             utils.alert('该手环已解绑，不能重复解绑!');
            //                             // return false;
            //                         } else {
            //                             var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
            //                             var addData1 = { jbsj: currentTime, jbr: '管理员' };
            //                             var addData = Object.assign(data, datadown, addData1);
            //                             addForm2.init('/kss/kss_shff/updateShff', addData, function () {
            //                             });
            //                         }
            //                     } else {
            //                         utils.alert('该人员未绑定手环，不能解绑!');
            //                     }
            //                     // } else {
            //                     // utils.alert('请选择要解除手环的人员!');
            //                     // }
            //                 })
            //                 $('#del').on('click', function () {
            //                     var data = grid.getSelected('table')[0];
            //                     var datadown = grid.getSelected('subtable')[0];
            //                     if (datadown) {
            //                         if (datadown.bdzt == 3) {
            //                             utils.alert('该手环已解绑!请选择已绑定手环或重新绑定新手环!');
            //                         } else {
            //                             var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
            //                             var addData1 = { xgqk: currentTime, bdr: '管理员', bufaid: datadown.id };
            //                             var addData = Object.assign(datadown, data, addData1);
            //                             addForm3.init(url.shffBf, addData, function () {
            //                             });
            //                         }
            //                     } else {
            //                         utils.alert('请选择一条绑定记录!');
            //                     }
            //                 })
            //             },
            //         })
            //     }
            // });
            hideshow.init('modules/clumn/jbxx',
                ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            // grid.init('subtable', {
            //     url: url.shffList,
            //     fit: false,
            //     width: '100%',
            //     height: '300',
            //     firstLoad: false,
            //     columns: subclumn({
            //         check: false,
            //         clumns: ['shid', 'bdzt', 'bdsj', 'bdr', 'jbsj', 'jbr', 'jbyy'],
            //         hidden: [],
            //     })
            // });
            jqtree.init('jqtree', 'table');
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