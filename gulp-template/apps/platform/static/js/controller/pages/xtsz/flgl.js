define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var toolbar = require('modules/toolbar');
	var tableUtils = require('awd/layui/table_utils');
	var common = require('common');
	var form = require('modules/form/flgl');
	var urls = require('modules/url');
	var tree = require('awd/layui/tree');
	var fl_table;
	main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				searchname: 'title',
				search: function() {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());
					fl_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},
				groups: [{
						buttons: [{
								name: '新增',
								color: 'blue',
								fun: function() {
									form.add(urls.saveClassfic, {}, function() {});
								}
							},
							{
								name: '修改',
								color: 'blue',
								fun: function() {
									tableUtils.getSelected('table', form.update, main.refresh);
								}
							},
							{
								name: '删除',
								color: 'blue',
								fun: function() {
									tableUtils.getSelected('table', form.del, main.refresh);
								}
							}
						]
					},
					{
						buttons: [

						]
					}
				]
			});
			tableUtils.init('table', {
				url: urls.getClassficPage,
				method: 'post',
				height: 'full-50',
				param: {

				},
				toolbar: toolbarhtml,
				pagesize: 10,
				clumns: [{
						type: 'checkbox',
					},
					{
						field: 'parentid',
						width: '25%',
						title: '父类'
					},
					{
						field: 'classid',
						width: '25%',
						title: '编号'
					},
					{
						field: 'name',
						width: '25%',
						title: '名称'
					},
				],
				parseData: function(res) { //res 即为原始返回的数据
					return {
						'code': res.code, //解析接口状态
						'msg': res.msg, //解析提示文本
						'count': res.total, //解析数据长度
						'data': res.data //解析数据列表
					};
				}
			}, function(data) {
				fl_table = data;
			});
			tree.otherinit('tree', {
				url: urls.getClassficAll,
				line: true
			}, function(data) {
				var source = data.name;
				var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(source);
				console.log(data)
				fl_table.reload({
					where: {
						field: rt[2]
					}
				});
				toolbar.bindEvent();
			});
		},
		refresh: function(param) {
			var params = $.extend(param, toolbar.getParams());
			fl_table.reload({
				where: params
			});
			toolbar.bindEvent();
		}
	};

	$(main.init);
});
