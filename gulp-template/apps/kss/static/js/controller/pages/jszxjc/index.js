define(function(require) {
	//公共控件、组件、工具导入
	require('jquery');
	require('easyui');
	require('layer.config');
	var tools = require('awd/jquery/tools');
	var utils = require('awd/layui/utils');
	var grid = require('awd/easyui/grid');
	var toolbar = require('modules/toolbar');
	var linkbar = require('modules/linkbar');
	var searchform = require('modules/searchform');
	var clumn = require('modules/clumn/jszxjc');
	var url = require('modules/url');
	var utils = require('awd/layui/utils');
	var formtpl = require('services/form/_jszxjc.html');
	var hideshow = require('modules/showHideClumn');
	var tree = require('awd/easyui/tree');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var hdpzFormAdd = require('modules/form/jqzx');
	var hdpzFormUpdate = require('modules/form/jqzxUpdate');
	//界面控件
	var main = {
		init: function() {
			/**界面初始化**/
			main.layout();
			main.eventBind();
			/**界面初始化**/
		},
		layout: function() {
			/**布局初始化**/
			toolbar.init({
				buttons: [{
					id: 'addTwo',
					name: '新增',
					icon: 'icon-jiahao',
					fun: function() {
						var jqhstring = util.getTreeSelectionNos($('#jqtree'));
						if (jqhstring == '') {
							utils.alert('请先选择监区!');
							return false;
						}
						var data = {
							jsh: jqhstring
						};
						var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
						var addData = {
							jcsj: currentTime
						};
						var dataall = {};
						Object.assign(dataall, addData, data);





						if (data) {
							hdpzFormAdd.init(url.jszxjcAdd, data, function() {
								grid.reload('table');
							}, true);
						} else {
							utils.alert("请选择监室!");
						}

					}
				}, {
					id: 'edit',
					name: '修改',
					icon: 'icon-jiahao',
					ryyw: true,
					fun: function() {
						var data = grid.getSelected('table')[0];
						console.log("====" + JSON.stringify(data));
						if (data) {
							hdpzFormUpdate.init(url.jszxjcUpdate, data, function() {
								grid.reload('table');
							}, false);
						} else {
							utils.alert("请选择记录!");
						}

					}
				}, ]
			});
			linkbar.init({
				links: [{
					id: 'list',
					name: '数据列选择',
					icon: 'icon-gengduo7',
					fun: function() {
						hideshow.show('table');
					}
				}]
			});
			searchform.init('search', {
				pageRender: {
					primary: [{
						name: 'jcsj_start',
						title: '检查时间',
						type: 'datebox'
					}, {
						name: 'jcsj_end',
						title: '至',
						type: 'datebox'
					}],
					more: [
						[{
							name: 'jsh',
							title: '监室号',
							type: 'awdCombotree',
							url: url.getJqCombotree
						}, ]
					]
				},
				query: function(param) {
					grid.query('table', param);
				}
			});
			grid.init('table', {
				url: url.jszxjcList,
				fit: false,
				width: '100%',
				height: window.innerHeight - 200,
				firstLoad: false,
				columns: clumn({
					check: false,
					clumns: ['jsh', 'jcsj', 'jcr', 'jcqk','bz'],
					hidden: []
				})
			});

			tree.initTree('jqtree', {
				checkbox: true,
				url: url.jqtree,
				select: function() {
					grid.query('table', {
						jsh: util.getTreeSelected($(this), '监区树').id
					});
				},
				BeforeExpand: function(node) {
					$("#jqtree").tree('options').url = url.jqtree + "?id=" + node.id;
				}
			});
			hideshow.init('modules/clumn/jszxjc', ['jsh', 'jcsj', 'jcr', 'jcqk','bz'], []);
			/**布局初始化**/
		},
		eventBind: function() {
			/**事件绑定**/
			/**事件绑定**/
		}
	};

	/**
	 *运行入口
	 */
	$(main.init);

});
