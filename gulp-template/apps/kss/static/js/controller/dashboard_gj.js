/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var utils = require('awd/layui/utils');
    var tableUtils = require('awd/layui/table_utils');
    var url = require('modules/url');
    var tools = require('awd/jquery/tools');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function() {
            main.initList();
            main.initTable();
            main.initEchart();
        },
        initEchart: function() {
            main.byYwtj();
            main.qybz();
        },
        initList: function() {
            main.jjb();
            main.wmjs();
            main.ygjs();
        },
        initTable: function() {
            main.jstzjv();
            main.xsjv();
            main.xjjv();
        },
        //本周监室调整记录
        jstzjv: function() {
            var table = layui.table;
            // layui.use('table', function() {
            //     table.render({
            //         elem: '#jstzjv',
            //         method: 'post',
            //         url: url.bzJstzList, //数据接口
            //         page: true,
            //         even: true,
            //         height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jstzjv').parentNode.offsetHeight + 5),
            //         skin: 'line',
            //         page: {
            //             limit: 5
            //         },
            //         cols: [
            //             [
            //                 { field: 'jsbh', width: 100, title: '监所编号' },
            //                 { field: 'rybh', width: 120, title: '人员编号' },
            //                 { field: 'tzsj', width: 120, title: '调整时间' },
            //                 { field: 'yjsh', title: '原监室号', width: 120 },
            //                 { field: 'xjsh', title: '现监室号', width: 120 },
            //                 { field: 'yy', title: '原因', width: 130 },
            //             ]
            //         ],
            //     })

            // });
            tableUtils.init('jstzjv', {
                url: url.bzJstzList, //数据接口
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jstzjv').parentNode.offsetHeight + 5),
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'jsbh', width: 100, title: '监所编号' },
                    { field: 'snbh', width: 120, title: '人员编号' },
                    { field: 'tzsj', width: 120, title: '调整时间' },
                    { field: 'yjsh', title: '原监室号', width: 120 },
                    { field: 'xjsh', title: '现监室号', width: 120 },
                    { field: 'yy', title: '原因', width: 130 },
                ]
            });
        },
        // 本周巡视记录
        //问题:目前需要对接接口 响应接口的字段与需求的字段不一致
        xsjv: function() {
            var table = layui.table;
            layui.use('table', function() {
                table.render({
                    elem: '#xsjv', //
                    method: 'post',
                    url: url.bzXsjlList, //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xsjv').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'jsbh', width: '25%', title: '监所编号' },
                            { field: 'xjrq', width: '25%', title: '巡视日期' },
                            { field: 'xjr', width: '25%', title: '巡视人' },
                            { field: 'ycqk', title: '异常情况', width: '25%' },
                        ]
                    ],
                });
            });
            tableUtils.init('xsjv', {
                url: url.bzXsjlList, //数据接口
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xsjv').parentNode.offsetHeight + 5),
                page: {
                    limit: 5
                },
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'jsbh', width: '25%', title: '监所编号' },
                    { field: 'xssj', width: '25%', title: '巡视日期' },
                    { field: 'xsmj', width: '25%', title: '巡视人' },
                    { field: 'xsqk', title: '异常情况', width: '25%' },
                ]
            });
        },
        xjjv: function() {
            var table = layui.table;
            layui.use('table', function() {
                table.render({
                    elem: '#xjjv', //本周械具记录
                    method: 'post',
                    url: url.bzXjsyList, //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xjjv').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'jsbh', width: 100, title: '监所编号' },
                            { field: 'rybh', width: 120, title: '人员编号' },
                            { field: 'xjmc', width: 120, title: '械具名称' },
                            { field: 'jjsl', title: '械具数量', width: 80 },
                            { field: 'syts', title: '使用天数', width: 80 },
                            { field: 'jssj', title: '结束时间', width: 120 },

                        ]
                    ],
                });

            });

            tableUtils.init('xjjv', {
                url: url.bzXjsyList, //数据接口
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xjjv').parentNode.offsetHeight + 5),
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'jsbh', width: 100, title: '监所编号' },
                    { field: 'rybh', width: 120, title: '人员编号' },
                    { field: 'xjmc', width: 120, title: '械具名称' },
                    { field: 'jjsl', title: '械具数量', width: 80 },
                    { field: 'syts', title: '使用天数', width: 80 },
                    { field: 'jssj', title: '结束时间', width: 120 },
                ]
            });
        },
        // 交接班
        jjb: function() {
            var peopleInfo = [{
                icon: 'chuangkoufuwu',
                title: '交接班人员',
                info: ''
            }, {
                icon: 'chuangkoufuwu',
                title: '交接班时间',
                info: ''
            }, {
                icon: 'chuangkoufuwu',
                title: '工作记录',
                info: ''
            }, {
                icon: 'chuangkoufuwu',
                title: '注意事项',
                info: ''
            }];
            util.ajax({
                url: url.syGwjjb,
                type: 'POST',
                data: { jbgw: 'gjgw' },
                func: function(data) {
                    if (data) {
                        peopleInfo[0].info = data.jbry;
                        peopleInfo[1].info = data.jbsj;
                        peopleInfo[2].info = data.gzjl;
                        peopleInfo[3].info = data.zysx;
                        var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector('.jjb').innerHTML = jjbHtml;
                        $("#jjb").off('click').on('click', function() {
                            tableUtils.popup({
                                title: '&#xe61e; 本周出所',
                                url: url.syBzCrsQuery,
                                params: { "ywlx": "lscs" },
                                columns: [{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                    { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                    { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                    { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                    { field: 'badw', width: '350', title: '办案单位', align: 'center' }
                                ],
                            })
                        })
                    }

                }

            });
        },
        //文明监室
        wmjs: function() {
            var sjData = [];
            var wmjsHtml = '';
            util.ajax({
                url: url.xkWmjs,
                type: 'POST',
                data: {},
                func: function(data) {
                    if (data) {
                        for (i = 0; i < data.result.length; i++) {
                            if (sjData.indexOf(data.result[i]) == -1) {
                                sjData.push(data.result[i])
                            }
                        }
                        for (j = 0; j < sjData.length; j++) {
                            wmjsHtml += '<div class="item-list">' +
                                '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>' +
                                '<div>' + sjData[j] + '</div>' +
                                '</div>';
                        }

                    }
                    document.querySelector(".civilized-prison").innerHTML = wmjsHtml;
                    $(".item-list").each(function() {
                        $(this).click(function() {
                            var jsh = $(this).children("div:last-child").text()
                            var _title = $(this).parent().prev().text()
                            tableUtils.popup({
                                title: _title,
                                url: url.wmjsList,
                                height: 'full-200',
                                params: {
                                    jsh: jsh,
                                    rows: 10
                                },
                                columns: [
                                    { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '130', title: '监室号', align: 'center' },
                                    { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                    { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                    { field: 'gyqx', width: '170', title: '关押期限', align: 'center' },
                                    { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                                ],

                            });

                        });
                    });
                }
            })

        },
        //严管监室
        ygjs: function() {
            var sjData = [];
            var ygjsHtml = '';
            util.ajax({
                url: url.xkWmjs,
                type: 'POST',
                data: {},
                func: function(data) {
                    if (data) {
                        for (i = 0; i < data.result.length; i++) {
                            if (sjData.indexOf(data.result[i]) == -1) {
                                sjData.push(data.result[i])
                            }
                        }
                        for (j = 0; j < sjData.length; j++) {
                            ygjsHtml += '<div class="item-list" id="wmjsid" style="background:linear-gradient(to top right, #e4656c, #f30834)">' +
                                '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>' +
                                '<div style="color:white">' + sjData[j] + '</div>' +
                                '</div>';
                        }
                    }
                    document.querySelector(".strict-prison").innerHTML = ygjsHtml;
                    $("#wmjsid").each(function() {
                        $(this).click(function() {
                            var jsh = $(this).children("div:last-child").text()
                            var _title = $(this).parent().prev().text()
                            tableUtils.popup({
                                title: _title,
                                url: url.jsnryxxQuery,
                                height: 'full-200',
                                params: {
                                    jsh: jsh,
                                    rows: 10
                                },
                                columns: [
                                    { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '130', title: '监室号', align: 'center' },
                                    { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                    { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                    { field: 'gyqx', width: '170', title: '关押期限', align: 'center' },
                                    { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                                ],

                            });

                        });
                    });
                }
            })
        },
        // 本月业务统计
        byYwtj: function() {
            $.ajax({
                url: url.gj_ByywtjQuery,
                type: 'post',
                success: res => {
                    res = res.result;
                    var byywtjCharts = echarts.init(document.querySelector('.byywtj'));
                    var byywtjOptions = echart.getOption('bars', {
                        xdata: ['清监', '突发事件', '打扫卫生', '就医体检', '风险人员'],
                        yheight: Box_Height - 50
                    }, [{
                        type: 'bar',
                        data: [res.qj, res.tfsj, res.dsws, res.jytj, res.fxry],
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    var colorList = ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00', '#D87080'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }]);
                    byywtjCharts.setOption(byywtjOptions);
                    byywtjCharts.resize({ height: Box_Height });
                    byywtjCharts.on('click', function(params) {
                        if (params.name == '清监' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtj,
                                params: {
                                    ywlx: "qj"
                                },
								request:{
									pageName: 'page' ,//页码的参数名称，默认：page
									limitName: 'rows' //每页数据量的参数名，默认：limit
								},
                                height: 'full-200',
                                columns: [
                                    { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                    { field: 'qjmj', width: '150', title: '清监民警', align: 'center' },
                                    { field: 'jjwj', width: '150', title: '警戒武警', align: 'center' },
                                    { field: 'qjsj', width: '250', title: '清监时间', align: 'center' },
                                    { field: 'qjqk', width: '200', title: '清监情况', align: 'center' }
                                ]
                            });
                            return false;
                        }
                        if (params.name == '突发事件' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtj,
                                params: {
                                    ywlx: "tfsj"
                                },
								request:{
									pageName: 'page' ,//页码的参数名称，默认：page
									limitName: 'rows' //每页数据量的参数名，默认：limit
								},
                                height: 'full-200',
                                columns: [
                                    { field: 'jqh', width: '150', title: '监区号', align: 'center' },
                                    { field: 'tfsj', width: '150', title: '突发时间', align: 'center' },
                                    { field: 'tfnr', width: '250', title: '突发内容', align: 'center' },
                                    { field: 'clr', width: '150', title: '处理人', align: 'center' },
                                    { field: 'clqk', width: '200', title: '处理情况', align: 'center' },
                                    { field: 'clsj', width: '200', title: '处理时间', align: 'center' }
                                ]

                            });
                            return false;
                        }
                        if (params.name == '打扫卫生' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtj,
                                params: {
                                    ywlx: "dsws"
                                },
								request:{
									pageName: 'page' ,//页码的参数名称，默认：page
									limitName: 'rows' //每页数据量的参数名，默认：limit
								},
                                height: 'full-200',
                                columns: [
                                    { field: 'sssj', width: '200', title: '实施时间', align: 'center' },
                                    { field: 'wsfyjh', width: '250', title: '卫生防疫计划', align: 'center' },
                                    { field: 'ssdd', width: '200', title: '实施地点', align: 'center' },
                                    { field: 'sywsfyxdyw', width: '150', title: '消毒药物', align: 'center' },
                                    { field: 'blr', width: '100', title: '办理人', align: 'center' },
                                    { field: 'blsj', width: '200', title: '办理时间', align: 'center' }
                                ]

                            });
                            return false;
                        }
                        if (params.name == '就医体检' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtj,
                                params: {
                                    ywlx: "jytj"
                                },
								request:{
									pageName: 'page' ,//页码的参数名称，默认：page
									limitName: 'rows' //每页数据量的参数名，默认：limit
								},
                                height: 'full-200',
                                columns: [
                                    { field: 'jsbhString', width: '200', title: '监所名称', align: 'center' },
                                    { field: 'jbmcString', width: '250', title: '疾病名称', align: 'center' },
                                    { field: 'xzrq', width: '200', title: '巡诊日期', align: 'center' },
									{ field: 'xy', width: '250', title: '血压', align: 'center' },
									{ field: 'xl', width: '200', title: '心率', align: 'center' },
                                    { field: 'sfkyzString', width: '150', title: '是否开医嘱', align: 'center' },
                                    
                                ]

                            });
                            return false;
                        }
                        if (params.name == '风险人员' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtj,
                                params: {
                                    ywlx: "fxry"
                                },
								request:{
									pageName: 'page' ,//页码的参数名称，默认：page
									limitName: 'rows' //每页数据量的参数名，默认：limit
								},
                                columns: [
                                    { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                    { field: 'yfxdj', width: '150', title: '原风险等级', align: 'center' },
                                    { field: 'xfxdj', width: '200', title: '现风险等级', align: 'center' },
                                    { field: 'xfxzb', width: '250', title: '风险指标', align: 'center' },
                                    { field: 'pgsj', width: '200', title: '评估时间', align: 'center' },
                                    { field: 'creator', width: '150', title: '评估人', align: 'center' }
                                ]

                            });
                        }
                    });
                }

            })



        },
        // 权益保障
        qybz: function() {
            $.ajax({
                url: url.gj_QybzQuery,
                type: 'post',
                success: res => {
                    res = res.result;
                    var qybzCharts = echarts.init(document.querySelector('.qybz'));
                    var qybzOptions = echart.getOption('pie', {
                        legendData: ['放风', '洗澡', '理发', '发水', '发饭'],
                        legendHeight: 50,
                        // data : [res.fafan,res.fafan,res.fafan,res.fafan],
                        seriesData: [{ name: '放风', value: res.fangfeng },
                            { name: '洗澡', value: res.xizao },
                            { name: '理发', value: res.lifa },
                            { name: '发水', value: res.fangshui },
                            { name: '发饭', value: res.fafan },
                        ],
                        seriesColors: ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00'],
                    }, {
                        name: '情况',
                        radius: '80%',
                        label: {
                            show: true,
                            textStyle: {
                                fontWeight: 200,
                                fontSize: 10
                            },
                            formatter: function(param) {
                                return param.name + ':' + param.value
                            },
                        },
                        lineStyle: {
                            type: 'solid',
                            fontSize: 15,
                            opacity: 1,
                            color: '#fff',
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#fff'
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    });
                    qybzCharts.setOption(qybzOptions);
                    qybzCharts.resize({ height: Box_Height });
                    qybzCharts.on('click', function(param) {
                        if (param.name == "放风") {
                            tableUtils.popup({
                                title: '&#xe61e;放风',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '放风',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'mjxm', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "发饭") {
                            tableUtils.popup({
                                title: '&#xe61e;发饭',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '发饭',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'mjxm', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "洗澡") {
                            tableUtils.popup({
                                title: '&#xe61e;洗澡',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '洗澡',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'mjxm', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "理发") {
                            tableUtils.popup({
                                title: '&#xe61e;理发',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '理发',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'mjxm', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "发水") {
                            tableUtils.popup({
                                title: '&#xe61e;发水',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '发水',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'mjxm', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }

                    })
                }
            })


        },
        bindEvent: function() {
            $('.icon_box').on('click', function() {
                var role = $(this).attr('role');
                window.parent.loadMenu(role);
            })

        }
    };
    /**
     *运行入口
     */
    $(main.init);

});