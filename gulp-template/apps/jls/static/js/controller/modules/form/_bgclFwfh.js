define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var grid = require('awd/easyui/grid');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var clumn = require('modules/clumn/wpgl');
	var formtpl = require('services/form/_bgclFwfh.html');
	var common = require('common');
	var isOpen = false; //弹框默认不打开
	var popwin;
	var powin;
	// 可退还物品数量
	var kthwpnum = 0;
	var main = {

		init: function (url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_bgclFwfh', dataall);
			if (!isOpen) {
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
						if (kthwpnum > 0) {
							main.submit(url, data, callback);
						} else {
							powin = utils.showWin({
								title: '提示',
								area: ['26%', '150px'],
								content: '<center><div style="font-size:15pt;margin-top:5%;">该人员无附物可以退还！</div></center>',
								maxmin: true,
								buttons: ['确定'],
								yes: function () {
									utils.closeWin(powin);
									main.wfwthflow(data);
								}
							})
						}
					}
				}, function () {
					isOpen = false;
				});
			}
		},
		bindEvent: function () {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$("#lwrq").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
			$("#twrq").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
			$("#twjbr").textbox().textbox('setValue', common.info.user.loginname)
			grid.init('kthwp', {
				url: url.wpglList,
				fit: false,
				width: '70%',
				height: window.innerHeight - 300,
				firstLoad: false,
				singleSelect: false,
				columns: clumn({
					check: true,
					clumns: ['mc', 'sl', 'wplx', 'wply', 'lqr', 'lqrq'],
					hidden: []
				}),
				onLoadSuccess: function (data) {
					$('#kthwp').datagrid('selectAll');
					var rows = $('#kthwp').datagrid('getSelections')
					for (let i = 0; i < rows.length; i++) {
						$('#kthwp').parent().find('input[name="selectCheckBox"]')[i].checked = true;
					}
					if (data.total > 0) {
						kthwpnum = data.total;
					}
				}
			});
			grid.init('wjwp', {
				url: url.wpglList,
				fit: false,
				width: '70%',
				height: window.innerHeight - 300,
				firstLoad: false,
				columns: clumn({
					check: false,
					clumns: ['mc', 'sl', 'wplx', 'wply', 'lqr', 'lqrq'],
					hidden: []
				})
			});
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = $("#fm").serialize();
				var wps = $("#kthwp").datagrid('getChecked');
				var rows = $("#kthwp").datagrid('getData');
				var lqr = $("#lwrfm").val();
				var lqrq = $("#lwrq").datetimebox("getValue");
				var blr = $("#twjbr").val();
				var updatetime = $("#twrq").datetimebox("getValue");
				if (rows["rows"].length > 0 && wps.length > 0) {
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
				} else {
					utils.alert('可退还物品不为空！');
				}
			}
		},
		// 无附物退还
		wfwthflow: function (rowDate) {
			util.ajax({
				url: url.bgcladdFlowWfwth,
				data: {
					"taskid": rowDate.taskid,
					"rybh": rowDate.rybh,
					"xm": rowDate.xm,
					"jsh": rowDate.jsh,
					"snbh": rowDate.snbh
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
		},
		Load: function (row) {
			$("#kthwp").datagrid("load", {
				"rybh": row.rybh,
				"lqzt": "0",
				"rybhType": "等于",
				"lqztType": "等于"
			});
			$("#wjwp").datagrid("load", {
				"rybh": row.rybh,
				"lqzt": "0",
				"rybhType": "等于",
				"lqztType": "不等于"
			});
		}
	};
	return main;
});
