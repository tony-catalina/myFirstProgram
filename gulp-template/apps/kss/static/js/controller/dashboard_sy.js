/**
 * 首页 页面入口
 */
define(function(require) {
    //公共控件、组件、工具导入
    const $ = require('jquery');
    require('easyui');
    require('layui');
    const UserConfig = require('modules/Main_UserConfig');
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
    var MainTempl = require('services/com/Sy_Main.html');
    var progressBar = require('modules/progressBar');
    var Box_Height = 250; //获取盒容器的高以供Echarts使用。
    var paramsName = '';
	var powin;
    var ForData = [];
    //界面控件
    var main = {
        init: function() {
            $('.icon_box').on('click', function() {
                var role = $(this).attr('role');
                window.parent.loadMenu(role);
            })
            main.initData();
            main.Component();
            main.initdbsxData();
        },
        initData:()=>{
            $.ajax({url:url.customizeQuery,type:'POST',async:false,data:{},
                    beforeSend:()=>util.loadProgress($,true),
                    success:res=>{
                        const ResRow = res.result.rows
                        if (ForData.length > 0 ) ForData.length = 0;
                        ResRow.forEach(item=>{
                            ForData.push({"id":item.location,"value":item.module})
                        })
                        
                    },
                    complete:()=>{util.clearProgress($)}
            })
        },
        initdbsxData:()=>{
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
        initControll:(data,location_id)=>{
            $('.DeletePage').off('click').on('click',function(){
                const id = $(this).parent().parent().attr('id');
                $.ajax({url:url.deleteModule,type:"POST",data:{"location":id},
                        beforeSend:()=>layer.load(0,{shade: [0.7, '#fff']}),
                        success:res=>{
                            $("#"+id).empty();
                            let Html = MainTempl('com/Sy_Main',{"value":""});
                            $("#"+id).prepend(Html);
                            main.initData();
                            main.initControll();
                            layer.alert('删除成功！')
                        },
                        error:err=>layer.alert('删除失败，请稍后再试!'),
                        complete:()=>layer.closeAll('loading')
            })
            })
            $('.Query_Add').off('click').on('click',function(){
                const id = $(this).parent().parent().attr('id');
                main.Component_Function(id,ForData);
            })
        },
        Component:()=>{
            ForData.forEach(item=>{
                if(item.value != "SY0001"){
                    let Html = MainTempl('com/Sy_Main',{"value":item.value});
                    $("#"+item.id).prepend(Html);
                    main.ComponentSwitch(item.value);
                }else main.JjbProgram(item.id);
            })
            for(let i = 1 ; i <= 6 ; i++){
                if($('#'+i).html() == ""){
                    $("#"+i).empty();
                    let Html = MainTempl('com/Sy_Main',{"value":""});
                    $("#"+i).prepend(Html);
                }}
            main.initControll(ForData);
        },
        ComponentSwitch:(unico,id)=>{
            switch(unico){
                case "SY0006":main.BzcrsChart();break;
                case "SY0005":main.BahjChart();break;
                case "SY0002":main.JrcrsProgram();break;
                case "SY0003":main.jrhjProgram();break;
                case "SY0007":main.TxtjChart();break;
                case "SY0001":main.JjbProgram(id);break;
            }
        },
        Component_Function:async(id,resData)=>{
            try{
                let IdCard = "";
                await UserConfig.PageChooes(id,url.allModules)
                .then(async(res)=>{IdCard = await UserConfig.PageChoose_Function(id,res,resData,url.customizeSave)})
                .then(async()=>{main.ComponentSwitch(IdCard,id),main.initControll(resData,id)})
                .catch(err=>console.log(err))
            }catch(err){
                console.log(err);
            }
        },
        JjbProgram:id=>{
            let peopleInfo = [{icon: 'chuangkoufuwu',title: '交接班人员',info: ''}, 
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
							$.ajax({
								url:url.syGwjjb,
								type:'POST',
								data:{jbgw:"sygw",id:res.id},
								success:function(data){
									powin = utils.showWin({
										title: '工作记录',
										area: ['20%', '100px'],
										content: '<div style="font-size:15pt;margin-top:4%;border:1px solid #ccc;height:90%;">'+data.gzjl+'</div>',
										maxmin: true,
										buttons: ['关闭'],
										yes: function () {
											utils.closeWin(powin);
										}
									})
								}
							});
                        })
                        main.initControll();
                    }
            })                  
        },
        JrcrsProgram:()=>{   //今日出入所Program;
            let jrcsDatas = [{name:'已办出所',percentage:'',number:0,color:'skill_color',filter:"jrcs",paramsValue:'ybcs'},
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
        jrhjProgram:()=>{
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
            })
        },
        BahjChart:()=>{  //办案环节统计Echarts;
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
          })
        },
        BzcrsChart:()=>{   //本周出入所Echarts
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
        TxtjChart:()=>{   //提解提讯Echarts
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
                        seriesColors: ['#3476fe', '#34d1fe', '#82188b', '#e15505']}, 
                        {name: '访问来源',radius: ['45%', '70%']});

                    txCharts.setOption(txOptions);
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
        }
    };
    /**
     *运行入口
     */
    $(main.init);

});
