define(function (require) {
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
            tools.toolsbar('tooles',{
                // 查询条件里面的字段
                "searchif": [{
                    // input框name名
                    id: 'blrq_time',
                    // 字段名
                    name: '办理日期',
                    // input框类型
                    classname: 'easyui-datebox'
                }, {
                    id: 'end_time',
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
            }, clumns.hjbd(), 'test_table');
        },

        gridInit:function(){
            jbxxTable=grid.init('test_table', {
                url: url['hjbd'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                pagination: false,
                toolbar: '#toolbar',
                firstLoad: true,
                singleSelect:true,
                columns:clumns.hjbd(true),
                onDblClickCell: function(index,field,value){
                    //弹出框
                    pop.tablePop({
                        tfid:field,
                        url:'/kss/getHjbdList',
                        method:'get',
                        clumns:clumns.hjbddj(),
                        data:{
                            'jsbh':$("#test_table").datagrid("getSelected").jsbh,
                            'starttime':$("input[name='starttime']").val(),
                            'endtime':$("input[name='endtime']").val(),
                        },
                        popfield:'count'
                    });
                }
            });
        }
    };
    $(main.init);
});
