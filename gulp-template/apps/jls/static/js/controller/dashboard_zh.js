/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var util = require('awd/easyui/util');
    var tableUtils = require('awd/layui/table_utils');
    var grid=require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html');//交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init:function(){
            main.list();
            main.Echart();
            main.Table();
            main.initPapel();
        },
        initPapel:function(){
            const Papel_Title = $(".list-title");
            Papel_Title.each(function(index){if(index == 1)$(this).css("padding","5px")})
        },
        Table:function(){
            // 待办信息表格
            layui.use('table', function() {
                var table = layui.table;
                var infoTable = table.render({
                    elem: '#zbqk',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('zbqk').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'username', width: '20%', title: '岗位' },
                            { field: 'zbry', width: '25%', title: '值班人员' },
                            { field: 'zbsj', width: '55%', title: '值班时间' },
                        ]
                    ],
                    data: [
                       {username:'收押',zbry:'王四',zbsj:'2019-10-20 09:00-18:00'},
                       {username:'巡控',zbry:'李六',zbsj:'2019-11-29 18:00-24:00'},
                       {username:'医务',zbry:'徐五',zbsj:'2029-12-24 09:00-18:00'},
                       {username:'管教',zbry:'蒋三',zbsj:'2019-12-29 09:00-18:00'},
                    ]
                });
                var infoTable2 = table.render({
                    elem: '#sgqk',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('sgqk').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'wgjsh', width: '25%', title: '违规监室号' },
                            { field: 'wgmj', width: '25%', title: '违规民警编号' },
                            { field: 'wgry', width: '25%', title: '违规人员编号' },
                            { field: 'wgxz', width: '25%', title: '违规性质' },
                        ]
                    ],
                    data: [
                      {wgjsh:'0102',wgmj:'1003',wgry:'0103',wgxz:'一般性质'},
                      {wgjsh:'0105',wgmj:'1018',wgry:'0108',wgxz:'一般性质'},
                      {wgjsh:'0107',wgmj:'2035',wgry:'0201',wgxz:'恶劣性质'},
                      {wgjsh:'0201',wgmj:'2036',wgry:'0203',wgxz:'恶劣性质'},
                      {wgjsh:'0203',wgmj:'3205',wgry:'0205',wgxz:'恶劣性质'},
                    ]
                });   
                var infoTable3 = table.render({
                    elem: '#jrdbsx',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jrdbsx').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'xm', width: '25%', title: '人员姓名' },
                            { field: 'rybh', width: '25%', title: '人员编号' },
                            { field: 'dbsx', width: '25%', title: '待办事项' },
                            { field: 'dbsj', width: '25%', title: '待办时间' },
                        ]
                    ],
                    data: [
                      {xm:'张三',rybh:'0101',dbsx:'收容监区犯人',dbsj:'2020-3-4'},
                      {xm:'李四',rybh:'0236',dbsx:'清点人员',dbsj:'2020-3-18'},
                      {xm:'王五',rybh:'0357',dbsx:'集合喊话',dbsj:'2020-3-25'},
                      {xm:'黄六',rybh:'0410',dbsx:'统计物品',dbsj:'2020-4-02'},
                      {xm:'张三',rybh:'0101',dbsx:'收容监区犯人',dbsj:'2020-3-4'},
                      {xm:'李四',rybh:'0236',dbsx:'清点人员',dbsj:'2020-3-18'},
                      {xm:'王五',rybh:'0357',dbsx:'集合喊话',dbsj:'2020-3-25'},
                      {xm:'黄六',rybh:'0410',dbsx:'统计物品',dbsj:'2020-4-02'},
                    ]
                });
                var infoTable4 = table.render({
                    elem: '#jcqk',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jcqk').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'xm', width: '25%', title: '人员姓名' },
                            { field: 'rybh', width: '25%', title: '人员编号' },
                            { field: 'jcqk', width: '25%', title: '奖励情况' },
                            { field: 'cfqk', width: '25%', title: '惩罚情况' },
                        ]
                    ],
                    data: [
                      {xm:'张三',rybh:'0101',jcqk:'工作表现突出',cfqk:'暂无惩罚'},
                      {xm:'李四',rybh:'0102',jcqk:'任务完成表现突出',cfqk:'暂无惩罚'},
                      {xm:'王五',rybh:'0201',jcqk:'暂无奖励',cfqk:'暂无惩罚'},
                      {xm:'黄六',rybh:'0202',jcqk:'暂无奖励',cfqk:'暂无惩罚'},
                      {xm:'张三',rybh:'0101',jcqk:'工作表现突出',cfqk:'暂无惩罚'},
                      {xm:'李四',rybh:'0102',jcqk:'任务完成表现突出',cfqk:'暂无惩罚'},
                      {xm:'王五',rybh:'0201',jcqk:'暂无奖励',cfqk:'暂无惩罚'},
                      {xm:'黄六',rybh:'0202',jcqk:'暂无奖励',cfqk:'暂无惩罚'},
                    ]
                });
                var infoTable5 = table.render({
                    elem: '#dwgl',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dwgl').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'mjdw', width: '25%', title: '民警队伍' },
                            { field: 'mjdwrs', width: '25%', title: '民警队伍人数' },
                            { field: 'fjdw', width: '25%', title: '辅警队伍' },
                            { field: 'fjdwrs', width: '25%', title: '辅警队伍人数' },
                        ]
                    ],
                    data: [
                      {mjdw:'一队',mjdwrs:'50',fjdw:'一队',fjdwrs:'29'},
                      {mjdw:'二队',mjdwrs:'27',fjdw:'二队',fjdwrs:'35'},
                      {mjdw:'三队',mjdwrs:'35',fjdw:'三队',fjdwrs:'20'},
                      {mjdw:'四队',mjdwrs:'28',fjdw:'四队',fjdwrs:'18'},
                      {mjdw:'五队',mjdwrs:'39',fjdw:'五队',fjdwrs:'5'},
                      {mjdw:'六队',mjdwrs:'42',fjdw:'六队',fjdwrs:'5'},
                      {mjdw:'七队',mjdwrs:'18',fjdw:'七队',fjdwrs:'3'},
                      {mjdw:'八队',mjdwrs:'18',fjdw:'八队',fjdwrs:'3'},
                    ]
                });
            });
        },
        list:function(){
            // 交接班
            var peopleInfo = [
                {
                    icon:'chuangkoufuwu',
                    title:'交接班人员',
                    info:'徐五'
                },{
                    icon:'chuangkoufuwu',
                    title:'交接班时间',
                    info:'2019-12-21 19:25:58'
                },{
                    icon:'chuangkoufuwu',
                    title:'工作记录',
                    info:'监区检查'
                },{
                    icon:'chuangkoufuwu',
                    title:'注意事项',
                    info:'暂无'
                }
            ];
            var jjbHtml = jjbTempl('com/jjbPalte',{data:peopleInfo});
            document.querySelector(".jjb").innerHTML = jjbHtml;
        },

        
        Echart:function(){
            var khqkCharts = echarts.init(document.querySelector('.khqk'));
            var ryqkCharts = echarts.init(document.querySelector('.ryqk'));
            var whcdCharts = echarts.init(document.querySelector('.whcd'));
            khqkCharts.on('click',function(){
                tableUtils.popup({
                    title:'&#xe61e;绩效管理'
                })

            })
            ryqkCharts.on('click',function(){
                tableUtils.popup({
                    title:'&#xe61e;监所总控'
                })

            })
            whcdCharts.on('click',function(){
                tableUtils.popup({
                    title:'&#xe61e;勤务保障'
                })

            })
            // whcdCharts.on('click',function(){
            //     tableUtils.popup({
            //         title:'本周财务情况'
            //     })

            // })
            var khqkOptions = echart.getOption('pie', {
                legendData: ['全勤', '迟到一次', '迟到二次', '迟到三次','迟到三次及以上','旷工一次','旷工二次','旷工三次及以上'],
                seriesData: [{ name: '全勤', value: 8.78 },
                    { name: '迟到一次', value: 18.82 },
                    { name: '迟到二次', value: 20.09 },
                    { name: '迟到三次及以上', value: 15.8 },
                    { name: '旷工一次', value: 9.34 },
                    { name: '旷工二次', value: 10.71 },
                    { name: '旷工三次及以上', value: 16.64 },
                ],
                seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980','#D87A80','#8D98B3','#E5CF0D'],
            }, {
                name: '百分比',
                radius: ['20%', '47%'],
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 9
                    },
                     formatter: function(param){
                           return param.name + ':' + param.value + '%'
                     }
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
            });//考核情况pie ----end

            var ryqkOptions = echart.getOption('pie', {
                legendData: ['电视教育', '车辆管理', '二级监控', '通信指挥'],
                seriesData: [{ name: '电视教育', value: 0.54 },
                    { name: '车辆管理', value: 47.19 },
                    { name: '二级监控', value: 45.22 },
                    { name: '通信指挥', value: 7.05 },
                ],
                seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980'],
            }, {
                name: '总情况',
                radius: '50%',
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 11
                    },
                     formatter:function(param){
                         return param.name +':'+param.value + '%'
                     },
                },
                lineStyle: {
                    type: 'solid',
                    fontSize :15,
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
            });//工作人员情况Pie -----end

            var whcdOptions = echart.getOption('pie', {
                legendData: ['洗漱用品', '生活用品', '工具用品', '其他用品','杂物'],
                seriesData: [{ name: '洗漱用品', value: 0.53 },
                    { name: '生活用品', value: 20.69 },
                    { name: '工具用品', value: 78.74 },
                    { name: '其他用品', value: 3.98 },
                    { name: '杂物', value: 1 },
                ],
                seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980','#D87A80'],
            }, {
                name: '总情况',
                radius: '50%',
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 11
                    },
                     formatter:function(param){
                         return param.name +':'+param.value + '%'
                     },
                },
                lineStyle: {
                    type: 'solid',
                    fontSize :15,
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
            });//文化程度Pie -----end

            khqkCharts.setOption(khqkOptions);
            ryqkCharts.setOption(ryqkOptions);
            whcdCharts.setOption(whcdOptions);
            khqkCharts.resize({height: Box_Height});
            ryqkCharts.resize({height: Box_Height});
            whcdCharts.resize({height: Box_Height});
            window.onresize = function() {
                khqkCharts.resize();
                ryqkCharts.resize();
                whcdCharts.resize();
            };
                     // 勤务保障弹窗
                     whcdCharts.on('click', function(params) {
                        tableUtils.popup({
                            title: '&#xe61e;勤务保障',
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
                    // 监所总控弹窗
                    ryqkCharts.on('click', function(params) {
                        tableUtils.popup({
                            title: '&#xe61e;监所总控',
                            url:'',
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
                    // 绩效管理弹窗
                    khqkCharts.on('click', function(params) {
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
                            title: '&#xe61e;绩效管理',
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
                    //安全检查情况弹框
                    $(".list_ul ul li").each(function(){
                        $(this).click(function(){
                            tableUtils.popup({
                                title: '&#xe61e;安全检查情况',
                                url: '',
                                height: 'full-200',
                                params: {
        
                                },
                                columns:
                                    [
                                       
                                    ],
        
                            });
        
                        });
                    });
                    //检查情况弹窗
                    $(".jcqk_ul ul li").each(function(){
                        $(this).click(function(){
                            tableUtils.popup({
                                title: '&#xe61e;检查情况',
                                url: '',
                                height: 'full-200',
                                params: {
        
                                },
                                columns:
                                    [
                                       
                                    ],
        
                            });
        
                        });
                    });
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