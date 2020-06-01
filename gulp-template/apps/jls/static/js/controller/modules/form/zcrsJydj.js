define(function (require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var combogrid = require('awd/easyui/combogrid');
	var url = require('modules/url');
	var formtpl = require('services/form/_zcrsJydj.html');
	var popwin;
	var main = {

		init: function (url, data, row, callback) {

			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_zcrsJydj', dataall);
			popwin = utils.showWin({
				title: '简要登记',
				area: ['90%', '600px'],
				content: html,
				maxmin: true,
				buttons: ['保存', '取消'],
				success: function () {
					$.parser.parse('#fm');
					main.bindEvent(dataall);
				},
				yes: function () {
					main.submit(url, row, callback);
				}
			});
		},
		bindEvent: function (dataall) {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			combogrid.initPageClass('#fm .awdCombogrid', url.getDictionaryPage);
	
			//$("#xb").textbox('setValue',dataall.xb).textbox('setText',dataall.xbString); 
			//$("#hjd").combogrid('setValue',dataall.hjd).textbox('setText',dataall.hjdString); 
			$("#hjd").combogrid().combogrid('setValue', dataall.hjd).combogrid('setText', dataall.hjdString);
			//$("#ay").textbox('setValue',dataall.ay).textbox('setText',dataall.ayString); 
			//$("#sypz").textbox('setValue',dataall.sypz).textbox('setText',dataall.sypzString); 
			$("#jlrqjsfm").datebox("textbox").focus(function(){
			        var ts = $("#jlqx").val();
			        var sj = $("#jlrqfm").val();
						var ksDate = new Date(sj);
						thisDate = new Date((ksDate/1000+(86400*ts))*1000);
						    var datetime = thisDate.getFullYear()
						        + "-"// "年"
						        + ((thisDate.getMonth() + 1) >= 10 ? (thisDate.getMonth() + 1) : "0"
						            + (thisDate.getMonth() + 1))
						        + "-"// "月"
						        + (thisDate.getDate() < 10 ? "0" + thisDate.getDate() : thisDate
						            .getDate());
			        $("#jlrqjsfm").datebox("setValue",datetime);
				}); 

		},
		submit: function (url, row, callback) {
			/**先校验form */
			if ($('#fm').form('validate')) {
				var data = util.form2Json('fm');
				util.ajax({
					url: url,
					data: data,
					func: function (data) {
						if (data.success) {
							utils.alert(data.msg);
							if (tools.isFunction(callback)) {
								callback();
								utils.closeWin(popwin);
							}
						} else {
							utils.alert(data.msg);
						}
					}
				});
			} else {
				utils.alert('表单数据格式不对！');
			}


		},
	};
	return main;
});