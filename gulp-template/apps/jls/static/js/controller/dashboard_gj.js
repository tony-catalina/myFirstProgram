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
    var grid=require('awd/easyui/grid');
    var tab = require('modules/tab');
    var utils = require('awd/layui/utils');
    var tableUtils = require('awd/layui/table_utils');
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
                    elem: '#dbxx',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',   
                    cols: [
                        [
                            { field: 'username', width: 80, title: '监室号' },
                            { field: 'xssj', width: 150, title: '巡视时间' },
                            { field: 'city', width: 100, title: '巡视民警' },
                            { field: 'sign', title: '警号', width: 110 },
                        ]
                    ],
                    data: [
                        { username: "1001", xssj: "2020-2-13", city: "张三", sign: "05121", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1002", xssj: "2020-2-14", city: "李四", sign: "06591", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1003", xssj: "2020-2-14", city: "王五", sign: "05873", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "2020-2-15", city: "小二", sign: "07031", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "2020-2-15", city: "小二", sign: "07031", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                    ]
                });
                var infoTable2 = table.render({
                    elem: '#tfsj',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'username', width: 80, title: '监室号' },
                            { field: 'xssj', width: 150, title: '事件时间' },
                            { field: 'city', width: 78, title: '值班民警' },
                            { field: 'sign', title: '事件描述', width: 125 },
                        ]
                    ],
                    data: [
                        { username: "1001", xssj: "2020-2-13", city: "王五", sign: "集体斗殴", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1002", xssj: "2020-2-14", city: "张三", sign: "偷窃物品", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1003", xssj: "2020-2-14", city: "李二", sign: "私自交易", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "2020-2-15", city: "老四", sign: "故意挑衅", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "2020-2-15", city: "老四", sign: "故意挑衅", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                    ]
                });  
                var infoTable3 = table.render({
                    elem: '#fxry',
                    // url: '/demo/table/user/', //数据接口
                    page: true,
                    even: true,
                    height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                    skin: 'line',   

                    cols: [
                        [
                            { field: 'username', width: 80, title: '监室号' },
                            { field: 'xssj', width: 150, title: '人员编号' },
                            { field: 'city', width: 78, title: '姓名' },
                            { field: 'sign', title: '风险登记', width: 130 },
                        ]
                    ],
                    data: [
                        { username: "1001", xssj: "0101", city: "王五", sign: "一级", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1002", xssj: "0201", city: "张三", sign: "二级", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1003", xssj: "0202", city: "李二", sign: "二级", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "0301", city: "老四", sign: "三级", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
                        { username: "1004", xssj: "0402", city: "老四", sign: "三级", experience: "unknown", score: "unknown", classify: "unknown", wealth: "unknown" },
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
                    info:'张三'
                },{
                    icon:'chuangkoufuwu',
                    title:'交接班时间',
                    info:'2019-12-21 19:25:58'
                },{
                    icon:'chuangkoufuwu',
                    title:'工作记录',
                    info:'清点人员'
                },{
                    icon:'chuangkoufuwu',
                    title:'注意事项',
                    info:'暂无'
                }
            ];
            var jjbHtml = jjbTempl('com/jjbPalte',{data:peopleInfo});
            document.querySelector(".jjb").innerHTML = jjbHtml;


            // 文明监室
            var sjData = ['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302','0303','0304','0401','0402','0403','0404'] ;
            var wmjsHtml = '';
            var ygjsHtml = '';
            for (let i = 0; i < sjData.length; i++) {
               wmjsHtml += '<div class="item-list">'+
                                '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>'+
                                '<div>'+sjData[i]+'</div>'+
                            '</div>';
               ygjsHtml += '<div class="item-list" style="background:linear-gradient(to top right, #e4656c, #f30834)">'+
                               '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>'+
                               '<div style="color:white">'+sjData[i]+'</div>'+
                           '</div>';             
            };
            console.log(wmjsHtml);
            document.querySelector(".civilized-prison").innerHTML = wmjsHtml;
            document.querySelector(".strict-prison").innerHTML = ygjsHtml;
        
        },

        
        Echart:function(){
            var jrywCharts = echarts.init(document.querySelector('.jryw'));
            var qybzCharts = echarts.init(document.querySelector('.qybz'));
            
            //文明监室，严管监室弹窗
            $(".civilized-prison").each(function () {
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

            qybzCharts.on('click',function(){
                // tableUtils.popup({
                //     title:'全益保障'
                // })
                tableUtils.popup({
                    title: '&#xe61e;全益保障',
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
            jrywCharts.on('click',function(){
                // tableUtils.popup({
                //     title:'出入安检'
                // })
                tableUtils.popup({
                    title: '&#xe61e;出入安检',
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
            //饼状图 Start 
            var qybzOptions = echart.getOption('pie', {
                legendData: ['放风', '洗澡', '理发', '发水','发饭'],
                legendHeight:50,
                seriesData: [{ name: '放风', value: 17 },
                    { name: '洗澡', value: 19 },
                    { name: '理发', value: 21 },
                    { name: '发水', value: 15 },
                    { name: '发饭', value: 20 },
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
                     formatter:function(param){
                         return param.name +':'+param.value
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
            });
            //饼状图 End
            //柱状图 Start
            var jrywOptions = echart.getOption('bars',{
            xdata: ['清监', '突发事件', '打扫卫生', '就医体检','风险人员'],
            yheight:Box_Height-50},
            [{
                type:'bar',
                data: [12, 9, 11, 10, 12],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00','#D87080'];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            }]);
            //柱状图 End
            jrywCharts.setOption(jrywOptions);
            qybzCharts.setOption(qybzOptions);
            jrywCharts.resize({ height:Box_Height});
            qybzCharts.resize({ height:Box_Height});

            window.onresize = function() {
                jrywCharts.resize();
                qybzCharts.resize();
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