define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var toolbar=require('modules/toolbar');
    var tableUtils=require('awd/layui/table_utils');
    var form = require('modules/form/wgzdgl');
    var url = require('modules/url');
    var tree = require('awd/layui/tree');
	var wgzd_table;
	var fl_table;
    main={
        init:function(){
            var toolbarhtml=toolbar.getToolBar({
                search:function(){
					var params=$.extend({state:'R2'},toolbar.getParams());
                    fl_table.reload({where:params});
                    toolbar.bindEvent();
                },
                groups:[
                    {buttons:[
                        
                        {name:'修改',color:'blue',fun:function(){tableUtils.getSelected('table',form.update,main.refresh);}},
                        
                    ]},
                    
                    ]
            });
            tableUtils.init('table', {
				url: url.wgzdGetPage,
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
					field: 'jslxString',
					width: '15%',
					title: '监所类型'
				},
				{
					field: 'code',
					width: '15%',
					title: '代码'
				},
				{
					field: 'content',
					width: '15%',
					title: '内容'
				},
				{
					field: 'kffz',
					width: '15%',
					title: '扣分分值'
				},
				{
					field: 'editableString',
					width: '15%',
					title: '可编辑'
				},
				],
				parseData: function (res) { //res 即为原始返回的数据
					return {
						'code': res.code, //解析接口状态
						'msg': res.msg, //解析提示文本
						'count': res.total, //解析数据长度
						'data': res.data //解析数据列表
					};
				}
			}, function (data) {
				fl_table = data;
			});
			tree.otherinit('tree', {
				url: url.wgzdGetType,
				line: true
			}, function (data) {
				console.log(data)
				fl_table.reload({ where: { field: data.id,search:'' } });
				toolbar.bindEvent();
			});
		},
		refresh:function(param){
            var params=$.extend(param,toolbar.getParams());
            fl_table.reload({where:params});
            toolbar.bindEvent();
        }
    };

    $(main.init);
});