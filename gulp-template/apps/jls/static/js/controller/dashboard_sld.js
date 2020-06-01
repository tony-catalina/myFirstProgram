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
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var tableUtils = require('awd/layui/table_utils');

    var Box_Height = $('.item-content').height(); //获取1盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function() {
            main.Echart();
            main.Table();
            //个角色菜单
            $('.icon_box').on('click', function() {
                var role = $(this).attr('role');
                window.parent.loadMenu(role);
            });
            $('#More_Title').on('click',function(){
                layer.open({
                    title:'关押动态',
                    area: ['50%', '50%'],
                    content: '<table style="width:100%;height:100%;border:1px solid black">'+
                    '<tr>'+
                    '<td rowspan="3">在所人员</td>'+
                    '<td>男</td><td>587</td>'+
                    '<td>女</td><td>178</td>'+
                    '<td></td><td></td><td></td><td></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>正常入所</td><td>1032</td>'+
                    '<td>投送未收</td><td>85</td>'+
                    '<td>非拘捕入所</td>10<td>其他</td><td>7</td>'+
                    '</tr>'+
                    '</table>',
                    btn:[]
                })
            })
        },
        Table: function() {

        },
        initPapel:function(){
            const Papel_Title = $(".list-title");
            Papel_Title.each(function(index){if(index == 1)$(this).css("padding","5px")})
        },
        Echart: function() {
            var drjxCharts = echarts.init(document.querySelector('.drjx'));
            var ldspCharts = echarts.init(document.querySelector('.ldsp'));
            var czqkCharts = echarts.init(document.querySelector('.czqk'));
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
                        name: '人数占比',
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
                            { value: 13, name: '迟到' },
                            { value: 21, name: '早退' },
                            { value: 17, name: '旷工' },
                            { value: 10, name: '正常' }
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
                            formatter: '{c}人',
                            // fontSize: 18
                        },
                        data: [
                            { value: 13, name: '迟到' },
                            { value: 21, name: '早退' },
                            { value: 17, name: '旷工' },
                            { value: 10, name: '正常' }
                        ]
                    }
                ]
            };
            var ldspoption = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['监室调整', '械具加戴', '督导数据', '收押入所','出所管理']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = ['#CF6AF4', '#F9A336', '#EF5378', '#3D93F6','#7D43F1'];
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
                        { value: 7, name: '监室调整' },
                        { value: 11, name: '械具加戴' },
                        { value: 6, name: '督导数据' },
                        { value: 9, name: '收押入所' },
                        { value: 8, name: '出所管理' },
                    ]
                }]
            };
            var czqkOptions = echart.getOption('bar_line', '', [{
                name: '已有数据总量',
                type: 'bar',
                stack: '总量',
                barWidth: 20,
                data: [{ value: 20, name: '门禁报警' },
                    { value: 22, name: '风场报警', },
                    { value: 17, name: '3010监室' },
                    { value: 21, name: '限高报警' },
                    { value: 19, name: '1050监室' }
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
                    { value: 10, name: '3010监室' },
                    { value: 10, name: '限高报警' },
                    { value: 10, name: '1050监室' }
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
            drjxCharts.setOption(drjxoption);
            ldspCharts.setOption(ldspoption);
            czqkCharts.setOption(czqkOptions);
            drjxCharts.resize({
                height: Box_Height + 25
            });
            ldspCharts.resize({
                height: Box_Height + 25
            });
            czqkCharts.resize({
                height: Box_Height + 25
            });
            window.onresize = function() {
                drjxCharts.resize();
                ldspCharts.resize();
                czqkCharts.resize();
            };
              // 当日绩效弹窗
              drjxCharts.on('click', function(params) {
                // console.log("--------"+res.length)
                // for (var i = 0; i<res.length; i++) {
                //     console.log("name===="+params.data.name+"bahjString==="+res[i].bahjString+"bahj==="+res[i].bahjCode)
                //     if (params.data.name == res[i].bahjString) {
                //         paramsName = res[i].bahjCode;
                //         console.log(paramsName)
                //         break;
                //     }
                // }
                tableUtils.popup({
                    title: '&#xe61e;当日绩效',
                    url:'',
                    params: {
                        // bahj: paramsName,
                        // sytj: '1'
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
               //代办事项弹窗
               ldspCharts.on('click', function(params) {
                // console.log("--------"+res.length)
                // for (var i = 0; i<res.length; i++) {
                //     console.log("name===="+params.data.name+"bahjString==="+res[i].bahjString+"bahj==="+res[i].bahjCode)
                //     if (params.data.name == res[i].bahjString) {
                //         paramsName = res[i].bahjCode;
                //         console.log(paramsName)
                //         break;
                //     }
                // }
                tableUtils.popup({
                    title: '&#xe61e;代办事项',
                    url:'',
                    params: {
                        // bahj: paramsName,
                        // sytj: '1'
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
            //监区设施弹窗事件
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
            // 处置情况弹窗
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
                tableUtils.popup({
                    title: '&#xe61e;各类所里报警及处置情况',
                    url:'',
                    params: {
                        // bahj: paramsName,
                        // sytj: '1'
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
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});
