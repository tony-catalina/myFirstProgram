define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var formtpl = require('services/form/_zjjbJjbldqr.html');
	var popwin;
	var main = {

		init: function (url, data, row, callback) {

			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_zjjbJjbldqr', dataall);
			popwin = utils.showWin({
				title: '接班领导确认',
				area: ['90%', '600px'],
				content: html,
				maxmin: true,
				buttons: ['保存', '取消'],
				success: function () {
					$.parser.parse('#fm');
					main.bindEvent();
				},
				yes: function () {
					main.submit(url, row, callback);
				}
			});
		},
		bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#ldqmsj").datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = util.form2Json('fm');
				util.ajax({
					url: url,
					data: data,
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
				utils.alert('表单数据格式不对！');
			}


		}
	};
	return main;
});