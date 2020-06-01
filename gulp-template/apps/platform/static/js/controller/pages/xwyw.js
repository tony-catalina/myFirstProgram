define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var toolbar = require('modules/toolbar');
	var tableUtils = require('awd/layui/table_utils');
	var form = require('modules/xwyw');
	var urls = require('modules/url');
	var xwyw_table;
	main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				searchname: 'title',
				search: function() {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());
					xwyw_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},
				groups: [{
					buttons: [{
							name: '新增',
							color: 'blue',
							fun: function() {
								form.add(urls.xwywSave, {}, function() {
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
				url: urls.xwywQuery,

				height: 'full-2',
				param: {
					blrq_start: tools.getWeekStartAndEnd(0)[0],
					blrq_end: tools.getWeekStartAndEnd(0)[1],
					rows: 10
				},
				toolbar: toolbarhtml,
				pagesize: 10,
				clumns: [{
						type: 'checkbox'
					}, {
						field: 'jslx',
						width: '25%',
						title: '监所类型'
					},
					{
						field: 'title',
						width: '25%',
						title: '新闻标题'
					},
					{
						field: 'url',
						width: '25%',
						title: '新闻链接'
					},
					{
						field: 'content',
						title: '新闻内容',
						width: '25%'
					},
				],
				parseData: function(res) { //res 即为原始返回的数据
					return {
						"code": 0, //解析接口状态
						"msg": res.info, //解析提示文本
						"count": res.data.lenght, //解析数据长度
						"data": res.data //解析数据列表
					};
				},
			}, function(data) {
				xwyw_table = data;
			});
		},
		refresh: function(param) {
			var params = $.extend(param, toolbar.getParams());
			xwyw_table.reload({
				where: params
			});
			toolbar.bindEvent();
		}
	};

	$(main.init);
});
