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
	var form = require('modules/form/lsgl');
	var urls = require('modules/url');
	var ls_table;
	var main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				search: function() {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());
					ls_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},

				groups: [{
					buttons: [{
							name: '新增',
							color: 'blue',
							fun: function() {
								form.add(urls.saveOrUpdateLs, {}, function() {
									main.refresh({
										state: 'R2'
									});
								});
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
				}]

			});
			tableUtils.init('table', {
				url: urls.lsGetPage,
				method: 'post',
				height: 'full-50',
				param: {
					state: 'R2'
				},
				toolbar: toolbarhtml,
				pagesize: 10,
				clumns: [{
						type: 'checkbox'
					},
					{
						field: 'lszh',
						width: '30%',
						title: '律师证号'
					},
					{
						field: 'xm',
						width: '20%',
						title: '姓名'
					},
					{
						field: 'dw',
						width: '20%',
						title: '单位名称'
					},
					{
						field: 'lszw',
						width: '30%',
						title: '指纹是否采集'
					}
				],
				parseData: function(res) { //res 即为原始返回的数据
					return {
						"code": res.code, //解析接口状态
						"msg": res.msg, //解析提示文本
						"count": res.total, //解析数据长度
						"data": res.data //解析数据列表
					};
				}
			}, function(data) {
				ls_table = data;
			});
		},
		refresh: function(param) {
			var params = $.extend(param, toolbar.getParams());
			ls_table.reload({
				where: params
			});
			toolbar.bindEvent();
		}
	};

	$(main.init);
});
