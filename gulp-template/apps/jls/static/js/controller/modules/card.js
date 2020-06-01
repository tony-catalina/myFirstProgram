define(function(require) {
    require('jquery');
    require('easyui');
    require('layui');
    var util = require('awd/easyui/util');
    var echarts = require('echarts');
    var echart = require('awd/echart/echart');
    var tools = require('awd/jquery/tools');
    var tableUtils = require('awd/layui/table_utils');
    var jjbTempl = require('services/com/jjbPalte.html');
    var jjbtpl = require('services/card/jjb.html');
    var jrcrstpl = require('services/card/jrcrs.html');
    var jrhjtpl = require('services/card/jrhj.html');
    var bahjtpl = require('services/card/bahj.html');
    var bzcrstpl = require('services/card/bzcrs.html');
    var txtjtpl = require('services/card/txtj.html');
    var newListTpl = require('services/com/xxtztgList.html');
    var dbsxtpl = require('services/card/dbsx.html');
    var byywtjtpl = require('services/card/byywtj.html');
    var bzjstzjtpl = require('services/card/bzjstz.html');
    var zhqwbztpl = require('services/card/zhqwbz.html');
    var wmjstpl = require('services/card/wmjs.html');
    var ygjstpl = require('services/card/ygjs.html');

    var glbzxsjltpl = require('services/card/glbzxsjl.html');
    var gjqybztpl = require('services/card/gjqybz.html');
    var gjbzxjjltpl = require('services/card/gjbzxjjl.html');
    var gjygjstpl = require('services/card/glygjs.html');
    var cwjjbtpl = require('services/card/cwjjb.html');
    var cwbzcwtpl = require('services/card/cwbzcw.html');
    var cwwpjjtpl = require('services/card/cwwpjj.html');
    var cwxjjjtpl = require('services/card/cwxjjj.html');
    var cwszjdtpl = require('services/card/cwszjd.html');
    var cwstcgtpl = require('services/card/cwstcg.html');
    var cwrywgtpl = require('services/card/cwrywg.html');
    var jqsstpl = require('services/card/jqss.html');
    var ldmjdrjxkhtpl = require('services/card/ldmjdrjxkh.html');
    var glslbjjclqktpl = require('services/card/glslbjjclqk.html');
    var ldtztgtpl = require('services/card/ldtztg.html');
    var lddbsxtpl = require('services/card/lddbsx.html');
    var szcxqtpl = require('services/card/szcxq.html');
    var xxtztpl = require('services/card/xxtz.html');
    var xktztgtpl = require('services/card/xktztg.html');
    var bywwcgztpl = require('services/card/bywwcgz.html');

    var cwsqswtpl = require('services/card/cwsqsw.html');
    var jjbTempl = require('services/com/jjbPalte.html'); //交接班模板
    var formtpl = require('services/form/_dashboardJjb.html');
    var MainTempl = require('services/com/Sy_Main.html');
    var progressBar = require('modules/progressBar');
    var zhjxgltpl = require('services/card/zhjxgl.html');
    var zhaqjcqktpl = require('services/card/zhaqjcqk.html');
    var zhjszktpl = require('services/card/zhjszk.html');
    var zhdrjltpl = require('services/card/zhdrjl.html');
    var zhwgcltpl = require('services/card/zhwgcl.html');
    var zhjrdbsxtpl = require('services/card/zhjrdbsx.html');
    var zhjcqktpl = require('services/card/zhjcqk.html');
    var zhdwgltpl = require('services/card/zhdwgl.html');
    var cwgdzctpl = require('services/card/cwgdzc.html');
    var ywjjbtpl = require('services/card/ywjjb.html');
    var ywxzjltpl = require('services/card/ywxzjl.html');
    var ywjkjctpl = require('services/card/ywjkjc.html');
    var ywjyxxtpl = require('services/card/ywjyxx.html');
    var ywwsfytpl = require('services/card/ywwsfy.html');
    var ywjbqktpl = require('services/card/ywjbqk.html');
    var ywzbhtpl = require('services/card/ywzbh.html');
    var ywypkctpl = require('services/card/ywypkc.html');
    var ywjhjltpl = require('services/card/ywjhjl.html');
    var zhaqjclitpl = require('services/card/zhaqjcqkli.html');

    var fxrytpl = require('services/card/fxry.html'); 
    var xkdbsxtpl = require('services/card/xkdbsx.html'); 
    var xkjjbtpl = require('services/card/xkjjb.html'); 

    var Box_Height = 160;
    var main = {
        SY0001: function(id, options) {
            var cardhtml = jjbtpl('card/jjb', {});
            $('#' + id).html(cardhtml);
            var url = options.url;
            var index = options.index;
            var peopleInfo = [{ icon: 'chuangkoufuwu', title: '交接班人员', info: '' },
                { icon: 'chuangkoufuwu', title: '交接班时间', info: '' },
                { icon: 'chuangkoufuwu', title: '工作记录', info: '' },
                { icon: 'chuangkoufuwu', title: '注意事项', info: '' }
            ];
            $.ajax({
                url: '/mock/jls/sygwjjb',
                type: 'POST',
                data: { jbgw: 'sygw' },
                success: res => {
                    peopleInfo[0].info = res.jbry;
                    peopleInfo[1].info = res.jbsj;
                    peopleInfo[2].info = res.gzjl;
                    peopleInfo[3].info = res.zysx;
                    let Html = MainTempl('com/Sy_Main', { "value": 'SY0001', data: peopleInfo });
                    $("#" + id).empty();
                    $("#" + id).prepend(Html);
                    $(".item-list ").off('click').on('click', function() {
                        util.ajax({
                            url: '/mock/jls/table',
                            data: {"jh":res.jh},
                            func: function (data) {
                                var res = data.result.rows[0]
                                var html = formtpl('form/_dashboardJjb', res);
                                popwin = tableUtils.jjbPop({
                                    title: '交接班',
                                    area: ['90%', '600px'],
                                    content: html,
                                    maxmin: true,
                                    buttons: ['取消'],
                                    success: function () {
                                    },
                                    yes: function () {
                                        layer.close(popwin);
                                    }
                                });
                            }
                        })
                    });
                }
            });
        },
        SY0002: function(id, options) {
            var jrcrshtml = jrcrstpl('card/jrcrs', {});
            $('#' + id).html(jrcrshtml);
            var url = options.url;
            var index = options.index;
            var jrcsDatas = [{ name: '已办出所', percentage: '', number: 0, color: 'skill_color', filter: "jrcs", paramsValue: 'ybcs' },
                { name: '待办出所', percentage: '', number: 0, color: 'skill_color', filter: "csdb", paramsValue: 'kss_csgl' },
                { name: '已办入所', percentage: '', number: 0, color: 'skill_color', filter: "jrrs", paramsValue: 'ybrs' },
                { name: '待办入所', percentage: '', number: 0, color: 'skill_color', filter: "rsdb", paramsValue: 'kss_rsdj' },
                { name: '延期人数', percentage: '', number: 0, color: 'skill_color', filter: "yqrs", paramsValue: 'yqrs' }
            ];
            $.ajax({
                url: '/mock/jls/jrcrs',
                data: '',
                type: 'post',
                beforeSend: () => util.loadProgress($, true),
                success: function(res) {
                    if (res.success) {
                        console.log(res);
                        for (var key in res.result) { jrcsDatas.forEach((item, idx) => { if (item.filter == key) { jrcsDatas[idx].percentage = res.result[key] / 10 + '%';
                                    jrcsDatas[idx].number = res.result[key] } }) }
                        progressBar.init('jrcs', {
                            data: jrcsDatas,
                            title: '今日出入所',
                            url: "/mock/jls/table",
                            paramsKey: 'processDefinitionKey',
                            columns: [{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' }
                            ],
                        });
                    }
                },
                complete: () => { util.clearProgress($) }
            });
        },
        SY0003: function(id, options) {
            var jrhjhtml = jrhjtpl('card/jrhj', {});
            $('#' + id).html(jrhjhtml);
            var url = options.url;
            var index = options.index;
            let jrhjqkDatas = [{ name: '律师已会见', percentage: '', number: 0, color: 'skill_color4', filter: 'lsyhjrs', paramsValue: 'lshj' },
                { name: '律师待会见', percentage: '', number: 0, color: 'skill_color4', filter: 'lsdhjrs', paramsValue: 'kss_lshj' },
                { name: '家属已会见', percentage: '', number: 0, color: 'skill_color4', filter: 'lsdhjrs', paramsValue: 'jshj' },
                { name: '家属待会见', percentage: '', number: 0, color: 'skill_color4', filter: 'jsdhjrs', paramsValue: 'kss_jshj' }
            ];
            $.ajax({
                url: '/mock/jls/jrhjqk',
                data: '',
                type: 'post',
                beforeSend: () => util.loadProgress($, true),
                success: function(res) {
                    for (var key in res.result) {
                        jrhjqkDatas.forEach((item, idx) => { if (item.filter == key) { jrhjqkDatas[idx].percentage = res.result[key] / 10 + '%';
                                jrhjqkDatas[idx].number = res.result[key] } })
                    }
                    progressBar.init('jrhjqk', {
                        data: jrhjqkDatas,
                        title: '今日会见情况',
                        url: '/mock/jls/table',
                        paramsKey: 'processDefinitionKey',
                        columns: [{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' }
                        ],
                    });
                },
                complete: () => { util.clearProgress($) }
            });
        },
        SY0004: function(id, options) {
            var dbsxhtml = dbsxtpl('card/dbsx', {});
            $('#' + id).html(dbsxhtml);
            var url = options.url;
            var index = options.index;
            $.ajax({
                url: '/mock/jls/sydbsx',
                type: 'POST',
                data: {},
                beforeSend: () => {},
                success: res => {
                    const resData = res.result;
                    $('.kss_csgl').html(resData.kss_csgl);
                    $('.kss_jsbjd').html(resData.kss_jsbjd);
                    $('.kss_jshj').html(resData.kss_jshj);
                    $('.kss_jwzx').html(resData.kss_jwzx);
                    $('.kss_lscs').html(resData.kss_lscs);
                    $('.kss_lshj').html(resData.kss_lshj);
                    $('.kss_rsdj').html(resData.kss_rsdj);
                    $('.kss_tj').html(resData.kss_tj);
                    $('.kss_tsdj').html(resData.kss_tsdj);
                    $('.kss_yq').html(resData.kss_yq);
                    $(".dbxx_click").off('click').on('click', function() {
                        const id = $(this).attr('id');
                        tableUtils.popup({
                            title: '&#xe61e; 待办事项',
                            url: "/mock/jls/table",
                            params: { processDefinitionKey: id },
                            request: {
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
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
            })
        },
        SY0005: function(id, options) {
            var bahjhtml = bahjtpl('card/bahj', {});
            $('#' + id).html(bahjhtml);
            var url = options.url;
            var index = options.index;
            var bahjCharts = echarts.init(document.querySelector('.bahj'));
            $.ajax({
                url: '/mock/jls/sybahj',
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {
                    res = res.result;
                    var data = [];
                    var ldata = ['逮捕', '刑事拘留', '检察补充侦查', '一审', '二审', '死刑复核', '发回重审', '待执行', '已决', '其它', '公安补充侦察', '审查起诉'];
                    for (var i = 0; i < res.length; i++) {
                        for (var j = 0; j < ldata.length; j++) {
                            if (ldata[j] == res[i].bahjString) {
                                var row = { name: res[i].bahjString, value: res[i].count };
                                data.push(row);
                            }
                        }
                    }
                    var bahjOptions = echart.getOption('pie', { legendData: ldata, seriesData: data, seriesColors: ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00', '#CCF180', '#D87A80', '#07A2A4', '#FFB980', '#97B552', '#5AB1EF', '#95706D', '#E5CF0D'] }, {
                        name: '人数占比',
                        radius: '70%',
                        label: { show: true, textStyle: { fontWeight: 200, fontSize: 10 } },
                        lineStyle: { type: 'solid', opacity: 1, color: '#fff', },
                        itemStyle: {
                            normal: { borderWidth: 2, borderColor: '#fff' },
                            emphasis: { borderWidth: 0, shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
                        }
                    });

                    bahjCharts.setOption(bahjOptions);
                    bahjCharts.resize({ height: Box_Height });

                    bahjCharts.on('click', function(params) {
                        for (var i = 0; i < res.length; i++) { if (params.data.name == res[i].bahjString) { paramsName = res[i].bahjCode; break; } }
                        tableUtils.popup({
                            title: '&#xe61e; 本月人员入所所处环节统计',
                            url: '/mock/jls/table',
                            params: { bahj: paramsName, sytj: '1' },
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
                },
                complete: () => { util.clearProgress($) }
            });
        },
        SY0006: function(id, options) {
            var bzcrshtml = bzcrstpl('card/bzcrs', {});
            $('#' + id).html(bzcrshtml);
            var url = options.url;
            var index = options.index;
            var bzcrsCharts = echarts.init(document.querySelector('.bzcrs'));
            $.ajax({
                url: "/mock/jls/sybzcrs",
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {
                    res = res.result;
                    var bzcrsOptions = echart.getOption('bars', { xdata: ['本周出所人数', '本周入所人数', '临时出所人数'], yheight: Box_Height - 50 }, [{
                        type: 'bar',
                        data: [res.jrcs, res.jrrs, res.bzlscs],
                        itemStyle: { normal: { color: function(params) { var colorList = ['#4169E1', '#9932CC', '#1E90FF']; return colorList[params.dataIndex] } } }
                    }]);

                    bzcrsCharts.setOption(bzcrsOptions);
                    bzcrsCharts.resize({ height: Box_Height + 40 });
                    bzcrsCharts.on('click', function(params) {
                        let ParamsData = "";
                        if (params.name == "本周出所人数") ParamsData = "cs"
                        else if (params.name == "本周入所人数") ParamsData = "rs"
                        else ParamsData = 'lscs'
                        tableUtils.popup({
                            title: '&#xe61e; 本周出所',
                            url: "/mock/jls/table",
                            params: { "ywlx": ParamsData },
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
                },
                complete: () => { util.clearProgress($) }
            })
        },
        SY0007: function(id, options) {
            var txtjhtml = txtjtpl('card/txtj', {});
            $('#' + id).html(txtjhtml);
            var url = options.url;
            var index = options.index;
            var txCharts = echarts.init(document.querySelector('.tx'));
            $.ajax({
                url:'/mock/jls/sytjtx',
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {
                    res = res.result;
                    var txOptions = echart.getOption('pie', {
                        legendData: ['今天已提讯人数', '今天待提讯人数', '今天已提解人数', '今天待提解人数'],
                        seriesData: [
                            { value: res.tsdj_jryts, name: '今天已提讯人数' },
                            { value: res.tsdj_jrdts, name: '今天待提讯人数' },
                            { value: res.tjdj_jryts, name: '今天已提解人数' },
                            { value: res.tjdj_jrdts, name: '今天待提解人数' }
                        ],
                        seriesColors: ['#3476fe', '#34d1fe', '#82188b', '#e15505'],
                        yheight: Box_Height - 50
                    }, { name: '访问来源', radius: ['45%', '70%'] });

                    txCharts.setOption(txOptions);
                    txCharts.resize({ height: Box_Height });
                    txCharts.on('click', function(params) {
                        let ParamsData = "";
                        if (params.name == "今天待提讯人数") ParamsData = "kss_tsdj"
                        else if (params.name == "今天待提解人数") ParamsData = "kss_tj"
                        else if (params.name == "今天已提讯人数") ParamsData = "tx"
                        else if (params.name == "今天已提解人数") ParamsData = "tj"
                        tableUtils.popup({
                            title: '&#xe61e;' + params.name,
                            url: "/mock/jls/table",
                            params: { "processDefinitionKey": ParamsData },
                            request: {
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '200', title: '办案单位', align: 'center' }
                            ],

                        });

                    })
                },
                complete: () => { util.clearProgress($) }
            })
        },
        GJ0001: function(id, options) {
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
            var index=options.index;
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
                //url: '/mock/jls/sygwjjb',
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
                        $(".jjb").off('click').on('click', function() {
                            util.ajax({
                                url: '/mock/jls/table',
                                data: {"jh":res.jh},
                                func: function (data) {
                                    var res = data.result.rows[0]
                                    var html = formtpl('form/_dashboardJjb', res);
                                    popwin = tableUtils.jjbPop({
                                        title: '交接班',
                                        area: ['90%', '600px'],
                                        content: html,
                                        maxmin: true,
                                        buttons: ['取消'],
                                        success: function () {
                                        },
                                        yes: function () {
                                            layer.close(popwin);
                                        }
                                    });
                                }
                            })
                        })
                    }

                }

            });
        },
        GJ0002: function(id, options) {
            var byywtjhtml = byywtjtpl('card/byywtj', {});
            $('#' + id).html(byywtjhtml);
            var url = options.url;
            var index = options.index;
            $.ajax({
                url: '/mock/jls/gjbyywtj',
                //url: url.gjbyywtj,
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
                                url: url.byYwtjQuery,
                                params: {
                                    qjsjBengin: tools.getMonthStartAndEnd(0)[0],
                                    qjsjEnd: tools.getMonthStartAndEnd(0)[1],
                                    ywlc: "qj"
                                },
                                height: 'full',
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
                                url: url.byYwtjQuery,
                                params: {
                                    tfsj_start: tools.getMonthStartAndEnd(0)[0],
                                    tfsj_end: tools.getMonthStartAndEnd(0)[1],
                                    ywlc: "tfsj"
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
                                url: url.byYwtjQuery,
                                params: {
                                    blsj_start: tools.getMonthStartAndEnd(0)[0],
                                    blsj_end: tools.getMonthStartAndEnd(0)[1],
                                    rows: 10,
                                    ywlc: "dsws"
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
                                url: url.byYwtjQuery,
                                params: {
                                    zdrqStart: tools.getMonthStartAndEnd(0)[0],
                                    zdrqEnd: tools.getMonthStartAndEnd(0)[1],
                                    rows: 10,
                                    ywlc: "jytj"
                                },
                                height: 'full-200',
                                columns: [
                                    { field: 'jbxxSnbh', width: '200', title: '人员编号', align: 'center' },
                                    { field: 'jbxxJsh', width: '250', title: '监室号', align: 'center' },
                                    { field: 'jbxxXm', width: '200', title: '姓名', align: 'center' },
                                    { field: 'ysxm', width: '150', title: '医生姓名', align: 'center' },
                                    { field: 'zdqk', width: '250', title: '诊断情况', align: 'center' },
                                    { field: 'zdrq', width: '200', title: '诊断日期', align: 'center' },
                                    { field: 'cljg', width: '200', title: '处理结果', align: 'center' }
                                ]

                            });
                            return false;
                        }
                        if (params.name == '风险人员' && params.value > 0) {
                            tableUtils.popup({
                                title: '&#xe61e;' + params.name,
                                url: url.byYwtjQuery,
                                params: {
                                    pgsj_start: tools.getMonthStartAndEnd(0)[0],
                                    pgsj_end: tools.getMonthStartAndEnd(0)[1],
                                    rows: 10,
                                    ywlc: "fxry"
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
        GJ0003: function(id, options) {
            var bzjstzjhtml = bzjstzjtpl('card/bzjstz', {});
            $('#' + id).html(bzjstzjhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('jstzjv', {
                //url: '/mock/jls/table', //数据接口
                url: url.bzJstzList, //数据接口
                height: '175',
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
        GJ0004: function(id, options) {
            var wmjshtml = wmjstpl('card/wmjs', {});
            $('#' + id).html(wmjshtml);
            var url = options.url;
            var index = options.index;
            var sjData = [];
            var wmjsHtml = '';
            util.ajax({
                url: '/mock/jls/gjwmjs',
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
                                url: '/mock/jls/table',
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
        GJ0005: function(id, options) {
            var glbzxsjltplhtml = glbzxsjltpl('card/glbzxsjl', {});
            $('#' + id).html(glbzxsjltplhtml);
            var url = options.url;
            var table = layui.table;
            tableUtils.init('glbzxsjl', {
                url: '/mock/jls/table', //数据接口
                height: '175',
                page: {
                    limit: 5
                },
                clumns: [
                    { field: 'jsbh', width: '25%', title: '监所编号' },
                    { field: 'xssj', width: '25%', title: '巡视日期' },
                    { field: 'xsmj', width: '25%', title: '巡视人' },
                    { field: 'xsqk', title: '异常情况', width: '25%' },
                ]
            });


        },
        GJ0006: function(id, options) {
            var gjqybztplhtml = gjqybztpl('card/gjqybz', {});
            $('#' + id).html(gjqybztplhtml);
            var url = options.url;
            $.ajax({
                url: '/mock/jls/gjqybz',
                type: 'post',
                success: res => {
                    res = res.result;
                    var qybzCharts = echarts.init(document.querySelector('#gjqybz'));
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
                                url: '/mock/jls/table',
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
                                url: '/mock/jls/table',
                                params: {
                                    'ffan': '发饭',
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
                                url: '/mock/jls/table',
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
                                url: '/mock/jls/table',
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
                                url: '/mock/jls/table',
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
        GJ0007: function(id, options) {
            var gjbzxjjltplhtml = gjbzxjjltpl('card/gjbzxjjl', {});
            $('#' + id).html(gjbzxjjltplhtml);
            var url = options.url;
            var table = layui.table;
            tableUtils.init('gjbzxjjl', {
                url: url.bzXjsyList, //数据接口
                height: '175',
                pagesize: 5,
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
        GJ0008: function (id, options) {
            var sjData = [],ygjsHtml = '';
            const url=options.url,ygjshtml=ygjstpl('card/ygjs', {});
            $('#'+id).html(ygjshtml);
            util.ajax({
                url: '/mock/jls/gjwmjs',
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
					console.log()
                    $(".item-list").each(function() {
                        $(this).click(function() {
                            var jsh = $(this).children("div:last-child").text()
                            var _title = $(this).parent().prev().text()
                            tableUtils.popup({
                                title: _title,
                                url: '/mock/jls/table',
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
                    })}})
        },
        CW0001: function(id, options) {
            var cwjjbhtml = cwjjbtpl('card/cwjjb', {});
            $('#' + id).html(cwjjbhtml);
            var url = options.url;
            var peopleInfo = [{ icon: 'chuangkoufuwu', title: '交接班人员', info: '' },
                { icon: 'chuangkoufuwu', title: '交接班时间', info: '' },
                { icon: 'chuangkoufuwu', title: '工作记录', info: '' },
                { icon: 'chuangkoufuwu', title: '注意事项', info: '' }
            ];
            $.ajax({
                url: '/mock/jls/sygwjjb',
                type: 'POST',
                data: { jbgw: 'cwgw' },
                success: res => {
                    peopleInfo[0].info = res.jbry;
                    peopleInfo[1].info = res.jbsj;
                    peopleInfo[2].info = res.gzjl;
                    peopleInfo[3].info = res.zysx;
                    let jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                    document.querySelector('#cwjjb').innerHTML = jjbHtml;
                    $(".item-list ").off('click').on('click', function() {
                        util.ajax({
                            url: '/mock/jls/table',
                            data: {"jh":res.jh},
                            func: function (data) {
                                var res = data.result.rows[0]
                                var html = formtpl('form/_dashboardJjb', res);
                                popwin = tableUtils.jjbPop({
                                    title: '交接班',
                                    area: ['90%', '600px'],
                                    content: html,
                                    maxmin: true,
                                    buttons: ['取消'],
                                    success: function () {
                                    },
                                    yes: function () {
                                        layer.close(popwin);
                                    }
                                });
                            }
                        })
                    });
                }
            });
        },
        CW0002: function(id, options) {
            var cwbzcwhtml = cwbzcwtpl('card/cwbzcw', {});
            $('#' + id).html(cwbzcwhtml);
            var url = options.url;
            var bzcwCharts = echarts.init(document.querySelector('#cwbzcw'));
            util.ajax({
                url: '/mock/jls/cwbzcwqk',
                type: 'post',
                data: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1] },
                func: function(data) {
                    if (data) {
                        var bzcwOptions = echart.getOption('pie', {
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
                        bzcwCharts.setOption(bzcwOptions);
                        bzcwCharts.resize({
                            height: Box_Height
                        });
                        window.onresize = function() {
                            bzcwCharts.resize();
                        };
                    }
                }
            });
            bzcwCharts.on('click', function(param) {
                console.log(param);
                console.log("=======");
                if (param.name == '现金接收金额') {
                    tableUtils.popup({
                        title: '&#xe61e;现金接收金额',
                        url: '/mock/jls/table',
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
                        url: '/mock/jls/table',
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
                        url: '/mock/jls/table',
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
                        url: '/mock/jls/table',
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
        },
        CW0003: function(id, options) {
            var cwxjjjhtml = cwxjjjtpl('card/cwxjjj', {});
            $('#' + id).html(cwxjjjhtml);
            var url = options.url;
            tableUtils.init('cwxjjj', {
                url: '/mock/jls/table',
                height: '175',
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
        },
        CW0004: function(id, options) {
            var cwszjdhtml = cwszjdtpl('card/cwszjd', {});
            $('#' + id).html(cwszjdhtml);
            var url = options.url;
            tableUtils.init('cwszjd', {
                url: '/mock/jls/table',
                height: '175',
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
        CW0005: function(id, options) {
            var cwstcghtml = cwstcgtpl('card/cwstcg', {});
            $('#' + id).html(cwstcghtml);
            var url = options.url;
            var ywblCharts = echarts.init(document.querySelector('#cwstcg'));
            util.ajax({
                url: '/mock/jls/cwstcg',
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
            ywblCharts.on('click', function(param) {
                console.log(param)
                if (param.seriesName == '大米') {
                    tableUtils.popup({
                        title: '&#xe61e;食堂采购',
                        url: '/mock/jls/table',
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
                        url: '/mock/jls/table',
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
                        url: '/mock/jls/table',
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
        },
        CW0006: function(id, options) {
            var cwwpjjhtml = cwwpjjtpl('card/cwwpjj', {});
            $('#' + id).html(cwwpjjhtml);
            var url = options.url;
            tableUtils.init('cwwpjj', {
                url: '/mock/jls/table',
                height: '175',
                param: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1], rows: 10 },
                pagesize: 10,
                clumns: [
                    { field: 'jbxxJsh', width: '18%', title: '监室号' },
                    { field: 'rybh', width: '21%', title: '人员编号' },
                    { field: 'jbxxXm', width: '20%', title: '姓名' },
                    { field: 'jsje', title: '接济物品', width: '20%' },
                    { field: 'srlxString', width: '20%', title: '备注' }
                ]
            });
        },
        CW0007: function(id, options) {
            var cwrywghtml = cwrywgtpl('card/cwrywg', {});
            $('#' + id).html(cwrywghtml);
            var url = options.url;
            tableUtils.init('cwrywg', {
                url: '/mock/jls/table',
                height: '175',
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
        CW0008: function(id, options) {
            var cwsqswhtml = cwsqswtpl('card/cwsqsw', {});
            $('#' + id).html(cwsqswhtml);
            var url = options.url;
            tableUtils.init('cwsqsw', {
                url: '/mock/jls/table',
                height: '175',
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
        CW0009: function(id, options) {
            var cwgdzchtml = cwgdzctpl('card/cwgdzc', {});
            $('#' + id).html(cwgdzchtml);
            var url = options.url;
            var index = options.index;
            util.ajax({
                url: '/mock/jls/cwgdzcgl',
                type: 'POST',
                func: function(data) {
                    $("#jqss").text(data.result.rows.jqss);
                    $("#jqdm").text(data.result.rows.jqdm);
                    $("#jqjbq").text(data.result.rows.jqjbq);
                    $("#jbqx").text(data.result.rows.jbqx);
                    $("#jbdjq").text(data.result.rows.jbdjq);
                    $("#jbys").text(data.result.rows.jbys);
                    $("#wydn").text(data.result.rows.wydn);
                    $("#wyys").text(data.result.rows.wyys);
                    $("#wygp").text(data.result.rows.wygp);
                    $("#stss").text(data.result.rows.stss);
                    $("#ztss").text(data.result.rows.ztss);
                    $("#hwss").text(data.result.rows.hwss);
                    $("#fryf").text(data.result.rows.fryf);
                    $("#frgp").text(data.result.rows.frgp);
                    $("#ygyf").text(data.result.rows.ygyf);

                }

            });
            $(".gdzcgl").off('click').on('click', function() {
                const id = $(this).attr('name');
                tableUtils.popup({
                    title: '固定资产管理',
                    url: '/mock/jls/table',
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
                            }
                        },
                        { field: 'zclx', width: '200', title: '资产类型', align: 'center' },
                        { field: 'zcqk', width: '200', title: '资产情况', align: 'center' },
                    ],
                });
            })
        },
        YW0001: function(id, options) {
            var ywjjbhtml = ywjjbtpl('card/ywjjb', {});
            $('#' + id).html(ywjjbhtml);
            var url = options.url;
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
                url: '/mock/jls/sygwjjb',
                type: 'POST',
                data: { jbgw: 'ywgw' },
                func: function (data) {
                    if (data) {
                        peopleInfo[0].info = data.jbry;
                        peopleInfo[1].info = data.jbsj;
                        peopleInfo[2].info = data.gzjl;
                        peopleInfo[3].info = data.zysx;
                        var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector('#ywjjb').innerHTML = jjbHtml;
                        $("#ywjjb").off('click').on('click', function () {
                            util.ajax({
                                url: '/mock/jls/table',
                                data: {"jh":res.jh},
                                func: function (data) {
                                    var res = data.result.rows[0]
                                    var html = formtpl('form/_dashboardJjb', res);
                                    popwin = tableUtils.jjbPop({
                                        title: '交接班',
                                        area: ['90%', '600px'],
                                        content: html,
                                        maxmin: true,
                                        buttons: ['取消'],
                                        success: function () {
                                        },
                                        yes: function () {
                                            layer.close(popwin);
                                        }
                                    });
                                }
                            })
                        })
                    }

                }

            });
        },
        YW0002: function(id, options) {
            var ywxzjlhtml = ywxzjltpl('card/ywxzjl', {});
            $('#' + id).html(ywxzjlhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('ywxzjl', {
                url: '/mock/jls/table', //数据接口
                height: '175',
                pagesize: 5,
                param: { jqh: '' },
                clumns: [
                    { field: 'jqh', width: '20%', title: '监区号' },
                    { field: 'jsh', width: '20%', title: '监室号' },
                    { field: 'xzr', width: '20%', title: '巡诊人' },
                    { field: 'xzsj', title: '巡诊时间', width: '40%' },
                ]
            });
        },
        YW0003: function(id, options) {
            var ywjkjchtml = ywjkjctpl('card/ywjkjc', {});
            $('#' + id).html(ywjkjchtml);
            var url = options.url;
            $.ajax({
                url: '/mock/jls/ywjkjc',
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
                    url: '/mock/jls/table',
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
                })})
            $("#wtjry").off("click").on('click', function () {
                tableUtils.popup({
                    title: '&#xe61e;未体检人员',
                    url: '/mock/jls/table',
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
        YW0004: function(id, options) {
            var ywjyxxhtml = ywjyxxtpl('card/ywjyxx', {});
            $('#' + id).html(ywjyxxhtml);
            var url = options.url;
            var jyxxCharts = echarts.init(document.querySelector('.ywjyxx'));
            $.ajax({
                url: '/mock/jls/ywjyxx', type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {

                    var ywjyxxOptions = echart.getOption('pie', {
                        legendData: ['所内就医', '所外就医', '待就医', '待观察'],
                        seriesData: [{ name: '所内就医', value: res.result.snjy },
                        { name: '所外就医', value: res.result.swjy },
                        { name: '待就医', value: res.result.djy },
                        { name: '待观察', value: res.result.dgc },
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
                    jyxxCharts.setOption(ywjyxxOptions);
                    jyxxCharts.resize({ height: Box_Height });

                    jyxxCharts.on('click', function (param) {
                        if (param.name == "所内就医") {
                            tableUtils.popup({
                                title: '&#xe61e;所内就医',
                                url: '/mock/jls/table',
                                params: {
                                    processDefinitionKey: 'snjy',
                                },
                                request:{
                                    pageName: 'page', //页码的参数名称，默认：page
                                    limitName: 'rows' //每页数据量的参数名，默认：limit
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
                                url: '/mock/jls/table',
                                params: {
                                    processDefinitionKey: 'swjy'
                                },
                                request:{
                                    pageName: 'page', //页码的参数名称，默认：page
                                    limitName: 'rows' //每页数据量的参数名，默认：limit
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
                                url: '/mock/jls/table',
                                params: {
                                    processDefinitionKey: 'dgc',
                                },
                                request:{
                                    pageName: 'page', //页码的参数名称，默认：page
                                    limitName: 'rows' //每页数据量的参数名，默认：limit
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
                                url: '/mock/jls/table',
                                params: {
                                    processDefinitionKey: 'djy',
                                },
                                request:{
                                    pageName: 'page', //页码的参数名称，默认：page
                                    limitName: 'rows' //每页数据量的参数名，默认：limit
                                },
                                columns: [
                                    { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                    { field: 'ldpsxx', width: '150', title: '就诊医院', align: 'center',templet:function(e){
                                        return e.ldpsxx.jzyy
                                     }},
                                    { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                    { field: 'brbq', width: '150', title: '就诊病人病情', align: 'center',templet:function(e){
                                        return e.ldpsxx.jy_brbq
                                     }},
                                    { field: 'cljgString', width: '200', title: '处理结果', align: 'center' },
                                ],
        
                            });
                        }
                    })
                },
                complete: () => { util.clearProgress($) }
            });
        },
        YW0005: function(id, options) {
            var ywwsfyhtml = ywwsfytpl('card/ywwsfy', {});
            $('#' + id).html(ywwsfyhtml);
            var url = options.url;
            var peopleInfo = [{
                icon: 'jibenxinxi',
                title: '消毒人员',
                info: ''
            }, {
                icon: 'zhizhang',
                title: '消毒时间',
                info: ''
            }, {
                icon: 'shenqing',
                title: '消毒日志',
                info: ''
            },]
            util.ajax({
                url: '/mock/jls/ywwsfy',
                type: 'POST',
                data: { jbgw: 'gjgw' },
                func: function (data) {
                    if (data) {
                        peopleInfo[0].info = data.result.rows.xdry;
                        peopleInfo[1].info = data.result.rows.xdrq;
                        peopleInfo[2].info = data.result.rows.xdffString;
                        var jjbHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector('#ywwsfy').innerHTML = jjbHtml;

                    }

                }

            });
        },
        YW0006: function(id, options) {
            var ywjbqkhtml = ywjbqktpl('card/ywjbqk', {});
            $('#' + id).html(ywjbqkhtml);
            var url = options.url;
            var ywjbqkCharts = echarts.init(document.querySelector('.jbqk'));
            ywjbqkCharts.on('click', function (param) {
                if (param.name == "心脏病") {
                    tableUtils.popup({
                        title: '&#xe61e;心脏病',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '心脏病'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
                if (param.name == "高血压") {
                    tableUtils.popup({
                        title: '&#xe61e;高血压',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '高血压'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
                if (param.name == "糖尿病") {
                    tableUtils.popup({
                        title: '&#xe61e;糖尿病',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '糖尿病'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
                if (param.name == "普通感冒") {
                    tableUtils.popup({
                        title: '&#xe61e;普通感冒',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '普通感冒'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
                if (param.name == "传染性疾病") {
                    tableUtils.popup({
                        title: '&#xe61e;传染性疾病',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '传染性疾病'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
                if (param.name == "重大疾病") {
                    tableUtils.popup({
                        title: '&#xe61e;重大疾病',
                        url: '/mock/jls/table',
                        params: {
                            ywlx: '重大疾病'
                        },
                        request:{
                            pageName: 'page', //页码的参数名称，默认：page
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        columns: [
                            { field: 'jbxxSnbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'jbxxXm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jbxxJsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bhlxString', width: '150', title: '病号类型', align: 'center' },
                            { field: 'shjb', width: '200', title: '所患疾病', align: 'center' },
                            { field: 'swjyString', width: '200', title: '是否所外就医', align: 'center' },
                        ],
                    });
                }
            })
            $.ajax({
                url: '/mock/jls/ywjbqk', type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {
                    var ywjbqkOptions = echart.getOption('pie', {
                        legendData: ['心脏病', '高血压', '糖尿病', '普通感冒', '传染性疾病', '其他重大疾病'],
                        seriesData: [
                            { name: '心脏病', value: res.result.result.xzb },
                            { name: '高血压', value: res.result.result.gxy },
                            { name: '糖尿病', value: res.result.result.tnb },
                            { name: '普通感冒', value: res.result.result.ptgm },
                            { name: '传染性疾病', value: res.result.result.crxjb },
                            { name: '重大疾病', value: res.result.result.zdjb },
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
                    ywjbqkCharts.setOption(ywjbqkOptions);
                    ywjbqkCharts.resize({ height: Box_Height });
                    window.onresize = function () {
                        ywjbqkCharts.resize();
                    };
                },
                complete: () => { util.clearProgress($) }
            });

        },
        YW0007: function(id, options) {
            var ywzbhhtml = ywzbhtpl('card/ywzbh', {});
            $('#' + id).html(ywzbhhtml);
            var url = options.url;
            $.ajax({
                url: '/mock/jls/ywzbh',
                type: 'POST',
                data: { jbgw: "ywgw" },
                success: res => {
                    document.querySelector("#zyry").innerHTML = res.result.zyry;
                    document.querySelector("#ptbh").innerHTML = res.result.ptbh;
                    document.querySelector("#zbh").innerHTML = res.result.zbh;
                    $("#zbh").off("click").on('click', function () {
                        tableUtils.popup({
                            title: '&#xe61e;重病号',
                            url: '/mock/jls/table',
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
                            url: '/mock/jls/table',
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
                            url: '/mock/jls/table',
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
        YW0008: function(id, options) {
            var ywypkchtml = ywypkctpl('card/ywypkc', {});
            $('#' + id).html(ywypkchtml);
            var url = options.url;
            tableUtils.init('ywypkc', {
                url: '/mock/jls/table', //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'YPMC', width: '20%', title: '药品名称' },
                    { field: 'FYDW', width: '15%', title: '单位' },
                    { field: 'kcsl', width: '20%', title: '库存数量' },
                    { field: 'SCCJ', title: '生产单位', width: '20%' },
                    { field: 'scsj', title: '生产日期', width: '25%' },
                ]
            });
        },
        YW0009: function (id, options) { 
            var ywjhjlhtml = ywjhjltpl('card/ywjhjl', {});
            $('#' + id).html(ywjhjlhtml);
            var url = options.url;
            tableUtils.init('ywjhjl', {
                url: '/mock/jls/table', //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'YPMC', width: 100, title: '药品名称' },
                    { field: 'FYDW', width: 80, title: '单位' },
                    { field: 'JHSL', width: 100, title: '进货数量' },
                    { field: 'SCCJ', title: '生产单位', width: 100 },
                    { field: 'scsj', title: '生产年份', width: 165 }
                ]
            });
        },
        
        XK0001: function (id, options) {
            var xxtzhtml = xxtztpl('card/xxtz', {});
            $('#' + id).html(xxtzhtml);
            var url = options.url;
            var newsDatas = [
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "" ,content: ""},
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "",content: "" },
            ];
            $.ajax({
                url: '/mock/jls/xkxxtz',
                type: "POST",
                data: {},
                success: res => {
                    res = res.result.rows;
                    if(res.length>=newsDatas.length){
                    for (var i = 0; i < newsDatas.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                           url: '/mock/jls/xkxxtz',
                           type: "POST",
                           data: {"id":id},
                           beforeSend:()=>util.loadProgress($,true),
                           success:res=>{
                             const content = res.result.rows[0].content;
                               tableUtils.initPop({
                                  title: '消息通知',
                                  content: content
                            })
                     },
                     complete:()=>{util.clearProgress($)}
                })
                    })
                }
                else{
                    for (var i = 0; i < res.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                             url: '/mock/jls/xkxxtz',
                             type: "POST",
                             data: {"id":id},
                             beforeSend:()=>util.loadProgress($,true),
                             success:res=>{
                                 const content = res.result.rows[0].content;
                                 tableUtils.popup({
                                    title: '消息通知',
                                    content: content
                                })
                             },
                             complete:()=>{util.clearProgress($)}
                        })
                    })
                }
                }
            })
        },
        XK0002: function (id, options) {
            var xktztghtml = xktztgtpl('card/xktztg', {});
            $('#' + id).html(xktztghtml);
            var url = options.url;
            var newsDatas = [
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "" ,content: ""},
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "",content: "" },
            ];
            $.ajax({
                url: '/mock/jls/xkxxtz',
                type: "POST",
                data: {},
                success: res => {
                    res = res.result.rows;
                    if(res.length>=newsDatas.length){
                    for (var i = 0; i < newsDatas.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                           url: '/mock/jls/xkxxtz',
                           type: "POST",
                           data: {"id":id},
                           beforeSend:()=>util.loadProgress($,true),
                           success:res=>{
                             const content = res.result.rows[0].content;
                               tableUtils.initPop({
                                  title: '消息通知',
                                  content: content
                            })
                     },
                     complete:()=>{util.clearProgress($)}
                })
                    })
                }
                else{
                    for (var i = 0; i < res.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                             url: '/mock/jls/xkxxtz',
                             type: "POST",
                             data: {"id":id},
                             beforeSend:()=>util.loadProgress($,true),
                             success:res=>{
                                 const content = res.result.rows[0].content;
                                 tableUtils.popup({
                                    title: '消息通知',
                                    content: content
                                })
                             },
                             complete:()=>{util.clearProgress($)}
                        })
                    })
                }
                }
            })
        },
        XK0003: function (id, options) {
            var bywwcgzhtml = bywwcgztpl('card/bywwcgz', {});
            $('#' + id).html(bywwcgzhtml);
            var url = options.url;
            var datas = [
                { name: '械具解除', percentage: '',number:0, color: 'skill_color5', filter: "xjjc", paramsValue: 'kss_xjjc'},
                { name: '单独关押', percentage: '', number:0,color: 'skill_color5', filter: "ddgy", paramsValue: 'kss_ddgy'}
            ];
            $.ajax({
                url: "/mock/jls/xkbywwcrw",
                data: '',
                type: 'post',
                success: function (res) {
                    if (res.success) {
                        for (var key in res.result) {
                            datas.forEach(function (item, idx) {
                                if (item.filter == key) {
                                    datas[idx].percentage = res.result[key]/10+"%";
                                    datas[idx].number = res.result[key];
                                }
                            })
                        }

                        progressBar.init('bywwcgz', {
                            title: '本月未完成工作',
                            url: '/mock/jls/table',
                            data: datas,
                            paramsKey: 'processDefinitionKey',
                            columns: [
                                { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                            ]
                        });
                    }}});
        },
        XK0004: function(id, options) {
            var xkjjbhtml = xkjjbtpl('card/xkjjb', {});
            $('#' + id).html(xkjjbhtml);
            var url = options.url;
            var index=options.index;
            var peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''},
                {icon: 'chuangkoufuwu',title: '交接班时间',info: ''},
                {icon: 'chuangkoufuwu',title: '工作记录',info: ''},
                {icon: 'chuangkoufuwu',title: '注意事项',info: ''}];
            $.ajax({url: url.syGwjjb,type: 'POST',data: { jbgw: '巡控岗位' },
                success: res => {
                    peopleInfo[0].info = res.jbry;
                    peopleInfo[1].info = res.jbsj;
                    peopleInfo[2].info = res.gzjl;
                    peopleInfo[3].info = res.zysx;
                    let Html = MainTempl('com/Sy_Main',{"value":'SY0001',data:peopleInfo});
                    $("#"+id).empty();
                    $("#"+id).prepend(Html);
                    $(".item-list ").off('click').on('click',function(){
                        util.ajax({
                            url: url.mjglList,
                            data: {"jh":res.jh},
                            func: function (data) {
                                var res = data.result.rows[0]
                                var html = formtpl('form/_dashboardJjb', res);
                                popwin = tableUtils.jjbPop({
                                    title: '交接班',
                                    area: ['90%', '600px'],
                                    content: html,
                                    maxmin: true,
                                    buttons: ['取消'],
                                    success: function () {
                                    },
                                    yes: function () {
                                        layer.close(popwin);
                                    }
                                });
                            }
                        })
                    });
                }
            });
        },
        XK0005: function(id, options) {
            var xkdbsxhtml = xkdbsxtpl('card/xkdbsx', {});
            $('#' + id).html(xkdbsxhtml);
            var url = options.url;
            var dbsxCharts = echarts.init(document.querySelector('.xkdbsx'));
            $.ajax({
                url: '/mock/jls/xkdbsx',
                type: 'POST',
                success: res => {
                    res = res.result;
                    var dbsxOptions = echart.getOption('pie', {
                        legendData: ['本日监室调整', '本周文明监室', '本月交接班'],
                        seriesData: [{ name: '本日监室调整', value: res.ywlc0 },
                            { name: '本周文明监室', value: res.ywlc1 },
                            { name: '本月交接班', value: res.ywlc2 }
                        ],
                        seriesColors: ['#297aff', '#f4ae00', '#0043ae']
                    }, {
                        name: '待办项',
                        radius: '70%',
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}',
                            fontSize: 18
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

                    dbsxCharts.setOption(dbsxOptions);
                    dbsxCharts.resize({
                        height: Box_Height
                    });
                    dbsxCharts.on('click', function (params) {
						let ParamsData = "";
						if (params.name == "本日监室调整") ParamsData = "kss_jstz"
						else if (params.name == "本周文明监室") ParamsData = "kss_wmjs"
						else ParamsData = 'kss_jjb'
                        tableUtils.initPop({
                            title: '&#xe61e; 待办事项',
                            url: '/mock/jls/table',
                            params: {processDefinitionKey:ParamsData},
							request:{
								pageName: 'page' ,//页码的参数名称，默认：page,
								limitName: 'rows' //每页数据量的参数名，默认：limit
							},
                            columns: [
                                { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                            ]
                        });
                    });

                }
            })
            window.onresize = function () {
                dbsxCharts.resize();
            };
        },
        XK0006: function (id, options) { 
            var fxryhtml = fxrytpl('card/fxry', {});
            $('#' + id).html(fxryhtml);
            var url = options.url;
            var afbjCharts = echarts.init(document.querySelector('.afbj'));
            afbjCharts.on('click', function (params) {
                if (params.name == "一级风险人员") {
                    tableUtils.popup({
                        title: '&#xe61e; 风险人员',
                        url: '/mock/jls/table',
                        params: {
                            type: "1"
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                        ],

                    })
                }
                if (params.name == "二级风险人员") {
                    tableUtils.popup({
                        title: '&#xe61e; 风险人员',
                        url: '/mock/jls/table',
                        params: {
                            type: "2"
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                        ],

                    })
                }
                if (params.name == "三级风险人员") {
                    tableUtils.popup({
                        title: '&#xe61e; 风险人员',
                        url: '/mock/jls/table',
                        params: {
                            type: "3"
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                        ],

                    })
                }
                if (params.name == "重病号") {
                    tableUtils.popup({
                        title: '&#xe61e; 风险人员',
                        url: '/mock/jls/table',
                        params: {
                            type: "4"
                        },
                        columns: [
                            { field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' },
                        ],

                    })
                }
            })

            $.ajax({
                url: "/mock/jls/xkfxry",
                type: 'POST',
                success: res => {
                    res = res.result;
                    var afbjOptions = echart.getOption('pie', {
                        legendData: ['一级风险人员', '二级风险人员', '三级风险人员', '重病号'],
                        seriesData: [
                            { value: res.zdyj, name: '一级风险人员' },
                            { value: res.zdej, name: '二级风险人员' },
                            { value: res.zdsj, name: '三级风险人员' },
                            { value: res.zdbh, name: '重病号' }
                        ],
                        seriesColors: ['#3476fe', '#34d1fe', '#82188b', '#e15505'],
                    }, {
                        name: '人数占比',
                        radius: ['45%', '70%'],
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}',
                            fontSize: 18
                        }
                    });
                    afbjCharts.setOption(afbjOptions);
                    afbjCharts.resize({
                        height: Box_Height
                    });
                }
            })
            window.onresize = function () {
                afbjCharts.resize();
            };
        },
        
        LD0001: function (id, options) {
            var jqsshtml = jqsstpl('card/jqss', {});
            $('#' + id).html(jqsshtml);
            var url = options.url;
            $(".LineS_box").each(function () {
                $(this).click(function () {
                    tableUtils.initPop({
                        title: '',
                        url: '/mock/jls/table',
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
        },
        LD0002: function (id, options) {
            var ldmjdrjxkhhtml = ldmjdrjxkhtpl('card/ldmjdrjxkh', {});
            $('#' + id).html(ldmjdrjxkhhtml);
            var url = options.url;
            var drjxCharts = echarts.init(document.querySelector('.drjx'));
            $.ajax({
                url: "/mock/jls/mjdrjxkh",
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    res = res.result.rows;
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
                                    { value: res.cd, name: '迟到' },
                                    { value: res.zt, name: '早退' },
                                    { value: res.kg, name: '旷工' },
                                    { value: res.zc, name: '正常' }
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
                                    { value: res.cd, name: '迟到' },
                                    { value: res.zt, name: '早退' },
                                    { value: res.kg, name: '旷工' },
                                    { value: res.zc, name: '正常' }
                                ]
                            }
                        ]
                    };
                    drjxCharts.setOption(drjxoption);
                    drjxCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        drjxCharts.resize();
                    };
                }
            });
            drjxCharts.on('click', function(params) {
                tableUtils.popup({
                    title: '&#xe61e;当日绩效',
                    url:'/mock/jls/table',
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
        },
        LD0003: function (id, options) {
            var glslbjjclqkhtml = glslbjjclqktpl('card/glslbjjclqk', {});
            $('#' + id).html(glslbjjclqkhtml);
            var url = options.url;
            var czqkCharts = echarts.init(document.querySelector('.czqk'));
            $.ajax({
                url: '/mock/jls/glslbjjclqk',
                type: 'POST',
                data: {
                    jsbh: '110000114',
                    startDate: '2020-05-10 10:20:41',
                    endDate: '2020-05-14 10:41:23'
                },
                success: res => {
                    console.log(res);
                    res = res.result;
                    var czqkOptions = echart.getOption('bar_line', '', [{
                        name: '已有数据总量',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        data: [{ value: res.mjbj, name: '门禁报警' },
                            { value: res.fcbj, name: '风场报警', },
                            { value: res.xgbj, name: '限高报警' },
                            { value: res.jsbj, name: '监室报警' },
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
                        data: [{ value: res.mjbj, name: '门禁报警' },
                            { value: res.fcbj, name: '风场报警' },
                            { value: res.xgbj, name: '限高报警' },
                            { value: res.jsbj, name: '监室报警' }
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
                    czqkCharts.setOption(czqkOptions);
                    czqkCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        czqkCharts.resize();

                    };

                }
            })
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
                if (params.name == "门禁报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: '/mock/jls/table',
                        params: {
                            "ywlx":1
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "风场报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: '/mock/jls/table',
                        params: {
                            "ywlx":2
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "限高报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: '/mock/jls/table',
                        params: {
                            "ywlx":3
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],

                    })
                }
                if (params.name == "监室报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: '/mock/jls/table',
                        params: {
                            "ywlx":4
                        },
                        columns: [
                            { field: 'bjr', width: '220', title: '报警人', align: 'center' },
                            { field: 'bjlx', width: '260', title: '报警类型', align: 'center' },
                            { field: 'jsh', width: '260', title: '监室号', align: 'center' },
                            { field: 'bjsj', width: '260', title: '报警时间', align: 'center' },
                            { field: 'jqqk', width: '380', title: '警情情况', align: 'center' },
                        ],
                    })
                }
            })
        },
        LD0004: function (id, options) {
            var ldtztghtml = ldtztgtpl('card/ldtztg', {});
            $('#' + id).html(ldtztghtml);
            var url = options.url;
            var newsDatas = [
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "" ,content: ""},
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "",content: "" },
            ];
            $.ajax({
                url: '/mock/jls/xkxxtz',
                type: "POST",
                data: {},
                success: res => {
                    res = res.result.rows;
                    if(res.length>=newsDatas.length){
                    for (var i = 0; i < newsDatas.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                           url: '/mock/jls/xkxxtz',
                           type: "POST",
                           data: {"id":id},
                           beforeSend:()=>util.loadProgress($,true),
                           success:res=>{
                             const content = res.result.rows[0].content;
                               tableUtils.initPop({
                                  title: '消息通知',
                                  content: content
                            })
                     },
                     complete:()=>{util.clearProgress($)}
                })
                    })
                }
                else{
                    for (var i = 0; i < res.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].id =res[i].id;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        const id = $(this).attr('id');
                        $.ajax({
                             url: '/mock/jls/xkxxtz',
                             type: "POST",
                             data: {"id":id},
                             beforeSend:()=>util.loadProgress($,true),
                             success:res=>{
                                 const content = res.result.rows[0].content;
                                 tableUtils.popup({
                                    title: '消息通知',
                                    content: content
                                })
                             },
                             complete:()=>{util.clearProgress($)}
                        })
                    })
                }
                }
            })
        },
        LD0005: function (id, options) {
            var lddbsxhtml = lddbsxtpl('card/lddbsx', {});
            $('#' + id).html(lddbsxhtml);
            var url = options.url;
            var ldspCharts = echarts.init(document.querySelector('.ldsp'));
            $.ajax({
                url: "/mock/jls/slddbsx",
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    res = res.result;
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
                                { value: res.kss_jstz, name: '监室调整' },
                                { value: res.kss_lscs, name: '临时出所' },
                                { value: res.kss_xjjz, name: '械具加载' },
                                { value: res.kss_cyrs, name: '收押入所' },
                                { value: res.kss_csgl, name: '出所管理' },
                            ]
                        }]
                    };
                    ldspCharts.setOption(ldspoption);
                    ldspCharts.resize({
                        height: Box_Height
                    });
                    window.onresize = function() {
                        ldspCharts.resize();
                    };


                },
            })
            ldspCharts.on('click', function(params) {
                tableUtils.popup({
                    title: '&#xe61e;代办事项',
                    url:'/mock/jls/table',
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
        },
        LD0006: function (id, options) {
            var szcxqhtml = szcxqtpl('card/szcxq', {});
            $('#' + id).html(szcxqhtml);
            var url = options.url;
            var szcxqDatas = [
                { name: '收押入所', percentage: '0', number: 0, color: 'skill_color4', filter: "syrs", paramsValue: 'rsdj' },
                { name: '出所管理', percentage: '0', number: 0, color: 'skill_color4', filter: "csgl", paramsValue: 'csgl' },
                { name: '律师会见', percentage: '0', number: 0, color: 'skill_color4', filter: "lshj", paramsValue: 'lshj' },
                { name: '家属会见', percentage: '0', number: 0, color: 'skill_color4', filter: "jshj", paramsValue: 'jshj' },
            ]
            $.ajax({
                url: url.sld_szcxq,
                data: '',
                type: 'post',
                success: function(res) {
                    if (res.success) {
                        for (var key in res.result) {
                            szcxqDatas.forEach(function(item, idx) {
                                if (item.filter == key) {
                                    szcxqDatas[idx].percentage = res.result[key] / 10 + '%';
                                    szcxqDatas[idx].number = res.result[key]
                                }
                            })
                        }
                        progressBar.init('szcxq', {
                            data: szcxqDatas,
                            title: '所长查询区',
                            url: url.sldSzcxqQuery,
                            paramsKey: 'lckeys',
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '180', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '180', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '300', title: '办案单位', align: 'center' },
                            ]
                        });

                    }
                }
            });
        },
        
        ZH0001: function (id, options) {
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
            var index=options.index;
            var peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''},
                {icon: 'chuangkoufuwu',title: '交接班时间',info: ''},
                {icon: 'chuangkoufuwu',title: '工作记录',info: ''},
                {icon: 'chuangkoufuwu',title: '注意事项',info: ''}];
            $.ajax({url: url.syGwjjb,type: 'POST',data: { jbgw: 'zhgw' },
                success: res => {
                    peopleInfo[0].info = res.jbry;
                    peopleInfo[1].info = res.jbsj;
                    peopleInfo[2].info = res.gzjl;
                    peopleInfo[3].info = res.zysx;
                    let Html = MainTempl('com/Sy_Main',{"value":'SY0001',data:peopleInfo});
                    $("#"+id).empty();
                    $("#"+id).prepend(Html);
                    $(".item-list ").off('click').on('click',function(){
                        util.ajax({
                            url: '/mock/jls/table',
                            data: {"jh":res.jh},
                            func: function (data) {
                                var res = data.result.rows[0]
                                var html = formtpl('form/_dashboardJjb', res);
                                popwin = tableUtils.jjbPop({
                                    title: '交接班',
                                    area: ['90%', '600px'],
                                    content: html,
                                    maxmin: true,
                                    buttons: ['取消'],
                                    success: function () {
                                    },
                                    yes: function () {
                                        layer.close(popwin);
                                    }
                                });
                            }
                        })
                    });
                }
            });
        },
        ZH0002: function(id, options) {
            var zhqwbzhtml = zhqwbztpl('card/zhqwbz', {});
            $('#' + id).html(zhqwbzhtml);
            var url = options.url;
            var index = options.index;
            var qwbzCharts = echarts.init(document.querySelector('#zhqwbz'));
            $.ajax({
                url: url.zhQwbzCount,
                //url: '/mock/jls/zhqwbz',
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: data => {
                    var qwbzOptions = echart.getOption('pie', {
                        legendData: ['洗漱用品', '生活用品', '工具用品', '其他用品', '杂物'],
                        seriesData: [
                            { name: '洗漱用品', value: data.result.xsyp },
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
                            textStyle: { fontWeight: 200, fontSize: 11 },
                            formatter: function(param) {
                                return param.name + ':' + param.value + '%'
                            },
                        },
                        lineStyle: { type: 'solid', fontSize: 15, opacity: 1, color: '#fff', },
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#fff'
                            },
                            emphasis: { borderWidth: 0, shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
                        }
                    });
                    qwbzCharts.setOption(qwbzOptions);
                    qwbzCharts.resize({ height: Box_Height });
                },
                complete: () => { util.clearProgress($) }
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
                    url: url.zhQwbzQuery,
                    columns: [
                        { field: 'ypmc', width: '411', title: '用品名称', align: 'center' },
                        { field: 'ypsl', width: '412', title: '用品数量', align: 'center' },
                        { field: 'yplxString', width: '412', title: '用品类型', align: 'center' }
                    ]
                });
            });
        },
        ZH0003: function(id, options) {
            var zhjxglhtml = zhjxgltpl('card/zhjxgl', {});
            $('#' + id).html(zhjxglhtml);
            var url = options.url;
            var index = options.index;
            var zhjxglCharts = echarts.init(document.querySelector('#zhjxgl'));
            $.ajax({
                url: url.zhjxglCount,
                //url: url.zhjxglCount,
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: res => {

                    var zhjxglOptions = echart.getOption('pie', {
                        legendData: ['全勤', '迟到一次', '迟到二次', '迟到三次', '迟到三次及以上', '旷工一次', '旷工二次', '旷工三次及以上'],
                        seriesData: [{ name: '全勤', value: res.result.rows.qq },
                            { name: '迟到一次', value: res.result.rows.cdyc },
                            { name: '迟到二次', value: res.result.rows.cdlc },
                            { name: '迟到三次及以上', value: res.result.rows.cdscjys },
                            { name: '旷工一次', value: res.result.rows.kgyc },
                            { name: '旷工二次', value: res.result.rows.kglc },
                            { name: '旷工三次及以上', value: res.result.rows.kgscjys },
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
                            formatter: function(param) {
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
                    });
                    zhjxglCharts.setOption(zhjxglOptions);
                    zhjxglCharts.resize({ height: Box_Height });

                },
                complete: () => { util.clearProgress($) }
            });
            zhjxglCharts.on('click',function(param){
                let key=-1;
                let name=param.name;
                if('全勤' === name){
                    key='qq';
                }else if('迟到一次' === name){
                    key='cdyc';
                }else if('迟到二次' === name){
                    key='cdlc';
                }else if('迟到三次及以上' === name){
                    key='cdscjys';
                }else if('旷工一次' === name){
                    key='kgyc';
                }else if('旷工二次' === name){
                    key='kglc';
                }else if('旷工三次及以上' === name){
                    key='kgscjys';
                }
                console.log(key)
                console.log(name)
                tableUtils.popup({
                    title: '绩效管理',
                    url: url.zhJxglQuery,
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
        ZH0004: function(id, options) {
            var zhaqjcqkhtml=zhaqjcqktpl('card/zhaqjcqk', {});
            $('#'+id).html(zhaqjcqkhtml);
            var url=options.url;
            var index = options.index;
            $.ajax({
                url:url.zhaqjcqkQuery,
                //url: '/mock/jls/zhaqjcqk',
                type: 'post',
                success: function (data) {
                    document.querySelector('#jcr').innerHTML = data.jcr;
                    document.querySelector('#jcsj').innerHTML = data.jckssj;
                    document.querySelector('#jcjl').innerHTML = data.nr;
                    $("#jcjl").on('click', function () {
                        const id = data.id;
                        $.ajax({
                             url: '/mock/jls/xkxxtz',
                             type: "POST",
                             data: {"id":id},
                             beforeSend:()=>util.loadProgress($,true),
                             success:res=>{
                                 const content = res.result.rows[0].content;
                                 tableUtils.popup({
                                    title: '消息通知',
                                    content: content
                                })
                             },
                             complete:()=>{util.clearProgress($)}
                        })
                    })
                }
                
            });
            
        },
        ZH0005: function(id, options) {
            var zhjszkhtml = zhjszktpl('card/zhjszk', {});
            $('#' + id).html(zhjszkhtml);
            var url = options.url;
            var index = options.index;
            var zhjszkCharts = echarts.init(document.querySelector('#zhjszk'));
            $.ajax({
                url: url.zhjszkCount,
                //url: '/mock/jls/zhjszc',
                type: 'POST',
                beforeSend: () => util.loadProgress($, true),
                success: data => {
                    var zhjszkOptions = echart.getOption('pie', {
                        legendData: ['电视教育', '车辆管理', '二级监控', '通信指挥'],
                        seriesData: [
                            { name: '电视教育', value: data.result.dsjy },
                            { name: '车辆管理', value: data.result.clgl },
                            { name: '二级监控', value: data.result.ejjk },
                            { name: '通信指挥', value: data.result.txzh },
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
                            formatter: function(param) {
                                return param.name + ':' + param.value + '%'
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
                    zhjszkCharts.setOption(zhjszkOptions);
                    zhjszkCharts.resize({ height: Box_Height });     
                    window.onresize=function(){
                        zhjszkCharts.resize();
                    };
                },
                complete: () => { util.clearProgress($) }
            });
            zhjszkCharts.on('click',function(param){
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
                    url: url.zhJszkQuery,
                    //url: '/mock/jls/table',
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
        },
        ZH0006: function(id, options) {
            var zhdrjlhtml = zhdrjltpl('card/zhdrjl', {});
            $('#' + id).html(zhdrjlhtml);
            var url = options.url;
            tableUtils.init('zhdrjl', {
                url: url.zhdrjlQuery, //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'jbgw', width: '20%', title: '岗位' },
                    { field: 'jbry', width: '25%', title: '值班人员' },
                    { field: 'jbsj', width: '55%', title: '值班时间' },
                ]
            });

        },
        ZH0007: function(id, options) {
            var zhwgclhtml = zhwgcltpl('card/zhwgcl', {});
            $('#' + id).html(zhwgclhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('sgqk', {
                url: url.zhWgsjQuery, //数据接口
                height: '175',
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'dxbh', width: '25%', title: '违规监室号' },
                    { field: 'wgqkcon', width: '25%', title: '违规情况内容' },
                    { field: 'clztString', width: '25%', title: '处理状态' },
                    { field: 'wgsj', width: '25%', title: '违规时间' },
                ]
            });
        },
        ZH0008: function(id, options) {
            var zhjrdbsxhtml = zhjrdbsxtpl('card/zhjrdbsx', {});
            $('#' + id).html(zhjrdbsxhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('zhjrdbsx', {
                //url: '/mock/jls/table', //数据接口
                url: url.zhDbsxQuery, //数据接口
                height: '175',
                pagesize: 5,
                param: {},
                clumns: [
                    { field: 'xm', width: '25%', title: '人员姓名' },
                    { field: 'rybh', width: '25%', title: '人员编号' },
                    { field: 'dbsx', width: '25%', title: '待办事项' },
                    { field: 'dbsj', width: '25%', title: '待办时间' },
                ]
            });
        },
        ZH0009: function(id, options) {
            var zhjcqkhtml = zhjcqktpl('card/zhjcqk', {});
            $('#' + id).html(zhjcqkhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('zhjcqk', {
                url: url.zhMjcjQuery, //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'xm', width: '25%', title: '人员姓名' },
                    { field: 'rybh', width: '25%', title: '人员编号' },
                    { field: 'jcqk', width: '25%', title: '奖励情况' },
                    { field: 'cfqk', width: '25%', title: '惩罚情况' },
                ]
            });
        },
        ZH0010: function(id, options) {
            var zhdwglhtml = zhdwgltpl('card/zhdwgl', {});
            $('#' + id).html(zhdwglhtml);
            var url = options.url;
            var index = options.index;
            tableUtils.init('zhdwgl', {
                url: url.zhDwglQuery, //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'xm', width: '25%', title: '人员姓名' },
                    { field: 'rybh', width: '25%', title: '人员编号' },
                    { field: 'jcqk', width: '25%', title: '奖励情况' },
                    { field: 'cfqk', width: '25%', title: '惩罚情况' },
                ]
            });
        },
        jrgwqk: function(id, options) {
            var cardhtml = jjbtpl('card/jjb', {});
            $('#' + id).html(cardhtml);
            var url = options.url;
            var index = options.index;
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
        bzxjjj: function(id, opitons) {
            var url = options.url;
            var index = options.index;

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
    };
    return main;
});