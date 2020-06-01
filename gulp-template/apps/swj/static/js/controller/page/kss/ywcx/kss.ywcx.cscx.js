define( function (require) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/kss/clumns');
    var url=require('modules/kss/kssurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');
    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            main.gridInit();
            //工具栏
            tools.toolsbar('tooles', {
                // 查询条件里面的字段
                "searchif": [{
                    // input框name名
                    id: 'starttime',
                    // 字段名
                    name: '出所日期',
                    // input框类型
                    classname: 'easyui-datebox'
                }, {
                    id: 'endtime',
                    name: '至',
                    classname: 'easyui-datebox'
                }],
                // 高级查询里面的字段
                "highsearch": [],
                // 页面需要的按钮 添加、编辑、删除、打印、导出
                "tools": [{
                    id: 'export',
                    name: '导出Excel',
                    icons: 'fa fa-pie-chart'
                }],
            }, clumns.cscx(), 'test_table');




            $("#test_table").datagrid({
                onRowContextMenu: function (e, rowIndex, rowData) { //右键时触发事件
                    //三个参数：e里面的内容很多，真心不明白，rowIndex就是当前点击时所在行的索引，rowData当前行的数据
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid("clearSelections"); //取消所有选中项
                    $(this).datagrid("selectRow", rowIndex); //根据索引选中该行
                    $('#menu').menu('show', {
                        //显示右键菜单
                        left: e.pageX,//在鼠标点击处显示菜单
                        top: e.pageY
                    });
                    e.preventDefault();  //阻止浏览器自带的右键菜单弹出
                }
            });
        },
        gridInit: function () {
            jbxxTable = grid.init('test_table', {
                url: url['cscx'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                pagination: false,
                toolbar: '#toolbar',
                firstLoad: true,
                singleSelect: true,
                columns: clumns.cscx(true),
                onDblClickCell: function (index, field, value) {
                    //弹出框
                    pop.tablePop({
                        tfid: field,
                        url: '/swj/kss/jjxList',
                        method: 'get',
                        clumns: clumns.cscxdj(),
                        data: {
                            'jsbh': $("#test_table").datagrid("getSelected").jsbh,
                            'starttime': $("input[name='starttime']").val(),
                            'endtime': $("input[name='endtime']").val(),
                        },
                        popfield: 'count'
                    });
                }
            });
        }
    };
    $(main.init);
});
