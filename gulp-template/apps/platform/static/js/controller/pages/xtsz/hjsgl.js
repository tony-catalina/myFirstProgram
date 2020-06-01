define(function(require) {
	require('jquery');
	require('easyui');
	require('layui');
	require('layerui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var toolbar = require('modules/toolbar');
	var tableUtils = require('awd/layui/table_utils');
	var form = require('modules/form/hjsgl');
	var urls = require('modules/url');
	var hjs_table;
	main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				search: function() {
					var params = $.extend({
						state: 'R2'
					}, toolbar.getParams());
					hjs_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},
				groups: [{
						buttons: [{
								name: '新增',
								color: 'blue',
								fun: function() {
									form.add(urls.saveOrUpdateFj, {}, function() {
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
					},

				]
			});
			tableUtils.init('table', {
				url: urls.fjGetPage,
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
						field: 'fjhm',
						width: '18%',
						title: '房间号'
					},
					{
						field: 'fjmc',
						width: '21%',
						title: '房间名称'
					},
					{
						field: 'fjlxString',
						width: '20%',
						title: '房间类型'
					},
					{
						field: 'syztString',
						title: '使用状态',
						width: '20%'
					},
					{
						field: 'syry',
						width: '20%',
						title: '使用人员'
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
				hjs_table = data;
			});
			/*tree.otherinit('tree', {
			    url: urls.getClassficAll,
			    line: true
			}, function (data) {
			    var source = data.name;
			    var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(source);
			    console.log(data)
			    fl_table.reload({ where: { field: rt[2] } });
			    toolbar.bindEvent();
			});*/
		},
		refresh: function(param) {
			var params = $.extend(param, toolbar.getParams());
			hjs_table.reload({
				where: params
			});
			toolbar.bindEvent();
		},

	};

	$(main.init);
});
