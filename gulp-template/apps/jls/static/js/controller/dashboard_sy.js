/**
 * 首页 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tableUtils = require('awd/layui/table_utils');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    var paramsName = '';
    //界面控件
    var main = {
        init: function () {
            main.Echart();
            main.Table();
        },
        Table: function () {

        },
        initPapel: function () {
            const Papel_Title = $(".list-title");
            Papel_Title.each(function (index) { if (index == 1) $(this).css("padding", "5px") })
        },
        Echart: function () {
            var byrsCharts = echarts.init(document.querySelector('.byrs'));
            var ywblCharts = echarts.init(document.querySelector('.ywbl'));
            // $.ajax({
            // url: url.syRsyy,
            // type: 'POST',
            // success: res => {
            var byrsOptions = echart.getOption('pie', {
                legendData: ['正常入所', '收回', '投送未收', '非拘捕入所', '其他'],
                seriesData: [{ name: '正常入所', value: "23" },
                { name: '收回', value: "17" },
                { name: '投送未收', value: "9" },
                { name: '非拘捕入所', value: "25" },
                { name: '其他', value: "11" },
                ],
                seriesColors: ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00', '#CCF180'],
            }, {
                name: '人数占比',
                radius: '70%',
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 10
                    },
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

            byrsCharts.setOption(byrsOptions);
            byrsCharts.resize({
                height: Box_Height
            });
            var dicName = [
                { string: '正常入所', field: 'zcrs' },
                { string: '收回', field: 'sh' },
                { string: '投送未收', field: 'tsws' },
                { string: '非拘捕入所', field: 'fjbrs' },
                { string: '其他', field: 'qt' }
            ];
            //本月人员入所性质统计弹窗
            byrsCharts.on('click', function (params) {
                for (var i = 0, len = dicName.length; i < len; i++) {
                    if (params.data.name == dicName[i].string) {
                        paramsName = dicName[i].field;
                        break;
                    }
                }
                tableUtils.popup({
                    title: '&#xe61e;本月人员入所性质统计',
                    url: '',
                    params: {
                        // [paramsName]: '1',
                        // sytj: '1'
                    },
                    columns: [
                        [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', title: '办案单位', align: 'center' },
                        ]
                    ]
                })

            })
            // }
            // })


            var ywblDic = [{
                name: '入所人数',
                url: '/kss/sy/syJbxx',
                params: 'jbxxRq',
                num: 5
            },
            {
                name: '出所人数',
                url: '/kss/sy/syClcs',
                params: 'clcsRq',
                num: 4
            }, {
                name: '临时出所人数',
                url: '/kss/sy/syLscs',
                params: 'lscsRq',
                num: 6
            }
            ];
            //本周出入所弹窗事件
            ywblCharts.on('click', function (params) {
                // var ywblOption;
                // for (var i = 0, len = ywblDic.length; i < len; i++) {
                //     if (params.seriesName == ywblDic[i].name) {
                //         ywblOption = {
                //             urls: ywblDic[i].url,
                //             field: ywblDic[i].params,
                //             value: params.data[ywblDic[i].num]
                //         };
                //         break;
                //     }
                // }
                tableUtils.popup({
                    title: '&#xe61e;本周出入所人数',
                    url: '',
                    params: {
                        // [ywblOption.field]: ywblOption.value,
                    },
                    columns: [
                        [
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'xb', width: '200', title: '性别', align: 'center' },
                            { field: 'csyy', width: '200', title: '出所原因', align: 'center' },
                            { field: 'cssj', width: '200', title: '出所时间', align: 'center' },
                            { field: 'hssj', width: '200', title: '回所时间', align: 'center' },
                        ]
                    ]

                })

            })
            //今日出入所,今日会见情况弹窗
            $(".LineS_box").each(function () {
                $(this).click(function () {
                    tableUtils.popup({
                        title: '',
                        url: '',
                        height: 'full-200',
                        params: {

                        },
                        columns:
                            [
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

            //代办事项弹窗
            $(".dbsx ul li").each(function(){
                $(this).click(function(){
                    tableUtils.popup({
                        title: '&#xe61e;待办事项',
                        url: '',
                        height: 'full-200',
                        params: {

                        },
                        columns:
                            [
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


            //饼状图 End...
            // $.ajax({
            //     url: url.sysy,
            //     type: 'POST',
            //     success: res => {
            // var ywblOptions = echart.getOption('bar_lins', [
            //     ['', '入所人数', '出所人数', '临时出所人数'],
            //     [res[5].month, res[5].jbxx, res[5].clcs, res[5].lscs, res[5].clcsRq, res[5].jbxxRq, res[5].lscsRq],
            //     [res[4].month, res[4].jbxx, res[4].clcs, res[4].lscs, res[4].clcsRq, res[4].jbxxRq, res[4].lscsRq],
            //     [res[3].month, res[3].jbxx, res[3].clcs, res[3].lscs, res[3].clcsRq, res[3].jbxxRq, res[3].lscsRq],
            //     [res[2].month, res[2].jbxx, res[2].clcs, res[2].lscs, res[2].clcsRq, res[2].jbxxRq, res[2].lscsRq],
            //     [res[1].month, res[1].jbxx, res[1].clcs, res[1].lscs, res[1].clcsRq, res[1].jbxxRq, res[1].lscsRq],
            //     [res[0].month, res[0].jbxx, res[0].clcs, res[0].lscs, res[0].clcsRq, res[0].jbxxRq, res[0].lscsRq]
            // ], '')

            var ywblOptions = echart.getOption('bars', {
                xdata: ['清监', '突发事件', '打扫卫生', '就医体检', '风险人员'],
                yheight: Box_Height - 50
            },
                [{
                    type: 'bar',
                    data: [12, 9, 11, 10, 12],
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00', '#D87080'];
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }]);

            ywblCharts.setOption(ywblOptions);

            ywblCharts.resize({
                height: Box_Height + 40
            });



            //     }
            // })


            // 交接班
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
                type: 'POST',
                data: { jbgw: 'sygw' },
                success: res => {
                    console.log(res)
                    peopleInfo[0].info = res.jbry;
                    peopleInfo[1].info = res.jbsj;
                    peopleInfo[2].info = res.gzjl;
                    peopleInfo[3].info = res.zysx;
                    console.log(peopleInfo);
                    var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                    document.querySelector(".jjb").innerHTML = jjbHtml;
                    main.initPapel();
                }
            })

            //提讯提解弹窗
            var txCharts = echarts.init(document.querySelector('.tx'));
            txCharts.on('click', function (params) {

                tableUtils.popup({
                    title: '&#xe61e;提解提讯',
                    url: '',
                    params: {
                        // [paramsName]: '1',
                        // sytj: '1'
                    },
                    columns: [
                        [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', title: '办案单位', align: 'center' },
                        ]
                    ]
                })

            })
            var txOptions = echart.getOption('pie', {
                legendData: ['今天已提讯人数', '今天待提讯人数', '今天已提解人数', '今天待提解人数'],
                seriesData: [
                    { value: '136', name: '今天已提讯人数' },
                    { value: '85', name: '今天待提讯人数' },
                    { value: '136', name: '今天已提解人数' },
                    { value: '85', name: '今天待提解人数' }
                ],
                seriesColors: ['#3476fe', '#34d1fe', '#82188b', '#e15505'],

            }, {
                name: '访问来源',
                radius: ['45%', '70%'],
            });
            txCharts.setOption(txOptions);

            window.onresize = function () {
                byrsCharts.resize();
                ywblCharts.resize();
                txCharts.resize();
            };
            //个角色菜单
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