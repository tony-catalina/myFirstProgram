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
    var main = {
        init: function () {
            $.parser.parse();
            util.watermark(['张三','北京市第一看守所']);
            main.jsdtInit();
            main.gdqxsInit();
            main.gjsxsInit();
            main.jqxrmxInit();
        },
        jsdtInit:function(){
            util.ajax({
                url:'/mock/swj/xsrs/data',
                type:'get',
                func:function(data){
                    $('#gsrs').html(jsdtTpl('jsdt/gsrs',data));
                    $('.jsdtlist').each(function(){
                        $(this).on('click',function(){
                            main.showPersion({
                                url:$(this).attr('url'),
                                params:util.str2Json($(this).attr('param'))
                            });
                        });
                    });
                }
            });

        },
        gdqxsInit:function(){
            echart.init('chartWork',{
                url:'/mock/echart/linedata',
                type:'line',
                click:function(params){
                    main.showPersion({
                        url:'/mock/kss_jssw/QueryJsswByYwzt',
                        params:{}
                    });
                }
            });
        },
        gjsxsInit:function(){

        },
        jqxrmxInit:function(){
            grid.init('kss_table', {
                url: 'params',
                title: '',
                method:'get',
                fit: false,
                wid: '100%',
                height: '400px',
                toolbar: '#toolbar',
                firstLoad: true,
                columns: clumns.jbxx({})
            });
            grid.init('jls_table', {
                url: '/kss_jssw/QueryJsswByYwzt',
                title: '',
                method:'get',
                fit: true,
                wid: '100%',
                height: '400px',
                toolbar: '#toolbar',
                firstLoad: true,
                columns: [{
                    field: 'oid',
                    title: '序号',
                    formatter: function (value, rowData, rowIndex) {
                        return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
                    }
                },
                    {
                        field: 'jsbh',
                        width: 150,
                        title: '监所编号',
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                        }
                    },
                    {
                        field: 'rybh',
                        title: '人员编号',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                        }
                    },
                    {
                        field: 'xm',
                        title: '姓名',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                        }
                    },
                    {
                        field: 'sqwp',
                        title: '申请物品',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                        }
                    },
                    {
                        field: 'sqyy',
                        title: '申请原因',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                        }
                    },
                    {
                        field: 'sqsj',
                        title: '申请时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                        }
                    },
                    {
                        field: 'qtblr',
                        title: '前台办理人',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                        }
                    },
                    {
                        field: 'qtblsj',
                        title: '前台办理时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                        }
                    }
                ]
            });
            grid.init('jds_table', {
                url: url['/kss_jssw/QueryJsswByYwzt'],
                title: '',
                fit: true,
                method:'get',
                width: '100%',
                height: '400px',
                toolbar: '#toolbar',
                firstLoad: true,
                columns: [{
                    field: 'oid',
                    title: '序号',
                    formatter: function (value, rowData, rowIndex) {
                        return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
                    }
                },
                    {
                        field: 'jsbh',
                        width: 150,
                        title: '监所编号',
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                        }
                    },
                    {
                        field: 'rybh',
                        title: '人员编号',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                        }
                    },
                    {
                        field: 'xm',
                        title: '姓名',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                        }
                    },
                    {
                        field: 'sqwp',
                        title: '申请物品',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                        }
                    },
                    {
                        field: 'sqyy',
                        title: '申请原因',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                        }
                    },
                    {
                        field: 'sqsj',
                        title: '申请时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                        }
                    },
                    {
                        field: 'qtblr',
                        title: '前台办理人',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                        }
                    },
                    {
                        field: 'qtblsj',
                        title: '前台办理时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                        }
                    }
                ]
            });
            grid.init('jhyl_table', {
                url: url['/kss_jssw/QueryJsswByYwzt'],
                title: '',
                fit: true,
                method:'get',
                width: '100%',
                height: '400px',
                toolbar: '#toolbar',
                firstLoad: true,
                columns: [{
                    field: 'oid',
                    title: '序号',
                    formatter: function (value, rowData, rowIndex) {
                        return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
                    }
                },
                    {
                        field: 'jsbh',
                        width: 150,
                        title: '监所编号',
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                        }
                    },
                    {
                        field: 'rybh',
                        title: '人员编号',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                        }
                    },
                    {
                        field: 'xm',
                        title: '姓名',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                        }
                    },
                    {
                        field: 'sqwp',
                        title: '申请物品',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                        }
                    },
                    {
                        field: 'sqyy',
                        title: '申请原因',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                        }
                    },
                    {
                        field: 'sqsj',
                        title: '申请时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                        }
                    },
                    {
                        field: 'qtblr',
                        title: '前台办理人',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                        }
                    },
                    {
                        field: 'qtblsj',
                        title: '前台办理时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                        }
                    }
                ]
            });
            grid.init('qzyl_table', {
                url: url['/kss_jssw/QueryJsswByYwzt'],
                title: '',
                fit: true,
                method:'get',
                width: '100%',
                height: '400px',
                toolbar: '#toolbar',
                firstLoad: true,
                columns: [{
                    field: 'oid',
                    title: '序号',
                    formatter: function (value, rowData, rowIndex) {
                        return '<input type="radio" name="ryRadio" id="ryRadio' + rowIndex + '" value="' + rowData.oid + '" />';
                    }
                },
                    {
                        field: 'jsbh',
                        width: 150,
                        title: '监所编号',
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.jsbh == null ? '' : row.jsbh) + '>' + (row.jsbh == null ? '' : row.jsbh) + '</span>';
                        }
                    },
                    {
                        field: 'rybh',
                        title: '人员编号',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.rybh == null ? '' : row.rybh) + '>' + (row.rybh == null ? '' : row.rybh) + '</span>';
                        }
                    },
                    {
                        field: 'xm',
                        title: '姓名',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.xm == null ? '' : row.xm) + '>' + (row.xm == null ? '' : row.xm) + '</span>';
                        }
                    },
                    {
                        field: 'sqwp',
                        title: '申请物品',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqwp == null ? '' : row.sqwp) + '>' + (row.sqwp == null ? '' : row.sqwp) + '</span>';
                        }
                    },
                    {
                        field: 'sqyy',
                        title: '申请原因',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqyy == null ? '' : row.sqyy) + '>' + (row.sqyy == null ? '' : row.sqyy) + '</span>';
                        }
                    },
                    {
                        field: 'sqsj',
                        title: '申请时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.sqsj == null ? '' : row.sqsj) + '>' + (row.sqsj == null ? '' : row.sqsj) + '</span>';
                        }
                    },
                    {
                        field: 'qtblr',
                        title: '前台办理人',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblr == null ? '' : row.qtblr) + '>' + (row.qtblr == null ? '' : row.qtblr) + '</span>';
                        }
                    },
                    {
                        field: 'qtblsj',
                        title: '前台办理时间',
                        width: 150,
                        sortable: 'true',
                        formatter: function (value, row) {
                            return '<span title=' + (row.qtblsj == null ? '' : row.qtblsj) + '>' + (row.qtblsj == null ? '' : row.qtblsj) + '</span>';
                        }
                    }
                ]
            });
        },
        showPersion:function(option){
            if(!tools.isUndefined(option.url)){
                var params=tools.isUndefined(option.params)?{}:option.params;
                $('#laywin').html('<table id="jbxxlist"></table>');
                var laywin=layutils.showWin({
                    title:'人员信息新增',
                    // area:['500px','450px'],
                    content:$('#laywin'),
                    success:function(){
                        grid.init('jbxxlist',{
                            url: '/mock/kss_jssw/QueryJsswByYwzt',
                            title: '',
                            fit: false,
                            width: window.innerWidth-18,
                            height: window.innerHeight - 108,
                            firstLoad: true,
                            queryParams:params,
                            columns: clumns.jbxx({})
                        });
                    }
                });
                layer.full(laywin);
            }
        }
    };
    $(main.init);
});
