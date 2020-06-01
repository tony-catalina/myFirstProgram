define(function (require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_lshjDjcp.html');
	var combox = require('awd/easyui/combox');
	//var url = require('modules/url');
	var urls = require('modules/url');
	var isOpen = false;
	var combogrid = require('awd/easyui/combogrid');
	var comboxtree = require('awd/easyui/comboxtree');
	var popwin;
	var main = {
		init: function (url, data, callback) {
			var html = formtpl('form/_lshjDjcp', data);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '律师会见-登记呈批',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox,.easyui-numberbox, .easyui-combobox'), function (el) {
									$.parser.parse(el.parentElement);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'), function (el) {
									combox.initBySelect(el, urls.getDictionary);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function (el) {
									combogrid.initPageClass(el, urls.getDictionaryPage);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.jsh'), function (el) {
									comboxtree.initBySelect(el, urls.getJsCombotree);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdTagbox'), function (el) {
									comboxtree.initTagBox(el, urls.getDictionary);
								});
							}).then(function () {
								var len = document.querySelectorAll('.timeline-item').length - 1;
								if (idx === len) {
									main.bindEvent(data);
								}
							});
						}, Promise.resolve());
					},
					yes: function () {
						main.submit(url, data, callback);
					}
				}, function () {
					isOpen = false;
				});
			}
		},
		bindEvent: function () {

			$.ajax({
				url: urls.zztxhjhjsCombotree+'?fjlx=2',
				dataType: "json",
				success: function (data) {
					$("#hjdd").combobox({ //往下拉框塞值
						data: data,
						valueField: 'id',
						textField: 'text',
						// panelHeight: "auto",
					})
				},
			});

			$('#hjdd').combobox({
				onChange: function () {
					var code = $('#hjdd').combobox('getValue')
					$.ajax({
						url: url.fjrymdlistByRs+'&fjhm=' + code,
						type: 'get',
						dataType: "json",
						success: function (data) {
							if (data.message != null || data.message != '' || data.message != undefined) {
								utils.alert(data.message)
								$('#hjdd').combobox().combobox('setValue', '').combobox('setText', '')
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
				postData.ywlcid = data.ywlcid;
				postData.taskid = data.taskid;
				postData.zjlx = '11';
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
