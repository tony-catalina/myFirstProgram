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
    var main={
        'init':function () {
            util.watermark(['张三','北京市第一看守所']);
            echart.init('Canvas3',{url:'/mock/echart/linedata',type:'bar',config:{}});
            grid.init('test_table',{
                url:url['zdryfx'],
                width: '100%',
                pagination:true,
                detailviewshow:true,
                height: window.innerHeight - 78,
                columns: clumns.zdryfx()
            });
        }
    };
    $(function() {
        main.init();
    });
});
