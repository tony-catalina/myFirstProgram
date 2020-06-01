/**
模块名称： 人员病历
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var xzjlclumn = require('modules/clumn/ysxz');
    var fyqkclumn = require('modules/clumn/zyryfyjl');
    var cxcyclumn = require('modules/clumn/cxcy');
    var jkjcclumn=require('modules/clumn/jkqk');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
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
            linkbar.init({
                links: [{
                    id: 'list',
                    name: '数据列选择',
                    icon: 'icon-gengduo7',
                    fun: function () {
                        hideshow.show('table');
                    }
                },
                {
                    id: 'color',
                    name: '分色示例',
                    icon: 'icon-gengduo1',
                    fun: function () {

                    }
                }
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
                console.log(rybh,333);
                $("#jkqkTable").datagrid('reload', {
                    "gcbh": rybh
                });
                $("#swjyTable").datagrid('reload', {
                    "rybh": rybh
                });
                $("#snjyTable").datagrid('reload', {
                    "rybh": rybh
                });
                $("#xzjlTable").datagrid('reload', {
                    "rybh": rybh
                });
                $("#fyqkTable").datagrid('reload', {
                    "rybh": rybh
                });
                $("#cxcyTable").datagrid('reload', {
                    "rybh": rybh
                });
            },
                [{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                    
                    layer.tab({
                        area: ['90%', '600px'],
                        btn: ['取消'],
                        tab: [
                            {
                            title: '所内就医',
                            content:' <table class="container-formtable" id="snjy">'+
                                    '<tr>'+
                                    ' <td>医生：</td>'+
                                        '<td ><input class="easyui-textbox"> </td>'+
                                    ' <td>诊断时间：</td>'+
                                    ' <td style="margin-right:50px;"><input class="easyui-datebox"></td>'+
                                        '<td>至：</td>'+
                                    ' <td ><input class="easyui-datebox"></td>'+
                                    ' <td>'+
                                        ' <button type="button" style=" height:30px;width:100px;background: #297aff;color: white;margin-left: 15px;outline: none;border-radius: 5px;border: 0;" ><span class="iconfont icon-icon-chaxun" ></span>查询</button>'+
                                    ' </td>'+
                                ' </tr>'+
                                '</table>'+
                            '<table id="snjyTable" class="grid"></table>'
                            
                        }, {
                            title: '所外就医',
                            content:' <table class="container-formtable" id="swjy">'+
                                    '<tr>'+
                                    ' <td>医生：</td>'+
                                        '<td ><input class="easyui-textbox"> </td>'+
                                    ' <td>诊断时间：</td>'+
                                    ' <td style="margin-right:50px;"><input class="easyui-datebox" id="swsj"></td>'+
                                        '<td>至：</td>'+
                                    ' <td ><input class="easyui-datebox"></td>'+
                                    ' <td>'+
                                        ' <button type="button" style="height:30px;width:100px;background: #297aff;color: white;margin-left: 15px;outline: none;border-radius: 5px;border: 0;><span class="iconfont icon-icon-chaxun"></span>查询</button>'+
                                    ' </td>'+
                                ' </tr>'+
                                '</table>'+
                            '<table id="swjyTable" class="grid"></table>'
                        },{
                            title: '健康情况',
                            content: '<table id="jkqkTable" class="grid"></table>'
                        },{
                            title: '巡诊记录',
                            content: '<table id="xzjlTable" class="grid"></table>'
                        },{
                            title: '发药情况',
                            content: '<table id="fyqkTable" class="grid"></table>'
                        },{
                            title: '抽血采样',
                            content: '<table id="cxcyTable" class="grid"></table>'
                        }
                    ],
                    success: function (e, rowIndex,rowData) {
                        $.parser.parse('#snjy');
                        $.parser.parse('#swjy');
                        console.log(rowData,111)
                        grid.init('snjyTable', {
                            url: url.byxxSnjyList,
                            fit: false,
                            width: '1300px',
                            queryParams: { "rybh": data[0].rybh },
                            height: window.innerHeight - 200,
                            firstLoad: true,
                            columns: clumn({
                                check: false,
                                clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                                hidden: [ 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                            })
                        });
                        $(".layui-layer-title span").each(function(){
                            $(this).click(function(){
                                if('所外就医'==$(this).html()){
                                    grid.init('swjyTable', {
                                        url: url.byxxSwjyList,
                                        fit: false,
                                        width: '1300px',
                                        queryParams: { "rybh":  data[0].rybh },
                                        height: window.innerHeight - 200,
                                        firstLoad: true,
                                        columns: clumn({
                                            check: false,
                                            clumns: ['snbh','rybh','bhlxString','bhlx','ly','lyString','psbz','psbzString', 'jbxxXm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                                            hidden: ['psbz','ly','bhlx','snbh', 'xbString', 'csrq', 'rsxzString', 'dwlxString','bahjString', 'zjlxString', 'rsrq', 'gyqx', 'badw', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                                        }),
                                    });
                                }
                                if('健康情况'==$(this).html()){
                                    grid.init('jkqkTable', {
                                        url: url.jkqkAndTmtzList,
                                        fit: false,
                                        width: '1300px',
                                        queryParams: { "gcbh":  data[0].rybh },
                                        height: window.innerHeight - 200,
                                        firstLoad: true,
                                        columns: jkjcclumn({
                                            check: false,
                                            clumns: ['sg', 'tz', 'zc', 'jkzkString', 'jcys', 'jclxString'],
                                            hidden: []
                                        })
                                    });
                                }
                                if('巡诊记录'==$(this).html()){
                                    grid.init('xzjlTable', {
                                        url: url.ysxzList,
                                        fit: false,
                                        width: '1300px',
                                        queryParams: { "rybh": data[0].rybh },
                                        height: window.innerHeight - 200,
                                        firstLoad: true,
                                        columns: xzjlclumn({
                                            check: false,
                                            clumns: ['rybh', 'xzrq', 'xy', 'xl', 'jbmcString', 'zz', 'badw'],
                                            hidden: [ 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                                        })
                                    });
                                }
                                if('发药情况'==$(this).html()){
                                    grid.init('fyqkTable', {
                                        url: url.zyryfyjlList,
                                        fit: false,
                                        width: '1300px',
                                        queryParams: { "rybh":  data[0].rybh },
                                        height: window.innerHeight - 200,
                                        firstLoad: true,
                                        columns: fyqkclumn({
                                            check: false,
                                            clumns: ['rybh', 'fyr', 'fyrq', 'ypbhString', 'ypbh', 'fydwString', 'sl'],
                                            hidden: [ 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                                        })
                                    });
                                }
                                if('抽血采样'==$(this).html()){
                                    grid.init('cxcyTable', {
                                        url: url.cxcyList,
                                        fit: false,
                                        width: '1300px',
                                        queryParams: { "rybh":  data[0].rybh},
                                        height: window.innerHeight - 200,
                                        firstLoad: true,
                                        columns: cxcyclumn({
                                            check: false,
                                            clumns: ['rybh', 'cbdw', 'cylxString', 'cxsj', 'csrq', 'rssj'],
                                            hidden: [ 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                                        })
                                    });
                                }
                            })
                            
                        })

                        $(".layui-layer-content").css("margin-left","30px");
                        $(".layui-layer-tabli").css('margin-top','30px');
                        }
                    });
                }
                
                }]
            );
            jqtree.init('jqtree', 'table');

            // $(".rybl-record .tab .tab-item").click(function () {
            //     $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
            //     $(".products .mainCont").eq($(this).index()).show().siblings().hide();
            //     // var htmlcontent = $(".products .mainCont").eq($(this).index()).find('.datagrid').find('.datagrid-view').children('table').attr('id')
            //     var htmlcontent = $(".products .mainCont").eq($(this).index()).children('table').attr('id')
            //     console.log(htmlcontent)
            //     if (htmlcontent == 'swjyTable') {
            //         grid.init('swjyTable', {
            //             url: url.byxxSwjyList,
            //             fit: false,
            //             width: '100%',
            //             height: window.innerHeight - 200,
            //             firstLoad: true,
            //             columns: clumn({
            //                 check: false,
            //                 clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //                 hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
            //             }),
            //         });
            //     } else if (htmlcontent == 'jkqkTable') {
            //         grid.init('jkqkTable', {
            //             url: url.jkqkAndTmtzList,
            //             fit: false,
            //             width: '100%',
            //             height: window.innerHeight - 200,
            //             firstLoad: true,
            //             columns: [
            //                 { field: 'oid', title: '', formatter: function (value, rowData, rowIndex) { return '<input type="radio" name="selectRadio1" id="selectRadio1' + rowIndex + '" value="' + rowData.oid + '" />'; } },
            //                 { field: 'id', title: 'id', hidden: true },
            //                 { field: 'sg', title: '身高', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.ysxm == null ? "" : row.ysxm) + '>' + (row.ysxm == null ? "" : row.ysxm) + '</span>' } },
            //                 { field: 'tz', title: '体重', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + value + '>' + value + '</span>' } },
            //                 { field: 'zc', title: '足长', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + value + '>' + value + '</span>' } },
            //                 { field: 'jkzkString', title: '健康情况', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + value + '>' + value + '</span>' } },
            //                 { field: 'jcr', title: '检查人', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.brzs == null ? "" : row.brzs) + '>' + (row.brzs == null ? "" : row.brzs) + '</span>' } },
            //                 { field: 'jcrq', title: '检查日期', width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.cljg == null ? "" : row.cljg) + '>' + (row.cljg == null ? "" : row.cljg) + '</span>' } },
            //                 { field: 'jclxString', title: '检查类型', hidden: true, width: 150, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) + '</span>' } },
            //             ]
            //         });
            //     } else if (htmlcontent == 'xzjlTable') {
            //         grid.init('xzjlTable', {
            //             url: url.ysxzList,
            //             fit: false,
            //             width: '100%',
            //             height: window.innerHeight - 200,
            //             firstLoad: true,
            //             columns: clumn({
            //                 check: false,
            //                 clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //                 hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
            //             })
            //         });
            //     } else if (htmlcontent == 'fyqkTable') {
            //         grid.init('fyqkTable', {
            //             url: url.zyryfyjlList,
            //             fit: false,
            //             width: '100%',
            //             height: window.innerHeight - 200,
            //             firstLoad: true,
            //             columns: clumn({
            //                 check: false,
            //                 clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //                 hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
            //             })
            //         });
            //     } else if (htmlcontent == 'cxcyTable') {
            //         grid.init('cxcyTable', {
            //             url: url.cxcyList,
            //             fit: false,
            //             width: '100%',
            //             height: window.innerHeight - 200,
            //             firstLoad: true,
            //             columns: clumn({
            //                 check: false,
            //                 clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //                 hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
            //             })
            //         });
            //     }
            //     // var display = $('.mainCont').css('display');
            //     // console.log(display)
            //     // if (display == 'none') {
            //     //     alert("被你发现了，我是隐藏的啦！");
            //     // }









            // });


            // grid.init('snjyTable', {
            //     url: url.byxxSnjyList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 200,
            //     firstLoad: true,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
            //         hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
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