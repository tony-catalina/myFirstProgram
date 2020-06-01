define(function(require){
    var util = require('awd/easyui/util');
    var echarts = require('echarts');
    var echart = require('awd/echart/echart');
    var tools = require('awd/jquery/tools');
    var tableUtils = require('awd/layui/table_utils');
    var jjbTempl = require('services/com/jjbPalte.html');
    var newListTpl = require('services/com/xxtztgList.html');
    var jjbtpl = require('services/card/jjb.html');
    var jrcrstpl = require('services/card/jrcrs.html');
    var jrhjtpl = require('services/card/jrhj.html');
    var bahjtpl=require('services/card/bahj.html');
    var bzcrstpl=require('services/card/bzcrs.html');
    var txtjtpl=require('services/card/txtj.html');
    var dbsxtpl=require('services/card/dbsx.html');
    var byywtjtpl=require('services/card/byywtj.html');
    var bzjstzjtpl=require('services/card/bzjstz.html');
    var wmjstpl = require('services/card/wmjs.html');
    var xsjltpl=require('services/card/xsjl.html')
    var qybztpl=require('services/card/qybz.html');
    var xjjltpl=require('services/card/xjjl.html');
    var ygjstpl=require('services/card/ygjs.html');
    var cwqktpl=require('services/card/cwqk.html');
    var xjjjtpl=require('services/card/xjjj.html');
    var cwszjdtpl=require('services/card/cwszjd.html');
    var stcgtpl=require('services/card/stcg.html');
    var wpjjtpl=require('services/card/wpjj.html');
    var wgrytpl=require('services/card/wgry.html')
    var sqswtpl=require('services/card/sqsw.html');
    var zcgltpl=require('services/card/zcgl.html');
    var xzjltpl=require('services/card/xzjl.html')
    var jkjctpl=require('services/card/jkjc.html');
    var jyxxtpl=require('services/card/jyxx.html');
    var wsfytpl=require('services/card/wsfy.html');
    var jbqktpl=require('services/card/jbqk.html');
    var zbhtpl = require('services/card/zbh.html');
    var ypkctpl=require('services/card/ypkc.html');
    var ypjhjltpl=require('services/card/ypjhjl.html');
    var xkdbsxtpl=require('services/card/xkdbsx.html');
    var xxtztpl=require('services/card/xxtz.html');
    var wwcgztpl=require('services/card/bywwcgz.html');
    var zhqwbztpl = require('services/card/zhqwbz.html');
    var zhjxgltpl =require('services/card/zhjxgl.html');
    var zhanjcqktpl = require('services/card/zhaqjcqk.html');
    var jszktpl = require('services/card/jszk.html');
    var drjltpl = require('services/card/drjl.html');
    var wgcltpl = require('services/card/wgcl.html');
    var jrdbsxtpl = require('services/card/jrdbsx.html');
    var jcqktpl = require('services/card/jcqk.html');
    var dwgltpl = require('services/card/dwgl.html');
    var slddbsxtpl = require('services/card/slddbsx.html');
    var szcxqtpl = require('services/card/szcxq.html');
    var jqsstpl = require('services/card/jqss.html');
    var mjdrjxkhtpl = require('services/card/mjdrjxkh.html');
    var glslbjjclqktpl = require('services/card/glslbjjclqk.html');
    var tztgtpl = require('services/card/tztg.html');
    var fxrytpl = require('services/card/fxry.html')
    var formtpl = require('services/form/_dashboardJjb.html');
    var MainTempl = require('services/com/Sy_Main.html');
    var progressBar = require('modules/progressBar');
    var Box_Height = 160;
    var newsDatas = [
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
        { title: "", date: ''},
    ];
    var main={
        SY0001:function(id,options){
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
            var index=options.index;
            var peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''},
                {icon: 'chuangkoufuwu',title: '交接班时间',info: ''},
                {icon: 'chuangkoufuwu',title: '工作记录',info: ''},
                {icon: 'chuangkoufuwu',title: '注意事项',info: ''}];
            $.ajax({url: url.syGwjjb,type: 'POST',data: { jbgw: 'sygw' },
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
        SY0002:function(id,options){
            var jrcrshtml=jrcrstpl('card/jrcrs', {});
            $('#'+id).html(jrcrshtml);
            var url=options.url;
            var index=options.index;
            var  jrcsDatas = [{name:'已办出所',percentage:'',number:0,color:'skill_color',filter:"jrcs",paramsValue:'ybcs'},
                {name:'待办出所',percentage:'',number:0,color:'skill_color',filter:"csdb",paramsValue:'kss_csgl'},
                {name:'已办入所',percentage:'',number:0,color:'skill_color',filter:"jrrs",paramsValue:'ybrs'},
                {name:'待办入所',percentage:'',number:0,color:'skill_color',filter:"rsdb",paramsValue:'kss_rsdj'},
                {name:'延期人数',percentage:'',number:0,color:'skill_color',filter:"yqrs",paramsValue:'yqrs'}];
            $.ajax({url:url.syJrcrs,data:'',type:'post',
                beforeSend:()=>util.loadProgress($,true),
                success:function(res){
                    if(res.success) {
                        console.log(res);
                        for( var key in res.result ) {jrcsDatas.forEach((item,idx)=>{if(item.filter == key) {jrcsDatas[idx].percentage = res.result[key]/10+'%';jrcsDatas[idx].number = res.result[key]}})}
                        progressBar.init('jrcs',{data:jrcsDatas,title:'今日出入所',url:url.syJrcrsQuery,paramsKey:'processDefinitionKey',columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' }],});
                    }
                },
                complete:()=>{util.clearProgress($)}
            });
        },
        SY0003:function(id,options){
            var jrhjhtml=jrhjtpl('card/jrhj', {});
            $('#'+id).html(jrhjhtml);
            var url=options.url;
            var index=options.index;
            let jrhjqkDatas = [{name:'律师已会见',percentage:'',number:0,color:'skill_color4',filter:'lsyhjrs',paramsValue:'lshj'},
                {name:'律师待会见',percentage:'',number:0,color:'skill_color4',filter:'lsdhjrs',paramsValue:'kss_lshj'},
                {name:'家属已会见',percentage:'',number:0,color:'skill_color4',filter:'lsdhjrs',paramsValue:'jshj'},
                {name:'家属待会见',percentage:'',number:0,color:'skill_color4',filter:'jsdhjrs',paramsValue:'kss_jshj'}];
            $.ajax({url:url.syJrhjqk,data:'',type:'post',
                beforeSend:()=>util.loadProgress($,true),
                success:function(res){
                    for( var key in res.result ) {
                        jrhjqkDatas.forEach((item,idx)=>{if(item.filter == key){jrhjqkDatas[idx].percentage = res.result[key]/10+'%';jrhjqkDatas[idx].number = res.result[key] }})}
                    progressBar.init('jrhjqk',{data:jrhjqkDatas,title:'今日会见情况',url:url.syJrhjqkQuery,paramsKey:'processDefinitionKey',columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                            { field: 'xm', width: '150', title: '姓名', align: 'center' },
                            { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                            { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                            { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                            { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                            { field: 'badw', width: '350', title: '办案单位', align: 'center' }],});
                },
                complete:()=>{util.clearProgress($)}
            });
        },
        SY0004:function(id,options){
            var dbsxhtml=dbsxtpl('card/dbsx', {});
            $('#'+id).html(dbsxhtml);
            var url=options.url;
            var index=options.index;
            $.ajax({url:url.dbsxCount,type:'POST',data:{},
                beforeSend:()=>{},
                success:res=>{
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
                    $(".dbxx_click").off('click').on('click',function(){
                        const id  = $(this).attr('id');
                        tableUtils.popup({title: '&#xe61e; 待办事项',url: url.processTaskList,params: {processDefinitionKey: id},
                            request:{
                                pageName: 'page',//页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' }],
                        })
                    })
                }
            })
        },
        SY0005:function(id,options){
            var bahjhtml=bahjtpl('card/bahj', {});
            $('#'+id).html(bahjhtml);
            var url=options.url;
            var index=options.index;
            var bahjCharts = echarts.init(document.querySelector('.bahj'));
            $.ajax({url: url.syBahjCount,type: 'POST',
                beforeSend:()=>util.loadProgress($,true),
                success: res => {res = res.result;var data = [];var ldata = ['逮捕', '刑事拘留', '检察补充侦查','一审','二审','死刑复核','发回重审','待执行','已决','其它', '公安补充侦察', '审查起诉'];
                    for(var i=0;i<res.length;i++){
                        for(var j=0;j<ldata.length;j++){
                            if (ldata[j] == res[i].bahjString){
                                var row = {name:res[i].bahjString,value:res[i].count};
                                data.push(row);
                            }}}
                    var bahjOptions = echart.getOption('pie', {legendData: ldata,seriesData: data,seriesColors: ['#4169E1', '#9932CC', '#1E90FF', '#FF8C00', '#CCF180','#D87A80','#07A2A4','#FFB980','#97B552','#5AB1EF','#95706D','#E5CF0D']}, {
                        name: '人数占比',radius: '70%',label: {show: true,textStyle: {fontWeight: 200,fontSize: 10}},
                        lineStyle: {type: 'solid',opacity: 1,color: '#fff',},
                        itemStyle: {normal: {borderWidth: 2,borderColor: '#fff' },
                            emphasis: {borderWidth: 0,shadowBlur: 10,shadowOffsetX: 0,shadowColor: 'rgba(0, 0, 0, 0.5)'}}
                    });

                    bahjCharts.setOption(bahjOptions);
                    bahjCharts.resize({height: Box_Height});

                    bahjCharts.on('click', function(params) {
                        for (var i = 0; i<res.length; i++) {if (params.data.name == res[i].bahjString) {paramsName = res[i].bahjCode;break;}}
                        tableUtils.popup({title: '&#xe61e; 本月人员入所所处环节统计',url: url.syJbxx,
                            params: {bahj: paramsName, sytj: '1'},
                            columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' }],
                        })})
                },
                complete:()=>{util.clearProgress($)}
            });
        },
        SY0006:function(id,options){
            var bzcrshtml=bzcrstpl('card/bzcrs', {});
            $('#'+id).html(bzcrshtml);
            var url=options.url;
            var index=options.index;
            var bzcrsCharts = echarts.init(document.querySelector('.bzcrs'));
            $.ajax({url: url.syBzcrs,type: 'POST',
                beforeSend:()=>util.loadProgress($,true),
                success: res => {res = res.result;
                    var bzcrsOptions = echart.getOption('bars',{xdata: ['本周出所人数', '本周入所人数', '临时出所人数'],yheight:Box_Height-50},
                        [{type:'bar',data: [res.jrcs, res.jrrs, res.bzlscs],
                            itemStyle: {normal: {color: function(params) { var colorList = ['#4169E1', '#9932CC', '#1E90FF'];return colorList[params.dataIndex]}}}
                        }]);

                    bzcrsCharts.setOption(bzcrsOptions);
                    bzcrsCharts.resize({height: Box_Height + 40});
                    bzcrsCharts.on('click', function(params) {
                        let ParamsData = "";
                        if(params.name == "本周出所人数")ParamsData = "cs"
                        else if (params.name == "本周入所人数")ParamsData = "rs"
                        else ParamsData = 'lscs'
                        tableUtils.popup({title: '&#xe61e; 本周出所',url: url.syBzCrsQuery,
                            params: {"ywlx":ParamsData},
                            columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '350', title: '办案单位', align: 'center' }],
                        })})
                },
                complete:()=>{util.clearProgress($)}
            })
        },
        SY0007:function(id,options){
            var txtjhtml=txtjtpl('card/txtj', {});
            $('#'+id).html(txtjhtml);
            var url=options.url;
            var index=options.index;
            var txCharts = echarts.init(document.querySelector('.tx'));
            $.ajax({url: url.syJrtsrs,type: 'POST',
                beforeSend:()=>util.loadProgress($,true),
                success: res => { res = res.result;
                    var txOptions = echart.getOption('pie', {legendData: ['今天已提讯人数', '今天待提讯人数','今天已提解人数','今天待提解人数'],
                            seriesData: [
                                { value: res.tsdj_jryts, name: '今天已提讯人数' },
                                { value: res.tsdj_jrdts, name: '今天待提讯人数' },
                                { value: res.tjdj_jryts, name: '今天已提解人数' },
                                { value: res.tjdj_jrdts, name: '今天待提解人数' }],
                            seriesColors: ['#3476fe', '#34d1fe', '#82188b', '#e15505'],yheight:Box_Height-50},
                        {name: '访问来源',radius: ['45%', '70%']});

                    txCharts.setOption(txOptions);
                    txCharts.resize({height: Box_Height});
                    txCharts.on('click', function(params) {
                        let ParamsData = "";
                        if(params.name == "今天待提讯人数")ParamsData = "kss_tsdj"
                        else if (params.name == "今天待提解人数")ParamsData = "kss_tj"
                        else if (params.name == "今天已提讯人数")ParamsData = "tx"
                        else if (params.name == "今天已提解人数")ParamsData = "tj"
                        tableUtils.popup({title: '&#xe61e;'+params.name,url: url.syJrTxtjQuery,params: {"processDefinitionKey":ParamsData},
                            request:{
                                pageName: 'page',//页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '200', title: '办案单位', align: 'center' }],

                        });

                    })
                },
                complete:()=>{util.clearProgress($)}
            })
        },
        GJ0001:function(id,options){
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
                        })
                    }

                }

            });
        },
        GJ0002:function(id,options){
            var byywtjhtml=byywtjtpl('card/byywtj', {});
            $('#'+id).html(byywtjhtml);
            var url=options.url;
            var index=options.index;
            $.ajax({
                url: url.gj_ByywtjQuery,
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
                                url: url.byYwtj,
                                params: {
                                    ywlx: "qj"
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
                                url: url.byYwtj,
                                params: {
                                    ywlx: "tfsj"
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
                                url: url.byYwtj,
                                params: {
                                    ywlx: "dsws"
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
                                url: url.byYwtj,
                                params: {
                                    ywlx: "jytj"
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
                                url: url.byYwtj,
                                params: {
                                    ywlx: "fxry"
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
        GJ0003:function(id,options){
            var bzjstzjhtml=bzjstzjtpl('card/bzjstz', {});
            $('#'+id).html(bzjstzjhtml);
            var url=options.url;
            var index=options.index;
            tableUtils.init('jstzjv', {
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
        GJ0004:function(id,options){
            var wmjshtml=wmjstpl('card/wmjs', {});
            $('#'+id).html(wmjshtml);
            var url=options.url;
            var index=options.index;
            var sjData = [];
            var wmjsHtml = '';
            util.ajax({
                url: url.xkWmjs,
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
                            wmjsHtml += '<div class="item-list item-wmjs">' +
                                '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>' +
                                '<div>' + sjData[j] + '</div>' +
                                '</div>';
                        }

                    }
                    document.querySelector(".civilized-prison").innerHTML = wmjsHtml;
                    $(".item-wmjs").each(function() {
                        $(this).click(function() {
                            var jsh = $(this).children("div:last-child").text()
                            var _title = $(this).parent().prev().text()
                            tableUtils.popup({
                                title: _title,
                                url: url.wmjsList,
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
        GJ0005:function(id,options){
            const url=options.url;
            var xsjlhtml=xsjltpl('card/xsjl', {});
            $('#'+id).html(xsjlhtml);
            tableUtils.init('xsjv', {
                url: url.bzXsjlList, //数据接口
                height:'175',
                page: {
                    limit: 5
                },
                // param: { sldxm: '', rows: 10 },
                clumns: [
                    { field: 'jsbh', width: '25%', title: '监所编号' },
                    { field: 'xssj', width: '25%', title: '巡视日期' },
                    { field: 'xsmj', width: '25%', title: '巡视人' },
                    { field: 'xsqk', title: '异常情况', width: '25%' },
                ]
            });
        },
        GJ0006:function(id,options){
            const url=options.url,qybzhtml=qybztpl('card/qybz', {});
            $('#'+id).html(qybzhtml);
            $.ajax({
                url: url.gj_QybzQuery,
                type: 'post',
                success: res => {
                    res = res.result;
                    var qybzCharts = echarts.init(document.querySelector('.qybz'));
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
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '放风',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'dcmj', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "发饭") {
                            tableUtils.popup({
                                title: '&#xe61e;发饭',
                                url: url.gjQybz,
                                params: {
                                    'ffan': '发饭',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'dcmj', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "洗澡") {
                            tableUtils.popup({
                                title: '&#xe61e;洗澡',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '洗澡',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'dcmj', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "理发") {
                            tableUtils.popup({
                                title: '&#xe61e;理发',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '理发',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'dcmj', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],

                            });
                        }
                        if (param.name == "发水") {
                            tableUtils.popup({
                                title: '&#xe61e;发水',
                                url: url.gjQybz,
                                params: {
                                    'bzlx': '发水',
                                    'rows': 20
                                },
                                columns: [
                                    { field: 'jsh', width: '160', title: '监室号', align: 'center' },
                                    { field: 'bzlx', width: '160', title: '保障类型', align: 'center' },
                                    { field: 'kssj', width: '160', title: '开始时间', align: 'center' },
                                    { field: 'jssj', width: '160', title: '结束时间', align: 'center' },
                                    { field: 'dcmj', width: '200', title: '带出民警', align: 'center' },
                                    { field: 'dd', width: '200', title: '带出地点', align: 'center' },
                                    { field: 'dlr', width: '200', title: '带领人', align: 'center' }
                                ],
                            });
                        }})}})
        },
        GJ0007:function(id,options){
            const url=options.url,xjjlhtml=xjjltpl('card/xjjl', {});
            $('#'+id).html(xjjlhtml);
            tableUtils.init('xjjv', {
                url: url.bzXjsyList, //数据接口
                height: '175',
                pagesize: 5,
                // param: { sldxm: '', rows: 10 },
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
        GJ0008:function(id,options){
            var sjData = [],ygjsHtml = '';
            const url=options.url,ygjshtml=ygjstpl('card/ygjs', {});
            $('#'+id).html(ygjshtml);
            util.ajax({
                url: url.xkWmjs,
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
                            ygjsHtml += '<div class="item-list item-ygjs" id="wmjsid" style="background:linear-gradient(to top right, #e4656c, #f30834)">' +
                                '<div class="text-center icon"><span class="iconfont icon-public__easyi"></span></div>' +
                                '<div style="color:white">' + sjData[j] + '</div>' +
                                '</div>';
                        }
                    }
                    document.querySelector(".strict-prison").innerHTML = ygjsHtml;
					console.log()
                    $(".item-ygjs").each(function() {
                        $(this).click(function() {
                            var jsh = $(this).children("div:last-child").text()
                            var _title = $(this).parent().prev().text()
                            tableUtils.popup({
                                title: _title,
                                url: url.jsnryxxQuery,
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
        CW0001:function(id,options){
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
            var index=options.index;
            var peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''},
                {icon: 'chuangkoufuwu',title: '交接班时间',info: ''},
                {icon: 'chuangkoufuwu',title: '工作记录',info: ''},
                {icon: 'chuangkoufuwu',title: '注意事项',info: ''}];
            $.ajax({url: url.syGwjjb,type: 'POST',data: { jbgw: '财务岗位' },
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
        CW0002:function(id,options){
            const url=options.url
            const cwqkhtml=cwqktpl('card/cwqk', {});
            $('#'+id).html(cwqkhtml);
            var dbsxCharts = echarts.init(document.querySelector('.cwqk'));
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
                            seriesData: [{ name: '现金接收金额', value: data.result.jszje },
                                { name: '现金支出金额', value: data.result.zczje },
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
                    }}})
        },
        CW0003:function(id,options){
            const url=options.url
            const xjjjhtml=xjjjtpl('card/xjjj', {});
            $('#'+id).html(xjjjhtml);
            tableUtils.init('xjjj', {
                url: url.bzxjjjlist,
                height: '175',
                param: { blrq_start: tools.getWeekStartAndEnd(0)[0], blrq_end: tools.getWeekStartAndEnd(0)[1]},
				request:{ 
						pageName: 'page' ,//页码的参数名称，默认：page
                        limitName: 'rows' //每页数据量的参数名，默认：limit
						},
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
        CW0004:function(id,options){
            const url=options.url
            const szjdhtml=cwszjdtpl('card/cwszjd', {});
            $('#'+id).html(szjdhtml);
            tableUtils.init('cwszjd', {
                url: url.cwgwszjd,
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
        CW0005:function(id,options){
            const url=options.url
            const stcghtml=stcgtpl('card/stcg', {});
            $('#'+id).html(stcghtml);
            var ywblCharts = echarts.init(document.querySelector('.stcg'));
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
        CW0006:function(id,options){
            const url=options.url
            const wpjjhtml=wpjjtpl('card/wpjj', {});
            $('#'+id).html(wpjjhtml);
            tableUtils.init('wpjj', {
                url: url.wpjsmx,
                height: '175',
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
        CW0007:function(id,options){
            const url=options.url
            const wgryhtml=wgrytpl('card/wgry', {});
            $('#'+id).html(wgryhtml);
            tableUtils.init('jfjd', {
                url: url.jfjdList,
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
        CW0008:function(id,options){
            const url=options.url
            const sqswhtml=sqswtpl('card/sqsw', {});
            $('#'+id).html(sqswhtml);
            tableUtils.init('sqsw', {
                url: url.sqswList,
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
        CW0009:function(id,options){
            const url=options.url
            const zcglhtml=zcgltpl('card/zcgl', {});
            $('#'+id).html(zcglhtml);
            util.ajax({
                url: url.gdzcglxx,
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
                            }
                        },
                        { field: 'zclx', width: '200', title: '资产类型', align: 'center' },
                        { field: 'zcqk', width: '200', title: '资产情况', align: 'center' },
                    ],
                });
            })
        },
        YW0001:function(id,options){
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
            var index=options.index;
            var peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''},
                {icon: 'chuangkoufuwu',title: '交接班时间',info: ''},
                {icon: 'chuangkoufuwu',title: '工作记录',info: ''},
                {icon: 'chuangkoufuwu',title: '注意事项',info: ''}];
            $.ajax({url: url.syGwjjb,type: 'POST',data: { jbgw: 'ywgw' },
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
        YW0002:function(id,options){
            const url=options.url
            const xzjlhtml=xzjltpl('card/xzjl', {});
            $('#'+id).html(xzjlhtml);
            tableUtils.init('xzjl', {
                url: url.ywsyXzjlList,
                height: '175',
                pagesize: 10,
                clumns: [
                    { field: 'jqh', width: '20%', title: '监区号' },
                    { field: 'jsh', width: '20%', title: '监室号' },
                    { field: 'creator', width: '20%', title: '巡诊人' },
                    { field: 'xzsj', title: '巡诊时间', width: '40%' },
                ],
            });
        },
        YW0003:function(id,options){
            const url=options.url
            const jkjchtml=jkjctpl('card/jkjc', {});
            $('#'+id).html(jkjchtml);
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
                })})
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
        YW0004:function(id,options){
            const url=options.url
            const jyxxhtml=jyxxtpl('card/jyxx', {});
            var Res_Data = [{ name: '所内就医', value:0},
            { name: '所外就医', value:0},
            { name: '待就医', value:0},
            { name: '待观察', value:0},
            ]
            $('#'+id).html(jyxxhtml);
            var jyxxCharts = echarts.init(document.querySelector('.jyxx'));
            $.ajax({
                url:url.JyxxQuery,
                type:"POST",
                async:false,
                success:res=>{
                    const row = res.result;
                    Res_Data[0].value = row.snjy;
                    Res_Data[1].value = row.swjy;
                    Res_Data[2].value = row.djy;
                    Res_Data[3].value = row.dgc;
                }
            })
            var jyxxOptions = echart.getOption('pie', {
                legendData: ['所内就医', '所外就医', '待就医', '待观察'],
                seriesData: Res_Data,
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
                        url: url.swjyQuery,
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
                        url: url.swjyQuery,
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
                        url: url.swjyQuery,
                        params: {
                            processDefinitionKey: 'kss_jy',
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
            jyxxCharts.setOption(jyxxOptions);
            jyxxCharts.resize({ height: Box_Height });
            window.onresize = function () {
                jyxxCharts.resize();
            };
        },
        YW0005:function(id,options){
            const url=options.url
            const wsfyhtml=wsfytpl('card/wsfy', {});
            $('#'+id).html(wsfyhtml);
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

            $.ajax({
                url: url.ywWsfyQuery,
                type: "POST",
                data: { jbgw: "ywgw" },
                func: function (data) {
                    if (data) {
                        peopleInfo[0].info = data.xdry;
                        peopleInfo[1].info = data.xdrq;
                        peopleInfo[2].info = data.xdffString;
                        var wsfyHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
                        document.querySelector("#wsfy").innerHTML = wsfyHtml;
                    }
                }
            })
            var wsfyHtml = jjbTempl('com/jjbPalte', { data: peopleInfo });
            document.querySelector("#wsfy").innerHTML = wsfyHtml;
        },
        YW0006:function(id,options){
            const url=options.url
            const jbqkhtml=jbqktpl('card/jbqk', {});
            $('#'+id).html(jbqkhtml);
            var jbqkCharts = echarts.init(document.querySelector('.jbqk'));
            jbqkCharts.on('click', function (param) {
                if (param.name == "心脏病") {
                    tableUtils.popup({
                        title: '&#xe61e;心脏病',
                        url: url.ywJbqkQuery,
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
                        url: url.ywJbqkQuery,
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
                        url: url.ywJbqkQuery,
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
                        url: url.ywJbqkQuery,
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
                        url: url.ywJbqkQuery,
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
                        url: url.ywJbqkQuery,
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


            util.ajax({
                url: url.JbqkQuery,
                type: 'post',

                func: function (data) {
                    if (data) {
                        var jbqkOptions = echart.getOption('pie', {
                            legendData: ['心脏病', '高血压', '糖尿病', '普通感冒', '传染性疾病', '重大疾病'],
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
                        jbqkCharts.setOption(jbqkOptions);
                        jbqkCharts.resize({ height: Box_Height });
                        window.onresize = function () {
                            jbqkCharts.resize();
                        };
                    }
                }
            });
        },
        YW0007:function(id,options){
            const url=options.url
            const zbhhtml=zbhtpl('card/zbh', {});
            $('#'+id).html(zbhhtml);
            $.ajax({
                url: url.zbh,
                type: 'POST',
                data: { jbgw: "ywgw" },
                success: res => {
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
        YW0008:function(id,options){
            const url=options.url
            const ypkchtml=ypkctpl('card/ypkc', {});
            $('#'+id).html(ypkchtml);
            tableUtils.init('ypkc', {
                url: url.ywsyYpkcList,
                height: '175',
                pagesize: 10,
                clumns: [
                    { field: 'jsbh', title: '监所编号', width: '25%' },
                    { field: 'ypmc', width: '20%', title: '药品名称' },
                    { field: 'fydwString', width: '15%', title: '单位' },
                    { field: 'updatetime', width: '20%', title: '修改日期' },
                    { field: 'sccj', title: '生产单位', width: '20%' },
                ],
            });
        },
        YW0009:function(id,options){
            const url=options.url
            const ypjhjlhtml=ypjhjltpl('card/ypjhjl', {});
            $('#'+id).html(ypjhjlhtml);
            tableUtils.init('jhjl', {
                url: url.ywsyYpjhjlList,
                height: '175',
                pagesize: 10,
                clumns: [
                    { field: 'YPMC', width: 100, title: '药品名称' },
                    { field: 'FYDW', width: 80, title: '单位' },
                    { field: 'JHSL', width: 100, title: '进货数量' },
                    { field: 'SCCJ', title: '生产单位', width: 100 },
                    { field: 'scsj', title: '生产年份', width: 165 }
                ],
            });
        },
        XK0001:function(id,options){
            const url=options.url
            const xxtzhtml=xxtztpl('card/xxtz', {});
            var newsDatas = [
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "" ,content: ""},
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "",content: "" },
            ];
            $('#'+id).html(xxtzhtml);
            $.ajax({
                url: url.xkTztgQuery,
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
                           url: url.xkTztgQuery,
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
                             url: url.xkTztgQuery,
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
        XK0002:function(id,options){
            const url=options.url
            const xxtzhtml=xxtztpl('card/xxtz', {});
            $('#'+id).html(xxtzhtml);
            var newsDatas = [
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "" ,content: ""},
                { title: "", date: '', state: "",content: "" },
                { title: "", date: '', state: "",content: "" },
            ];
            $.ajax({
                url: url.xkTztgQuery,
                type: "POST",
                data: {},
                success: res => {
                    res = res.result.rows;
                    if(res.length>=newsDatas.length){
                    for (var i = 0; i < newsDatas.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        tableUtils.initPop({
                            title: '待办事项',
                            content: 'hahha'
                        })
                    })
                }
                else{
                    for (var i = 0; i < res.length; i++) {
                        newsDatas[i].title = res[i].title;
                        newsDatas[i].date = res[i].createtime;
                        newsDatas[i].state = res[i].state;
                        newsDatas[i].content = res[i].content;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                    $(".Message_box").on('click', '.LineS_box', function () {
                        tableUtils.popup({
                            title: '待办事项',
                            content: 'hahha'
                        })
                    })
                }
                }
            })
        },
        XK0003:function(id,options){
            const url=options.url
            const wwcgzhtml=wwcgztpl('card/bywwcgz', {});
            $('#'+id).html(wwcgzhtml);
            var datas = [
                { name: '械具解除', percentage: '',number:0, color: 'skill_color5', filter: "xjjc", paramsValue: 'kss_xjjc'},
                { name: '单独关押', percentage: '', number:0,color: 'skill_color5', filter: "ddgy", paramsValue: 'kss_ddgy'}
            ];
            $.ajax({
                url: url.xkbywwcgzCount,
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
                            url: url.processTaskList,
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
        XK0004:function(id,options){
            var cardhtml=jjbtpl('card/jjb', {});
            $('#'+id).html(cardhtml);
            var url=options.url;
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
        XK0005:function(id,options){
            const url=options.url
            const dbsxhtml=xkdbsxtpl('card/xkdbsx', {});
            $('#'+id).html(dbsxhtml);
            var dbsxCharts = echarts.init(document.querySelector('.xkdbsx'));
            $.ajax({
                url: url.xkdbsxrs,
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
                        tableUtils.popup({
                            title: '&#xe61e; 待办事项',
                            url: url.processTaskList,
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
        XK0006:function(id,options){
            const url=options.url
            const fxryhtml=fxrytpl('card/fxry', {});
            $('#'+id).html(fxryhtml);
            var afbjCharts = echarts.init(document.querySelector('.afbj'));
            afbjCharts.on('click', function (params) {
                if (params.name == "一级风险人员") {
                    tableUtils.popup({
                        title: '&#xe61e; 风险人员',
                        url: url.xkfxry,
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
                        url: url.xkfxry,
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
                        url: url.xkfxry,
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
                        url: url.xkfxry,
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
                url: url.xkfxryrs,
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
        LD0001:function(id,options){
            const url=options.url
            const jqsshtml=jqsstpl('card/jqss', {});
            $('#'+id).html(jqsshtml);
            $.ajax({
                url: url.JqssQuery,
                type: 'POST',
                data: {},
                success: res => {
                    console.log(res);
                    document.querySelector("#zyrs").innerHTML = res.result.zyrs;
                    document.querySelector("#nanx").innerHTML = res.result.nanx;
                    document.querySelector("#nvx").innerHTML = res.result.nvx;
                    document.querySelector("#jrcs").innerHTML = res.result.jrcs;
                    document.querySelector("#jrrs").innerHTML = res.result.jrrs;
                    document.querySelector("#yjfx").innerHTML = res.result.yjfx;
                    document.querySelector("#ejfx").innerHTML = res.result.ejfx;
                    document.querySelector("#sjfx").innerHTML = res.result.sjfx;
                    $('#zyrs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {},
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })
                    });
                    $('#nanx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "xb": 1
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })
                    });
                    $('#nvx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "xb": 2
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#yjfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 1
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#ejfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 2
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#sjfx').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syrs,
                            params: {
                                "wxdj": 3
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#jrcs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syJrcrsQuery,
                            params: {
                                processDefinitionKey: 'ybcs'
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    $('#jrrs').click(function() {
                        tableUtils.popup({
                            title: '&#xe61e;详细信息',
                            url: url.syJrcrsQuery,
                            params: {
                                processDefinitionKey: 'ybrs'
                            },
                            request:{
                                pageName: 'page', //页码的参数名称，默认：page
                                limitName: 'rows' //每页数据量的参数名，默认：limit
                            },
                            columns: [
                                { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                                { field: 'xm', width: '180', title: '姓名', align: 'center' },
                                { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                                { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                                { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                                { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                                { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                            ],
                        })  
                    });
                    
                    $('#More_Title').on('click', function() {
                        layer.open({
                            title: '关押动态',
                            type: 1,
                            area: ['72%', '87%'],
                            content: '<table id="table">' +
                                ' <tr>' +
                                ' <td rowspan="4">' +
                                '在所人员<br>' +
                                +res.result.zyrs +
                                '</td>' +
                                '<td>男</td>' +
                                '<td>' + res.result.nanx + '</td>' +
                                '<td>女</td>' +
                                '<td>' + res.result.nvx + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>正常入所</td>' +
                                '<td>' + res.result.zcrs + '</td>' +
                                '<td>投送未收</td>' +
                                '<td>' + res.result.tsws + '</td>' +
                                '<td>非逮捕入所</td>' +
                                '<td>' + res.result.fjbrs + '</td>' +
                                '<td>其他</td>' +
                                '<td>' + res.result.qt + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>拘留数</td>' +
                                '<td>' + res.result.jls + '</td>' +
                                '<td>逮捕数</td>' +
                                '<td>' + res.result.dbs + '</td>' +
                                '<td>已决数</td>' +
                                '<td>' + res.result.yjs + '</td>' +
                                '<td>劳教数</td>' +
                                '<td>' + res.result.ljs + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>少管数</td>' +
                                '<td>' + res.result.sgs + '</td>' +
                                '<td>寄押数</td>' +
                                '<td>' + res.result.jys + '</td>' +
                                '<td>留所服刑</td>' +
                                '<td>' + res.result.lsfx + '</td>' +
                                '<td>待投劳</td>' +
                                '<td>' + res.result.dtl + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td rowspan="3">' +
                                ' 当班<br>出入所</td>' +
                                '<td>入所</td>' +
                                '<td>' + res.result.rs + '</td>' +
                                '<td>不宜收押</td>' +
                                '<td>' + res.result.bysy + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>出所</td>' +
                                '<td>' + res.result.cs + '</td>' +
                                '<td>投送监狱</td>' +
                                '<td>' + res.result.tsjy + '</td>' +
                                '<td>刑满释放</td>' +
                                '<td>' + res.result.xmsf + '</td>' +
                                '<td>变更措施</td>' +
                                '<td>' + res.result.bgcs + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>临时出所</td>' +
                                '<td>' + res.result.lscs + '</td>' +
                                '<td>未回所</td>' +
                                '<td>' + res.result.whs + '</td>' +
                                '<td>已回所</td>' +
                                '<td>' + res.result.yhs + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>监区出入</td>' +
                                '<td>监区内</td>' +
                                '<td>' + res.result.jqn + '</td>' +
                                '<td>监区外</td>' +
                                '<td>' + res.result.jqw + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>医疗管理</td>' +
                                '<td>重病号</td>' +
                                '<td>' + res.result.zbh + '</td>' +
                                '<td>所外就医</td>' +
                                '<td>' + res.result.swjy + '</td>' +
                                '<td>所内就医</td>' +
                                '<td>' + res.result.snjy + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>安全管理</td>' +
                                '<td>严管对象</td>' +
                                '<td>' + res.result.ygdx + '</td>' +
                                '<td>耳目</td>' +
                                '<td>' + res.result.em + '</td>' +
                                '<td>违规</td>' +
                                '<td>' + res.result.wg + '</td>' +
                                '<td>加戴械具</td>' +
                                '<td>' + res.result.jdxj + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>提讯会见</td>' +
                                '<td>提讯</td>' +
                                '<td>' + res.result.tx + '</td>' +
                                '<td>家属会见</td>' +
                                '<td>' + res.result.jshj + '</td>' +
                                '<td>律师会见</td>' +
                                '<td>' + res.result.lshj + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>关押期限</td>' +
                                '<td>三日内到期</td>' +
                                '<td>' + res.result.stdq + '</td>' +
                                '<td>超期</td>' +
                                '<td>' + res.result.cq + '</td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                                '</tr>' +
                                '</table>',
                            btn: []
                        })
                    });
                }
            })
        },
        LD0002:function(id,options){
            const url=options.url
            const mjdrjxkhhtml=mjdrjxkhtpl('card/mjdrjxkh', {});
            $('#'+id).html(mjdrjxkhhtml);
            var drjxCharts = echarts.init(document.querySelector('.drjx'));
            $.ajax({
                url: url.mjdrkh,
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
                                name: '当日绩效',
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
                                    textStyle: {
                                        fontWeight: 200,
                                        fontSize: 9
                                    },
                                    formatter: function (params) {
                                        return params.name + ':' + params.percent + '%';
                                    }
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
                let ParamsData = "";
                if (params.name == "迟到") ParamsData = "1"
                else if (params.name == "早退") ParamsData = "2"
                else if (params.name == "旷工") ParamsData = "3"
                else ParamsData = "4"
                tableUtils.popup({
                    title: '&#xe61e;当日绩效',
                    url: url.sldMjdrjxkhsQuery,
                    params: {
                        "ywlx": ParamsData
                    },
                    request:{
                        pageName: 'page', //页码的参数名称，默认：page
                        limitName: 'rows' //每页数据量的参数名，默认：limit
                    },
                    columns: [
                        { field: 'jh', width: '230', title: '警号', align: 'center' },
                        { field: 'xm', width: '230', title: '姓名', align: 'center' },
                        { field: 'sfzh', width: '230', title: '身份证', align: 'center' },
                        { field: 'kqqk', width: '230', title: '考核情况', align: 'center' },
                        { field: 'djr', width: '230', title: '登记人', align: 'center' },
                        { field: 'djsj', width: '230', title: '登记时间', align: 'center' },
                    ],
                })
            })
        },
        LD0003:function(id,options){
            const url=options.url
            const glslbjjclqkhtml=glslbjjclqktpl('card/glslbjjclqk', {});
            $('#'+id).html(glslbjjclqkhtml);
            var czqkCharts = echarts.init(document.querySelector('.czqk'));
            $.ajax({
                url: url.BjczqkQuery,
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
                        data: [{ value: 10, name: '门禁报警' },
                            { value: 10, name: '风场报警' },
                            { value: 10, name: '限高报警' },
                            { value: 10, name: '监室报警' }
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
                console.log("params",params);
                console.log(params.value);
                console.log(czqkCharts.getOption());
                try{
                    var d = czqkCharts.getOption()['series'][0].data;
                    var dataIndex = params.dataIndex;
                    if(d[dataIndex].value==0){
                        layer.alert(params.name+"数量为0");
                        return;
                    }
                }catch(err){
                    console.err
                }
                if (params.name == "门禁报警") {
                    tableUtils.popup({
                        title: '&#xe61e;各类所里报警及处置情况',
                        url: url.sldGlslbjjczqkQuery,
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
                        url: url.sldGlslbjjczqkQuery,
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
                        url: url.sldGlslbjjczqkQuery,
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
                        url: url.sldGlslbjjczqkQuery,
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
        LD0004:function(id,options){
            const url=options.url
            const tztghtml=tztgtpl('card/tztg', {});
            $('#'+id).html(tztghtml);
            $.ajax({
                url: url.xkTztgQuery,
                type: "POST",
                data: {},
                success: res => {
                    res = res.result;
                    for(var i=0;i<newsDatas.length;i++){
                        newsDatas[i].id =res.rows[i].id;
                        newsDatas[i].title=res.rows[i].title;
                        newsDatas[i].date=res.rows[i].createtime;
                    }
                    var html = newListTpl('com/xxtztgList', { data: newsDatas });
                    $(".Message_box").html(html);
                }
            })
            $(".Message_box").on('click', '.LineS_box', function() {
                const id = $(this).attr('id');
                $.ajax({
                     url: url.xkTztgQuery,
                     type: "POST",
                     data: {"id":id},
                     beforeSend:()=>util.loadProgress($,true),
                     success:res=>{
                         const content = res.result.rows[0].content;
                         tableUtils.initPop({
                            title: '通知公告',
                            content: content
                        })
                     },
                     complete:()=>{util.clearProgress($)}
                })
            })
        },
        LD0005: function (id, options) {
            var slddbsxhtml=slddbsxtpl('card/slddbsx', {});
            $('#'+id).html(slddbsxhtml);
            var url = options.url;
            var ldspCharts = echarts.init(document.querySelector('.ldsp'));

            $.ajax({
                url: url.DbsxQuery,
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
                            data: ['监室调整', '临时出所', '械具加载', '收押入所','出所管理']
                        },
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            left: 30,
                            radius: ['40%', '60%'],
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var colorList = ['#F9A336', '#EF5378', '#CF6AF4','#3D93F6', '#7D43F1'];
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
                console.log(params);
                let ParamsData = "";
                if (params.name == "监室调整") ParamsData = "kss_jstz"
                else if (params.name == "临时出所") ParamsData = "kss_lscs"
                else if (params.name == "械具加载") ParamsData = "kss_xjjz"
                else if (params.name == "收押入所") ParamsData = "kss_cyrs"
                else ParamsData = 'kss_csgl'
                tableUtils.popup({
                    title: '&#xe61e;代办事项',
                    url: url.processTaskList,
                    params: {
                        "processDefinitionKey": ParamsData
                    },
                    request:{
                        pageName: 'page', //页码的参数名称，默认：page
                        limitName: 'rows' //每页数据量的参数名，默认：limit
                    },
                    columns: [
                        { field: 'snbh', width: '180', title: '人员编号', align: 'center' },
                        { field: 'xm', width: '180', title: '姓名', align: 'center' },
                        { field: 'jsh', width: '180', title: '监室号', align: 'center' },
                        { field: 'bahjString', width: '180', title: '办案环节', align: 'center' },
                        { field: 'rsrq', width: '220', title: '入所日期', align: 'center' },
                        { field: 'gyqx', width: '220', title: '关押期限', align: 'center' },
                        { field: 'badw', width: '220', title: '办案单位', align: 'center' },
                    ],
                })

            });
        },
        LD0006: function (id, options) {
            var szcxqhtml=szcxqtpl('card/szcxq', {});
            $('#'+id).html(szcxqhtml);
            var url = options.url;
            var szcxqDatas = [
                { name: '收押入所', percentage: '0', number: 0, color: 'skill_color4', filter: "syrs", paramsValue: 'rsdj' },
                { name: '出所管理', percentage: '0', number: 0, color: 'skill_color4', filter: "csgl", paramsValue: 'csgl' },
                { name: '律师会见', percentage: '0', number: 0, color: 'skill_color4', filter: "lshj", paramsValue: 'lshj' },
                { name: '家属会见', percentage: '0', number: 0, color: 'skill_color4', filter: "jshj", paramsValue: 'jshj' },
            ]
            $.ajax({
                url: url.SzcxqQuery,
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
        ZH0002: function (id, options) {
            var zhqwbzhtml=zhqwbztpl('card/zhqwbz', {});
            $('#'+id).html(zhqwbzhtml);
            var url=options.url;
            var index=options.index;
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
                       { field: 'yplxString', width: '412', title: '用品类型', align: 'center' }
                   ]
               });
           });
        },
        ZH0003: function (id, options) {
            var zhjxglhtml=zhjxgltpl('card/zhjxgl', {});
            $('#'+id).html(zhjxglhtml);
            var url=options.url;
            var index = options.index;
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
        ZH0004: function (id, options) {
            var zhaqjcqkhtml=zhanjcqktpl('card/zhaqjcqk', {});
            $('#'+id).html(zhaqjcqkhtml);
            var url=options.url;
            var index = options.index;
            $.ajax({

                url:url.syzhaqjcqk,
                type: 'post',
                success: function (data) {
                    document.querySelector('#jcr').innerHTML = data.jcr;
                    document.querySelector('#jcsj').innerHTML = data.jcsj;
                    document.querySelector('#jcjl').innerHTML = data.jcjl;
                }
            });
        },
        ZH0005: function (id, options) {
            var jszkhtml=jszktpl('card/jszk', {});
            $('#'+id).html(jszkhtml);
            var url = options.url;
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
        ZH0006: function (id, options) {
            var drjlhtml=drjltpl('card/drjl', {});
            $('#'+id).html(drjlhtml);
            var url = options.url;
            tableUtils.init('zbqk',{
                url: url.syzhdrjl,
                height: '175',
                param: {},
                pagesize: 10,
                clumns: [
                    { field: 'jjbgw', width: '20%', title: '岗位' },
                    { field: 'jjbry', width: '25%', title: '值班人员' },
                    { field: 'jjbsj', width: '55%', title: '值班时间' },
                ],
            });
        },
        ZH0007: function (id, options) {
            var wgclhtml=wgcltpl('card/wgcl', {});
            $('#'+id).html(wgclhtml);
            var url = options.url;
            tableUtils.init('sgqk', {
                url: url.syzhwgcl,
                height: '175',
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
        ZH0008: function (id, options) {
            var jrdbsxhtml=jrdbsxtpl('card/jrdbsx', {});
            $('#'+id).html(jrdbsxhtml);
            var url = options.url;
            tableUtils.init('jrdbsx',{
                url: url.syzhjrdbsx,
                height: '175',
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
        ZH0009: function (id, options) {
            var jcqkhtml=jcqktpl('card/jcqk', {});
            $('#'+id).html(jcqkhtml);
            var url = options.url;
            tableUtils.init('jcqk',{
                url: url.syzhjcqk,
                height: '175',
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
        ZH0010: function (id, options) {
            var dwglhtml=dwgltpl('card/dwgl', {});
            $('#'+id).html(dwglhtml);
            var url = options.url;
            tableUtils.init('dwgl',{
                url: url.syzhdwgl,
                height: '175',
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
        jrgwqk:function(id,options){
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
                        $(".jjb").off('click').on('click', function () {
                            tableUtils.popup({
                                title: '&#xe61e; 本周出所',
                                url: url.xjzcJbxxList,
                                params: {"ywlx":"lscs"},
                                columns:[{ field: 'snbh', width: '150', title: '人员编号', align: 'center' },
                                    { field: 'xm', width: '150', title: '姓名', align: 'center' },
                                    { field: 'jsh', width: '150', title: '监室号', align: 'center' },
                                    { field: 'bahjString', width: '150', title: '办案环节', align: 'center' },
                                    { field: 'rsrq', width: '200', title: '入所日期', align: 'center' },
                                    { field: 'gyqx', width: '200', title: '关押期限', align: 'center' },
                                    { field: 'badw', width: '350', title: '办案单位', align: 'center' }],
                            })
                        })
                    }
                }
            });
        },
        bzxjjj:function(id,opitons){
            var url=options.url;
            var index=options.index;

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