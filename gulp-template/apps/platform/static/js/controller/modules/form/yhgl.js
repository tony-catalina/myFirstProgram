define(function (require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var common = require('common');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var tree = require('awd/layui/tree');
	var utils = require('awd/layui/utils');
	var tpl = require('services/yhgl_form.html');
	var tpl2 = require('services/bjjs_form.html');
	var urls = require('modules/url');
	var isOpen = false;
	var main = {
		add: function (refresh) {
			if (!isOpen) {
				var html = tpl('yhgl_form', {});
				popwin = utils.showWin({
					area: ['100%', '100%'],
					content: html,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						layui.use('form', function () {
							var form = layui.form;
							form.render('select');

						});
						var fz = sessionStorage.getItem("firstname");
						if (fz == null || fz == undefined || fz == '') {
							$('#yhz').val('无分组')
						} else {
							$('#yhz').val(fz)
						}

						$('#bjjs').click(function () {

							var html2 = tpl2('bjjs_form', {});
							var second = utils.showWin({
								area: ['100%', '100%'],
								content: html2,
								buttons: ['确定', '取消'],
								success: function () {
									tree.jsinit('treeCheck', {
										url: urls.rolesGroup,
										line: true
									}, function (data) {
										var xzdtext = data.title
										var parent_id = data.id;
										var arr = []
										$("#resetRole li").each(function () {
											arr.push($(this).children('.zhname').text())
										});
										var newArr = arr.indexOf(xzdtext);
										if (newArr == -1) {
											var roles = '<li><i class="iconfont">&#xe825;</i>&ensp;<a class="zhname" menuid="' + data.id +
												'">' + data.title +
												'</a><span class="delete iconfont">&#xe75e;</span></li><input type="hidden" class="mesNone" name="' +
												parent_id + '" value="' + data.title + '"/>'
											$('#resetRole').append(roles)
										} else {
											utils.alert("该组已添加！")

										}
									});
									$(document).on('click', '.delete', function (item, index) {
										$(this).parent().remove();
									})

								},
								yes: function () {
									utils.closeWin(second);
									$("#BlockButton").empty();
									var obj = {}
									$(".mesNone").each(function () {
										if ($(this).attr("name")) {
											obj[this.name] = this.value;
										}
									})
									sessionStorage.setItem("lastname", JSON.stringify(obj));
									var arr1 = [];
									$(".zhname").each(function () {
										arr1.push($(this).text())
									})
									arr1.forEach(item => {
										const Buttonhtml =
											'<button class="layui-btn layui-btn-normal" style="width:20%;text-align: center;color:white;margin:0 10px 10px 0;" type="button">' +
											item + '</button>'
										$("#BlockButton").append(Buttonhtml);
									})

								}
							})
						})
					},
					yes: function () {
						main.submit(refresh);
					}
				}, function () {
					isOpen = false;
				});
			}
		},
		update: function (datas) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			}
		},
		del: function (datas) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			}
		},
		disable: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				util.ajax({
					url: urls.memberStatusChange,
					data: {
						user_id: ids,
						param: 0
					},
					func: function (data) {
						if (data.code == 'true') {
							utils.alert(data.data);
							if (tools.isFunction(refresh)) {
								refresh({});
							}
						} else {
							utils.alert(data.data);
						}
					}
				});
			}
		},
		enable: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				util.ajax({
					url: urls.memberStatusChange,
					data: {
						user_id: ids,
						param: 1
					},
					func: function (data) {
						if (data.code == 'true') {
							utils.alert(data.data);
							if (tools.isFunction(refresh)) {
								refresh({});
							}
						} else {
							utils.alert(data.data);
						}
					}
				});
			}
		},
		forbidapp: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else if (datas.length > 1) {
				utils.alert("只能选中一条记录办理");
				return false;
			} else {
				var id2 = datas[0].id
				var arr3 = []
				arr3.push(datas[0].id)
				var ids = JSON.stringify(arr3)

				var html2 = tpl2('bjjs_form', {});
				var second = utils.showWin({
					area: ['100%', '100%'],
					content: html2,
					buttons: ['确定', '取消'],
					success: function () {
						tree.ycinit('treeCheck', {
							url: urls.getJsApp + '?userid=' + id2 + '&menu=0',
							line: true
						}, function (data) {
							var xzdtext = data.title
							var parent_id = data.id;
							var arr = []
							$("#resetRole li").each(function () {
								arr.push($(this).children('.zhname').text())
							});
							var newArr = arr.indexOf(xzdtext);
							if (newArr == -1) {
								var roles = '<li><i class="iconfont">&#xe825;</i>&ensp;<a class="zhname" menuid="' + data.id +
									'">' + data.title +
									'</a><span class="delete iconfont">&#xe75e;</span></li><input type="hidden" class="mesNone" name="' +
									parent_id + '" value="' + data.title + '"/>'
								$('#resetRole').append(roles)
							} else {
								utils.alert("该组已添加！")

							}
						});
						$(document).on('click', '.delete', function (item, index) {
							$(this).parent().remove();
						})

					},
					yes: function () {
						utils.closeWin(second);
						var obj = {}
						$(".mesNone").each(function () {
							if ($(this).attr("name")) {
								obj[this.name] = this.value;
							}
						})
						var objs = JSON.stringify(obj)
						util.ajax({
							url: urls.saveForbidApp,
							data: {
								user_id: ids,
								param: objs
							},
							func: function (data) {
								if (data.code == 'true') {
									utils.alert(data.data);
									if (tools.isFunction(refresh)) {
										refresh({});
									}
								} else {
									utils.alert(data.data);
								}
							}
						});

					}
				})
			}
		},
		forbidmenu: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else if (datas.length > 1) {
				utils.alert("只能选中一条记录办理");
				return false;
			} else {
				var id2 = datas[0].id
				var arr3 = []
				arr3.push(datas[0].id)
				var ids = JSON.stringify(arr3)

				var html2 = tpl2('bjjs_form', {});
				var second = utils.showWin({
					area: ['100%', '100%'],
					content: html2,
					buttons: ['确定', '取消'],
					success: function () {
						tree.ycinit('treeCheck', {
							url: urls.getJsApp + '?userid=' + id2 + '&menu=1',
							line: true
						}, function (data) {
							var xzdtext = data.title
							var parent_id = data.id;
							var arr = []
							$("#resetRole li").each(function () {
								arr.push($(this).children('.zhname').text())
							});
							var newArr = arr.indexOf(xzdtext);
							if (newArr == -1) {
								var roles = '<li><i class="iconfont">&#xe825;</i>&ensp;<a class="zhname" menuid="' + data.id +
									'">' + data.title +
									'</a><span class="delete iconfont">&#xe75e;</span></li><input type="hidden" class="mesNone" name="' +
									parent_id + '" value="' + data.title + '"/>'
								$('#resetRole').append(roles)
							} else {
								utils.alert("该组已添加！")

							}
						});
						$(document).on('click', '.delete', function (item, index) {
							$(this).parent().remove();
						})

					},
					yes: function () {
						utils.closeWin(second);
						var obj = {}
						$(".mesNone").each(function () {
							if ($(this).attr("name")) {
								obj[this.name] = this.value;
							}
						})
						var objs = JSON.stringify(obj)
						util.ajax({
							url: urls.saveForbidApp,
							data: {
								user_id: ids,
								param: objs
							},
							func: function (data) {
								if (data.code == 'true') {
									utils.alert(data.data);
									if (tools.isFunction(refresh)) {
										refresh({});
									}
								} else {
									utils.alert(data.data);
								}
							}
						});

					}
				})
			}
		},
		fingerregist: function (datas) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			}
		},
		removeRole: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				util.ajax({
					url: urls.removeRole,
					data: {
						user_id: ids,
						param: ''
					},
					func: function (data) {
						if (data.code == 'true') {
							utils.alert(data.data);
							if (tools.isFunction(refresh)) {
								refresh({});
							}
						} else {
							utils.alert(data.data);
						}
					}
				});
			}
		},
		addRole: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				var html2 = tpl2('bjjs_form', {});
				var second = utils.showWin({
					area: ['100%', '100%'],
					content: html2,
					buttons: ['确定', '取消'],
					success: function () {
						tree.jsinit('treeCheck', {
							url: urls.rolesGroup,
							line: true
						}, function (data) {
							var xzdtext = data.title
							var parent_id = data.id;
							var arr = []
							$("#resetRole li").each(function () {
								arr.push($(this).children('.zhname').text())
							});
							var newArr = arr.indexOf(xzdtext);
							if (newArr == -1) {
								var roles = '<li><i class="iconfont">&#xe825;</i>&ensp;<a class="zhname" menuid="' + data.id +
									'">' + data.title +
									'</a><span class="delete iconfont">&#xe75e;</span></li><input type="hidden" class="mesNone" name="' +
									parent_id + '" value="' + data.title + '"/>'
								$('#resetRole').append(roles)
							} else {
								utils.alert("该组已添加！")

							}
						});
						$(document).on('click', '.delete', function (item, index) {
							$(this).parent().remove();
						})

					},
					yes: function () {
						utils.closeWin(second);
						var obj = {}
						$(".mesNone").each(function () {
							if ($(this).attr("name")) {
								obj[this.name] = this.value;
							}
						})
						var objs = JSON.stringify(obj)
						util.ajax({
							url: urls.addRole,
							data: {
								user_id: ids,
								param: objs
							},
							func: function (data) {
								if (data.code == 'true') {
									utils.alert(data.data);
									if (tools.isFunction(refresh)) {
										refresh({});
									}
								} else {
									utils.alert(data.data);
								}
							}
						});

					}
				})
			}
		},
		removeGroup: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				var fz = sessionStorage.getItem("groupid");
				if (fz == null || fz == undefined || fz == '') {
					utils.alert('请先选中一个分组')
				} else {
					util.ajax({
						url: urls.removeYhz,
						data: {
							user_id: ids,
							group_id: fz
						},
						func: function (data) {
							if (data.code == 'true') {
								utils.alert(data.data);
								if (tools.isFunction(refresh)) {
									refresh({});
								}
							} else {
								utils.alert(data.data);
							}
						}
					});
				}
			}
		},
		addGroup: function (datas, refresh) {
			if (datas.length == 0) {
				utils.alert("请先选中一条记录办理");
				return false;
			} else {
				var arr2 = [];
				for (var i = 0; i < datas.length; i++) {
					arr2.push(datas[i].id)
				}
				var ids = JSON.stringify(arr2)
				var html2 = tpl2('bjjs_form', {});
				var second = utils.showWin({
					area: ['100%', '100%'],
					content: html2,
					buttons: ['确定', '取消'],
					success: function () {
						tree.init('treeCheck', {
							url: urls.getGroup,
							line: true
						}, function (data) {
							var xzdtext = data.title
							var parent_id = data.id;
							var arr = []
							$("#resetRole li").each(function () {
								arr.push($(this).children('.zhname').text())
							});
							var newArr = arr.indexOf(xzdtext);
							if (newArr == -1) {
								var roles = '<li><i class="iconfont">&#xe825;</i>&ensp;<a class="zhname" menuid="' + data.id +
									'">' + data.title +
									'</a><span class="delete iconfont">&#xe75e;</span></li><input type="hidden" class="mesNone" name="' +
									parent_id + '" value="' + data.title + '"/>'
								$('#resetRole').append(roles)
							} else {
								utils.alert("该组已添加！")

							}
						});
						$(document).on('click', '.delete', function (item, index) {
							$(this).parent().remove();
						})

					},
					yes: function () {
						utils.closeWin(second);
						var obj = {}
						$(".mesNone").each(function () {
							if ($(this).attr("name")) {
								obj[this.name] = this.value;
							}
						})
						var objs = JSON.stringify(obj)
						util.ajax({
							url: urls.newaddYhz,
							data: {
								user_id: ids,
								param: objs
							},
							func: function (data) {
								if (data.code == 'true') {
									utils.alert(data.data);
									if (tools.isFunction(refresh)) {
										refresh({});
									}
								} else {
									utils.alert(data.data);
								}
							}
						});

					}
				})
			}
		},
		submit: function (refresh) {
			/**先校验form */
			var flag = true;
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
			var sfzhcode = document.getElementById('sfzhfm').value;
			if (sfzhcode.length != 18) {
				utils.alert('身份证位数不合法');
				return false;
			} else if (!sfzhcode || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(sfzhcode)) {
				utils.alert('身份证号格式错误');
				return false;
			} else if (!city[sfzhcode.substr(0, 2)]) {
				utils.alert('地址编码错误');
				return false;
			} else {
				//18位身份证需要验证最后一位校验位
				if (sfzhcode.length == 18) {
					sfzhcode = sfzhcode.split('');
					//∑(ai×Wi)(mod 11)
					//加权因子
					var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
					//校验位
					var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
					var sum = 0;
					var ai = 0;
					var wi = 0;
					for (var i = 0; i < 17; i++) {
						ai = sfzhcode[i];
						wi = factor[i];
						sum += ai * wi;
					}
					var last = parity[sum % 11];
					if (parity[sum % 11] != sfzhcode[17]) {
						utils.alert('身份证校验位错误');
						return false;
					}
				}
			};
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function (i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
				var js = sessionStorage.getItem("lastname");
				var fz = sessionStorage.getItem("groupid");

				if (fz == null || fz == undefined || fz == '') {
					utils.alert('请先选中一个分组')
				} else {
					var postData = util.form2Json('fm');
					postData.role = js
					postData.group = fz
					postData.glybz = common.info.user.glybz

					util.ajax({
						url: urls.addMember,
						data: postData,
						func: function (data) {
							if (data.code == 'true') {
								utils.alert(data.data);
								utils.closeWin(popwin);
								if (tools.isFunction(refresh)) {
									refresh({
										state: 'R2'
									});
								}
							} else {
								utils.alert(data.data);
							}
						}
					});
				}


			} else {
				utils.alert('表单数据格式不对！');
			}

		},

	};

	return main;

});
