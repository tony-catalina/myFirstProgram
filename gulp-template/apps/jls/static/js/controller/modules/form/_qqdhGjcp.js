define(function(require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_qqdhGjcp.html');
	var combox = require('awd/easyui/combox');
	//var url = require('modules/url');
	var combogrid = require('awd/easyui/combogrid');
	var comboxtree = require('awd/easyui/comboxtree');
	var urls = require('modules/url');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var main = {
		init: function(url, data, callback) {
			var html = formtpl('form/_qqdhGjcp', data);
			if(!isOpen) {
			popwin = utils.showWin({
				title: '亲情电话-管教呈批',
				area: ['90%', '600px'],
				content: html,
				maxmin: true,
				buttons: ['保存', '取消'],
				success: function() {
					isOpen = true;
					Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
						return p.then(function () {
							return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-datetimebox,.easyui-datebox'),function(el){
								$.parser.parse(el.parentElement);
							});
						}).then(function () {
							return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
								combox.initBySelect(el,urls.getDictionary);
							});
						}).then(function(){
							return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
								combogrid.initPageClass(el,urls.getDictionaryPage);
							});
						}).then(function(){
							return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
								comboxtree.initBySelect(el,urls.getJsCombotree);
							});
						}).then(function(){
							return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
								comboxtree.initTagBox(el,urls.getDictionary);
							});
						}).then(function () {
							var len = document.querySelectorAll('.timeline-item').length-1;
							if (idx === len) {
								main.bindEvent(data);
							}
						});
					}, Promise.resolve());
				},
				yes: function() {
					main.submit(url, data, callback);
				}
			},function(){
				isOpen = false;
			});
			}

		},
		bindEvent: function() {
			$("#gjmjqmsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
		},
		submit: function(url, data, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var tbr = $("#tbr").val();
				var tbrq = $("#tbrq").val();
				var rybh = $("#rybh").val();
				var jsbh = $("#jsbh").val();
				var txdz = $("#txdz").val();
				var txr1 = $("#txr1").val();
				var gx1 = $("#gx1").val();
				var dhhm1 = $("#dhhm1").val();
				var txr2 = $("#txr2").val();
				var gx2 = $("#gx2").val();
				var dhhm2 = $("#dhhm2").val();
				//第二条判断
				if (txr2 == "" && gx2 == "" && dhhm2 == "") {} else {
					if (txr2 != "" && gx2 != "" && dhhm2 != "") {} else {
						$.messager.alert("提示", '请将第二条填写完整');
						return;
					}
				}

				var txr3 = $("#txr3").val();
				var gx3 = $("#gx3").val();
				var dhhm3 = $("#dhhm3").val();
				//第三条判断
				if (txr3 == "" && gx3 == "" && dhhm3 == "") {} else {
					if (txr3 != "" && gx3 != "" && dhhm3 != "") {} else {
						$.messager.alert("提示", '请将第三条填写完整');
						return;
					}
				}
				var gjmjyj = $("#gjmjyj").val();
				var gjmj = $("#gjmj").val();
				var gjmjqmsj = $("#gjmjqmsj").val();

				var data1 = {
					tbr: tbr,
					tbrq: tbrq,
					rybh: rybh,
					jsbh: jsbh,
					txdz: txdz,
					txrxm1: txr1,
					gx1: gx1,
					dhhm1: dhhm1,
					txrxm2: txr2,
					gx2: gx2,
					dhhm2: dhhm2,
					txrxm3: txr3,
					gx3: gx3,
					dhhm3: dhhm3,
					gjmjyj: gjmjyj,
					gjmj: gjmj,
					gjmjqmsj: gjmjqmsj
				};
				var list = new Array();
				list.push(data1);

				var data = JSON.stringify(list);
				util.ajax({
					url: url,
					data: {jsonList:data},
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
