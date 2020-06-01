define(function(require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var formtpl = require('services/form/_swPfwp.html');
	var grid = require('awd/easyui/grid');
	var common = require('common');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var main = {

		init: function(url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_swPfwp', dataall);
			if(!isOpen) {
				popwin = utils.showWin({
					title: '物品接收-派发物品',
					area: ['90%', '85%'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						$.parser.parse('#fm');
						main.bindEvent();
						main.Load(data);
					},
					yes: function () {
						main.submit(url, callback);
					}
				});
			}
		},
		bindEvent: function() {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$("#pfsj").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
			$("#pfr").textbox().textbox('setValue', common.info.user.loginname);
			grid.init('swpfwpTable', {
				url: url.wpglList,
				method: 'POST',
				fit: false,
				width: '100%',
				height: 200,
				firstLoad: false,
				singleSelect: false,
				columns: [{
						field: 'mcString',
						width: 80,
						title: '物品名称',
						align: 'center',
						halign: 'center',
						sortable: 'true',
						formatter: function(value, row, index) {
							return '<span title=' + (row.mcString == null ? "" : row.mcString) + '>' + (row.mcString == null ? "" :
								row.mcString) + '</span>'
						}
					},
					{
						field: 'wpdwString',
						title: '单位',
						width: 80,
						align: 'center',
						halign: 'center',
						sortable: 'true',
						formatter: function(value, row, index) {
							return '<span title=' + (row.wpdwString == null ? "" : row.wpdwString) + '>' + (row.wpdwString == null ?
								"" : row.wpdwString) + '</span>'
						}
					},
					{
						field: 'sl',
						title: '数量',
						width: 80,
						align: 'center',
						halign: 'center',
						sortable: 'true',
						formatter: function(value, row, index) {
							return '<span title=' + (row.sl == null ? "" : row.sl) + '>' + (row.sl == null ? "" : row.sl) +
								'</span>'
						}
					},
					{
						field: 'bz',
						title: '备注',
						width: 100,
						align: 'center',
						halign: 'center',
						sortable: 'true',
						formatter: function(value, row, index) {
							return '<span title=' + (row.bz == null ? "" : row.bz) + '>' + (row.bz == null ? "" : row.bz) +
								'</span>'
						}
					}
				]
			});
		},
		submit: function(url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = $("#fm").serialize();
				var wps = $("#swpfwpTable").datagrid('getChecked');
				util.ajax({
					url: url + "?" + data,
					data: {wpgls:JSON.stringify(wps)},
					func: function(data) {
						console.log(data.success,3333333)
						if (data.success) {
							console.log(11111111111)
							utils.alert(data.msg);
							utils.closeWin(popwin);
							grid.reload('table');
							if (tools.isFunction(callback)) {
								console.log(22222)
								callback();
								
							}
						} else {
							utils.alert(data.msg);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}
		},
		Load: function(row) {
			$("#swpfwpTable").datagrid("load", {
				"rybh": row.rybh,
				"uuid": row.ldpsxx.wpjs_uuid,
			});
		}
	};
	return main;
});
