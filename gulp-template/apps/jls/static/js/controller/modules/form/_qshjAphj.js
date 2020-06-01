define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_qshjAphj.html');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var isOpen = false;
	var popwin;
	var comboxtree = require('awd/easyui/comboxtreegrid');
	var main = {
		init: function (url, data, callback) {
			var html = formtpl('form/_qshjAphj', data);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '亲属会见-安排会见',
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
		bindEvent: function () {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$.ajax({
				url: url.zztxhjhjsCombotree+'?fjlx=3',
				dataType: "json",
				success: function (data) {
					$("#hjs").combobox({ //往下拉框塞值
						data: data,
						valueField: 'id',
						textField: 'text',
						// panelHeight: "auto",
					})
				},
			});

			$('#hjs').combobox({
				onChange: function () {
					var code = $('#hjs').combobox('getValue')
					$.ajax({
						url: url.fjrymdlistByRs+'?fjlx=3&fjhm=' + code,
						type: 'get',
						dataType: "json",
						success: function (data) {
							if (data.message != null || data.message != '' || data.message != undefined) {
								utils.alert(data.message)
								$('#hjs').combobox().combobox('setValue', '').combobox('setText', '')
							}
						},
					});
				}
			})


		},
		submit: function (url, data, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var postData = util.form2Json('fm');
				postData.rybh = data.rybh;
				postData.taskid = data.taskid;
				postData.ywlcid = data.ywlcid;

				util.ajax({
					url: url,
					data: postData,
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
