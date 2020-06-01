/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var tableUtils = require('awd/layui/table_utils');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function() {
            main.Echart();
            main.Table();
            main.initPapel();
        },
        Table: function() {

        },
        initPapel:function(){
            const Papel_Title = $(".list-title");
            Papel_Title.each(function(index){if(index == 1)$(this).css("padding","5px")})
        },
        Echart: function() {
            var dbsxCharts = echarts.init(document.querySelector('.dbsx'));
            var ywblCharts = echarts.init(document.querySelector('.ywbl'));

            dbsxCharts.on('click',function(){
                // tableUtils.popup({
                //     title:'本周财务情况'
                // })
                tableUtils.popup({
                    title: '&#xe61e;本周财务情况',
                    url: '',
                    params: {
                       
                    },
                    columns:
                        [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],

                })

            })

            $(".Special_ul ul li div").each(function(){
                $(this).click(function(){
                    tableUtils.popup({
                        title: '&#xe61e;固定资产管理',
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






            ywblCharts.on('click',function(){
                // tableUtils.popup({
                //     title:'食堂采购'
                // })
                tableUtils.popup({
                    title: '&#xe61e;食堂采购',
                    url: '',
                    params: {
                       
                    },
                    columns:
                        [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                        ],

                })

            })
            var dbsxOptions = echart.getOption('pie', {
                legendData: ['现金接收金额', '现金支出金额', '商品支付金额', '财务退还金额'],
                seriesData: [{ name: '现金接收金额', value: 1200 },
                    { name: '现金支出金额', value: 900 },
                    { name: '商品支付金额', value: 700 },
                    { name: '财务退还金额', value: 500 },
                ],
                seriesColors: ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00'],
            }, {
                name: '金额',
                radius: '70%',
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 10
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
            }); //饼状图 End...
            var ywblOptions = echart.getOption('bar_lins', [
                ['年份', '大米', '食用油', '调味品', '其他'],
                ['二月', 482, 620, 760, 790],
                ['三月', 502, 720, 850, 620],
                ['四月', 302, 702, 552, 456],
                ['五月', 502, 980, 333, 679, 950],
                ['六月', 693, 420, 641, 472, 343],
                ['七月', 752, 620, 841, 522, 890],
                ['八月', 593, 890, 741, 662, 573]
            ], '')

            ywblCharts.setOption(ywblOptions);
            dbsxCharts.setOption(dbsxOptions);
            ywblCharts.resize({
                height: Box_Height+40
            })
            dbsxCharts.resize({
                height: Box_Height
            })

            // 交接班
            var peopleInfo = [{
                icon: 'chuangkoufuwu',
                title: '交接班人员',
                info: '张三'
            }, {
                icon: 'chuangkoufuwu',
                title: '交接班时间',
                info: '2019-12-21 19:25:58'
            }, {
                icon: 'chuangkoufuwu',
                title: '工作记录',
                info: '清点总数'
            }, {
                icon: 'chuangkoufuwu',
                title: '注意事项',
                info: '账单已移交'
            }];

            var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
            document.querySelector(".jjb").innerHTML = jjbHtml;

            // 待办信息表格
            var tableData = [
                { username: "1001", sex: "1001", city: "家属送物", sign: "张三", experience: "1", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1002", sex: "1002", city: "商品购物", sign: "李四", experience: "7", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1003", sex: "2001", city: "政府补贴", sign: "王五", experience: "3", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1004", sex: "2002", city: "政府补贴", sign: "徐六", experience: "5", score: "unknown", classify: "unknown", wealth: "unknown" },
            ];
            var tableData2 = [
                { username: "1001", sex: "1001", city: "2985", sign: "王五", experience: "", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1002", sex: "1002", city: "1852", sign: "李三", experience: "", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1003", sex: "2001", city: "3854", sign: "徐四", experience: "", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1004", sex: "2002", city: "2465", sign: "黄六", experience: "", score: "unknown", classify: "unknown", wealth: "unknown" },
            ];
            var tableData3 = [
                { username: "1001", sex: "1001", city: "毛巾(条)", sign: "王五", experience: '3',score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1002", sex: "1002", city: "牙膏", sign: "李三", experience: "5", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1003", sex: "2001", city: "香皂(块)", sign: "徐四", experience: "2", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1004", sex: "2002", city: "棉被", sign: "黄六", experience: "6", score: "unknown", classify: "unknown", wealth: "unknown" },
            ];
            var tableData4 = [
                { username: "王五", wgqk: "擅离职守", wgsj: "2020-3-19", wgcf: "罚款", bz: '暂无备注',score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "张三", wgqk: "违反规定", wgsj: "2020-3-25", wgcf: "降级", bz: '暂无备注',score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "李四", wgqk: "旷工", wgsj: "2020-4-06", wgcf: "罚款", bz: '暂无备注',score: "unknown", classify: "unknown", wealth: "unknown" },
            ];
            var tableData5 = [
                { username: "1001", sex: "1001", city: "衣服", sign: "王五", experience: '268',score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1002", sex: "1002", city: "棉被", sign: "李三", experience: "359", score: "unknown", classify: "unknown", wealth: "unknown" },
                { username: "1003", sex: "2001", city: "其他", sign: "徐四", experience: "103", score: "unknown", classify: "unknown", wealth: "unknown" },
            ];
            layui.use('table', function() {
                var table = layui.table;
                var infoTable = table.render({
                    elem: '#dbxx',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '18%', title: '监室号' },
                            { field: 'sex', width: '21%', title: '人员编号' },
                            { field: 'sign', width: '20%', title: '姓名' },
                            { field: 'city', title: '接待事由', width: '25%' },
                            { field: 'experience', width: '15%', title: '数量' }
                        ]
                    ],
                    data: tableData
                });
                var JfjdTable = table.render({
                    elem: '#jfjd',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '18%', title: '人员姓名' },
                            { field: 'wgqk', width: '21%', title: '违规情况' },
                            { field: 'wgsj', width: '20%', title: '违规时间' },
                            { field: 'wgcf', title: '违规处罚', width: '25%' },
                            { field: 'bz', width: '15%', title: '备注' }
                        ]
                    ],
                    data: tableData4
                });
                var sqswTable = table.render({
                    elem: '#sqsw',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '18%', title: '监室号' },
                            { field: 'sex', width: '21%', title: '人员编号' },
                            { field: 'sign', width: '20%', title: '姓名' },
                            { field: 'experience', title: '收取金额', width: '25%' },
                            { field: 'city', width: '15%', title: '收取物品' }
                        ]
                    ],
                    data: tableData5
                });

            });
            layui.use('table', function() {
                var table = layui.table;
                var infoTable = table.render({
                    elem: '#wpjj',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('wpjj').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '18%', title: '监室号' },
                            { field: 'sex', width: '21%', title: '人员编号' },
                            { field: 'sign', width: '20%', title: '姓名' },
                            { field: 'city', title: '物品类型', width: '20%' },
                            { field: 'experience', width: '20%', title: '物品数量' }
                        ]
                    ],
                    data: tableData3
                });

            });
            layui.use('table', function() {
                var table = layui.table;
                var infoTable = table.render({
                    elem: '#xjjj',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xjjj').parentNode.offsetHeight + 5),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '18%', title: '监室号' },
                            { field: 'sex', width: '21%', title: '人员编号' },
                            { field: 'sign', width: '20%', title: '姓名' },
                            { field: 'city', title: '接济金额', width: '20%' },
                            { field: 'experience', width: '20%', title: '备注' }
                        ]
                    ],
                    data: tableData2
                });

            });
            window.onresize = function() {
                dbsxCharts.resize();
                ywblCharts.resize();
            };
            //个角色菜单
            $('.icon_box').on('click',function(){
                var role=$(this).attr('role');
                window.parent.loadMenu(role);
            })
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});