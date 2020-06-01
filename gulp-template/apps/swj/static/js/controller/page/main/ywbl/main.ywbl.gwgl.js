define(['jquery', 'easyui', 'layer', 'compSearchBox', 'grid', 'util', 'mainclumns', 'mainurl', 'gridexport', 'tools'], function ($, easy, layer, compSearchBox, grid, util, clumns, url, gridexport, tools) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/main/clumns');
    var url=require('modules/main/mainurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');
    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            util.watermark(['张三', '北京市第一看守所']);
            main.toolsInit();
            main.gridInit();
            tools.toolsbar('tooles', {
                // 查询条件里面的字段
                "searchif": [{
                    // input框name名
                    id: 'xm',
                    // 字段名
                    name: '姓名',
                    // input框类型
                    classname: 'easyui-textbox'
                }, {
                    id: 'jsh',
                    name: '监室号',
                    classname: 'easyui-combobox'
                }, {
                    id: 'time',
                    name: '日期',
                    classname: 'easyui-datebox'
                }],
                // 高级查询里面的字段
                "highsearch": [{
                    id: 'rq',
                    name: '日期',
                    classname: 'easyui-datebox'
                }, {
                    id: 'fddbr',
                    name: '法定代表人',
                    classname: 'easyui-textbox'
                }, {
                    id: 'gys',
                    name: '供应商',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrxm',
                    name: '坦检人姓名',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrxb',
                    name: '坦检人性别',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrzz',
                    name: '坦检人住址',
                    classname: 'easyui-textbox'
                }, {
                    id: 'tjrdh',
                    name: '坦检人电话',
                    classname: 'easyui-textbox'
                }],
                // 页面需要的按钮 添加、编辑、删除、打印、导出
                "tools": [{
                    // 工具栏id
                    id: 'add',
                    // 工具栏名称
                    name: '添加',
                    // 工具栏图标
                    icons: 'fa fa-plus-square',
                    // click:function(){
                    //     console.log("aaa");
                    // }
                }, {
                    id: 'edit',
                    name: '编辑',
                    icons: 'fa fa-pencil-square'
                }, {
                    id: 'delete',
                    name: '删除',
                    icons: 'fa fa-times-rectangle'
                }, {
                    id: 'export',
                    name: '导出',
                    icons: 'fa fa-pie-chart'
                }, {
                    id: 'print',
                    name: '打印',
                    icons: 'fa fa-check-circle'
                }],
            }, clumns.gwgl(), 'ryxxTable')
        },

        toolsInit: function () {
            $('.comp-search-box').compSearchBox(); //高级查询的条件查询
            $('#searchBtn').on('click', function () {
                alert(util.json2Str(util.form2Json('searchForm')));
                jbxxTable.datagrid('reload');
            });
            $('#excelData').on('click', function () {
                jbxxTable.datagrid('toExcel', '检查督导.xls');
            });
            $('#printData').on('click', function () {
                jbxxTable.datagrid('print', '检查督导');
            });
        },

        gridInit: function () {
            jbxxTable = grid.init('ryxxTable', {
                url: '/mock/swj/common/count',
                title: '',
                method: 'get',
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                // pagination: false,
                detailviewshow: true,
                firstLoad: false,
                columns: clumns.gwgl()
            });
        }
    };
    $(main.init);
});
