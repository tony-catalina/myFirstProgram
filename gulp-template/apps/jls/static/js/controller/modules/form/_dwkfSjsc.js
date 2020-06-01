define(function(require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_dwkfSjsc.html');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var clumn = require('modules/clumn/dwkfRyxx');
	var grid = require('awd/easyui/grid');
	var common = require('common');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var comboxtree = require('awd/easyui/comboxtreegrid');
	var main = {
		init: function(url, data, callback) {
			var html = formtpl('form/_dwkfSjsc', data);
			if(!isOpen) {
				popwin = utils.showWin({
					title: '对外开放-上级审查',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						$.parser.parse('#fm');
						main.bindEvent(data);
					},
					yes: function () {
						main.submit(url, data, callback);
					}
				});
			}
		},
		bindEvent: function(row) {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$("#sjldqm").textbox().textbox('setValue',common.info.user.loginname);
			$("#sjldqmsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
			var htmlcontent = '<tr>' +
				'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm0 == undefined ? "" : row.ldpsxx.ryxx_xm0) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_xb0 == undefined ? "" : row.ldpsxx.ryxx_xb0) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_csrq0 == undefined ? "" : row.ldpsxx.ryxx_csrq0) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjlx0 == undefined ? "" : row.ldpsxx.ryxx_zjlx0) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjh0 == undefined ? "" : row.ldpsxx.ryxx_zjh0) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_lxdh0 == undefined ? "" : row.ldpsxx.ryxx_lxdh0) + '</td>' +
				'</tr >' +
				'<tr>' +
				'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm1 == undefined ? "" : row.ldpsxx.ryxx_xm1) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_xb1 == undefined ? "" : row.ldpsxx.ryxx_xb1) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_csrq1 == undefined ? "" : row.ldpsxx.ryxx_csrq1) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjlx1 == undefined ? "" : row.ldpsxx.ryxx_zjlx1) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjh1 == undefined ? "" : row.ldpsxx.ryxx_zjh1) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_lxdh1 == undefined ? "" : row.ldpsxx.ryxx_lxdh1) + '</td>' +
				'</tr >' +
				'<tr>' +
				'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm2 == undefined ? "" : row.ldpsxx.ryxx_xm2) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_xb2 == undefined ? "" : row.ldpsxx.ryxx_xb2) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_csrq2 == undefined ? "" : row.ldpsxx.ryxx_csrq2) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjlx2 == undefined ? "" : row.ldpsxx.ryxx_zjlx2) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_zjh2 == undefined ? "" : row.ldpsxx.ryxx_zjh2) + '</td>' +
				'<td>' + (row.ldpsxx.ryxx_lxdh2 == undefined ? "" : row.ldpsxx.ryxx_lxdh2) + '</td>' +
				'</tr >'
			$('#ptldxx').append(htmlcontent)
		},
		submit: function(url, data, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var postData = util.form2Json('fm');
				postData.rybh = data.ldpsxx.dwkf_uuid;
				postData.jsbh = data.ldpsxx.jsbh;
				postData.ywlcid = data.ywlcid;
				postData.taskid = data.taskid;
				postData.szyj = data.ldpsxx.dwkf_szyj;
				postData.tbr = common.info.user.loginname;
				var tbrq = new Date().Format('yyyy-MM-dd');
				postData.tbrq = tbrq;
				util.ajax({
					url: url,
					data: postData,
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
