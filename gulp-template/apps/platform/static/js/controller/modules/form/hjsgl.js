define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var urls = require('modules/url');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var tpl = require('services/hjs_form.html');
	var combox = require('awd/layui/combox');
	var isOpen = false;

	var main = {
		add: function(url, data, callback) {
			if (!isOpen) {
				var html = tpl('hjs_form', {});
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						combox.init('.awdcombox', urls.getDictionary);
					},
					yes: function() {
						main.submit(url, data, callback);
					}
				}, function() {
					isOpen = false;
				});
			}
		},
		update: function(datas, refresh) {
			if (datas.length == 0 || datas.length > 1) {
				utils.alert("请先选中一条记录办理");
				return false;
			}


			if (!isOpen) {
				var html = tpl('hjs_form', datas[0]);
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['保存', '取消'],
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
		del: function(datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {

				var ids = [];
				if (datas.length > 0) {
					for (var i = 0; i < datas.length; i++) {
						ids.push(datas[i].id);
					}
				}
				console.log(ids)
				utils.confirm('确认要删除吗？', function(index) {
					util.ajax({
						url: urls.deleteFj,
						data: {
							"id": ids
						},
						func: function(data) {
							if (data.code == 'true') {
								layer.close(index);
								utils.alert('删除成功');
								if (tools.isFunction(refresh)) {
									refresh({
										state: 'R2'
									});
								}
							} else {
								utils.alert('删除失败');
							}
						}
					});


				})
			}

		},
		submit: function(url, data, callback) {
			/**先校验form */
			var flag = true;
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var postData = util.form2Json('fm');
				console.log(postData)
				util.ajax({
					url: url,
					data: postData,
					func: function(data) {
						if (data.code == 'true') {
							utils.alert(data.data);
							utils.closeWin(popwin);

							if (tools.isFunction(callback)) {
								callback({
									state: 'R2'
								});
							}
							/*tree.otherinit('tree', {
							    url: urls.getClassficAll,
							    line: true
							})*/
						} else {
							utils.alert(data.data);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}

		},

		submit1: function(datas, refresh) {
			/**先校验form */
			var flag = true;
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var postData = util.form2Json('fm');
				// postData.id = data.id;
				util.ajax({
					url: urls.saveOrUpdateFj,
					data: postData,
					func: function(data) {
						if (data.code == 'true') {
							// alert(data.data)
							utils.alert(data.data);
							utils.closeWin(popwin);
							if (tools.isFunction(refresh)) {
								refresh({
									state: 'R2'
								});
							}
							// $('#table').datagrid('reload')
						} else {
							utils.alert(data.data);
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
