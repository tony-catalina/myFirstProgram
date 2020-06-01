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
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');
    var echart = require('awd/echart/echart');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var Box_Height = $('.item-content').height(); //获取盒容器的高以供Echarts使用。
    //界面控件
    var main = {
        init: function() {
            main.Echart();
            main.layout();
        },
        layout: function() {
            main.jjb();
            main.bzcw();
            main.bzxjjj();
            main.szjd();
            main.stcg();
            main.jfjd();
            main.sqsw();
            main.bzwpjj();
            main.gdzcgl();
        },
        jjb: function() {
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
                info: 'dddd'
            }];
            util.ajax({
                url: url.syGwjjb,
                type: 'POST',
                data: { jbgw: '财务岗位' },
                func: function(data) {
                    if (data) {
                        peopleInfo[0].info = data.jbry;
                        peopleInfo[1].info = data.jbsj;
                        peopleInfo[2].info = data.gzjl;
                        peopleInfo[3].info = data.zysx;
                        var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector('.jjb').innerHTML = jjbHtml;
                        $(".jjb").off('click').on('click', function() {
                            tableUtils.popup({
                                title: '&#xe61e; 本周出所',
                                url: url.xjzcJbxxList,
                                                            params:  { "ywlx": "lscs" },
                                                            columns: [{  field:   'snbh',  width:   '150',  title:   '人员编号',  align:   'center'  },                                      {  field:   'xm',  width:   '150',  title:   '姓名',  align:   'center'  },                                      {  field:   'jsh',  width:   '150',  title:   '监室号',  align:   'center'  },                                      {  field:   'bahjString',  width:   '150',  title:   '办案环节',  align:   'center'  },                                      {  field:   'rsrq',  width:   '200',  title:   '入所日期',  align:   'center'  },                                      {  field:   'gyqx',  width:   '200',  title:   '关押期限',  align:   'center'  },                                      {  field:   'badw',  width:   '350',  title:   '办案单位',  align:   'center'  }],
                                                            
                            })                        
                        })
                    }
                }
            });

        },
        bzcw: function() {
            var dbsxCharts = echarts.init(document.querySelector('.dbsx'));
            dbsxCharts.on('click', function(param) {
                console.log(param);
                console.log("=======");
                if (param.name == '现金接收金额') {
                    tableUtils.popup({
                        title: '&#xe61e;现金接收金额',
                        url: url.xjzcJbxxList,
                        height: 'full-200',
                        params: { ywlx: 'xjjsje' },
                        columns: [
                            { field: 'jbxxJsh', width: '200', title: '监室号' },
                            { field: 'rybh', width: '200', title: '人员编号' },
                            { field: 'jbxxXm', width: '200', title: '姓名' },
                            { field: 'jsje', title: '支出金额', width: '200' },
                            { field: 'stateString', width: '600', title: '状态' }
                        ]

                    });
                }
                if (param.name == '现金支出金额') {
                    tableUtils.popup({
                        title: '&#xe61e;现金支出金额',
                        url: url.xjzcJbxxList,
                        height: 'full-200',
                        params: { ywlx: 'xjzcje' },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称' },
                            { field: 'rybh', width: '200', title: '人员编号' },
                            { field: 'blr', width: '200', title: '办理人' },
                            { field: 'xfje', title: '消费金额', width: '200' },
                            { field: 'xflxString', width: '600', title: '消费类型' }
                        ]
                    });
                }
                if (param.name == '商品支付金额') {
                    tableUtils.popup({
                        title: '&#xe61e;商品支付金额',
                        url: url.xjzcJbxxList,
                        height: 'full-200',
                        params: { ywlx: 'spzfje' },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称' },
                            { field: 'ddh', width: '200', title: '订单号' },
                            { field: 'ddrq', width: '200', title: '订单日期' },
                            { field: 'xfze', title: '消费总额', width: '200' },
                            { field: 'bz', width: '600', title: '备注' }
                        ]
                    });
                }
                if (param.name == '财务退还金额') {
                    tableUtils.popup({
                        title: '&#xe61e;财务退还金额',
                        url: url.xjzcJbxxList,
                        height: 'full-200',
                        params: { ywlx: 'cwthje' },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称' },
                            { field: 'rybh', width: '200', title: '人员编号' },
                            { field: 'blr', width: '200', title: '办理人' },
                            { field: 'xfje', title: '消费金额', width: '200' },
                            { field: 'xflxString', width: '600', title: '消费类型' }
                        ]

                    });
                }

            });

            util.ajax({
                url: url.tjbzcwCount,
                type: 'post',
                data: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1] },
                func: function(data) {
                    if (data) {
                        var dbsxOptions = echart.getOption('pie', {
                            legendData: ['现金接收金额', '现金支出金额', '商品支付金额', '财务退还金额'],
                            seriesData: [{ name: '现金接收金额', value: data.result.zczje },
                                { name: '现金支出金额', value: data.result.jszje },
                                { name: '商品支付金额', value: data.result.spzfje },
                                { name: '财务退还金额', value: data.result.cwth },
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
                        dbsxCharts.setOption(dbsxOptions);
                        dbsxCharts.resize({
                            height: Box_Height
                        });
                        window.onresize = function() {
                            dbsxCharts.resize();
                        };
                    }
                }
            });

        },
        bzxjjj: function() {
            tableUtils.init('xjjj', {
                url: url.bzxjjjlist,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('xjjj').parentNode.offsetHeight + 5),
                param: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1], rows: 10 },
                pagesize: 10,
                clumns: [
                    { field: 'jbxxJsh', width: '18%', title: '监室号' },
                    { field: 'rybh', width: '21%', title: '人员编号' },
                    { field: 'jbxxXm', width: '20%', title: '姓名' },
                    { field: 'jsje', title: '接济金额', width: '20%' },
                    { field: 'srlxString', width: '20%', title: '备注' }
                ]
            });
            util.ajax({
                url: url.bzxjjjtj,
                type: 'post',
                data: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1] },
                func: function(data) {
                    if (data) {
                        $('#bzxjjjtj').html('现金接济金额：' + data.result.jszje + '元;现金接济人数：' + data.result.total + '人');

                    }
                }
            });
        },
        szjd: function() {
            // 待办信息表格
            tableUtils.init('dbxx', {
                url: url.cwgwszjd,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                pagesize: 10,
                param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'sldxm', width: '20%', title: '领导姓名' },
                    { field: 'jdsj', width: '25%', title: '接待时间' },
                    { field: 'zlfxm', width: '20%', title: '姓名' },
                    { field: 'fywt', width: '25%', title: '反映问题', },
                    { field: 'lfrs', width: '8%', title: '人数' }
                ]
            });
        },
        stcg: function() {
            var ywblCharts = echarts.init(document.querySelector('.ywbl'));
            ywblCharts.on('click', function(param) {
                console.log(param)
                if (param.seriesName == '大米') {
                    tableUtils.popup({
                        title: '&#xe61e;食堂采购',
                        url: url.cwgwstcgmx,
                        params: {
                            mouth: param.name,
                            type: '1'
                        },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称', align: 'center' },
                            {
                                width: '200',
                                title: '采购商品类型',
                                align: 'center',
                                templet: function(res) {
                                    let data = "";
                                    if (res.cgsplx == "1") data = "大米"
                                    else if (res.cgsplx == "2") data = "食用油"
                                    else if (res.cgsplx == "3") data = "调味品"
                                    return data
                                }
                            },
                            { field: 'cgsl', width: '200', title: '采购数量', align: 'center' },
                            { field: 'xfje', width: '200', title: '消费金额', align: 'center' },
                            { field: 'cgr', width: '300', title: '采购人', align: 'center' },
                            { field: 'cgsj', width: '300', title: '采购时间', align: 'center' },
                        ],

                    })
                }
                if (param.seriesName == '食用油') {
                    tableUtils.popup({
                        title: '&#xe61e;食堂采购',
                        url: url.cwgwstcgmx,
                        params: {
                            mouth: param.name,
                            type: '2'
                        },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称', align: 'center' },
                            {
                                width: '200',
                                title: '采购商品类型',
                                align: 'center',
                                templet: function(res) {
                                    let data = "";
                                    if (res.cgsplx == "1") data = "大米"
                                    else if (res.cgsplx == "2") data = "食用油"
                                    else if (res.cgsplx == "3") data = "调味品"
                                    return data
                                }
                            },
                            { field: 'cgsl', width: '200', title: '采购数量', align: 'center' },
                            { field: 'xfje', width: '200', title: '消费金额', align: 'center' },
                            { field: 'cgr', width: '300', title: '采购人', align: 'center' },
                            { field: 'cgsj', width: '300', title: '采购时间', align: 'center' },
                        ],

                    })
                }
                if (param.seriesName == '调味品') {
                    tableUtils.popup({
                        title: '&#xe61e;食堂采购',
                        url: url.cwgwstcgmx,
                        params: {
                            mouth: param.name,
                            type: '3'
                        },
                        columns: [
                            { field: 'jsbhString', width: '200', title: '监所名称', align: 'center' },
                            {
                                width: '200',
                                title: '采购商品类型',
                                align: 'center',
                                templet: function(res) {
                                    let data = "";
                                    if (res.cgsplx == "1") data = "大米"
                                    else if (res.cgsplx == "2") data = "食用油"
                                    else if (res.cgsplx == "3") data = "调味品"
                                    return data
                                }
                            },
                            { field: 'cgsl', width: '200', title: '采购数量', align: 'center' },
                            { field: 'xfje', width: '200', title: '消费金额', align: 'center' },
                            { field: 'cgr', width: '300', title: '采购人', align: 'center' },
                            { field: 'cgsj', width: '300', title: '采购时间', align: 'center' },
                        ],

                    })
                }

            })
            util.ajax({
                url: url.cwgwstcg,
                type: 'post',
                data: { startDate: '', endDate: '' },
                func: function(data) {
                    if (data) {
                        let NewData = [
                            ['月份', '大米', '食用油', '调味品']
                        ];
                        const ResData = data.result.result;

                        for (let i = 0; i < ResData.length; i++) {
                            let ObjData = ['' + (i + 1) + '月', ResData[i].dm, ResData[i].syy, ResData[i].twp]
                            NewData.push(ObjData)
                        }
                        var ywblOptions = echart.getOption('bar_lins', NewData, '');
                        console.log(ywblOptions)

                        ywblCharts.setOption(ywblOptions);
                        ywblCharts.resize({
                            height: Box_Height + 40
                        });
                        window.onresize = function() {
                            ywblCharts.resize();
                        };
                    }
                }
            });

        },
        bzwpjj: function() {
            tableUtils.init('wpjj', {
                url: url.wpjsmx,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('wpjj').parentNode.offsetHeight + 5),
                param: { startDate: tools.getWeekStartAndEnd(0)[0], endDate: tools.getWeekStartAndEnd(0)[1], rows: 10, srlx: '' },
                pagesize: 10,
                clumns: [
                    { field: 'jbxxJsh', width: '18%', title: '监室号' },
                    { field: 'rybh', width: '21%', title: '人员编号' },
                    { field: 'jbxxXm', width: '20%', title: '姓名' },
                    { field: 'jswpmc', title: '物品名称', width: '20%' },
                    { field: 'djwpsl', width: '20%', title: '物品数量' }
                    // { field: 'jsh', width: '18%', title: '监室号' },
                    // { field: 'snbh', width: '21%', title: '人员编号' },
                    // { field: 'xm', width: '20%', title: '姓名' },
                    // { field: 'jswpmc', title: '物品名称', width: '20%' },
                    // { field: 'djwpsl', width: '20%', title: '物品数量' }
                ]
            });
            util.ajax({
                url: url.bzwpjjtj,
                type: 'post',
                data: { startDate: tools.getWeekStartAndEnd(0)[0], endDate: tools.getWeekStartAndEnd(0)[1] },
                func: function(data) {
                    if (data) {
                        $('#bzwpjjtj').html('物品接济数量：' + data.result.wpjjsl + '件;物品接济人数：' + data.result.wpjjrs + '人');
                    }
                }
            });
        },
        jfjd: function() {
            tableUtils.init('jfjd', {
                url: url.jfjdList,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                param: { rows: 10 },
                pagesize: 10,
                clumns: [
                    { field: 'xm', width: '18%', title: '姓名' },
                    { field: 'wgqk', width: '21%', title: '违规情况' },
                    { field: 'wgsj', width: '20%', title: '违规时间' },
                    { field: 'wglxString', title: '违规类型', width: '25%' },
                    { field: 'clqk', title: '处理情况', width: '25%' },
                    { field: 'clr', width: '18%', title: '处理人' },
                    { field: 'bz', width: '15%', title: '备注' }
                ]
            });
        },
        sqsw: function() {
            tableUtils.init('sqsw', {
                url: url.sqswList,
                height: 'full-' + (document.documentElement.offsetHeight - document.getElementById('dbxx').parentNode.offsetHeight + 5),
                param: { rows: 10 },
                pagesize: 10,
                clumns: [
                    { field: 'jsh', width: '18%', title: '监室号' },
                    { field: 'jsxm', width: '21%', title: '家属姓名' },
                    { field: 'xm', width: '20%', title: '姓名' },
                    { field: 'jsje', title: '收取金额', width: '25%' },
                    { field: 'blrqString', width: '15%', title: '收取时间' }
                ]
            });
        },
        gdzcgl: function() {
            util.ajax({
                url: url.gdzcglxx,
                type: 'POST',
                func: function(data) {
                    console.log(data.result);
                    $("#jqss").text(data.result.rows.jqss);
                    $("#jqdm").text(data.result.rows.jqdm);
                    $("#jqjbq").text(data.result.rows.jqjbq);
                    $("#jqfhsz").text(data.result.rows.jqfhsz);
                    $("#jbqx").text(data.result.rows.jbqx);
                    $("#jbdjq").text(data.result.rows.jbdjq);
                    $("#jbys").text(data.result.rows.jbys);
                    $("#jbjg").text(data.result.rows.jbjg);
                    $("#wydn").text(data.result.rows.wydn);
                    $("#wyys").text(data.result.rows.wyys);
                    $("#wygp").text(data.result.rows.wygp);
                    $("#wygz").text(data.result.rows.wygz);
                    $("#stss").text(data.result.rows.stss);
                    $("#ztss").text(data.result.rows.ztss);
                    $("#hwss").text(data.result.rows.hwss);
                    $("#xxsss").text(data.result.rows.xxsss);
                    $("#fryf").text(data.result.rows.fryf);
                    $("#frgp").text(data.result.rows.frgp);
                    $("#ygyf").text(data.result.rows.ygyf);
                    $("#ygys").text(data.result.rows.ygys);

                }

            });
            $(".gdzcgl").off('click').on('click', function() {
                const id = $(this).attr('name');
                tableUtils.popup({
                    title: '固定资产管理',
                    url: url.gdzcmx,
                    params: {
                        ywlxString: id
                    },
                    columns: [
                        { field: 'jsbhString', width: '150', title: '监所名称', align: 'center' },
                        { field: 'glr', width: '150', title: '管理人', align: 'center' },
                        { field: 'zcmc', width: '150', title: '资产名称', align: 'center' },
                        {
                            width: '150',
                            title: '资产状态',
                            align: 'center',
                            templet: function(res) {
                                return res.zczt == '1' ? '正常' : '损坏';
                                // let data = "";
                                // if (res.zczt == "1") data = "正常"
                                // else if(res.zczt == "2") data = "损坏"
                                // return data
                            }
                        },
                        { field: 'zclx', width: '200', title: '资产类型', align: 'center' },
                        { field: 'zcqk', width: '200', title: '资产情况', align: 'center' },
                    ],
                });
            })

            // $(".gdzcgl").each(function () {
            //     const id = $(this).attr('id');
            //     console.log(id);

            //     $(this).click(function() {
            //         tableUtils.popup({
            //             title: '固定资产管理',
            //             url: url.gdzcmx,
            //             params: {
            //                 startDate: tools.getWeekStartAndEnd(0)[0], endDate: tools.getWeekStartAndEnd(0)[1] 
            //             },
            //             columns: [
            //                 { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
            //                 { field: 'xm', width: '150', title: '姓名', align: 'center' },
            //                 { field: 'jsh', width: '150', title: '监室号', align: 'center' },
            //                 { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
            //                 { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
            //                 { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
            //                 { field: 'badw', width: '200', title: '办案单位', align: 'center' },
            //             ],
            //         });

            //     });
            // });
        },
        Echart: function() {
            //个角色菜单
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