define(function (require) {
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
            main.toolsInit();
            main.gridInit();
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
                url: url['barycx'],
                title: '人员信息',
                fit: true,
                width: '100%',
                height: window.innerHeight - 178,
                toolbar: '#toolbar',
                firstLoad: false,
                columns:clumns.jbxx(true)
            });
        }
    };
    $(main.init);
});
