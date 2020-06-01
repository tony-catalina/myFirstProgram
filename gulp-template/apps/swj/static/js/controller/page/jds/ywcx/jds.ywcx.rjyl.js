define(function (require) {
    require('jquery');
    require('easyui');
    var layer=require('layer');
    var compSearchBox=require('awd/jquery/compSearchBox');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/jds/clumns');
    var url=require('modules/jds/jdsurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');
    var jbxxTable;
    var main = {
        init: function () {
            $.parser.parse();
            main.toolsInit();
            main.gridInit();
            tools.toolsbar('jdsRjyl',{
                // 查询条件里面的字段
                "searchif": [ {
                    id: 'time',
                    name: '统计日期',
                    classname: 'easyui-datebox'
                }],
                // 高级查询里面的字段
                "highsearch": [],
                // 页面需要的按钮 添加、编辑、删除、打印、导出
                "tools":[],
            }, clumns.rjyl(), 'test_table');
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
                url: url['rjyl'],
                fit: false,
                width: '100%',
                height: window.innerHeight - 110,
                pagination: false,
                toolbar: '#toolbar',
                firstLoad: false,
                columns:clumns.rjyl(true)
            });
        }
    };
    $(main.init);
});
