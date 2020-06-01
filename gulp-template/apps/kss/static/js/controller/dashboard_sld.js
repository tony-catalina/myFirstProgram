/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var echarts = require('echarts');
    var util = require('awd/easyui/util');
    var tableUtils = require('awd/layui/table_utils');
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var tableUtils = require('awd/layui/table_utils');
    var echart = require('awd/echart/echart');
    var progressBar = require('modules/progressBar');
    var Box_Height = $('.item-content').height(); //获取1盒容器的高以供Echarts使用。
    var newListTpl = require('services/com/newsList.html');
    var newsDatas = [
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
    ];
    //界面控件
    var main = {
        init: function() {
            main.layout();
            main.eventBind();

        },
        layout: function() {
            main.tzgg();
            main.szcxq();
            main.drjx();
            main.ldsp();
            main.czqk();
            main.jqsz();
        },
        jqsz: function() {
            $.ajax({
                url: url.JqssQuery,
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    document.querySelector("#zyrs").innerHTML = res.result.zyrs;
                    document.querySelector("#nanx").innerHTML = res.result.nanx;
                    document.querySelector("#nvx").innerHTML = res.result.nvx;
                    document.querySelector("#jrcs").innerHTML = res.result.jrcs;
                    document.querySelector("#jrrs").innerHTML = res.result.jrrs;
                    document.querySelector("#yjfx").innerHTML = res.result.yjfx;
                    document.querySelector("#ejfx").innerHTML = res.result.ejfx;
                    document.querySelector("#sjfx").innerHTML = res.result.sjfx;
                    $('#zyrs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {},
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })
                    });
                    $('#nanx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "xb": 1
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })
                    });
                    $('#nvx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "xb": 2
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#yjfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 1
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#ejfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 2
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#sjfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 3
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#jrcs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syJrcrsQuery,
                            params: {
                                processDefinitionKey: 'ybcs'
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#jrrs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syJrcrsQuery,
                            params: {
                                processDefinitionKey: 'ybrs'
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    
                    $('#More_Title').on('click', function() {
                        layer.open({
                            title: '关押动态',
                            type: 1,
                            area: ['72%', '87%'],
                            content: '<table id="table">' +
                                ' <tr>' +
                                ' <td rowspan="4">' +
                                '在所人员<br>' +
                                +res.result.zyrs +
                                '</td>' +
                                '<td>男</td>' +
                                '<td>' + res.result.nanx + '</td>' +
                                '<td>女</td>' +
                                '<td>' + res.result.nvx + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>正常入所</td>' +
                                '<td>' + res.result.zcrs + '</td>' +
                                '<td>投送未收</td>' +
                                '<td>' + res.result.tsws + '</td>' +
                                '<td>非逮捕入所</td>' +
                                '<td>' + res.result.fjbrs + '</td>' +
                                '<td>其他</td>' +
                                '<td>' + res.result.qt + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>拘留数</td>' +
                                '<td>' + res.result.jls + '</td>' +
                                '<td>逮捕数</td>' +
                                '<td>' + res.result.dbs + '</td>' +
                                '<td>已决数</td>' +
                                '<td>' + res.result.yjs + '</td>' +
                                '<td>劳教数</td>' +
                                '<td>' + res.result.ljs + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>少管数</td>' +
                                '<td>' + res.result.sgs + '</td>' +
                                '<td>寄押数</td>' +
                                '<td>' + res.result.jys + '</td>' +
                                '<td>留所服刑</td>' +
                                '<td>' + res.result.lsfx + '</td>' +
                                '<td>待投劳</td>' +
                                '<td>' + res.result.dtl + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td rowspan="3">' +
                                ' 当班<br>出入所</td>' +
                                '<td>入所</td>' +
                                '<td>' + res.result.rs + '</td>' +
                                '<td>不宜收押</td>' +
                                '<td>' + res.result.bysy + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>出所</td>' +
                                '<td>' + res.result.cs + '</td>' +
                                '<td>投送监狱</td>' +
                                '<td>' + res.result.tsjy + '</td>' +
                                '<td>刑满释放</td>' +
                                '<td>' + res.result.xmsf + '</td>' +
                                '<td>变更措施</td>' +
                                '<td>' + res.result.bgcs + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>临时出所</td>' +
                                '<td>' + res.result.lscs + '</td>' +
                                '<td>未回所</td>' +
                                '<td>' + res.result.whs + '</td>' +
                                '<td>已回所</td>' +
                                '<td>' + res.result.yhs + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>监区出入</td>' +
                                '<td>监区内</td>' +
                                '<td>' + res.result.jqn + '</td>' +
                                '<td>监区外</td>' +
                                '<td>' + res.result.jqw + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>医疗管理</td>' +
                                '<td>重病号</td>' +
                                '<td>' + res.result.zbh + '</td>' +
                                '<td>所外就医</td>' +
                                '<td>' + res.result.swjy + '</td>' +
                                '<td>所内就医</td>' +
                                '<td>' + res.result.snjy + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>安全管理</td>' +
                                '<td>严管对象</td>' +
                                '<td>' + res.result.ygdx + '</td>' +
                                '<td>耳目</td>' +
                                '<td>' + res.result.em + '</td>' +
                                '<td>违规</td>' +
                                '<td>' + res.result.wg + '</td>' +
                                '<td>加戴械具</td>' +
                                '<td>' + res.result.jdxj + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>提讯会见</td>' +
                                '<td>提讯</td>' +
                                '<td>' + res.result.tx + '</td>' +
                                '<td>家属会见</td>' +
                                '<td>' + res.result.jshj + '</td>' +
                                '<td>律师会见</td>' +
                                '<td>' + res.result.lshj + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>关押期限</td>' +
                                '<td>三日内到期</td>' +
                                '<td>' + res.result.stdq + '</td>' +
                                '<td>超期</td>' +
                                '<td>' + res.result.cq + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '</table>',
                            btn: []
                        })
                    });
                }
            })
        },
        tzgg: function() {
            // 通知通告
            $.ajax({
                url: url.xkTztgQuery,
                type: "POST",
                data: {},
                success: res => {
                    res = res.result;
                    for(var i=0;i<newsDatas.length;i++){
                        newsDatas[i].title=res.rows[i].title;
                        newsDatas[i].date=res.rows[i].createtime;
                    }
                    var html = newListTpl('com/newsList', { data: newsDatas });
                    $(".Message_box").html(html);
                }
            })
            $(".Message_box").on('click', '.LineS_box', function() {
                tableUtils.popup({
                    title: '待办事项',
                    content: 'hahha'
                })
            })
        },
        szcxq: function() {
            var szcxqDatas = [
                { name: '收押入所', percentage: '0', number: 0, color: 'skill_color4', filter: "syrs", paramsValue: 'rsdj' },
                { name: '出所管理', percentage: '0', number: 0, color: 'skill_color4', filter: "csgl", paramsValue: 'csgl' },
                { name: '律师会见', percentage: '0', number: 0, color: 'skill_color4', filter: "lshj", paramsValue: 'lshj' },
                { name: '家属会见', percentage: '0', number: 0, color: 'skill_color4', filter: "jshj", paramsValue: 'jshj' },
            ]
            $.ajax({
                url: url.SzcxqQuery,
                data: '',
                type: 'post',
                success: function(res) {
                    if (res.success) {
                        for (var key in res.result) {
                            szcxqDatas.forEach(function(item, idx) {
                                if (item.filter == key) {
                                    szcxqDatas[idx].percentage = res.result[key] / 10 + '%';
                                    szcxqDatas[idx].number = res.result[key]
                                }
                            })
                        }
                        progressBar.init('szcxq', {
                            data: szcxqDatas,
                            title: '所长查询区',
                            url: url.sldSzcxqQuery,
                            paramsKey: 'lckeys',
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '180', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '180', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '300', title: '办案单位', align: 'center' },
                            ]
                        });

                    }
                }
            });
        },
        drjx: function() {
            var drjxCharts = echarts.init(document.querySelector('.drjx'));
            // var start = new Date(new Date().setHours(0, 0, 0, 0));
            // var end = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1);
            $.ajax({
                url: url.mjdrkh,
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    res = res.result;
                    var drjxoption = {
                        tooltip: {
                            trigger: 'item',
                        },
                        legend: {
                            orient: 'vertical',
                            left: 10,
                            data: ['迟到', '早退', '旷工', '正常']
                        },
                        series: [{
                                name: '当日绩效',
                                type: 'pie',
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            var colorList = ['#FF7883', '#FEAF38', '#C277F5', '#3EA1FE'];
                                            return colorList[params.dataIndex]
                                        }
                                    }
                                },
                                radius: [0, '30%'],
                                label: {
                                    show: false
                                },
                                data: [
                                    { value: res.cd, name: '迟到' },
                                    { value: res.zt, name: '早退' },
                                    { value: res.kg, name: '旷工' },
                                    { value: res.zc, name: '正常' }
                                ]
                            },
                            {
                                name: '人数占比',
                                type: 'pie',
                                radius: ['40%', '55%'],
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            var colorList = ['#FCB6B2', '#fb9323', '#EFABFD', '#7ACDFD'];
                                            return colorList[params.dataIndex]
                                        }
                                    }
                                },
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontWeight: 200,
                                        fontSize: 9
                                    },
                                    formatter: function (params) {
                                        return params.name + ':' + params.percent + '%';
                                    }
                                },
                                data: [
                                    { value: res.cd, name: '迟到' },
                                    { value: res.zt, name: '早退' },
                                    { value: res.kg, name: '旷工' },
                                    { value: res.zc, name: '正常' }
                                ]
                            }
                        ]
                    };
                    drjxCharts.setOption(drjxoption);
                    drjxCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        drjxCharts.resize();
                    };
                }
            });
            drjxCharts.on('click', function(params) {
                let ParamsData = "";
                if (params.name == "迟到") ParamsData = "1"
                else if (params.name == "早退") ParamsData = "2"
                else if (params.name == "旷工") ParamsData = "3"
                else ParamsData = "4"
                tableUtils.popup({
                    title: '&#xe61e;当日绩效',
                    url: url.sldMjdrjxkhsQuery,
                    params: {
                        "ywlx": ParamsData
                    },
                    request:{
                        pageName: 'page', //页码的参数名称，默认：page
                        limitName: 'rows' //每页数据量的参数名，默认：limit
                    },
                    columns: [
                        { field: 'jh', width: '230', title: '警号', align: 'center' },
                        { field: 'xm', width: '230', title: '姓名', align: 'center' },
                        { field: 'sfzh', width: '230', title: '身份证', align: 'center' },
                        { field: 'kqqk', width: '230', title: '考核情况', align: 'center' },
                        { field: 'djr', width: '230', title: '登记人', align: 'center' },
                        { field: 'djsj', width: '230', title: '登记时间', align: 'center' },
                    ],
                })
            })

        },
        ldsp: function() {
            var ldspCharts = echarts.init(document.querySelector('.ldsp'));

            $.ajax({
                url: url.DbsxQuery,
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    res = res.result;
                    var ldspoption = {
                        tooltip: {
                            trigger: 'item',
                        },
                        legend: {
                            orient: 'vertical',
                            left: 10,
                            data: ['监室调整', '临时出所', '械具加载', '收押入所','出所管理']
                        },
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            left: 30,
                            radius: ['40%', '60%'],
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var colorList = ['#F9A336', '#EF5378', '#CF6AF4','#3D93F6', '#7D43F1'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            label: {
                                show: true,
                                formatter: '{c}条',
                                // fontSize: 18
                            },
                            data: [
                                { value: res.kss_jstz, name: '监室调整' },
                                { value: res.kss_lscs, name: '临时出所' },
                                { value: res.kss_xjjz, name: '械具加载' },
                                { value: res.kss_cyrs, name: '收押入所' },
                                { value: res.kss_csgl, name: '出所管理' },
                            ]
                        }]
                    };
                    ldspCharts.setOption(ldspoption);
                    ldspCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        ldspCharts.resize();
                    };


                },
            })

            ldspCharts.on('click', function(params) {
                console.log(params);
                let ParamsData = "";
                if (params.name == "监室调整") ParamsData = "kss_jstz"
                else if (params.name == "临时出所") ParamsData = "kss_lscs"
                else if (params.name == "械具加载") ParamsData = "kss_xjjz"
                else if (params.name == "收押入所") ParamsData = "kss_cyrs"
                else ParamsData = 'kss_csgl'
                tableUtils.popup({
                    title: '&#xe61e;代办事项',
                    url: url.processTaskList,
                    params: {
                        "processDefinitionKey": ParamsData
                    },
                    request:{
                        pageName: 'page', //页码的参数名称，默认：page
                        limitName: 'rows' //每页数据量的参数名，默认：limit
                    },
                    columns: [
                        { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                        { field: 'xm', width: '180', title: '姓名', align: 'center' },
                        { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                        { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                        { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                        { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                        { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                    ],
                })

            });

        },

        czqk: function() {
            var czqkCharts = echarts.init(document.querySelector('.czqk'));
            $.ajax({
                url: url.BjczqkQuery,
                type: 'POST',
                data: {
                    jsbh: '110000114',
                    startDate: '2020-05-10 10:20:41',
                    endDate: '2020-05-14 10:41:23'
                },
                success: res => {
                    console.log(res);
                    res = res.result;
                    var czqkOptions = echart.getOption('bar_line', '', [{
                        name: '已有数据总量',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        data: [{ value: res.mjbj, name: '门禁报警' },
                            { value: res.fcbj, name: '风场报警', },
                            { value: res.xgbj, name: '限高报警' },
                            { value: res.jsbj, name: '监室报警' },
                        ],
                        label: {
                            show: true,
                            position: 'bottom',
                            formatter: function(parama) {
                                return parama.name
                            },
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 0, 20, 20],
                                color: function(params) {
                                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                    var colorList = ['#56AFFE', '#FE7784', '#FFAA35', '#0FDBC3', '#0FD9C5', '#749f83', '#8B79FB'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }, {
                        name: '数据最高值',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        data: [{ value: 10, name: '门禁报警' },
                            { value: 10, name: '风场报警' },
                            { value: 10, name: '限高报警' },
                            { value: 10, name: '监室报警' }
                        ],
                        itemStyle: {
                            normal: {
                                barBorderRadius: [50, 50, 0, 0],
                                color: function(params) {
                                    var colorList = ['rgb(65,105,225,0.2)', 'rgb(220,20,60,0.2)', 'rgb(255,228,181,0.2)', 'rgb(0,206,209,0.2)', 'rgb(0,139,139,0.2)'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }])
                    czqkCharts.setOption(czqkOptions);
                    czqkCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        czqkCharts.resize();

                    };

                }
            })
            czqkCharts.on('click', function(params) {
                // console.log("--------"+res.length)
                // for (var i = 0; i<res.length; i++) {
                //     console.log("name===="+params.data.name+"bahjString==="+res[i].bahjString+"bahj==="+res[i].bahjCode)
                //     if (params.data.name == res[i].bahjString) {
                //         paramsName = res[i].bahjCode;
                //         console.log(paramsName)
                //         break;
                //     }
                // }
                if (params.name == "门禁报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: url.sldGlslbjjczqkQuery,
                        params: {
                            "ywlx":1
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "风场报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: url.sldGlslbjjczqkQuery,
                        params: {
                            "ywlx":2
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "限高报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: url.sldGlslbjjczqkQuery,
                        params: {
                            "ywlx":3
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "监室报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: url.sldGlslbjjczqkQuery,
                        params: {
                            "ywlx":4
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],
                    })
                }
            })
        },
        eventBind: function() {
            $('.icon_box').on('click', function() {
                var role = $(this).attr('role');
                window.parent.loadMenu(role);
            });
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});