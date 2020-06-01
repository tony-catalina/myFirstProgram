/**
 * 首页 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var tableUtils = require('awd/layui/table_utils');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function () {
            main.layout();
            main.bindEvent();
            main.xzjl();

        },
        layout: function () {
            main.jjb();
            main.wsfy();
            main.ypkc();
            main.jhjl();
            main.jkjc();
            main.jyxx();
            main.jbqk();
            main.zbh();
        },
        xzjl: function () {
            tableUtils.init('xzjl', {
                url: url.ywsyXzjlList,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xzjl').parentNode.offsetHeight + 0),
                pagesize: 10,
                clumns: [
                    { field: 'jqh', width: '20%', title: '监区号' },
                    { field: 'jsh', width: '20%', title: '监室号' },
                    { field: 'creator', width: '20%', title: '巡诊人' },
                    { field: 'xzsj', title: '巡诊时间', width: '40%' },
                ],
            });
            // var table = layui.table;
            // layui.use('table', function () {
            //     table.render({
            //         elem: '#xzjl',
            //         method: 'post',
            //         url: url.ywsyXzjlList, //数据接口
            //         page: true,
            //         even: true,
            //         height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xzjl').parentNode.offsetHeight + 0),
            //         skin: 'line',
            //         page: {
            //             limit: 5
            //         },
            //         cols: [
            //             [
            //                 { field: 'jqh', width: '20%', title: '监区号' },
            //                 { field: 'jsh', width: '20%', title: '监室号' },
            //                 { field: 'creator', width: '20%', title: '巡诊人' },
            //                 { field: 'xzsj', title: '巡诊时间', width: '40%' },
            //             ]
            //         ]
            //     });
            // })
        },
        ypkc: function () {
            tableUtils.init('ypkc', {
                url: url.ywsyYpkcList,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('ypkc').parentNode.offsetHeight + 0),
                pagesize: 10,
                clumns: [
                    { field: 'jsbh', title: '监所编号', width: '25%' },
                    { field: 'ypmc', width: '20%', title: '药品名称' },
                    { field: 'fydwString', width: '15%', title: '单位' },
                    { field: 'updatetime', width: '20%', title: '修改日期' },
                    { field: 'sccj', title: '生产单位', width: '20%' },
                ],
            });
            // var table = layui.table;
            // layui.use('table', function () {
            //     table.render({
            //         elem: '#ypkc',
            //         method: 'post',
            //         url: url.ywsyYpkcList, //数据接口
            //         page: true,
            //         even: true,
            //         height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('ypkc').parentNode.offsetHeight + 0),
            //         skin: 'line',
            //         page: {
            //             limit: 5
            //         },
            //         cols: [
            //             [
            //                 { field: 'ypmc', width: '20%', title: '药品名称' },
            //                 { field: 'fydw', width: '15%', title: '单位' },
            //                 { field: 'ypsl', width: '20%', title: '库存数量' },
            //                 { field: 'sccj', title: '生产单位', width: '20%' },
            //                 { field: 'scrq', title: '生产日期', width: '25%' },
            //             ]
            //         ]
            //     });
            // })
        },
        jhjl: function () {
            tableUtils.init('jhjl', {
                url: url.ywsyYpjhjlList,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jhjl').parentNode.offsetHeight + 0),
                pagesize: 10,
                clumns: [
                    { field: 'YPMC', width: 88, title: '药品名称' },
                    { field: 'FYDW', width: 65, title: '单位' },
                    { field: 'JHSL', width: 88, title: '进货数量' },
                    { field: 'SCCJ', title: '生产单位', width: 88 },
                    { field: 'scsj', title: '生产年份', width: 88 }
                ],
            });
            // var table = layui.table;
            // layui.use('table', function () {
            //     table.render({
            //         elem: '#jhjl',
            //         method: 'post',
            //         url: url.ywsyYpjhjlList, //数据接口
            //         page: true,
            //         even: true,
            //         height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jhjl').parentNode.offsetHeight + 0),
            //         skin: 'line',
            //         page: {
            //             limit: 5
            //         },
            //         cols: [
            //             [
            //                 { field: 'YPMC', width: 88, title: '药品名称' },
            //                 { field: 'FYDW', width: 65, title: '单位' },
            //                 { field: 'JHSL', width: 88, title: '进货数量' },
            //                 { field: 'SCCJ', title: '生产单位', width: 88 },
            //                 { field: 'scsj', title: '生产年份', width: 88 }
            //             ]
            //         ]
            //     });
            // })
        },
        jkjc: function () {
            $.ajax({
                url: url.yw_JkjcQuery,
                type: 'POST',
                data: { jbgw: "ywgw" },
                success: res => {
                    document.querySelector("#wtjry").innerHTML = res.result.wtjry;
                    document.querySelector("#ytjry").innerHTML = res.result.ytjry;
                }
            });
            $("#ytjry").off("click").on('click', function () {
                tableUtils.popup({
                    title: '&#xe61e;已体检人员',
                    url: url.ywgwYtjryList,
                    params: {},
                    columns: [
                        { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                        { field: 'xm', width: '150', title: '姓名', align: 'center' },
                        { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                        { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                        { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                        { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                        { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                    ],

                })



            })
            $("#wtjry").off("click").on('click', function () {
                tableUtils.popup({
                    title: '&#xe61e;未体检人员',
                    url: url.ywgwWtjryList,
                    params: {},
                    columns: [
                        { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                        { field: 'xm', width: '150', title: '姓名', align: 'center' },
                        { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                        { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                        { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                        { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                        { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                    ],

                })
            })

        },
        jjb: function () {
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
            $.ajax({
                url: url.syGwjjb,
                type: "POST",
                data: { jbgw: "ywgw" },
                success: function (data) {
                    if (data) {
                        peopleInfo[0].info = data.jbry;
                        peopleInfo[1].info = data.jbsj;
                        peopleInfo[2].info = data.gzjl;
                        peopleInfo[3].info = data.zysx;
                        var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector("#jjb").innerHTML = jjbHtml;
                    }
                }
            })
        },
        // 卫生防疫
        wsfy: function () {
            var ListInfo = [{
                icon: 'jibenxinxi',
                title: '消毒人员',
                info: '临时工'
            }, {
                icon: 'zhizhang',
                title: '消毒时间',
                info: '2020-4-10 10:43'
            }, {
                icon: 'shenqing',
                title: '消毒日志',
                info: '所有监室以消毒处理'
            },]

            $.ajax({
                url: url.ywWsfyQuery,
                type: "POST",
                data: { jbgw: "ywgw" },
                func: function (data) {
                    console.log(data)
                    if (data) {
                        peopleInfo[0].info = data.jbry;
                        peopleInfo[1].info = data.jbsj;
                        peopleInfo[2].info = data.gzjl;
                        peopleInfo[3].info = data.zysx;
                        console.log(peopleInfo)
                        var wsfyHtml = jjbTempl('com/jjbPalte', { data: ListInfo });
                        document.querySelector("#wsfy").innerHTML = wsfyHtml;
                        main.initPapel();
                    }
                }
            })
            var wsfyHtml = jjbTempl('com/jjbPalte', { data: ListInfo });
            document.querySelector("#wsfy").innerHTML = wsfyHtml;
        },
        jyxx: function () {
            var jyxxCharts = echarts.init(document.querySelector('.jyxx'));
            var jyxxOptions = echart.getOption('pie', {
                legendData: ['所内就医', '所外就医', '待就医', '待观察'],
                seriesData: [{ name: '所内就医', value: 13.83 },
                { name: '所外就医', value: 29.65 },
                { name: '待就医', value: 31.64 },
                { name: '待观察', value: 24.88 },
                ],
                seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980'],
            }, {
                name: '百分比',
                radius: ['30%', '80%'],
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 13
                    },
                    // formatter: '{c}',
                    // fontSize: 18
                },
                lineStyle: {
                    type: 'solid',
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
            jyxxCharts.on('click', function (param) {
                if (param.name == "所内就医") {
                    tableUtils.popup({
                        title: '&#xe61e;所内就医',
                        url: url.swjyQuery,
                        params: {
                            'swjy': 'snjy',
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'jzyy', width: '150', title: '就诊医院', align: 'center' },
                            { field: 'jbxxRsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'brbq', width: '200', title: '病人病情', align: 'center' },
                            { field: 'cljg', width: '200', title: '处理结果', align: 'center' },
                        ],

                    });
                }
                if (param.name == "所外就医") {
                    tableUtils.popup({
                        title: '&#xe61e;所外就医',
                        url: url.swjyQuery,
                        params: {
                            'swjy': 'swjy',
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'jzyy', width: '150', title: '就诊医院', align: 'center' },
                            { field: 'jbxxRsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'brbq', width: '200', title: '病人病情', align: 'center' },
                            { field: 'cljg', width: '200', title: '处理结果', align: 'center' },
                        ],

                    });
                }
                if (param.name == "待观察") {
                    tableUtils.popup({
                        title: '&#xe61e;待观察',
                        url: url.swjyQuery,
                        params: {
                            'swjy': 'dgc',
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'jzyy', width: '150', title: '就诊医院', align: 'center' },
                            { field: 'jbxxRsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'brbq', width: '200', title: '病人病情', align: 'center' },
                            { field: 'cljg', width: '200', title: '处理结果', align: 'center' },
                        ],

                    });
                }
                if (param.name == "待就医") {
                    tableUtils.popup({
                        title: '&#xe61e;待就医',
                        url: url.swjyQuery,
                        params: {
                            'swjy': 'djy',
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'jzyy', width: '150', title: '就诊医院', align: 'center' },
                            { field: 'jbxxRsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'brbq', width: '200', title: '病人病情', align: 'center' },
                            { field: 'cljg', width: '200', title: '处理结果', align: 'center' },
                        ],

                    });
                }
            })
            jyxxCharts.setOption(jyxxOptions);
            jyxxCharts.resize({ height: Box_Height });
            window.onresize = function () {
                jyxxCharts.resize();
            };
        },
        jbqk: function () {
            var jbqkCharts = echarts.init(document.querySelector('.jbqk'));
            jbqkCharts.on('click', function (param) {
                if (param.name == "心脏病") {
                    tableUtils.popup({
                        title: '&#xe61e;心脏病',
                        url: url.ywJbqkQuery,
                        params: {
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
                if (param.name == "高血压") {
                    tableUtils.popup({
                        title: '&#xe61e;高血压',
                        url: url.ywJbqkQuery,
                        params: {
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
                if (param.name == "糖尿病") {
                    tableUtils.popup({
                        title: '&#xe61e;糖尿病',
                        url: url.ywJbqkQuery,
                        params: {
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
                if (param.name == "普通感冒") {
                    tableUtils.popup({
                        title: '&#xe61e;普通感冒',
                        url: url.ywJbqkQuery,
                        params: {
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
                if (param.name == "传染性疾病") {
                    tableUtils.popup({
                        title: '&#xe61e;传染性疾病',
                        url: url.ywJbqkQuery,
                        params: {
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
                if (param.name == "重大疾病") {
                    tableUtils.popup({
                        title: '&#xe61e;重大疾病',
                        url: url.ywJbqkQuery,
                        params: {
                            // bahj: paramsName,
                            // sytj: '1'
                            'rows': 20
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],
                    });
                }
            })


            util.ajax({
                url: url.JbqkQuery,
                type: 'post',

                func: function (data) {
                    if (data) {
                        var jbqkOptions = echart.getOption('pie', {
                            legendData: ['心脏病', '高血压', '糖尿病', '普通感冒', '传染性疾病', '重大疾病'],
                            seriesData: [{ name: '心脏病', value: 9.55 },
                            { name: '高血压', value: 37.15 },
                            { name: '糖尿病', value: 17.51 },
                            { name: '普通感冒', value: 5.55 },
                            { name: '传染性疾病', value: 14.32 },
                            { name: '重大疾病', value: 15.92 },
                            ],
                            seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980', '#D87A80', '#8D98B3'],
                        }, {
                            name: '百分比',
                            radius: '70%',
                            label: {
                                show: true,
                                textStyle: {
                                    fontWeight: 200,
                                    fontSize: 13
                                },
                                // formatter: '{c}',
                                // fontSize: 18
                            },
                            lineStyle: {
                                type: 'solid',
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
                        jbqkCharts.setOption(jbqkOptions);
                        jbqkCharts.resize({ height: Box_Height });
                        window.onresize = function () {
                            jbqkCharts.resize();
                        };
                    }
                }
            });

        },
        // CheckPerson:()=>{
        //     $.ajax({
        //         url:url.ywgwYtjryList,
        //         type:'POST',
        //     })
        // },

        zbh: function () {
            $.ajax({
                url: url.zbh,
                type: 'POST',
                data: { jbgw: "ywgw" },
                success: res => {
                    //  console.log(res,5555);
                    console.log(res.result + "------------")
                    document.querySelector("#zyry").innerHTML = res.result.zyry;
                    document.querySelector("#ptbh").innerHTML = res.result.ptbh;
                    document.querySelector("#zbh").innerHTML = res.result.zbh;
                    $("#zbh").off("click").on('click', function () {
                        tableUtils.popup({
                            title: '&#xe61e;重病号',
                            url: url.jbxx,
                            params: {
                                bhlx: 2
                            },
							request:{
								 pageName: 'page' ,//页码的参数名称，默认：page
								 limitName: 'rows' //每页数据量的参数名，默认：limit
							},
                            columns: [
                                { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xbString', width: '150', title: '性别', align: 'center' },
                                { field: 'jsbh', width: '150', title: '监所编号', align: 'center' },
                                { field: 'zyString', width: '150', title: '专业', align: 'center' },
                                { field: 'createtime', width: '200', title: '创建时间', align: 'center' },
                                { field: 'bhlxString', width: '200', title: '病号类型', align: 'center' },
                                { field: 'updatetime', width: '200', title: '更新时间', align: 'center' },
                            ],
                        });
                    })
                    $("#zyry").off("click").on('click', function () {
                        tableUtils.popup({
                            title: '&#xe61e;在押人员',
                            url: url.jbxx,
                            params: {
                            },
							request:{
								 pageName: 'page' ,//页码的参数名称，默认：page
								 limitName: 'rows' //每页数据量的参数名，默认：limit
							},
                            columns: [
                                { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xbString', width: '150', title: '性别', align: 'center' },
                                { field: 'jsbh', width: '150', title: '监所编号', align: 'center' },
                                { field: 'zyString', width: '150', title: '专业', align: 'center' },
                                { field: 'createtime', width: '200', title: '创建时间', align: 'center' },
                                { field: 'bhlxString', width: '200', title: '病号类型', align: 'center' },
                                { field: 'updatetime', width: '200', title: '更新时间', align: 'center' },
                            ],
                        });
                    })
                    $("#ptbh").off("click").on('click', function () {
                        tableUtils.popup({
                            title: '&#xe61e;普通病号',
                            url: url.jbxx,
                            params: {
                                bhlx: 3
                            },
							request:{
								 pageName: 'page' ,//页码的参数名称，默认：page
								 limitName: 'rows' //每页数据量的参数名，默认：limit
							},
                            columns: [
                                { field: 'rybh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xbString', width: '150', title: '性别', align: 'center' },
                                { field: 'jsbh', width: '150', title: '监所编号', align: 'center' },
                                { field: 'zyString', width: '150', title: '专业', align: 'center' },
                                { field: 'createtime', width: '200', title: '创建时间', align: 'center' },
                                { field: 'bhlxString', width: '200', title: '病号类型', align: 'center' },
                                { field: 'updatetime', width: '200', title: '更新时间', align: 'center' },
                            ],
                        });
                    })
                }
            });

        },
        bindEvent: function () {
            $('.icon_box').on('click', function () {
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