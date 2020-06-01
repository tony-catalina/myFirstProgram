/**
 * 首页 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layui');
    var echarts = require('echarts');
    var util = require('awd/easyui/util');
    var tableUtils = require('awd/layui/table_utils');
    var grid = require('awd/easyui/grid');
    var tab = require('modules/tab');
    var url = require('modules/url');
    var tree = require('awd/easyui/tree');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html');//交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function () {
            main.list();
            main.Echart();
            main.aqjc();
            main.wgcl();
            main.drjl();
            main.jrdbsx();
            main.jcqk();
            main.dwgl();
            main.qwbz();//勤务保障
            main.jxgl();//绩效管理
            main.jszk();//监所总控
        },
        //违规处理
        wgcl: function(){
            tableUtils.init('sgqk', {
                url: url.syzhwgcl,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('sgqk').parentNode.offsetHeight + 5),
                param: {},
                pagesize: 10,

                clumns: [
                    { field: 'dxbh', width: '25%', title: '违规监室号' },
                    { field: 'wgqkcon', width: '25%', title: '违规情况内容' },
                    { field: 'clqk', width: '25%', title: '处理情况' },
                    { field: 'wglxString', width: '25%', title: '违规类型' },
                ]
            });
        },
        //当日警力
        drjl:function(){
            tableUtils.init('zbqk',{
                url: url.syzhdrjl,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('zbqk').parentNode.offsetHeight + 5),
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'jjbgw', width: '20%', title: '岗位' },
                    { field: 'jjbry', width: '25%', title: '值班人员' },
                    { field: 'jjbsj', width: '55%', title: '值班时间' },
                ],
            });
        },
        //今日代办事项
        jrdbsx:function(){
            tableUtils.init('jrdbsx',{
                url: url.syzhjrdbsx,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jrdbsx').parentNode.offsetHeight + 5),
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'snbh', width: '25%', title: '人员编号' },
					{ field: 'xm', width: '25%', title: '人员姓名' },
					{ field: 'jsh', width: '25%', title: '监室号' },
                    { field: 'crjbjString', width: '25%', title: '待办事项' },
                ],
            });
        },
        //奖惩情况
        jcqk:function(){
            tableUtils.init('jcqk',{
                url: url.syzhjcqk,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('jcqk').parentNode.offsetHeight + 5),
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'jh', width: '25%', title: '警号' },
                    { field: 'xm', width: '25%', title: '姓名' },
                    { field: 'jcsj', width: '25%', title: '奖惩时间' },
                    { field: 'jcyy', width: '25%', title: '奖惩原因' },
                ],
            });
        },
        //队伍管理
        dwgl:function(){
            tableUtils.init('dwgl',{
                url: url.syzhdwgl,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dwgl').parentNode.offsetHeight + 5),
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'jh', width: '25%', title: '警号' },
                    { field: 'xm', width: '25%', title: '姓名' },
                    { field: 'xb', width: '25%', title: '性别' },
                    { field: 'jx', width: '25%', title: '警衔' },
                ],
            });
        },
        //勤务保障
        qwbz:function(){
           var qwbzCharts=echarts.init(document.querySelector('.whcd'));
           util.ajax({
               url:url.syzhqwbz,
               type:'post',
               func: function(data){
                   if(data){
                       var qwbzOptions=echart.getOption('pie', {
                           legendData: ['洗漱用品', '生活用品', '工具用品', '其他用品', '杂物'],
                           seriesData: [{ name: '洗漱用品', value: data.result.xsyp},
                               { name: '生活用品', value: data.result.shyp },
                               { name: '工具用品', value: data.result.gjyp },
                               { name: '其他用品', value: data.result.qtyp },
                               { name: '杂物', value: data.result.zw },
                           ],
                           seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980', '#D87A80'],
                       }, {
                           name: '总情况',
                           radius: '50%',
                           label: {
                               show: true,
                               textStyle: {
                                   fontWeight: 200,
                                   fontSize: 11
                               },
                               formatter: function (param) {
                                   return param.name + ':' + param.percent + '%';
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


                       //在这里面
                       qwbzCharts.setOption(qwbzOptions);
                       qwbzCharts.resize({height:Box_Height});
                       window.onresize=function(){
                           qwbzCharts.resize();
                       };
                   }
               }
           });
           qwbzCharts.on('click',function(param){
               let key=-1;
               let name=param.name;
               if('洗漱用品' === name){
                   key=1;
               }else if('生活用品' === name){
                   key=2;
               }else if('工具用品' === name){
                   key=3;
               }else if('其他用品' === name){
                   key=4;
               }else if('杂物' === name){
                   key=5;
               }
               tableUtils.popup({
                   title: '&#xe61e;勤务保障',
                   params:{
                       'ywlx':key
                   },
                   url: url.syzhqwbzdetail,
                   columns: [
                       // { field: 'wpmc', width: '200', title: '物品名称', align: 'center' },
                       // { field: 'sl', width: '200', title: '数量', align: 'center' },
                       // { field: 'tz', width: '200', title: '特征', align: 'center' },
                       // { field: 'xh', width: '200', title: '型号', align: 'center' },
                       // { field: 'lqsl', width: '200', title: '领取数量', align: 'center' },
                       // { field: 'wlqsl', width: '200', title: '未领取数量', align: 'center' }

                       { field: 'ypmc', width: '411', title: '用品名称', align: 'center' },
                       { field: 'ypsl', width: '412', title: '用品数量', align: 'center' },
                       { field: 'yplx', width: '412', title: '用品类型', align: 'center' }
                   ]
               });
           });
        },
        //绩效管理
        jxgl:function(){
            var jxglCharts=echarts.init(document.querySelector('.khqk'));
            util.ajax({
                url: url.syzhjxgl,
                type:'post',
                func:function(data){
                    if(data){
                        var jxglOptions = echart.getOption('pie', {
                            legendData: ['全勤', '迟到一次', '迟到二次', '迟到三次', '迟到三次及以上', '旷工一次', '旷工二次', '旷工三次及以上'],
                            seriesData: [{ name: '全勤', value: data.result.qq},
                                { name: '迟到一次', value: data.result.cdyc },
                                { name: '迟到二次', value: data.result.cdlc },
                                { name: '迟到三次及以上', value: data.result.cdscjys },
                                { name: '旷工一次', value: data.result.kgyc },
                                { name: '旷工二次', value:data.result.kglc},
                                { name: '旷工三次及以上', value:data.result.kgscjys},
                            ],
                            seriesColors: ['#2EC7C9', '#B6A2DE', '#5AB1EF', '#FFB980', '#D87A80', '#8D98B3', '#E5CF0D'],
                        }, {
                            name: '百分比',
                            radius: ['20%', '47%'],
                            label: {
                                show: true,
                                textStyle: {
                                    fontWeight: 200,
                                    fontSize: 9
                                },
                                formatter: function (param) {
                                    return param.name + ':' + param.percent + '%';
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
                        });
                        jxglCharts.setOption(jxglOptions);
                        jxglCharts.resize({height:Box_Height});
                        window.onresize=function(){
                            jxglCharts.resize();
                        };
                    }
                }
            });

            jxglCharts.on('click',function(param){
                let key=-1;
                let name=param.name;
                if('全勤' === name){
                    key='qq';
                }else if('迟到一次' === name){
                    key='cdyc';
                }else if('迟到两次' === name){
                    key='cdlc';
                }else if('迟到三次及以上' === name){
                    key='cdscjys';
                }else if('旷工一次' === name){
                    key='kgyc';
                }else if('旷工两次' === name){
                    key='kglc';
                }else if('旷工三次及以上' === name){
                    key='kgscjys';
                }
                tableUtils.popup({
                    title: '绩效管理',
                    url: url.syzhjxgldetail,
                    params:{
                        ywlx:key
                    },
                    columns: [
                        { field: 'jh', width: '250', title: '警号', align: 'center' },
						{ field: 'xm', width: '200', title: '管教姓名', align: 'center' },
						{ field: 'xb', width: '250', title: '性别', align: 'center' },
                        { field: 'djr', width: '250', title: '登记人', align: 'center' },
						{ field: 'djsj', width: '250', title: '登记时间', align: 'center' },
                        { field: 'bz', width: '250', title: '备注', align: 'center' },
                        { field: 'djsj', width: '236', title: '登记时间', align: 'center' }
                    ]
                });
            });
        },
        //监所总控
        jszk:function(){
           var jszkCharts=echarts.init(document.querySelector('.ryqk'));
           jszkCharts.on('click',function(param){
               let key=-1;
               let name=param.name;
               if('电视教育' === name ){
                   key=1;
               }else if('车辆管理' === name){
                   key=2;
               }else if('二级监控' === name){
                   key=3;
               }else if('通信指挥' === name){
                   key=4;
               }

               tableUtils.popup({
                   title: '&#xe61e;监所总控',
                   params:{
                        'ywlx':key
                   },
                   url: url.syzhjszkdetail,
                   columns:
                       [
                           // { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                           // { field: 'xm', width: '150', title: '姓名', align: 'center' },
                           // { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                           // { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                           // { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                           // { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                           // { field: 'badw', width: '200', title: '办案单位', align: 'center' },
                           { field: 'fzr',  width: 413, title: '负责人', align: 'center' },
                           //{ field: 'xxqk', width: 310, title: '详细情况', align: 'center' },
                           { field: 'zklx', width: 413, title: '总控类型', align: 'center' },
                           { field: 'zxsj', width: 414, title: '执行时间', align: 'center' },


                       ],
               });
           });
           util.ajax({
               url:url.syzhjszk,
               type:'post',
               func:function(data){
                   if(data){
                       var jszkOptions=echart.getOption('pie', {
                           legendData: ['电视教育', '车辆管理', '二级监控', '通信指挥'],
                           seriesData: [{ name: '电视教育', value: data.result.dsjy },//
                               { name: '车辆管理', value: data.result.clgl },//
                               { name: '二级监控', value:data.result.ejjk },//
                               { name: '通信指挥', value: data.result.txzh},//
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
                               formatter: function (param) {
                                   return param.name + ':' + param.percent + '%';
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
                       jszkCharts.setOption(jszkOptions);
                       jszkCharts.resize({height:Box_Height});
                       window.onresize=function(){
                           jszkCharts.resize();
                       };
                   }
               },
           });
        },
        list: function () {
            // 交接班
            $.ajax({
                url: url.syGwjjb,
                data: { jbgw: 'zhgw' },
                type: 'post',
                success: function (data) {
                    var peopleInfo = [
                        {
                            icon: 'chuangkoufuwu',
                            title: '交接班人员',
                            info: data.jbry
                        },
                        {
                            icon: 'chuangkoufuwu',
                            title: '交接班时间',
                            info: data.jbsj
                        },
                        {
                            icon: 'chuangkoufuwu',
                            title: '工作记录',
                            info: data.gzjl
                        },
                        {
                            icon: 'chuangkoufuwu',
                            title: '注意事项',
                            info: data.zysx
                        }
                    ];
                    var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                    document.querySelector('.jjb').innerHTML = jjbHtml;
                }
            });
        },
        aqjc: function () {
            //安全检查那个框
            $.ajax({

                url:url.syzhaqjcqk,
                type: 'post',
                success: function (data) {
                    document.querySelector('#jcr').innerHTML = data.jcr;
                    document.querySelector('#jcsj').innerHTML = data.jcsj;
                    document.querySelector('#jcjl').innerHTML = data.jcjl;
                }
            });

            //安全检查弹窗
            // $('#aqjcqk').on('click', function () {
            //     tableUtils.popup({
            //         title: '&#xe61e;安全检查情况',
            //         url:url.zhAqjc,
            //         params: {
            //         },
            //         columns:
            //             [
            //                 { field: 'jcr', width: '400', title: '检查人', align: 'center' },
            //                 { field: 'jcsj', width: '400', title: '检查时间', align: 'center' },
            //                 { field: 'jcjl', width: '400', title: '检查记录', align: 'center' }
            //             ]
            //         // columns:
            //         //     [
            //         //         { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
            //         //         { field: 'xm', width: '150', title: '姓名', align: 'center' },
            //         //         { field: 'jsh', width: '150', title: '监室号', align: 'center' },
            //         //         { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
            //         //         { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
            //         //         { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
            //         //         { field: 'badw', width: '200', title: '办案单位', align: 'center' },
            //         //     ],
            //
            //     });
            //
            // });


        },
        Echart: function () {
            //个角色菜单
            $('.icon_box').on('click', function () {
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