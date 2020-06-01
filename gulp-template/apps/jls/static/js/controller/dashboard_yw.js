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
            main.list();
            main.initPapel();
        },
        initPapel:function(){
            const Papel_Title = $(".list-title");
            Papel_Title.each(function(index){
                if(index == 1) $(this).css("padding","6px")
                else $(this).css("padding","16px")
        })
        },
        Table: function() {
            layui.use('table', function() {
                var table = layui.table;
                var infoTable = table.render({
                    elem: '#xzjl',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xzjl').parentNode.offsetHeight + 0),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '20%', title: '监区号' },
                            { field: 'sex', width: '20%', title: '监室号' },
                            { field: 'sign', width: '20%', title: '巡诊人' },
                            { field: 'city', title: '巡诊时间', width: '40%' },
                            // { field: 'score', width: 80, title: '待办事项' },
                            // { field: 'classify', width: 80, title: '数量' },
                            // { field: 'wealth', width: 135, title: '备注' }
                        ]
                    ],
                    data: [
                        { username: "东一监区", sex: "1001", city: "2020/2/3", sign: "张三", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "东二监区", sex: "2001", city: "2020/2/18", sign: "李四", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "西一监区", sex: "3003", city: "2020/3/8", sign: "王五", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "西二监区", sex: "3004", city: "2020/4/19", sign: "徐六", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                    ]
                });
                var infoTable = table.render({
                    elem: '#ypkc',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('ypkc').parentNode.offsetHeight + 0),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: '20%', title: '药品名称' },
                            { field: 'sex', width: '15%', title: '单位' },
                            { field: 'sign', width: '20%', title: '库存数量' },
                            { field: 'experience', title: '生产单位', width: '20%' },
                            { field: 'city', title: '生产日期', width: '25%' },
                            // { field: 'score', width: 80, title: '待办事项' },
                            // { field: 'classify', width: 80, title: '数量' },
                            // { field: 'wealth', width: 135, title: '备注' }
                        ]
                    ],
                    data: [
                        { username: "消炎片", sex: "盒", city: "2020/2/3", sign: "20", experience: "哈药", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "急支糖浆", sex: "瓶", city: "2020/2/18", sign: '35', experience: "制药", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "感冒通", sex: "盒", city: "2020/3/8", sign: "30", experience: "恒大", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "止痛片", sex: "罐", city: "2020/4/19", sign: "46", experience: "制药", score: "unknown", classify: "unknown", wealth: "unknown" },
                    ]
                });
                var infoTable = table.render({
                    elem: '#jhjl',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jhjl').parentNode.offsetHeight + 0),
                    skin: 'line',
                    page: {
                        limit: 5
                    },
                    cols: [
                        [
                            { field: 'username', width: 88, title: '药品名称' },
                            { field: 'sex', width: 65, title: '单位' },
                            { field: 'num', width: 88, title: '进货数量' },
                            { field: 'experience', title: '生产单位', width: 88 },
                            { field: 'city', title: '生产年份', width: 88 },
                            // { field: 'score', width: 80, title: '待办事项' },
                            // { field: 'classify', width: 80, title: '数量' },
                            // { field: 'wealth', width: 135, title: '备注' }
                        ]
                    ],
                    data: [
                        { username: "止痛片", sex: "罐", city: "2019", sign: "46",num:'35', experience: "哈药", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "感冒通", sex: "瓶", city: "2019", sign: '26', num:'59',experience: "制药", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "急支糖浆", sex: "盒", city: "2020", sign: "30", num:'59',experience: "恒大", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "感冒通", sex: "盒", city: "2020", sign: "46", num:'35',experience: "制药", score: "unknown", classify: "unknown", wealth: "unknown" },
                    ]
                });

            });
        },
        list:function(){
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
                info: '进行消毒工作'
            }, {
                icon: 'chuangkoufuwu',
                title: '注意事项',
                info: '2020监室无人'
            }];

            var ListInfo = [{
                icon: 'jibenxinxi',
                title: '消毒人员',
                info: '临时工'
            },{
                icon: 'zhizhang',
                title: '消毒时间',
                info: '2020-4-10 10:43'
            }, {
                icon: 'shenqing',
                title: '消毒日志',
                info: '所有监室以消毒处理'
            }, ]

            var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
            var wsfyHtml = jjbTempl('com/jjbPalte', { data: ListInfo });
            document.querySelector("#jjb").innerHTML = jjbHtml;
            document.querySelector("#wsfy").innerHTML = wsfyHtml;
        },
        Echart: function() {
            var jyxxCharts = echarts.init(document.querySelector('.jyxx'));
            var jbqkCharts = echarts.init(document.querySelector('.jbqk'));
            // var jkjcCharts = echarts.init(document.querySelector('.yw_player-card'));


            // jkjcCharts.on('click',function(){
            //     tableUtils.popup({
            //         title: '&#xe61e;健康检查',
            //         url: '',
            //         params: {
            //             // bahj: paramsName,
            //             // sytj: '1'
            //         },
            //         columns:
            //             [
            //                 { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
            //                 { field: 'xm', width: '150', title: '姓名', align: 'center' },
            //                 { field: 'jsh', width: '150', title: '监室号', align: 'center' },
            //                 { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
            //                 { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
            //                 { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
            //                 { field: 'badw', width: '200', title: '办案单位', align: 'center' },
            //             ],
            //
            //     })
            //
            // })
            //健康检查模块弹窗
            $(".jkjc").each(function () {
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
            //重病号模块弹窗
            $(".zbh").each(function () {
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
            //就医信息·
            jyxxCharts.on('click',function(){
                tableUtils.popup({
                    title: '&#xe61e;就医信息',
                    url: '',
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
            //疾病信息
            jbqkCharts.on('click',function(){
                tableUtils.popup({
                    title: '&#xe61e;疾病情况',
                    url: '',
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
            });//就医信息pie ----end
            var jbqkOptions = echart.getOption('pie', {
                legendData: ['心脏病', '高血压', '糖尿病', '普通感冒','传染性疾病','其他重大疾病'],
                seriesData: [{ name: '心脏病', value: 9.55 },
                    { name: '高血压', value: 37.15 },
                    { name: '糖尿病', value: 17.51 },
                    { name: '普通感冒', value: 5.55 },
                    { name: '传染性疾病', value: 14.32 },
                    { name: '重大疾病', value: 15.92 },
                ],
                seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980','#D87A80','#8D98B3'],
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
            });//疾病情况pie ------- end
            jyxxCharts.setOption(jyxxOptions);
            jbqkCharts.setOption(jbqkOptions);
            jyxxCharts.resize({height: Box_Height});
            jbqkCharts.resize({height: Box_Height});
            window.onresize = function() {
                jyxxCharts.resize();
                jbqkCharts.resize();
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