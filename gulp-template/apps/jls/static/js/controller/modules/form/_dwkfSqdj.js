define(function(require) {
	require('modules/commFun');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
	var addDeleteEvent = require('modules/addDeleteColumn');
	var formtpl = require('services/form/_dwkfSqdj.html');
	var common=require('common');
	var isOpen = false;//弹框默认不打开
	var popwin;

	var isIDCard=function(value) {
		if (/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value) || value == ' ') {
			return true;
		} else {
			return false;
		}
	}

	var isTelNum=function(value) {
		if (/^1[0-9]{10}$/.test(value) || value == ' ') {
			return true;
		} else {
			return false;
		}
	}

	// 增加内容
	var addDeleColumn3 = {
		title: ['姓名', '性别', '出生日期', '证件类型', '证件号码', '联系电话'],
		options: [
			[{
					type: 'easyui-textbox',
					name: 'xm'
				},
				{
					type: 'awdCombox',
					code: 'XB',
					name: 'xb'
				},
				{
					type: 'easyui-datebox',
					name: 'csrq'
				},
				{
					type: 'awdCombox',
					code: 'ZJLX',
					name: 'zjlx'
				},
				{
					type: 'easyui-textbox',
					name: 'zjhm'
				},
				{
					type: 'easyui-textbox',
					name: 'lxdh'
				},
				//{ type: 'easyui-linkbutton',value: '扫描'}
			]
		]
	};
	var main = {

		init: function(url, data, row, callback) {
			var dataall = {};
			Object.assign(dataall, data, row);
			var html = formtpl('form/_dwkfSqdj', dataall);
			if(!isOpen) {
				popwin = utils.showWin({
					title: '数据录入',
					area: ['90%', '85%'],
					content: html,
					maxmin: true,
					buttons: ['保存', '取消'],
					success: function () {

						// 增加内容
						var $timeLineTabControl3 = $('.qiehuan').tabs({
							border: false
						});
						addDeleteEvent.init($timeLineTabControl3, 0, addDeleColumn3);
						$.parser.parse('#fm');
						main.bindEvent();

					},
					yes: function () {
						main.submit(url, callback);
					}
				});
			}
		},
		bindEvent: function() {
			combox.initBySelect('#fm .awdCombox', url.getDictionary);
			$("#kfsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
		},
		submit: function(url, row, callback) {
			var zjhms = new Array();
			var lxdhs = new Array();
			var zjhmYZ=true;
			var zjhm = $("input[name='zjhm']").each(function() {
				if($(this).val()){
					var zjlxVal=$(this).parent().parent().parent().find("input[name='zjlx']").val();
					if(zjlxVal=='11'){
						if(isIDCard($(this).val())){
							zjhms.push($(this).val());
							zjhmYZ=true;
						}else {
							//utils.alert('第'+($(this).index()+1)+'行的证件号格式不对！');
							zjhmYZ=false;
							utils.alert('证件号格式不对！');

						}
					}
				}else {
					zjhms.push('');
				}




			});
			var lxdhYZ=true;
			var lxdh = $("input[name='lxdh']").each(function() {
				if($(this).val()){
					if(isTelNum($(this).val())){
						lxdhs.push($(this).val());
						lxdhYZ=true;
					}else {
						lxdhYZ=false;
						utils.alert('电话号格式不对！');

					}
				}else {
					lxdhs.push('');
				}


			});
			if(zjhmYZ&&lxdhYZ){
				/**先校验form */
				if ($('#fm').form('validate')) {
					var xms = new Array();
					var xbs = new Array();
					var csrqs = new Array();
					var zjlxs = new Array();


					var xm = $("input[textboxname='xm']").each(function() {
						xms.push($(this).val());
					});
					var xb = $("input[textboxname='xb']").each(function() {
						xbs.push($(this).val());
					});
					var csrq = $("input[textboxname='csrq']").each(function() {
						csrqs.push($(this).val());
					});
					var zjlx = $("input[textboxname='zjlx']").each(function() {
						zjlxs.push($(this).val());
					});


					var str = xms.join(",");
					var strs = str.substring(1, str.length);
					var xmarr = strs.split(',');

					var tbr = common.info.user.loginname;
					var date = new Date().Format('yyyy-MM-dd');
					var tbrq=date;
					var rybh = $("#rybh").val();
					var jsbh = $("#jsbh").val();
					var kfsj = $("#kfsj").val();
					var kflx = $("#kflx").val();
					var cgdx = $("#cgdx").val();
					var cgrs = $("#cgrs").val();
					var dwmc = $("#dwmc").val();
					var sqly = $("#sqly").val();
					var bz = $("#bz").val();
					var jbxx = {};
					var list = new Array();
					for (var i = 0; i < xmarr.length; i++) {
						jbxx = {
							"tbr": tbr,
							"tbrq": tbrq,
							"rybh": rybh,
							"jsbh": jsbh,
							"kfsj": kfsj,
							"kflx": kflx,
							"cgdx": cgdx,
							"cgrs": cgrs,
							"dwmc": dwmc,
							"xm": xmarr[i],
							"xb": xbs[i],
							"csrq": csrqs[i],
							"zjlx": zjlxs[i],
							"zjh": zjhms[i],
							"lxdh": lxdhs[i],
							"sqly": sqly,
							"bz": bz
						};
						list.push(jbxx);
					}
					var data = JSON.stringify(list);
					util.ajax({
						url: url,
						data: {
							jsonList: data
						},
						func: function(data) {
							if (data.success) {
								utils.alert(data.msg);
								if (tools.isFunction(callback)) {
									callback();

								}
								utils.closeWin(popwin);
							} else {
								utils.alert(data.msg);
							}
						}
					});
				} else {
					utils.alert('表单数据格式不对！');
				}
			}


		}
	};
	return main;
});
