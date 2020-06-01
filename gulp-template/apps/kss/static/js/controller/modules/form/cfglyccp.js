define(function(require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var urls = require('modules/url');
	var formtpl = require('services/form/_cfglyccp.html');
	var common = require('common');
	var popwin;
	var comboxtree = require('awd/easyui/comboxtree');
	var isOpen = false;
	var combogrid = require('awd/easyui/combogrid');
	var commFun = require('modules/commFun');
	var main = {

		init: function(url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_cfglyccp', dataall);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '延长呈批',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
							return p.then(function() {
								return commFun.processQueued(el.querySelectorAll(
										'.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox,.easyui-numberbox'),
									function(el) {
										$.parser.parse(el.parentElement);
									});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
									combox.initBySelect(el, urls.getDictionary);
								});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function(el) {
									combogrid.initPageClass(el, urls.getDictionaryPage);
								});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.jsh'), function(el) {
									comboxtree.initBySelect(el, urls.getJsCombotree);
								});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.awdTagbox'), function(el) {
									comboxtree.initTagBox(el, urls.getDictionary);
								});
							}).then(function() {
								var len = document.querySelectorAll('.timeline-item').length - 1;
								if (idx === len) {
									main.bindEvent(data);
								}
							});
						}, Promise.resolve());
					},
					yes: function() {
						main.submit(url, callback);
					}
				}, function() {
					isOpen = false;
				});
			}
		},
		bindEvent: function() {
			// $("#cfjsrq").change(function(){
			// 	console.log(111)
			// })
			$("#cfjsrq").datetimebox({
				onChange: function(newValue, oldValue) {

					//获取开始日期
					var jytime = $("#ycksrq").textbox().textbox('getValue');
					//获取延长日期
					var rstime = $("#cfjsrq").datetimebox('getValue');
					var start = new Date(jytime.replace("-", "/").replace("-", "/"));
					var end = new Date(rstime.replace("-", "/").replace("-", "/"));
					var totalMS = new Date(end).getTime() - new Date(start).getTime();
					console.log(totalMS)
					var day = Math.ceil(totalMS / 1000 / 24 / 60 / 60);
					console.log(day)
					if (end < start) {

						utils.alert('延长日期不能处罚结束时间！');
						$("#cfjsrq").datetimebox('clear');
						return;
					} else {

						$("#ycts").numberbox('setValue', day);
						return;
					}
				}
			});
			//console.log($("#yccpsj").datetimebox('getValue'))
			console.log($("#ycksrq").textbox().textbox('getValue'))
			$("#ycjbr").textbox().textbox('setValue', common.info.user.loginname);
			$("#yccpsj").datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
		},
		submit: function(url, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = util.form2Json('fm');
				util.ajax({
					url: url,
					data: data,
					func: function(data) {
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
	};
	return main;
});
