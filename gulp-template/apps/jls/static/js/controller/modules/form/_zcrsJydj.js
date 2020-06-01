define(function (require) {
	var commFun = require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var combogrid = require('awd/easyui/combogrid');
	var urls = require('modules/url');
	var formtpl = require('services/form/_zcrsJydj.html');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var main = {

		init: function (url, data, row, callback) {

			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_zcrsJydj', dataall);
			if(!isOpen) {
				popwin = utils.showWin({
					title: '简要登记',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox'),function(el){
									$.parser.parse(el.parentElement);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
									combox.initBySelect(el,urls.getDictionary);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
									combogrid.initPageClass(el,urls.getDictionaryPage);
								});
							}).then(function () {
								var len =  document.querySelectorAll('.timeline-item').length -1;
								if (idx === len) {
									main.bindEvent(data);
								}
							});
						}, Promise.resolve());
					},
					yes: function () {
						main.submit(url, row, callback);
					}
				},function(){
					isOpen = false;
				});
			}
		},
		bindEvent: function (data) {
			//combox.initBySelect('#fm .awdCombox', url.getDictionary);
			//combogrid.initPageClass('#fm .awdCombogrid', url.getDictionaryPage);
			//combogrid.initPageClass('#fm .awdCombogrid', url.getDictionaryPage);
			// $('#fm .awdCombox').each(function () {
			// 	var $this = $(this);
			// 	var value = $this.attr('comboname').trim();
			// 	console.log(data[value + 'String'])
			// 	console.log(data[value])
			// 	if (data[value + 'String']) {
			// 		$this.combobox().combobox('setValue', data[value]);
			// 		$this.combobox().combobox('setText', data[value + 'String']);
			// 	}

			// })
			$('#xb').combobox().combobox('setValue', data.xb).combobox('setText', data.xbString);
			$('#hjd').combogrid().combogrid('setValue', data.hjd).combogrid('setText', data.hjdString);
			$('#ay').combobox().combobox('setValue', data.ay).combobox('setText', data.ayString);
			$('#sypz').combobox().combobox('setValue', data.sypz).combobox('setText', data.sypzString);
			$("#gj").combobox().combobox('setValue', '156').combobox('setText', '中国');
			$("#mz").combobox().combobox('setValue', '01').combobox('setText', '汉');
			$("#zjlx").combobox().combobox('setValue', '11').combobox('setText', '身份证');

			$('#hjd').combogrid({
				onChange: function () {
					var hjdtext = $(this).combogrid("getText")
					$('#hjdxz').textbox('setValue', hjdtext)
				}
			})
			$('#xzd').combogrid({
				onChange: function (data) {
					var xzdtext = $(this).combogrid("getText")
					$('#xzdxz').textbox('setValue', xzdtext)
				}
			})
			$('#jlqx').textbox({
				onChange: function () {
					var jlqx = $('#jlqx').textbox('getValue')
					if (jlqx == 0) {
						utils.alert("拘留期限只能输入大于0的数字!")
						$("#jlqx").textbox('setValue', '')
					}
				}
			})
			$('#zjh').textbox({
				onChange: function () {

					var code = $('#zjh').textbox('getValue')
					if (code.length == 18) {
						//根据身份证获取性别
						var xb = code.substring(16, 17);
						if (xb == 1 || xb == 3 || xb == 5 || xb == 7 || xb == 9) {
							$("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
						} else if (xb == "0" || xb == "2" || xb == "4" || xb == "6" || xb == "8" || xb == "X") {
							$("#xb").combobox().combobox("setValue", "2").combobox("setText", "女性");
						}
						//根据身份证获取出生日期
						var csrq = code.substring(6, 14);
						var csrq1 = csrq.substring(0, 4);
						var csrq2 = csrq.substring(4, 6);
						var csrq3 = csrq.substring(6, 8);
						csrq = csrq1 + "-" + csrq2 + "-" + csrq3
						$("#csrq").datebox("setValue", csrq);
						// //根据身份证获取默认籍贯、户籍地、现住地
						var hjd = code.substring(0, 6);
						$.ajax({
							type: "POST",  //提交方式
							url: urls.getDictionaryContent,
							data: { "code": hjd, "fieldname": "XZQH" },
							success: function (result) {
								$('#jg').combobox('setValue', { code: hjd, content: result.result });
								$("#hjd").combogrid('setValue', { code: hjd, content: result.result });
								$("#xzd").combogrid('setValue', { code: hjd, content: result.result });
								$('#hjdxz').textbox('setValue', result.result)
								$('#xzdxz').textbox('setValue', result.result)
							}
						});


					}

				}
			});

			$("#jlrqjsfm").datebox("textbox").focus(function () {
				var ts = $("#jlqx").val();
				var sj = $("#jlrqfm").val();
				var ksDate = new Date(sj);
				thisDate = new Date((ksDate / 1000 + (86400 * ts)) * 1000);
				var datetime = thisDate.getFullYear()
					+ "-"// "年"
					+ ((thisDate.getMonth() + 1) >= 10 ? (thisDate.getMonth() + 1) : "0"
						+ (thisDate.getMonth() + 1))
					+ "-"// "月"
					+ (thisDate.getDate() < 10 ? "0" + thisDate.getDate() : thisDate
						.getDate());
				$("#jlrqjsfm").datebox("setValue", datetime);
			});
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				console.log($('#xb').combobox('getValue'));
				var data = util.form2Json('fm');
				util.ajax({
					url: url,
					data: data,
					func: function (data) {
						if (data.success) {
							utils.alert(data.result.message);
							utils.closeWin(popwin);
							$('#table').datagrid('reload')
						} else {
							utils.alert(data.result.message);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}


		},
	};
	return main;
});