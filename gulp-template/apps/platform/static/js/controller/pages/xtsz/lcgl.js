define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var toolbar = require('modules/toolbar');
	var tableUtils = require('awd/layui/table_utils');
	var form = require('modules/form/lcgl');
	var lc_table;
	var urls = require('modules/url');

	main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				searchname: 'title',
				search: function() {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());
					lc_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},
				groups: [{
					buttons: [{
							name: '间隔时间限制',
							color: 'blue',
							fun: function() {
								tableUtils.getSelected('table', form.jgsjxz, main.refresh);
							}
						},
						{
							name: '月重复次数限制',
							color: 'blue',
							fun: function() {
								tableUtils.getSelected('table', form.ycfcsxz, main.refresh);
							}
						},

					]
				}]
			});
			tableUtils.init('table', {
				url: urls.flowmapGetPage,
				method: 'post',
				height: 'full-50',
				param: {
					search: ''
				},
				toolbar: toolbarhtml,
				pagesize: 10,
				clumns: [{
						type: 'checkbox'
					},
					{
						field: 'mapkey',
						width: '15%',
						title: '代码'
					},
					{
						field: 'memo',
						width: '15%',
						title: '流程名称'
					},
					{
						field: 'version',
						width: '15%',
						title: '版本号'
					},
					{
						field: 'mapmutex',
						title: '互斥流程',
						width: '15%'
					},
					{
						field: 'timelimit',
						width: '20%',
						title: '时间限制'
					},
					{
						field: 'monthlylimit',
						width: '20%',
						title: '月次数限制'
					}
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
				lc_table = data;
			});
		},
		refresh: function(param) {
			var params = $.extend(param, toolbar.getParams());
			lc_table.reload({
				where: params
			});
			toolbar.bindEvent();
		}
	};

	$(main.init);
});
