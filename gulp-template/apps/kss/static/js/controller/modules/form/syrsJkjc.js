define(function (require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var urls = require('modules/url');
	var formtpl = require('services/form/_syrsJkjc.html');
	var common = require('common');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var main = {

		init: function (url, data, row, callback) {
			console.log(data);
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_syrsJkjc', dataall);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '健康检查',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								var len = document.querySelectorAll('.timeline-item').length - 1;
								if (idx === len) {
									main.bindEvent(data);
								}
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox, .easyui-numberbox'), function (el) {
									$.parser.parse(el.parentElement);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'), function (el) {
									combox.initBySelect(el, urls.getDictionary);
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
						main.submit(url, row, callback);
					}
				}, function () {
					isOpen = false;
				});
			}
		},
		bindEvent: function (data) {
			console.log(data.jkqkxx);
			$("#fb").textbox('setValue', '正常');
			$("#tbtsbz").textbox('setValue', '无');
			$("#jwbsfm").textbox('setValue', '无');
			$("#crb").textbox('setValue', '无');
			$("#jtbs").textbox('setValue', '无');
			$("#xcg").textbox('setValue', '正常');
			$("#xdt").textbox('setValue', '正常');
			$("#bc").textbox('setValue', '正常');
			$("#xp").textbox('setValue', '正常');
			$("#tbssqk").textbox('setValue', '无');
			$("#jcys").textbox().textbox('setValue', common.info.user.loginname);
		},
		submit: function (url, row, callback) {
			var sgNum = document.getElementById('sgfm').value;
			if (sgNum > 300 || sgNum < 30) { //大于30小于300
				$.messager.alert("提示", "身高应在30~300之间", "info");
				$("#sgfm").textbox('setValue', '');
				return false;
			}
			var tzNum = document.getElementById('tzfm').value;
			if (tzNum > 300 || tzNum < 30) {
				$.messager.alert("提示", "体重应在30~300之间", "info");
				$("#tzfm").textbox('setValue', '');
				return false;
			}
			var zcNum = document.getElementById('zcfm').value;
			if (zcNum > 100 || zcNum < 10) {
				$.messager.alert("提示", "足长应在10~100之间", "info");
				$("#zcfm").textbox('setValue', '');

				return false;
			}
			var twNum = document.getElementById('tw').value
			if (twNum > 45 || twNum < 30) {
				$.messager.alert("提示", "体温应在30~45之间", "info");
				$("#tw").textbox('setValue', '');
				return false;
			}



			var a = $("#xyfm").val();
			if (a == "") {
				$.messager.alert("提示", "血压不能为空", "info");
				return false;
			} else {
				var as = a.split("/");
				if (as.length != 2) {
					$.messager.alert("提示", "血压格式不正确", "info");
					$("#xyfm").textbox('setValue', '');
					return false;
				} else {
					var b = new RegExp("^[0-9]+$");;
					if (!b.test(as[0]) || !b.test(as[1])) {
						$.messager.alert("提示", "血压格式不正确", "info");
						$("#xyfm").textbox('setValue', '');
						return false;
					}
				}
			}
			var xlNum = document.getElementById('xl').value
			if (xlNum > 300 || xlNum < 30) {
				$.messager.alert("提示", "心率应在30~300之间", "info");
				return false;
			}
			/**先校验form */
			if ($('#fm').form('validate')) {
				var dataObj = $("#fm").serializeObject();
				//var formData = JSON.stringify(dataObj);
				var ysyj = $("#ysyj").combobox("getValue");
				var brbs = $("#jwbsfm").val();
				//获取照片文件
				var pic1 = $("#pic1fm")[0].files[0];
				var pic2 = $("#pic2fm")[0].files[0];
				var pic3 = $("#pic3fm")[0].files[0];
				var sendDate = new FormData();
				sendDate.append('pic1', pic1);
				sendDate.append('pic2', pic2);
				sendDate.append('pic3', pic3);
				//传入流程必要参数
				sendDate.append('taskid', row.taskid);
				sendDate.append('jkzkString', row.jkzkString);
				sendDate.append('ysyj', ysyj);
				sendDate.append('brbs', brbs);
				sendDate.append('formData', JSON.stringify(dataObj));
				util.ajax({
					url: url,
					data: sendDate,
					processData: false,
					contentType: false,
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