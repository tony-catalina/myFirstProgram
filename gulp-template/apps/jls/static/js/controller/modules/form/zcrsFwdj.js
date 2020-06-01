define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsFwdj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var isOpen = false;//弹框默认不打开
    var common=require('common');
    var main = {
        init: function(url,data,callback) {
            var dataall = {};
            var currentTime = new Date().Format('yyyy-MM-dd hh:mm:ss');
            var addData = {tbrq: currentTime,tbr: common.info.user.loginname};
            Object.assign(dataall, data, addData);
            var html = formtpl('form/_zcrsFwdj',dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '正常入所-附物登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'),function(el){
									$.parser.parse(el.parentElement);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
									combox.initBySelect(el,urls.getDictionary);
								});
							}).then(function () {
								var len =  document.querySelectorAll('.timeline-item').length -1;
								if (idx === len) {
									main.bindEvent(data);
								}
							});
						}, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#wplx").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx1").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx2").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx3").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx4").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx5").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx6").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx7").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx8").textbox('setValue','0').textbox('setText','保管物品'); 
            $("#wplx9").textbox('setValue','0').textbox('setText','保管物品'); 
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var tbr = $("#tbr").val();
                var tbrq = $("#tbrq").val();
                var ywlcid = $("#ywlcid").val();
                var taskid = $("#taskid").val();
                var rybh = $("#rybh").val();
                var mc = $("#mc").val();
                var sl = $("#sl").val();
                var wpdw = $("#wpdw").val();
                var tz = $("#tz").val();
                var bz = $("#bz").val();
                var wplx = $("#wplx").val();
                var mc1 = $("#mc1").val();
                var sl1 = $("#sl1").val();
                var wpdw1 = $("#wpdw1").val();
                var tz1 = $("#tz1").val();
                var bz1 = $("#bz1").val();
                var wplx1 = $("#wplx1").val();
                var mc2 = $("#mc2").val();
                var sl2 = $("#sl2").val();
                var wpdw2 = $("#wpdw2").val();
                var tz2 = $("#tz2").val();
                var bz2 = $("#bz2").val();
                var wplx2 = $("#wplx2").val();
                var mc3 = $("#mc3").val();
                var sl3 = $("#sl3").val();
                var wpdw3 = $("#wpdw3").val();
                var tz3 = $("#tz3").val();
                var bz3 = $("#bz3").val();
                var wplx3 = $("#wplx3").val();
                var mc4 = $("#mc4").val();
                var sl4 = $("#sl4").val();
                var wpdw4 = $("#wpdw4").val();
                var tz4 = $("#tz4").val();
                var bz4 = $("#bz4").val();
                var wplx4 = $("#wplx4").val();
                var mc5 = $("#mc5").val();
                var sl5 = $("#sl5").val();
                var wpdw5 = $("#wpdw5").val();
                var tz5 = $("#tz5").val();
                var bz5 = $("#bz5").val();
                var wplx5 = $("#wplx5").val();
                var mc6 = $("#mc6").val();
                var sl6 = $("#sl6").val();
                var wpdw6 = $("#wpdw6").val();
                var tz6 = $("#tz6").val();
                var bz6 = $("#bz6").val();
                var wplx6 = $("#wplx6").val();
                var mc7 = $("#mc7").val();
                var sl7 = $("#sl7").val();
                var wpdw7 = $("#wpdw7").val();
                var tz7 = $("#tz7").val();
                var bz7 = $("#bz7").val();
                var wplx7 = $("#wplx7").val();
                var mc8 = $("#mc8").val();
                var sl8 = $("#sl8").val();
                var wpdw8 = $("#wpdw8").val();
                var tz8 = $("#tz8").val();
                var bz8 = $("#bz8").val();
                var wplx8 = $("#wplx8").val();
                var mc9 = $("#mc9").val();
                var sl9 = $("#sl9").val();
                var wpdw9 = $("#wpdw9").val();
                var tz9 = $("#tz9").val();
                var bz9 = $("#bz9").val();
                var wplx9 = $("#wplx9").val();
                var jbr = $("#djr").val();
                var jbsj = $("#jbsj").val();
                
                var data0 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc,
                	sl: sl,
                	wpdw: wpdw,
                	tz: tz,
                	bz: bz,
                	wplx: wplx,
                	djr: jbr,
                	djrq: jbsj
                };
                var data1 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc1,
                	sl: sl1,
                	wpdw: wpdw1,
                	tz: tz1,
                	bz: bz1,
                	wplx: wplx1,
                	djr: jbr,
                	djrq: jbsj
                };
                var data2 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc2,
                	sl: sl2,
                	wpdw: wpdw2,
                	tz: tz2,
                	bz: bz2,
                	wplx: wplx2,
                	djr: jbr,
                	djrq: jbsj
                };
                var data3 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc3,
                	sl: sl3,
                	wpdw: wpdw3,
                	tz: tz3,
                	bz: bz3,
                	wplx: wplx3,
                	djr: jbr,
                	djrq: jbsj
                };
                var data4 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc4,
                	sl: sl4,
                	wpdw: wpdw4,
                	tz: tz4,
                	bz: bz4,
                	wplx: wplx4,
                	djr: jbr,
                	djrq: jbsj
                };
                var data5 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc5,
                	sl: sl5,
                	wpdw: wpdw5,
                	tz: tz5,
                	bz: bz5,
                	wplx: wplx5,
                	djr: jbr,
                	djrq: jbsj
                };
                var data6 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc6,
                	sl: sl6,
                	wpdw: wpdw6,
                	tz: tz6,
                	bz: bz6,
                	wplx: wplx6,
                	djr: jbr,
                	djrq: jbsj
                };
                var data7 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc7,
                	sl: sl7,
                	wpdw: wpdw7,
                	tz: tz7,
                	bz: bz7,
                	wplx: wplx7,
                	djr: jbr,
                	djrq: jbsj
                };
                var data8 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc8,
                	sl: sl8,
                	wpdw: wpdw8,
                	tz: tz8,
                	bz: bz8,
                	wplx: wplx8,
                	djr: jbr,
                	djrq: jbsj
                };
                var data9 = {
                	tbr: tbr,
                	tbrq: tbrq,
                	rybh: rybh,
                	ywlcid: ywlcid,
                	taskid: taskid,
                	mc: mc9,
                	sl: sl9,
                	wpdw: wpdw9,
                	tz: tz9,
                	bz: bz9,
                	wplx: wplx9,
                	djr: jbr,
                	djrq: jbsj
                };
                var list = new Array();
                list.push(data0);
                list.push(data1);
                list.push(data2);
                list.push(data3);
                list.push(data4);
                list.push(data5);
                list.push(data6);
                list.push(data7);
                list.push(data8);
                list.push(data9);
                
                var data=JSON.stringify(list);
                util.ajax({
                    url: url,
                    data: {jsonList:data,
                	taskid:taskid,
                	ywlcid:ywlcid},
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                            }
                        } else {
                            utils.alert(data.msg);
                        }
                    }
                });
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});