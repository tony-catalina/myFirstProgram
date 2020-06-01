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
	var form = require('modules/form/jsgl');
	var urls = require('modules/url');
	var js_table;
	main = {
		init: function() {
			var toolbarhtml = toolbar.getToolBar({
				search: function() {
					var params=$.extend({state:'R2'},toolbar.getParams());
					js_table.reload({
						where: params
					});
					toolbar.bindEvent();
				},
				groups: [{
						buttons: [{
								name: '新增',
								color: 'blue',
								fun: function() {
									form.add(urls.saveOrUpdateJs, {}, function() {
										main.refresh({state:'R2'});
									});
								}
							},
							{
								name: '修改',
								color: 'blue',
								fun: function() {
									tableUtils.getSelected('table', form.update,main.refresh);
								}
							},
							{
								name: '删除',
								color: 'blue',
								fun: function() {
									tableUtils.getSelected('table', form.del,main.refresh);
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
				url: urls.jsGetPage,
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
						field: 'jqh',
						width: '16%',
						title: '监区号'
					},
					{
						field: 'jsh',
						width: '16%',
						title: '监室号'
					},
					{
						field: 'jsmc',
						width: '19%',
						title: '监室名称'
					},
					{
						field: 'jslbString',
						width: '19%',
						title: '监室类别'
					},
					{
						field: 'typeString',
						width: '16%',
						title: '男女监'
					},
					{
						field: 'innum',
						width: '16%',
						title: '在押数'
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
				js_table = data;
			});
		},
		refresh:function(param){
            var params=$.extend(param,toolbar.getParams());
            js_table.reload({where:params});
            toolbar.bindEvent();
        }
	};

	$(main.init);
});
