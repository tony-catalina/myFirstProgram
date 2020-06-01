define(function(require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var combogrid = require('awd/easyui/combogrid');
	var urls = require('modules/url');
	var formtpl = require('services/form/_cljgJgdj.html');
	var popwin;
	var isOpen = false; //弹框默认不打开
	var main = {

		init: function(url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_cljgJgdj', dataall);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '处理结果',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
							return p.then(function() {
								return commFun.processQueued(el.querySelectorAll(
									'.easyui-textbox, .easyui-datebox, .easyui-numberbox'), function(el) {
									$.parser.parse(el.parentElement);
								});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
									combox.initBySelect(el, urls.getDictionary);
								});
							}).then(function() {
								return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function(el) {
									combogrid.initPageClass('.awdCombogrid', urls.getDictionaryPage);
								});
							}).then(function() {
								var len = document.querySelectorAll('.timeline-item').length - 1;
								if (idx === len) {
									main.bindEvent(data);
								}
							});
						}, Promise.resolve());
						main.ListeningChange();
					},
					yes: function() {
						main.submit(url, callback);
					},
					btn2: () => {
						isOpen = false;
					},
					cancel: function() {
						isOpen = false;
					}
				});
			}
		},
		bindEvent: function() {
			$('#hxyear').numberbox().next('span').find('input').blur(function() {
				var hxksrq = $("#hxksrq").datebox('getValue');
				var hxyear = $("#hxyear").numberbox('getValue');
				// var hxksrqtime = new Date(hxksrq.replace("-", "/").replace("-", "/"))
				// var datetime=1000*60*60*24; //一天时间的毫秒值
				// var day = Math.floor(hxksrq/datetime);//计算出两个日期天数差 
				// console.log(hxksrq)
				// console.log(day)
				console.log(222222222)
				var date = new Date(hxksrq)
				var year = parseInt(date.getFullYear());
				console.log(year, 456456)
				hxyear = parseInt(hxyear);
				console.log(hxyear)
				if (hxyear != 0) {
					console.log(123456789)
					year = year + hxyear;
				}
				console.log(year, 456456789789777777777777)
				//var newDate = new Date(year);
				var newDate = date.setFullYear(year)
				newDate = new Date(newDate);
				console.log(newDate)
				newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
				console.log(newDate, 1555555)
				$('#hxjsrq').datebox("setValue", newDate);
			})
			$('#hxmonth').numberbox().next('span').find('input').blur(function() {
				var hxksrq = $("#hxksrq").datebox('getValue');
				var hxmonth = $("#hxmonth").numberbox('getValue');
				var date = new Date(hxksrq)
				var month = parseInt(date.getMonth());
				hxmonth = parseInt(hxmonth);
				if (hxmonth != 0) {
					console.log(123456789)
					month = month + hxmonth;

				}
				var newDate = date.setMonth(month)
				newDate = new Date(newDate);
				newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
				console.log(newDate, 1555555)
				$('#hxjsrq').datebox("setValue", newDate);

			})
			$('#hxday').numberbox().next('span').find('input').blur(function() {
				// var hxksrq = $("#hxksrq").datebox('getValue');
				// var hxyear = $("#hxyear").numberbox('getValue');//年
				// var hxksrq = $("#hxksrq").datebox('getValue');
				// var hxmonth = $("#hxmonth").numberbox('getValue');//月
				var hxksrq = $("#hxksrq").datebox('getValue');
				var hxday = $("#hxday").numberbox('getValue'); //日
				var date = new Date(hxksrq)
				var day = parseInt(date.getDate());
				hxday = parseInt(hxday);
				if (hxday != 0) {
					console.log(123456789)
					day = day + hxday;
				}

				var newDate = date.setDate(day)
				newDate = new Date(newDate);
				newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
				console.log(newDate, 1555555)
				$('#hxjsrq').datebox("setValue", newDate);
			})
			console.log($("#hxyear").numberbox('getValue'), 111111111111)
			console.log(111111)

			$("#fjxfm").combobox({
				onChange: function(newValue, oldValue) {
					var fjxStr = newValue;
					if (fjxStr == 0) {
						$("#fjx").show();
						$("#bdzz1").hide();
						$("#bdzz2").hide();
					} else if (fjxStr == 1) {
						$("#fjx").hide();
						$("#bdzz1").show();
						$("#bdzz2").show();
						setTimeout(function() {
							$.parser.parse('#fm');
						}, 0);
					} else {
						$("#fjx").hide();
						$("#bdzz1").hide();
						$("#bdzz2").hide();
					}
				}
			});
			$("#fjjefm").textbox({
				onChange: function() {
					if (isNaN($(this).val())) {
						utils.alert('请输入数字');
						$("#fjjefm").textbox('setValue', '');
					}
				}
			})
		},
		submit: function(url, callback) {
			//拼接刑期，缓刑期限，剥夺政治时间字符串
			var xqyear = $("#year").val();
			var xqmonth = $("#month").val();
			var xqday = $("#day").val();
			if (xqyear == "" || xqyear == null) {
				xqyear = "0";
			}
			if (xqmonth == "" || xqmonth == null) {
				xqmonth = "0";
			}
			if (xqday == "" || xqday == null) {
				xqday = "0";
			}
			var xqdate = xqyear + "," + xqmonth + "," + xqday;
			var hxyear = $("#hxyear").val().toString();
			var hxmonth = $("#hxmonth").val().toString();
			var hxday = $("#hxday").val().toString();
			if (hxyear == "" || hxyear == null) {
				hxyear = "0";
			}
			if (hxmonth == "" || hxmonth == null) {
				hxmonth = "0";
			}
			if (hxday == "" || hxday == null) {
				hxday = "0";
			}
			var hxdate = hxyear + "," + hxmonth + "," + hxday;
			var bdzzyear = $("#bdzzyear").val().toString();
			var bdzzmonth = $("#bdzzmonth").val().toString();
			var bdzzday = $("#bdzzday").val().toString();
			if (bdzzyear == "" || bdzzyear == null) {
				bdzzyear = "0";
			}
			if (bdzzmonth == "" || bdzzmonth == null) {
				bdzzmonth = "0";
			}
			if (bdzzday == "" || bdzzday == null) {
				bdzzday = "0";
			}
			var bdzzdate = bdzzyear + "," + bdzzmonth + "," + bdzzday;
			/**先校验form */
			if ($('#fm').form('validate')) {
				//var data = util.form2Json('fm');
				var data = $("#fm").serialize();
				util.ajax({
					url: url,
					data: data + "&xq=" + xqdate + "&hxqx=" + hxdate + "&bdzzqlsj=" + bdzzdate,
					func: function(data) {
						if (data.success) {
							utils.alert(data.msg);
							if (tools.isFunction(callback)) {
								callback();
								utils.closeWin(popwin);
								isOpen = false;
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
		ListeningChange: () => {
			var getNowFormatDate = function() {
				var date = new Date(),
					seperator1 = "-",
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					strDate = date.getDate();
				if (month >= 1 && month <= 9) month = "0" + month
				if (strDate >= 0 && strDate <= 9) strDate = "0" + strDate
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			}
			var getDaysFormNowToDate = function(strDate) {
				var xmrqDate = Date.parse(strDate);
				var nowDate = Date.parse(getNowFormatDate());
				var ms = Math.abs(xmrqDate - nowDate);
				var days = Math.floor(ms / (24 * 3600 * 1000));
				return days;
			}
			$("#yxfm").textbox({
				onChange: function() {
					if ($(this).val() == "0" && $(this).val() == null) {
						utils.alert("请输入余刑剩余月份")
					} else if (90 <= $(this).val()) {
						utils.alert("余刑剩余天数大于90，不可办理留所服刑");
						$("#yxfm").textbox('setValue', '');
						$("#year").textbox("setValue", "");
						$("#month").textbox("setValue", "");
						$("#day").textbox("setValue", "");
						document.getElementById("zdbllsfx1fm").disabled = true;
					} else if (90 > $(this).val()) {
						document.getElementById("zdbllsfx1fm").disabled = false
					}
				}
			});
			//当起始时间切换更改时，在刑期部位空的时候，自动显示刑满日期
			$("#qsrqfm").datebox({
				onChange: function(newValue, oldValue) {
					if (parseInt($("#year").val())) var year = parseInt($("#year").val())
					else var year = 0;
					if (parseInt($("#month").val())) var month = parseInt($("#month").val()) + 1
					else var month = 1
					if (parseInt($("#day").val())) var day = parseInt($("#day").val())
					else var day = 0
					if (($("#year").val() != null && $("#year").val() != "") || ($("#month").val() != null && $("#month").val() !=
							"") || ($("#day").val() !== null && $("#day").val() !== "")) {
						var qsrq = $("#qsrqfm").datebox('getValue');
						var nextDate = new Date(qsrq);
						var strDate = nextDate.getFullYear() + year + "-";
						strDate += nextDate.getMonth() + month + "-";
						strDate += nextDate.getDate() + day;
						$("#xmrqfm").datebox('setValue', strDate);
					}
				},
			});
			$("#year").textbox({
				onChange: function(newValue, oldValue) {
					if (parseInt($("#year").val())) var year = parseInt($("#year").val())
					else var year = 0
					if (parseInt($("#month").val())) var month = parseInt($("#month").val()) + 1
					else var month = 1
					if (parseInt($("#day").val())) var day = parseInt($("#day").val())
					else var day = 0
					var qsrq = $("#qsrqfm").datebox('getValue'),
						nextDate = new Date(qsrq),
						strDate = nextDate.getFullYear() + year + "-";
					strDate += nextDate.getMonth() + month + "-";
					strDate += nextDate.getDate() + day;
					$("#xmrqfm").datebox('setValue', strDate);
					var days = getDaysFormNowToDate($("#xmrqfm").datebox("getValue"));
					$("#yxfm").textbox('setValue', days);
				}
			});
			$("#month").textbox({
				onChange: function(newValue, oldValue) {
					if (parseInt($("#year").val())) var year = parseInt($("#year").val())
					else var year = 0
					if (parseInt($("#month").val())) var month = parseInt($("#month").val()) + 1;
					else var month = 1
					if (parseInt($("#day").val())) var day = parseInt($("#day").val());
					else var day = 0
					var qsrq = $("#qsrqfm").datebox('getValue');
					var nextDate = new Date(qsrq);
					var strDate = nextDate.getFullYear() + year + "-";
					strDate += nextDate.getMonth() + month + "-";
					strDate += nextDate.getDate() + day;
					$("#xmrqfm").datebox('setValue', strDate);
					var days = getDaysFormNowToDate($("#xmrqfm").datebox("getValue"));
					$("#yxfm").textbox('setValue', days);
				}
			});
			$("#day").textbox({
				onChange: function(newValue, oldValue) {
					if (parseInt($("#year").val())) var year = parseInt($("#year").val())
					else var year = 0
					if (parseInt($("#month").val())) var month = parseInt($("#month").val()) + 1;
					else var month = 1
					if (parseInt($("#day").val())) var day = parseInt($("#day").val());
					else var day = 0;
					var qsrq = $("#qsrqfm").datebox('getValue');
					var nextDate = new Date(qsrq);
					var strDate = nextDate.getFullYear() + year + "-";
					strDate += nextDate.getMonth() + month + "-";
					strDate += nextDate.getDate() + day;
					$("#xmrqfm").datebox('setValue', strDate);
					var days = getDaysFormNowToDate($("#xmrqfm").datebox("getValue"));
					$("#yxfm").textbox('setValue', days);
				}
			});
			//当剥夺政治权利开始时间切换更改时，在剥夺政治权利时间不为空的时候，自动显示刑满日期
			$("#bdzzqlkssjfm").datebox({
				onChange: function(newValue, oldValue) {
					if (parseInt($("#bdzzyear").val())) var year = parseInt($("#bdzzyear").val());
					else var year = 0
					if (parseInt($("#bdzzmonth").val())) var month = parseInt($("#bdzzmonth").val()) + 1
					else var month = 1
					if (parseInt($("#bdzzday").val())) var day = parseInt($("#bdzzday").val())
					else var day = 0
					if (($("#bdzzyear").val() != null && $("#bdzzyear").val() != "") || ($("#bdzzmonth").val() != null && $(
							"#bdzzmonth").val() != "") || ($("#bdzzday").val() !== null && $("#bdzzday").val() !== "")) {
						var qsrq = $("#bdzzqlkssjfm").datebox('getValue');
						var nextDate = new Date(qsrq);
						var strDate = nextDate.getFullYear() + year + "-";
						strDate += nextDate.getMonth() + month + "-";
						strDate += nextDate.getDate() + day;
						$("#bdzzqljssjfm").datebox('setValue', strDate);
					}
				},
			});
			$("#bdzzyear").textbox({
				onChange: function(newValue, oldValue) {
					var qsrq = $("#bdzzqlkssjfm").datebox('getValue');
					if (qsrq != null && qsrq != "") {
						if (parseInt($("#bdzzyear").val())) var year = parseInt($("#bdzzyear").val())
						else var year = 0
						var nextDate = new Date(qsrq);
						var strDate = nextDate.getFullYear() + year + "-";
						strDate += nextDate.getMonth() + 1 + "-";
						strDate += nextDate.getDate();
						$("#bdzzqljssjfm").datebox('setValue', strDate);
					}
				}
			});
			$("#bdzzmonth").textbox({
				onChange: function(newValue, oldValue) {
					var qsrq = $("#bdzzqlkssjfm").datebox('getValue');
					if (qsrq != null && qsrq != "") {
						if (parseInt($("#bdzzyear").val())) var year = parseInt($("#bdzzyear").val())
						else var year = 0
						if (parseInt($("#bdzzmonth").val())) var month = parseInt($("#bdzzmonth").val()) + 1
						else var month = 1
						var nextDate = new Date(qsrq);
						var strDate = nextDate.getFullYear() + year + "-";
						strDate += nextDate.getMonth() + month + "-";
						strDate += nextDate.getDate();
						$("#bdzzqljssjfm").datebox('setValue', strDate);
					}
				}
			});
			$("#bdzzday").textbox({
				onChange: function(newValue, oldValue) {
					var qsrq = $("#bdzzqlkssjfm").datebox('getValue');
					if (qsrq != null && qsrq != "") {
						if (parseInt($("#bdzzyear").val())) var year = parseInt($("#bdzzyear").val());
						else var year = 0
						if (parseInt($("#bdzzmonth").val())) var month = parseInt($("#bdzzmonth").val()) + 1;
						else var month = 1
						if (parseInt($("#bdzzday").val())) var day = parseInt($("#bdzzday").val());
						else var day = 0
						var nextDate = new Date(qsrq);
						var strDate = nextDate.getFullYear() + year + "-";
						strDate += nextDate.getMonth() + month + "-";
						strDate += nextDate.getDate() + day;
						$("#bdzzqljssjfm").datebox('setValue', strDate);
					}
				}
			});
		}
	};
	return main;
});
