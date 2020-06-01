define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var isOpen = false;
	var urls = require('modules/url');
	var tmpl = require('services/messagelist.html');
	var tpl = require('services/ywzd_form.html');
	var combox = require('awd/layui/combox');
	var tools = require('awd/jquery/tools');
	// var urls=require('modules/url');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var editindex;
	var main = {
		list: function(usertype) {
			util.ajax({
				url: urls.ywzdQuery,
				data: {
					page: 1,
					jslx: usertype
				},
				func: function(result) {
					var html = tmpl('messagelist', result);
					$('#ywzdlist').html(html);
					$('#ywzdlist .b-item').addClass("ywzd");
					$('.b-item.ywzd').on('click', function() {
						var id = $(this).attr('id');
						window.open('/apps/platform/views/xq.html?mode=ywzd&id=' + id);
					});
				}
			});
		},
		add: function(url, data, callback) {
			if (!isOpen) {
				var html = tpl('ywzd_form', data);
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						combox.init('.awdcombox', urls.getDictionary);
						layui.use('layedit', function() {
							var layedit = layui.layedit;
							editindex = layedit.build('describe'); //建立编辑器
						});
					},
					yes: function() {
						layui.use('layedit', function() {
							var layedit = layui.layedit;
							var data = util.form2Json('fm');
							data.describe = layedit.getContent(editindex);
							main.submit(url, data, callback);
						});
					}
				}, function() {
					isOpen = false;
				});
			}
		},
		update: function(datas, refresh) {
			// console.log(datas)
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else if (datas.length > 1) {
				utils.alert("请只能选中一条记录办理");
				return false;
			}


			if (!isOpen) {
				var html = tpl('ywzd_form', datas[0]);
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['保存', '取消'],
					success: function() {
						isOpen = true;
						combox.init('.awdcombox', urls.getDictionary);
						layui.use('layedit', function() {
							var layedit = layui.layedit;
							editindex = layedit.build('describe'); //建立编辑器
						});
					},
					yes: function() {
						layui.use(['layedit', 'form'], function() {
							var form = layui.form;
							var layedit = layui.layedit;
							var data = util.form2Json('fm');
							data.describe = layedit.getContent(editindex);
							data.id = datas[0].id
							console.log(data)
							main.submit1(data, refresh);
						});
					}
				}, function() {
					isOpen = false;
				});
			}
		},
		del: function(datas, refresh) {
			if (datas.length == 0) {
				utils.alert("至少选中一条记录办理");
				return false;
			} else {
				var ids = "";
				if (datas.length > 0) {
					for (var i = 0; i < datas.length; i++) {
						ids += datas[i].id + ",";
					}
				}
				utils.confirm('确认要删除吗？', function(index) {
					util.ajax({
						url: urls.ywzdDelete,
						data: {
							"id": ids
						},
						func: function(data) {
							if (data.code == '0') {
								layer.close(index);
								if (data.data > 0) {
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
						}
					});
				});
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
				var postData = data;
				util.ajax({
					url: url,
					data: postData,
					func: function(data) {
						if (data.code == '0') {
							utils.closeWin(popwin);
							utils.alert(data.info);
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
							utils.alert(data.info);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}

		},

		submit1: function(data, refresh) {
			console.log(data)
			/**先校验form */
			var flag = true;
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var postData = data;
				// postData.id = data[0].id,
				console.log(postData),
					util.ajax({
						url: urls.ywzdSave,
						data: postData,
						func: function(data) {
							if (data.code == '0') {
								// alert(data.data)
								utils.alert(data.info);
								utils.closeWin(popwin);
								// $('#table').datagrid('reload')
								if (tools.isFunction(refresh)) {
									refresh({
										state: 'R2'
									});
								}
							} else {
								utils.alert(data.info);
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
