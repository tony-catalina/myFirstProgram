define(function(require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_txJxcx.html');
	var combox = require('awd/easyui/combox');
	var combogrid = require('awd/easyui/combogrid');
	var url = require('modules/url');
	var formTable = require('modules/Form_Table');
	var comboxtree = require('awd/easyui/comboxtree');
	var urls = require('modules/url');
	var common = require('common');
	var isOpen = false; //弹框默认不打开
	var popwin;
	var main = {
		init: function(url, data, callback) {
			var html = formtpl('form/_txJxcx', {});
			if (!isOpen) {
				popwin = utils.showWin({
					title: '提讯登记',
					area: ['90%', '85%'],
					content: html,
					maxmin: true,
					success: function() {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
							return p.then(function() {
								return commFun.processQueued(el.querySelectorAll(
									'.easyui-textbox,.awdCombogrid, .easyui-datetimebox,.easyui-datebox'), function(el) {
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
				}, function() {
					isOpen = false;
				});
			}

		},
		bindEvent: function(data) {
			$("#txrq").datebox('setValue', (new Date()).Format('yyyy-MM-dd'))
			formTable.init("Table_ryxx", data, [
				['监室号', '姓名', '入所日期', '办案环节', '涉嫌罪名', '档案编号'],
				['jsh', 'xm', 'rsrq', 'bahjString', 'ayString', 'dah']
			]);
		},
		submit: function(url, data, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var arr = [];
					var arrJson = {
						xm: data.xm,
						xb: data.xb,
						bm: data.bm,
						rybh: data.rybh,
						snbh: data.snbh,
						jsh: data.jsh,
						jsbh: data.jsbh,
						ywlcid: data.ywlcid,
						taskid: data.taskid,
					};
					arr.push(arrJson); //将人员基本信息的json对象放入数组
				var arrStr = JSON.stringify(arr); //人员基本信息生成json字符串
				var badwname = $("#txdwfm").textbox('getText');
				var _data = util.form2Json('fm');
				_data.dw = badwname;
				var dataStr = JSON.stringify(_data); //填写的业务信息生成json字符串
				util.ajax({
					url: url,
					data: {
						data_Jbxx: arrStr,
						data_ywxx: dataStr
					},
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
