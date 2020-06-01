define(function (require) {
    require('jquery');
    require('easyui');
    var layutils=require('awd/layui/utils');
    var jsdtTpl=require('services/jsdt/gsrs.html');
    var grid=require('awd/easyui/grid');
    var util=require('awd/easyui/util');
    var clumns=require('modules/main/clumns');
    var url=require('modules/main/mainurl');
    var echart=require('awd/echart/echart');
    var tools=require('awd/jquery/tools');
    var main={
        'init':function () {
            util.watermark(['张三','北京市第一看守所']);
            echart.init('Canvas3',{url:'/mock/echart/linedata',type:'bar',config:{}});
            grid.init('test_table',{
                width: '100%',
                pagination:true,
                detailviewshow:true,
                height: window.innerHeight - 78,
                columns: clumns.sjjsx()
            });
        }
    };
    $(function() {
        main.init();
    });
});
