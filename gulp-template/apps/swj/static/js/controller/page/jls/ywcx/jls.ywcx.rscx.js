define( function (require) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/jls/clumns');
    var url=require('modules/jls/jlsurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');
    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            main.gridInit();
            //工具栏
            tools.toolsbar('tooles', {
                "searchif": [{
                    id: 'rsrq',
                    name: '入所日期',
                    classname: 'easyui-datebox'
                }, {
                    id: 'endTime',
                    name: '至',
                    classname: 'easyui-datebox'
                }],
                // 高级查询里面的字段
                "highsearch": [],
                // 页面需要的按钮 导出
                "tools": [{
                    id: 'export',
                    name: '导出excel',
                    icons: 'fa fa-pie-chart'
                }],
            }, clumns.rscx(), 'test_table')
        },

        gridInit: function () {
            jbxxTable = grid.init('test_table', {
                url: url['rscx'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                pagination: false,
                toolbar: '#toolbar',
                firstLoad: false,
                columns: clumns.rscx(true),
                onDblClickCell: function (index, field, value) {
                    //弹出框
                    pop.tablePop({
                        tfid: field,
                        url: '/swj/jls/jbxxlist',
                        method: 'get',
                        clumns: clumns.rscxdj(),
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
