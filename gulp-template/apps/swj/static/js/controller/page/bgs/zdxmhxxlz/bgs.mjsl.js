define(function (require) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/bgs/clumns');
    var url=require('modules/bgs/bgsurl');
    var tools=require('awd/jquery/tools');
    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            main.toolsInit();
            main.gridInit();
            tools.toolsbar('bgsMjsl',{
                // 查询条件里面的字段
                "searchif": [{
                    // input框name名
                    id: 'jsmc',
                    // 字段名
                    name: '监所名称',
                    // input框类型
                    classname: 'easyui-textbox'
                }],
                // 高级查询里面的字段
                "highsearch": [],
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
            }, clumns.mjsl(), 'test_table');
        },
        toolsInit: function () {
            $('.comp-search-box').compSearchBox(); //高级查询的条件查询
            $('#addBtn').on('click', function () {

            });
            $('#searchBtn').on('click',function(){

            });
        },

        gridInit:function(){
            jbxxTable=grid.init('test_table', {
                url: url['mjsl'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                // pagination: false,
                toolbar: '#toolbar',
                firstLoad: false,
                columns:clumns.mjsl(true)
            });
        }
    };
    $(main.init);
});
