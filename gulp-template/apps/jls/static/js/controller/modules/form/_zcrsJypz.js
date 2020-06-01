define(function (require) {
	const $ = require('jquery');
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var comboxtree = require('awd/easyui/comboxtree');
	var url = require('modules/url');
	var formtpl = require('services/form/_zcrsJypz.html');
	var isOpen = false;//弹框默认不打开
	var popwin;
	var common=require('common');
	var main = {

		init: function (url, data, row, callback) {

			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_zcrsJypz', dataall);
			if (!isOpen) {
				popwin = utils.showWin({
					title: '校验凭证',
					area: ['90%', '600px'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {
						isOpen = true;
						$.parser.parse('#fm');
						main.bindEvent();
					},
					yes: function () {
						main.submit(url, row, callback);
					}
				},function() {
                    isOpen = false;
                })
			}
		},
		bindEvent: function () {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			comboxtree.initBySelect('#fm .jsh', url.jsBySexComboxTree);
			$('#xb').combobox({
                onSelect: function (data) {
					let xbcode = data.code;
					if(xbcode == 0 || xbcode == 9){
						 util.loadProgress($, true)
						$('.jsh').combotree({onBeforeLoad:(node,param)=>{param.type = ""}});
						$('.jsh').combotree('reload',url.jsBySexComboxTree);
						$('.jsh').combotree({onLoadSuccess:()=>util.clearProgress($)});
					}
					else{
						 util.loadProgress($, true)
                        $('.jsh').combotree({onBeforeLoad: (node,param)=>{param.type = xbcode}});
						$('.jsh').combotree('reload',url.jsBySexComboxTree);
						$('.jsh').combotree({onLoadSuccess:()=>util.clearProgress($)});
					}
				}});
		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = util.form2Json('fm');
				//data.tbr=$("#yzmj").textbox('getValue');
				data.tbr=common.info.user.loginname;
				data.tbrq=(new Date()).Format('yyyy-MM-dd');
				util.ajax({url: url,data: data,
					func: function (data) {
						if (data.success) {utils.alert(data.msg);
							if (tools.isFunction(callback))
							{
								callback();
								
							}
							utils.closeWin(popwin);
						} 
							else utils.alert(data.msg)
				}})} 
				else utils.alert('表单数据格式不对！')
		}
	};
	return main;
});