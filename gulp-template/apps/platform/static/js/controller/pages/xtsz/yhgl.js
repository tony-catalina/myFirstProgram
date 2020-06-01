define(function (require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var toolbar = require('modules/toolbar');
	var tree = require('awd/layui/tree');
	var tableUtils = require('awd/layui/table_utils');
	var userform = require('modules/form/yhgl');
	var urls = require('modules/url');
	var user_table;
	main = {
		init: function () {
			var toolbarhtml = toolbar.getToolBar({
				search: function () {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());


					user_table.reload({
						where: params
					});
					toolbar.bindEvent();
					main.eventBind();
				},
				groups: [{
					buttons: [{
						id: 'disablebutton',
						name: '禁用',
						fun: function () {
							tableUtils.getSelected('table', userform.disable, main.refresh);
						}
					},
					{
						id: 'enablebutton',
						name: '启用',
						fun: function () {
							tableUtils.getSelected('table', userform.enable, main.refresh);
						}
					}
					]
				}, {
					buttons: [{
						name: '应用禁用',
						fun: function () {
							tableUtils.getSelected('table', userform.forbidapp, main.refresh);
						}
					},
					{
						name: '菜单禁用',
						fun: function () {
							tableUtils.getSelected('table', userform.forbidmenu, main.refresh);
						}
					},
					{
						name: '指纹注册',
						fun: function () {
							tableUtils.getSelected('table', userform.fingerregist);
						}
					}
					]
				}]

			});
			tableUtils.init('table', {
				url: urls.getMember,
				method: 'post',
				height: 'full-50',
				param: {},
				toolbar: toolbarhtml,
				pagesize: 10,
				clumns: [{
					type: 'checkbox'
				},
				{
					field: 'username',
					width: '10%',
					title: '用户名'
				},
				{
					field: 'jh',
					width: '10%',
					title: '警号'
				},
				{
					field: 'rolesstr',
					width: '15%',
					title: '权限角色'
				},
				{
					field: 'group',
					width: '15%',
					title: '所在组',
					templet: function (d) {
						return d.group.groupname
					}
				},
				{
					field: 'isadmin',
					width: '15%',
					title: '用户类型',
					templet: function (d) {
						return d.isadmin == 1 ? '管理员' : '普通用户';
					}
				},
				{
					field: 'enabled',
					width: '20%',
					title: '状态',
					templet: function (d) {
						return d.state == 'R2' ? '启用' : '禁用';
					}
				}
				],
				parseData: function (res) { //res 即为原始返回的数据
					return {
						"code": 0, //解析接口状态
						"msg": res.info, //解析提示文本
						"count": res.data.lenght, //解析数据长度
						"data": res.data //解析数据列表
					};
				},
				rowclick: function (data) {
					if (data.length > 0) {
						if (data[0].state != 'R2') {
							$('#enablebutton').removeClass('layui-btn-disabled').removeAttr('disabled', "true");
							$('#disablebutton').addClass('layui-btn-disabled').attr('disabled', "true");
						} else {
							$('#disablebutton').removeClass('layui-btn-disabled').removeAttr('disabled', "true");
							$('#enablebutton').addClass('layui-btn-disabled').attr('disabled', "true");
						}
						if (data[0].isadmin == '1') {
							$('#enablebutton').addClass('layui-btn-disabled').attr('disabled', "true");
							$('#disablebutton').addClass('layui-btn-disabled').attr('disabled', "true");
						}
					} else {
						$('#disablebutton').removeClass('layui-btn-disabled').removeAttr('disabled', "true");
						$('#enablebutton').removeClass('layui-btn-disabled').removeAttr('disabled', "true");
					}

				}
			}, function (data) {
				user_table = data;
			});
			tree.init('tree', {
				url: urls.getGroup,
				line: true
			}, function (data) {
				sessionStorage.setItem("firstname", data.title);
				sessionStorage.setItem("groupid", data.id);
				user_table.reload({
					where: {
						group_id: data.id
					}
				});
				toolbar.bindEvent();
				main.eventBind();
			});
			main.eventBind();
		},
		eventBind: function () {
			/**事件绑定**/
			$('#searchform .layui-inline').empty()
			$('#searchBtn').remove()
			var content =
				'<button class="layui-btn layui-btn-primary" id="xjyh">新建用户</button>' +
				'<div class="layui-input-inline" style="width:120px;margin-right:10px;margin-left:10px;">' +
				'<select lay-filter="role">' +
				'<option value="移除角色">移除角色</option>' +
				'<option value="添加角色">添加到角色</option>' +
				'</select>' +
				'</div>' +
				'<div class="layui-input-inline" style="width:130px;margin-right:10px;">' +
				'<select lay-filter="group" id="groups">' +
				'<option value="移除用户组">移除用户组</option>' +
				'<option value="添加到用户组">添加到用户组</option>' +
				'</select>' +
				'</div>'
			$('#searchform .layui-inline').append(content)

			$('#xjyh').click(function () {
				userform.add(main.refresh);
			});
			layui.use(['layer', 'jquery', 'form'], function () {
				var layer = layui.layer,
					$ = layui.jquery,
					form = layui.form;

				form.on('select(role)', function (data) {
					if (data.value == '移除角色') {
						tableUtils.getSelected('table', userform.removeRole, main.refresh);
					}
					if (data.value == '添加角色') {
						tableUtils.getSelected('table', userform.addRole, main.refresh);
					}
				});
				form.on('select(group)', function (data) {
					if (data.value == '移除用户组') {
						tableUtils.getSelected('table', userform.removeGroup, main.refresh);
					}
					if (data.value == '添加到用户组') {
						tableUtils.getSelected('table', userform.addGroup, main.refresh);
					}
				});
			});

			/**事件绑定**/
		},
		refresh: function (param) {
			var parmas = $.extend(param, toolbar.getParams());
			user_table.reload({
				where: parmas
			});
			toolbar.bindEvent();
			main.eventBind();
		}
	};

	$(main.init);
});
