
 /* 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils')
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree'); //监区树引用
   
    var combox = require('awd/easyui/combox');
    
    var rightmenu = require("modules/rightmenu");//引入右击菜单
    var button = require('services/com/button.html');//引入按钮
    var formTable = require('modules/Form_Table');
    //界面控件
    var main = {
        select: [],
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    // {
                    //         id: 'add',
                    //         name: '添加',
                    //         icon: 'icon-jiahao',
                    //         fun: function() {
                    //             console.log("-------------------" + JSON.stringify(main.select));
                    //             var data = grid.getSelected('table');
                    //             if (util.getArrayIndex(main.select, data) < 0) {
                    //                 for(var i = 0 ;i<data.length;i++){
                    //                     main.select.push(data[i]);
                    //                 }


                    //             } else {
                    //                 utils.alert("该数据已经添加过了！");
                    //             }
                    //             grid.loadData('subtable', main.select);
                    //         }
                    //     },
                    //     { id: 'excel', name: '导出电子档案', icon: 'icon-jiahao', tableId: 'subtable' },
                    {
                        id: 'del',
                        name: '历史投劳花名册',
                        icon: 'icon-jiahao',
                        fun: function () {
                            window.location.href = "/apps/kss/views/pages/tlhmc/lstlhmc.html";
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
            grid.init('table', {
                url: url.jbxx,
                fit: false,
                width: '100%',
                height: '500px',
                firstLoad: false,
                singleSelect: false,
                columns: clumn({
                    check: true,
                    clumns: ['rybh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                    hidden: ['xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                }),
                onRowContextMenu:function(e, rowIndex, rowData){
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    // $(this).datagrid('clearSelections'); //取消所有选中项
                    $(this).datagrid('selectRow', rowIndex); //根据索引选中该行
                    $('#contextMenu').menu('show', {
                        left: e.pageX,//在鼠标点击处显示菜单
                        top: e.pageY
                    });
                    e.preventDefault();  //阻止浏览器自带的右键菜单弹出
                }
            });
            rightmenu.init('table',{
                menus:[
                    

                    {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                        layer.open({
                            title: "业务信息",
                            area: ['100%', '100%'],
                            zIndex: 1000,
                            maxmin:true,
                            type: 1,
                            content: '<div class="section-container">' +
                                '<div class="section-item section-item-one section-item-padding">' +
                                '<div class="section-header" style="margin-bottom:1%;">' +
                                '<div class="section-controls single-colors" id="tools">' +
                                '<button type="button" id="add">' +
                                '<span class="iconfont icon-jiahao"></span>添加' +
                                '</button>' +
                                '<button type="button" id="excel">' +
                                '<span class="iconfont icon-jiahao" tableId="subtable"></span>导出花名册' +
                                '</button>' +
                                '</div>' +
                                ' </div>' +
                                ' <div class="section-item-content border-top">' +
                                '<form id="search" class="search-form"></form>' +
                                '<table id="subtable" class="grid"> </table>' +
                                '</div>' +
                                '</div>' +
                                ' </div> ',
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: '',
                                    data: main.select,
                                    fit: false,
                                    width: '80%',
                                    height: '500px',
                                    firstLoad: false,
                                    columns: clumn({
                                        check: true,
                                        clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'ayString', 'gyqx', 'badw'],
                                        hidden: [],
                                        buttons: '删除'
                                    }),
                                    onDblClickCell: function (rowIndex, field, value) {
                                        tools.remove(main.select, main.select[rowIndex]);
                                        grid.loadData('subtable', main.select);
                                    }
                                });

                                $("#add").click(function () {
                                    var data = grid.getSelected('table');
                                    for (var i = 0; i < data.length; i++) {
                                        if (util.getArrayIndex(main.select, data[i]) < 0) {
                                            main.select.push(data[i]);
                                        } else {
                                            utils.alert("该数据已经添加过了！");
                                        }
                                    }
                                    grid.loadData('subtable', main.select);

                                });
                                $("#excel").click(function(target){
                                                // 数据导出
                                                var table = tools.isUndefined(target.tableId) == true ? 'table' : target.tableId;
                                                var $table = $('#' + table);
                                                if ($table.datagrid('getData').rows != '') {
                                                    if (!$table.datagrid('options').singleSelect) {
                                                        $table.datagrid('toExcel', {
                                                            filename: '数据导出',
                                                            rows: $table.datagrid('getChecked')
                                                        });
                                                    } else {
                                                        $table.datagrid('toExcel', {
                                                            filename: '数据导出',
                                                            rows: $table.datagrid('getData').rows
                                                        });
                                                    }
                                                } else {
                                                    utils.alert('暂无数据导出!');
                                                }
                                           
                                            main.ListenEvent(target.id, target.ryyw);
                                       
                                    
                                });
                                $(".layui-layer-content").css("margin-left", "30px")
                                $(".layui-layer-tabli").css('margin-top', '30px')
                            }
                        });
                        }}
            ]});

           

            jqtree.init('jqtree', 'table'); //有监区树就加，没有不加
        },
        ListenEvent: function(id, ryyw) {
            if (ryyw == true) {
                formTable.Person();
            }
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
               