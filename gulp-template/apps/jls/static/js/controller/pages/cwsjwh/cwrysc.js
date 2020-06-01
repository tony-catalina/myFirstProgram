/**
 模块名称: 错误人员删除
 开始时间: 2020-3-11
 */
define(function (require) {
	//公共控件、组件、工具导入
	require('jquery');
	require('easyui');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');

	var grid = require('awd/easyui/grid');
	var toolbar = require('modules/toolbar');
	var linkbar = require('modules/linkbar');
	var utils = require('awd/layui/utils');
	var searchform = require('modules/searchform');
	var clumn = require('modules/clumn/jbxx');
	var url = require('modules/url');
	var powin;
	var hideshow = require('modules/showHideClumn');
	var jbxxgrid = require('modules/jbxxgrid');
	//界面控件
	var main = {
		init: function () {
			/**界面初始化**/
			main.layout();
			main.eventBind();
			/**界面初始化**/
		},
		layout: function () {
			/**布局初始化**/
			toolbar.init({
				buttons: [{
					id: 'add',
					name: '删除',
					//icon: 'icon-jianhao',
					fun: function () {
						var row = grid.getSelected('table')[0];
						powin = utils.showWin({
							title: '提示',
							area: ['26%', '150px'],
							content: '<center><div style="font-size:15pt;margin-top:5%;">你确定要删除记录吗？</div></center>',
							maxmin: true,
							buttons: ['确定', '取消'],
							yes: function () {
								utils.closeWin(powin);
								$.ajax({
									type: "POST", //提交方式
									url: url.jbxxUpdate,
									data: {
										id: row.id,
										state: "R3",
									}, //数据，这里使用的是Json格式进行传输
									success: function (data) {
										utils.alert(data.msg);
										grid.reload('table');
									},
									error: function (data) {
										utils.alert(data.msg);
									}
								});
							}
						})

					}
				}, ]
			});
			linkbar.init({
				links: [{
						id: 'list',
						name: '数据列选择',
						icon: 'icon-gengduo7',
						fun: function () {
							hideshow.show('table');
						}
					},
					{
						id: 'color',
						name: '分色示例',
						icon: 'icon-gengduo1'
					}
				]
			});
			searchform.init('search', {
				pageRender: {
					primary: [{
						name: 'jsh',
						title: '拘室号',
						type: 'awdCombotree',
						url: url.jsComboxTree
					}, {
						name: 'xm',
						title: '姓名',
						type: 'textbox'
					}],
					more: [
						[{
								name: 'dah',
								title: '档案编号',
								type: 'textbox'
							},
							{
								name: 'rsrqStart',
								title: '入所日期',
								type: 'datebox'
							},
							{
								name: 'rsrqEnd',
								title: '至',
								type: 'datebox'
							}
						]
					],
				},
				query: function (param) {
					param = $.extend({}, {
						'state': 'R8',
					}, param);
					grid.query('table', param);
				}
			});
			jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {});
			// grid.init('table', {
			//     url: url.jbxxList,
			//     fit: false,
			//     width: '100%',
			//     height: window.innerHeight - 200,
			//     firstLoad: false,
			//     columns: clumn({
			//         check: false,
			//         clumns: ['xm', 'jsh','bm', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'],
			//         hidden: []
			//     })
			// });
			hideshow.init('modules/clumn/jbxx', ['xm', 'jsh', 'bm', 'rsrq', 'ayString', 'badw', 'gyqx', 'gyts'], []);


			/**布局初始化**/
		},
		eventBind: function () {
			/**事件绑定**/
			/**事件绑定**/
		}
	};

	/**
	 *运行入口
	 */
	$(main.init);

});