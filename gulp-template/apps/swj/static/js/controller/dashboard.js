define(function(require){
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var echart = require('awd/echart/echart');
    var main={
        'init':function () {
            grid.init('test_table',{
               width: '100%',
               height: '300px',
               columns: [{
                   field: 'oid',
                   title: '序号',
                   formatter: function(value, rowData, rowIndex) {
                     return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
                   }
                 },
                 {
                   field: 'jsbh',
                   width: 150,
                   title: '监所编号',
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                   }
                 },
                 {
                   field: 'rybh',
                   title: '人员编号',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                   }
                 },
                 {
                   field: 'xm',
                   title: '姓名',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                   }
                 },
                 {
                   field: 'sqwp',
                   title: '申请物品',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                   }
                 },
                 {
                   field: 'sqyy',
                   title: '申请原因',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                   }
                 },
                 {
                   field: 'sqsj',
                   title: '申请时间',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                   }
                 },
                 {
                   field: 'qtblr',
                   title: '前台办理人',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                   }
                 },
                 {
                   field: 'qtblsj',
                   title: '前台办理时间',
                   width: 150,
                   sortable: 'true',
                   formatter: function(value, row) {
                     return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                   }
                 }
               ]});
            util.watermark(['张三','北京市第一看守所']);
            var data=[
              {nr:'一流企业需要文化基因',sj:'2019-12-10'},
              {nr:'文化企业要有担当 做大做强体育产业',sj:'2019-01-10'},
              {nr:'《中央文化企业国有资产监督管理暂行办法》印发',sj:'2019-01-10'},
              {nr:'打造文化精品 提升员工向心力',sj:'2019-01-10'},
              {nr:'加大国有文化企业海外并购扶持力度',sj:'2019-01-10'},
              {nr:'完美公司:搭建侨商公益平台 促进侨胞文化交流',sj:'2019-01-10'},
              {nr:'科学发展作指导 诚信文化促进会举行年度表彰大会 邀企业做诚信承诺',sj:'2019-01-10'}
            ];
            echart.init('Canvas3',{url:'/mock/echart/linedata',type:'bar',config:{}});
            echart.init('chart-panel',{url:'/mock/echart/piedata',type:'pie',config:{text:'测试'}});
        }
    };
    $(function() {
        main.init();
    });
});
