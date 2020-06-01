define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var grid = require('awd/easyui/grid');
	var clumn = require('modules/clumn/wpgl');
	var formtpl = require('services/form/_tqjcFwfh.html');
	var popwin;
	var powin;
	var common = require('common');
	var isOpen = false;//弹框默认不打开
	// 可退还物品数量
	var kthwpnum = 0;
	var main = {

		init: function (url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_tqjcFwfh', dataall);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '附物返还',
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
									main.wfwthflow(url, data);
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
			$("#qrsj").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
			$("#qrmj").textbox().textbox('setValue', common.info.user.loginname);
			grid.init('wjwp', {
				url: url.wpglList,
				fit: false,
				width: '100%',
				height: window.innerHeight - 300,
				firstLoad: false,
				columns: clumn({
					check: false,
					clumns: ['mc', 'sl', 'wplxString', 'wplyString', 'lqr', 'lqrq'],
					hidden: []
				})
			});
			grid.init('kthwp', {
				url: url.wpglList,
				fit: false,
				width: '100%',
				height: window.innerHeight - 300,
				firstLoad: false,
				singleSelect: false,
				columns: clumn({
					check: true,
					clumns: ['mc', 'sl', 'wplxString', 'wplyString', 'lqr', 'lqrq'],
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
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = $("#fm").serialize();
				var wps = $("#kthwp").datagrid('getChecked');
				var blr = $("#qrmj").val();
				var updatetime = $("#qrsj").datetimebox("getValue");
				if (wps.length > 0) {
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
								}
								utils.closeWin(popwin);
								$('#table').datagrid('reload')
							} else {
								utils.alert(data.msg);
							}
						}
					});
				} else {
					utils.alert('表单数据格式不对！');
				}
			}
		},
		// 无附物退还
		wfwthflow: function (url, rowDate, callback) {
			util.ajax({
				url: url,
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
