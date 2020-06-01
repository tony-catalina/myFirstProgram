define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_zcrsRsdj.html');
	var combox = require('awd/easyui/combox');
	var combogrid = require('awd/easyui/combogrid');
	var comboxtree = require('awd/easyui/comboxtree');
	var urls = require('modules/url');
	var addDeleteEvent = require('modules/addDeleteColumn');
	var popwin;
	//var comboxtree = require('awd/easyui/comboxtreegrid');
	var isOpen = false;//弹框默认不打开
	var main = {
		init: function (url, data, callback) {
			var html = formtpl('form/_zcrsRsdj', data);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '正常入所-入所登记',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						$.parser.parse('#fm');
						combox.initBySelect('#fm .awdCombox', urls.getDictionary);
						comboxtree.initBySelect('#fm .jsh', urls.jsBySexComboxTree);
						main.bindEvent(data);
					},
					yes: function () {
						main.submit(url, data, callback);
					}
				}, function () {
					isOpen = false;
				});
			}
		},
		bindEvent: function (data) {
			// combox.initBySelect('#fm .awdCombox', url.getDictionary);

			$('#fm .awdCombox').each(function () {
				var $this = $(this);
				var value = $this[0].getAttribute('comboname');
				if (data[value + 'String']) {
					$this.combobox().combobox('setValue', data[value]);
					$this.combobox().combobox('setText', data[value + 'String']);
				}
			})

			$("#xb").combobox('setValue', data.xb);
			$("#xb").combobox('setText', data.xbString);
			$("#xzd").combobox('setValue', data.xzd);
			$("#xzd").combobox('setText', data.xzdString);
			// $("#sf").combobox('setValue',data.sf);
			// $("#sf").combobox('setText',data.sfString);

			// $("#zzmm").combobox('setValue',data.zzmm);
			// $("#zzmm").combobox('setText',data.zzmmString);

			// $("#zy").combobox('setValue',data.zy);
			// $("#zy").combobox('setText',data.zyString);

			// $("#zjlx").combobox('setValue',data.zjlx);
			// $("#zjlx").combobox('setText',data.zjlxString);

			// $("#gj").combobox('setValue',data.gj);
			// $("#gj").combobox('setText',data.gjString);

			// $("#hjd").combobox('setValue',data.hjd);
			// $("#hjd").combobox('setText',data.hjdString);

			if (data.mz == null || data.mz == undefined) {
				$("#mz").textbox('setValue', '汉');
			}
			if (data.gj == null || data.gj == undefined || data.gj == '') {
				$("#gjfm").combobox('setValue', '156');
				$("#gjfm").combobox('setText', '中国');
			}

			if (data.zjlx == null || data.zjlx == undefined || data.zjlx == '') {
				$("#zjlx").combobox().combobox('setValue', '11').combobox('setText', '身份证');
			}
			$('#hjd').combobox({
				onChange: function () {
					var hjdtext = $(this).combobox("getText");
					$('#hjdxz').textbox('setValue', hjdtext);
				}
			});

			$('#xzd').combobox({
				onChange: function (data) {
					var xzdtext = $(this).combobox("getText");
					$('#xzdxz').textbox('setValue', xzdtext);
				}
			});
			$('#gytsfm').textbox({
				onChange: function (newValue, oldValue) {
					
					var jlqx = $("#jlrqfm").datebox('getValue');
					var jlqxdate = new Date(jlqx).getTime();
					// console.log(jlqxdate+"sssdsadas");
					// console.log(jlqx+"sssdsadas");
					var gyts = $("#gytsfm").textbox("getValue");
					// console.log(gyts+"ssadwdasdasdsa");
					var gytsdayms = gyts*1000*24*60*60;
					var gyqxms = jlqxdate+gytsdayms;
					var date = new Date(gyqxms);
					// date = date.setTime(gyqxms);
					// console.log(date+"datesssssss");

					date = date.Format("yyyy-MM-dd");
					
					$("#gyqxfm").datebox("setValue",date);
				}
			});
			$('#jlrqfm').datebox({
				onChange: function (newValue, oldValue) {
					var jlqx = $("#jlrqfm").datebox('getValue');
					var jlqxdate = new Date(jlqx).getTime();
					// console.log(jlqxdate+"sssdsadas");
					// console.log(jlqx+"sssdsadas");
					var gyts = $("#gytsfm").textbox("getValue");
					// console.log(gyts+"ssadwdasdasdsa");
					var gytsdayms = gyts*1000*24*60*60;
					var gyqxms = jlqxdate+gytsdayms;
					var date = new Date(gyqxms);
					// date = date.setTime(gyqxms);
					// console.log(date+"datesssssss");

					date = date.Format("yyyy-MM-dd");
					
					$("#gyqxfm").datebox("setValue",date);

				}
			});
			$('#zjh').textbox({
				onChange: function () {

					var code = $('#zjh').textbox('getValue')
					if (code.length == 18) {
						//根据身份证获取性别
						var xb = code.substring(16, 17);
						if (xb == 1 || xb == 3 || xb == 5 || xb == 7 || xb == 9) {
							$("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
							$('.jsh').combotree({
								onBeforeLoad: function (node, param) {
									param.type = '1';
								},
							});
						} else if (xb == "0" || xb == "2" || xb == "4" || xb == "6" || xb == "8" || xb == "X") {
							$("#xb").combobox().combobox("setValue", "2").combobox("setText", "女性");
							$('.jsh').combotree({
								onBeforeLoad: function (node, param) {
									param.type = '2';
								},
							});
						}
						//根据身份证获取出生日期
						var csrq = code.substring(6, 14);
						var csrq1 = csrq.substring(0, 4);
						var csrq2 = csrq.substring(4, 6);
						var csrq3 = csrq.substring(6, 8);
						csrq = csrq1 + "-" + csrq2 + "-" + csrq3
						$("#csrq").datebox("setValue", csrq);
						//根据身份证获取默认籍贯、户籍地、现住地
						var hjd = code.substring(0, 6);
						$.ajax({
							type: "POST",  //提交方式
							url: urls.getDictionaryContent,
							data: { "code": hjd, "fieldname": "XZQH" },
							success: function (result) {
								$('#jg').combobox('setValue', { code: hjd, content: result.result });
								$("#hjd").combobox('setValue', { code: hjd, content: result.result });
								$("#xzd").combobox('setValue', { code: hjd, content: result.result });
								$('#hjdxz').textbox('setValue', result.result);
								$('#xzdxz').textbox('setValue', result.result);
							}
						});


					}

				}
			});

			$(".tab-item").click(function () {
				$(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background",
					"#5191f0");
				$(".products .mainCont").eq($(this).index()).show().siblings().hide();
				$.parser.parse('#fm');
				combox.initBySelect('#fm .awdCombox', urls.getDictionary);
			})
			$('input[type=radio][name=xzysz]').on('click', function () {
				layer.alert("选择左手指")
			});
			  // 图片预览切换
			  var showPic = $('.showPic');
			  $("#fm .pic").click(function() {
				  var currentUrl = $(this).attr('src');
				  console.log(this);
				  showPic.attr('src', currentUrl);
			  })
  
			  // 图片预览
			  $("#fm .imgFile").on('change', function() {
				  var previewImage = $(this).parent().siblings('img');
				  var file = this.files[0];
				  var imgUrl = window.URL.createObjectURL(file);
				  if ($(this).attr('id') == 'centerpic') {
					  showPic.attr('src', imgUrl);
					  showPic.onload = function() {
						  URL.revokeObjectURL(imgUrl);
					  }
				  }
				  previewImage.attr('src', imgUrl);
				  previewImage.onload = function() {
					  URL.revokeObjectURL(imgUrl);
				  }
			  })
		},

		submit: function (url,data,callback) {
			main.SearchData(url);
		},
		SearchData: url => {
			const jbxxData = $('#jbxx').serializeArray(), ajxxData = $('#ajxx').serializeArray();
			let jbxx_Data = new Object, ajxx_Data = new Object, formData = new FormData();
			try {
				jbxxData.forEach(item => {
				jbxx_Data[item.name] = item.value;
					switch (item.name) {
						case 'xm': if (item.value == '' || item.value == undefined) { utils.alert('姓名未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'xb': if (item.value == '' || item.value == undefined) { utils.alert('性别未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'jljdjg': if (item.value == '' || item.value == undefined) { utils.alert('决定拘留机关未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'jsh': if (item.value == '' || item.value == undefined) { utils.alert('拘室号未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'sypz': if (item.value == '' || item.value == undefined) { utils.alert('收拘凭证未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'sypzwsh': if (item.value == '' || item.value == undefined) { utils.alert('收押凭证文书号未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'dah': if (item.value == '' || item.value == undefined) { utils.alert('档案号未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'hjdxz': if (item.value == '' || item.value == undefined) { utils.alert('户籍地详址未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'whcd': if (item.value == '' || item.value == undefined) { utils.alert('文化程度未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'sf': if (item.value == '' || item.value == undefined) { utils.alert('身份未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'tssf': if (item.value == '' || item.value == undefined) { utils.alert('特殊身份未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'hyzk': if (item.value == '' || item.value == undefined) { utils.alert('婚姻状况未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'zjlx': if (item.value == '' || item.value == undefined) { utils.alert('证件类型未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'jg': if (item.value == '' || item.value == undefined) { utils.alert('藉贯未填写'); throw new Error('表单字段未填写完整'); } break;
					}
				});
				ajxxData.forEach(item => {
				ajxx_Data[item.name] = item.value;
					switch (item.name) {
						case 'syr': if (item.value == '' || item.value == undefined) { utils.alert('送拘人未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'badw': if (item.value == '' || item.value == undefined) { utils.alert('送拘单位未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'sydw': if (item.value == '' || item.value == undefined) { utils.alert('当前办案单位未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'ay': if (item.value == '' || item.value == undefined) { utils.alert('案别未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'rsxz': if (item.value == '' || item.value == undefined) { utils.alert('收拘类别未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'rsrq': if (item.value == '' || item.value == undefined) { utils.alert('入所时间未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'gyts': if (item.value == '' || item.value == undefined) { utils.alert('拘留期限未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'jlrq': if (item.value == '' || item.value == undefined) { utils.alert('执行期限开始未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'gyqx': if (item.value == '' || item.value == undefined) { utils.alert('执行期限截止未填写'); throw new Error('表单字段未填写完整'); } break;
						case 'jyaq': if (item.value == '' || item.value == undefined) { utils.alert('执行期限截止未填写'); throw new Error('表单字段未填写完整'); } break;
					}
				});
				formData.append('jbxxDate', JSON.stringify(jbxx_Data));
				formData.append('ajxxDate', JSON.stringify(ajxx_Data));
				formData.append('leftPhoto', $("#leftpic")[0].files[0]);
				formData.append('rightPhoto', $("#rightpic")[0].files[0]);
				formData.append('centerPhoto', $("#centerpic")[0].files[0]);
				console.log("-------------------------" + JSON.stringify(jbxx_Data));
				console.log("-------------------------" + JSON.stringify(ajxx_Data));
				//console.log($('#xzd').combobox('getValue'))
				util.ajax({
					url: url,
					data: formData,
					processData: false,
					contentType: false,
					func: function (data) {
						if (data.success) {
							utils.alert(data.msg);
							utils.closeWin(popwin);
							$('#table').datagrid('reload');
						} else {
							utils.alert(data.msg);
						}
					}
				});
			} catch (err) { }
		}
	};
	return main;
});
