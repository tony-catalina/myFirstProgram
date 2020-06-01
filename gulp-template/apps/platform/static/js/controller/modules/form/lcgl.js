define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var urls = require('modules/url');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var tpl = require('services/lcgljgsj_form.html');
	var tpm = require('services/lcglycfcs_form.html');
	var combox = require('awd/layui/combox');
	var isOpen = false;
	var tools = require('awd/jquery/tools');
	var main = {
		jgsjxz: function(datas, refresh) {
			if (datas.length == 0 || datas.length > 1) {
				utils.alert("请先选中一条记录办理");
				return false;
			}
			/*alert("1111")*/

			if (!isOpen) {
				var html = tpl('lcgljgsj_form', datas[0]);
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['确定', '取消'],
					success: function() {
						isOpen = true;
					},
					yes: function() {
						main.submit(datas, refresh);
					}
				}, function() {
					isOpen = false;
				});
			}
		},
		ycfcsxz: function(datas, refresh) {
			if (datas.length == 0 || datas.length > 1) {
				utils.alert("请先选中一条记录办理");
				return false;
			}
			/*alert("1111")*/
			if (!isOpen) {
				var html = tpm('lcglycfcs_form', datas[0]);
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['确定', '取消'],
					success: function() {
						isOpen = true;
						combox.init('.awdcombox', urls.getDictionary);
					},
					yes: function() {
						main.submit1(datas, refresh);
					}
				}, function() {
					isOpen = false;
				});
			}

		},

		submit: function(datas, refresh) {
			/**先校验form */
			var flag = true;
			var number = document.getElementById('numfm').value;
			if (!/^[0-9]*$/.test(number)) {
				utils.alert("数字格式不对");
				return false;
			};
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var postData = util.form2Json('fm');
				// postData.field='timelimit';
				// postData.id = data.id;
				util.ajax({
					url: urls.saveFlowmapTime,
					data: postData,
					func: function(data) {
						if (data.code == 'true') {
							// alert(data.data)
							utils.alert(data.data.data);
							utils.closeWin(popwin);
							if (tools.isFunction(refresh)) {
								refresh({
									state: 'R2'
								});
							}
							// $('#table').datagrid('reload')
						} else {
							utils.alert(data.data.data);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}
		},

		submit1: function(datas, refresh) {
			/**先校验form */
			var number = document.getElementById('numfm').value;
			if (!/^[0-9]*$/.test(number)) {
				utils.alert("数字格式不对");
				return false;
			};
			var flag = true;
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var postData = util.form2Json('fm');

				console.log('------------------' + urls.saveFlowmapMonth);
				util.ajax({
					url: urls.saveFlowmapMonth,
					data: postData,
					func: function(data) {
						if (data.code == 'true') {
							// alert(data.data)
							utils.alert(data.data.data);
							utils.closeWin(popwin);
							if (tools.isFunction(refresh)) {
								refresh({
									state: 'R2'
								});
							}
							// $('#table').datagrid('reload')
						} else {
							utils.alert(data.data.data);
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
