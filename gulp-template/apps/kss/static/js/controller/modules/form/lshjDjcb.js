define(function(require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_lshjDjcb.html');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var popwin;
	var combogrid = require('awd/easyui/combogrid');
	var comboxtree = require('awd/easyui/comboxtree');
	var urls = require('modules/url');
	// var common = require('common');
	var isOpen = false; //弹框默认不打开
	var IdentityCodeValid = function(code, msg) {
		var city = {
			11: "北京",
			12: "天津",
			13: "河北",
			14: "山西",
			15: "内蒙古",
			21: "辽宁",
			22: "吉林",
			23: "黑龙江 ",
			31: "上海",
			32: "江苏",
			33: "浙江",
			34: "安徽",
			35: "福建",
			36: "江西",
			37: "山东",
			41: "河南",
			42: "湖北 ",
			43: "湖南",
			44: "广东",
			45: "广西",
			46: "海南",
			50: "重庆",
			51: "四川",
			52: "贵州",
			53: "云南",
			54: "西藏 ",
			61: "陕西",
			62: "甘肃",
			63: "青海",
			64: "宁夏",
			65: "新疆",
			71: "台湾",
			81: "香港",
			82: "澳门",
			91: "国外 "
		};
		var pass = true;
		if (code.length != 18) {
			if (msg == null || msg == "" || msg == undefined) {
				utils.alert('身份证位数不合法');
			} else {
				utils.alert(msg + '身份证位数不合法');
			}
			pass = false;
		} else if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
			if (msg == null || msg == "" || msg == undefined) {
				utils.alert('身份证号格式错误');
			} else {
				utils.alert(msg + '身份证号格式错误');
			}
			pass = false;
		} else if (!city[code.substr(0, 2)]) {
			if (msg == null || msg == "" || msg == undefined) {
				utils.alert('地址编码错误');
			} else {
				utils.alert(msg + '地址编码错误');
			}
			pass = false;
		} else {
			//18位身份证需要验证最后一位校验位
			if (code.length == 18) {
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				//校验位
				var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++) {
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				var last = parity[sum % 11];
				if (parity[sum % 11] != code[17]) {
					if (msg == null || msg == "" || msg == undefined) {
						utils.alert('身份证校验位错误');
					} else {
						utils.alert(msg + '身份证校验位错误');
					}
					pass = false;
				}
			}
		}
		return pass;
	};
	var main = {
		init: function(url, data, callback) {
			var html = formtpl('form/_lshjDjcb', data);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '律师会见-会见登记',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						setTimeout(function() {
							$.parser.parse('#fm');
							main.bindEvent();
						}, 0);
					},
					yes: function() {
						main.submit(url, data, callback);
					}
				}, function() {
					isOpen = false;
				});
			}

		},
		bindEvent: function() {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			combogrid.initPageClass('.awdCombogrid', url.getDictionaryPage);
			$("#lsxb").combobox('setValue', '1').combobox('setText', '男性');
			$("#zjlx").combobox('setValue', '11').combobox('setValue', '身份证');
			$("#zlxb").combobox('setValue', '1').combobox('setText', '男性');
			$("#zlzjlx").combobox('setValue', '11').combobox('setValue', '身份证');
			$("#lsxb2").combobox('setValue', '1').combobox('setText', '男性');
			$("#zjlx2").combobox('setValue', '11').combobox('setValue', '身份证');
			$("#zlxb2").combobox('setValue', '1').combobox('setText', '男性');
			$("#zlzjlx2").combobox('setValue', '11').combobox('setValue', '身份证');
			$("#qtbhrxb").combobox('setValue', '1').combobox('setText', '男性');
			$("#qtbhrzjlx").combobox('setValue', '11').combobox('setValue', '身份证');

			comboxtree.initPageClass('awdCombotree', [
				[{
						field: 'ck',
						checkbox: $(this).attr('checkBox') == 'true'
					},
					{
						field: 'fieldName',
						title: 'xx',
						width: 80,
						hidden: true
					},
					{
						field: 'code',
						title: '代码',
						width: 300
					},
					{
						field: 'content',
						title: '内容',
						width: 300
					},
					{
						field: 'py',
						title: '拼音',
						width: 150
					}
				]
			]);
			$('#zjlxfm').combobox({
				onChange: function() {
					$("#zjhfm").textbox("setValue", "");
				}
			});
			$('#zjhfm').textbox({
				onChange: function(newValue, oldValue) {
					var isIdCard = $("#zjlxfm").textbox("getValue");
					if ('11' == isIdCard) {
						IdentityCodeValid(newValue, '');
					}

				},
			});

			$('#zjlxfm2').combobox({
				onChange: function() {
					$("#zjhfm2").textbox("setValue", "");
				}
			});
			$('#zjhfm2').textbox({
				onChange: function(newValue, oldValue) {
					var isIdCard = $("#zjlxfm2").textbox("getValue");
					if ('11' == isIdCard) {
						IdentityCodeValid(newValue, '');
					}

				},
			});

			$('#qtzjlxfm').combobox({
				onChange: function() {
					$("#qtzjhfm").textbox("setValue", "");
				}
			});
			$('#qtzjhfm').textbox({
				onChange: function(newValue, oldValue) {
					var isIdCard = $("#qtzjlxfm").textbox("getValue");
					if ('11' == isIdCard) {
						IdentityCodeValid(newValue, '');
					}

				},
			});

		},
		submit: function(url, data, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var postData = util.form2Json('fm');
				postData.rybh = data.rybh;
				postData.jsbh = data.jsbh;
				postData.ywlcid = data.ywlcid;
				postData.taskid = data.taskid;
				postData.processName = 'kss_lshj';
				postData.processNode = 'kss_lshj_djcb';
				postData.sqyy = '';
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
