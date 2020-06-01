define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var formtpl = require('services/form/_qmcsFwfh.html');
	var jbxxgrid = require('modules/jbxxgrid');
	var clumn = require('modules/clumn/wpgl');
	var grid = require('awd/easyui/grid');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var common = require('common');
	var main = {

		init: function (url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_qmcsFwfh', dataall);
			if(!isOpen) {
				popwin = utils.showWin({
					title: '修改标题',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						$.parser.parse('#fm');
						main.bindEvent();
						main.Load(data);
					},
					yes: function () {
						main.submit(url, data, callback);
					}
				},function(){
					isOpen = false;
				});
			}
		},
		bindEvent: function () {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$("#lwrq").datetimebox("setValue", (new Date()).Format("YYYY-MM-dd hh:mm:ss"));
			$("#twrqfm").datetimebox("setValue", (new Date()).Format("YYYY-MM-dd hh:mm:ss"));
			$("#twjbrfm").textbox().textbox('setValue', common.info.user.loginname);
			grid.init('kthwp', {
				url: url.wpglList,
				fit: false,
				width: '70%',
				height: window.innerHeight - 200,
				firstLoad: false,
				singleSelect: false,
				columns: clumn({
					check: true,
					clumns: ['mc', 'sl', 'wplx', 'wplyString', 'lqr', 'lqrq'],
					hidden: []
				})
			});
			grid.init('ythwp', {
				url: url.wpglList,
				fit: false,
				width: '70%',
				height: window.innerHeight - 200,
				firstLoad: false,
				columns: clumn({
					check: false,
					clumns: ['mc', 'sl', 'wplx', 'wplyString', 'lqr', 'lqrq'],
					hidden: []
				})
			});
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var $form = $(".awdform");
				//var data = util.form2Json('fm');
				var data = $form.serialize();
				var wps = $("#kthwp").datagrid('getChecked');
				var lqr = $("#lwrfm").val();
				var lqrq = $("#lwrq").datetimebox("getValue");
				var blr = $("#twjbrfm").val();
				var updatetime = $("#twrqfm").datetimebox("getValue");
				var index = $("#kthwp").datagrid("getRows");
				if (index.length == 0) {
					powin = utils.showWin({
						title: '提示',
						area: ['26%', '150px'],
						content: '<center><div style="font-size:15pt;margin-top:5%;">该人员无附物可以退还！</div></center>',
						maxmin: true,
						buttons: ['确定','取消'],
						yes: function() {
							utils.closeWin(powin);
							var wp = [];
							data["wps"] = JSON.stringify(wp);
							util.ajax({
								url: url,
								data: {
									"wps":JSON.stringify(wp),
									"taskid": row.taskid,
									"rybh": row.rybh,
									"xm": row.xm,
									"jsh": row.jsh,
									"snbh": row.snbh
								},
								func: function (data) {
									if (data.success) {
										utils.alert(data.msg);
										if (tools.isFunction(callback)) {
											callback();
										}
										utils.closeWin(popwin);
										$('#table').datagrid('reload')
									} else {
										utils.alert(data.msg);
									}
								}
							});
						}
					})
				}
				if (index.length > 0) {
					if (index.length == wps.length) {
						var wp = [];
						for (var i = 0; i < wps.length; i++) {
							wp.push(wps[i]);
						}
						data["wps"] = JSON.stringify(wp);
						util.ajax({
							url: url,
							data: {
								"wps": JSON.stringify(wp),
								"num": wps.length,
								"lqr": lqr,
								"lqrq": lqrq,
								"blr": blr,
								"updatetime": updatetime,
								"taskid": row.taskid,
								"rybh": row.rybh,
								"xm": row.xm,
								"jsh": row.jsh,
								"snbh": row.snbh
							},
							func: function (data) {
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
					}
					else {
						utils.alert('请选择可退还的物品!');
					}
				}
				// else {
				// 	utils.alert('请选择可退还的物品!');
				// }
			} else {
				utils.alert('表单数据格式不对！');
			}
		},
		Load: function (row) {
			$("#kthwp").datagrid("load", {
				"rybh": row.rybh,
				"lqzt": "0",
				"rybhType": "等于",
				"lqztType": "等于"
			});
			$("#ythwp").datagrid("load", {
				"rybh": row.rybh,
				"lqzt": "0",
				"rybhType": "等于",
				"lqztType": "不等于"
			});
		}
	};
	return main;
});
