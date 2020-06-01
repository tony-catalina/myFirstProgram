// define(function (require) {
// 	require('modules/commFun');
// 	var tools = require('awd/jquery/tools');
// 	var util = require('awd/easyui/util');
// 	var utils = require('awd/layui/utils');
// 	var combox = require('awd/easyui/combox');
// 	var url = require('modules/url');
// 	var formtpl = require('services/form/_zcrsKsrs.html');
// 	var popwin;
// 	var main = {

// 		init: function (url, data, row, callback) {

// 			var dataall = {};
// 			Object.assign(dataall, data, row);
// 			var html = formtpl('form/_zcrsKsrs', dataall);
// 			popwin = utils.showWin({
// 				title: '快速入所',
// 				area: ['90%', '600px'],
// 				content: html,
// 				maxmin: true,
// 				buttons: ['保存', '取消'],
// 				success: function () {
// 					$.parser.parse('#fm');
// 					main.bindEvent();
// 				},
// 				yes: function () {
// 					main.submit(url, row, callback);
// 				}
// 			});
// 		},
// 		bindEvent: function () {
// 			combox.initBySelect('#fm .awdCombox', url.getDictionary);
// 		},
// 		submit: function (url, row, callback) {
// 			// var num = document.getElementById('sgfm').value;
// 			// if (!(/^6[0-9]$|^[6-9]\d$|^1\d{2}$|^2\d{2}$|^3\d{2}$/.test(num))) { //大于60小于400
// 			// 	$.messager.alert("提示", "身高输入项的最小值是 60", "info");
// 			// 	return false;
// 			// }
// 			// var num = document.getElementById('tzfm').value;
// 			// if (!(/^3[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
// 			// 	$.messager.alert("提示", "体重输入项的最小值是 30", "info");
// 			// 	return false;
// 			// }
// 			// var num = document.getElementById('zcfm').value;
// 			// if (!(/^1[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
// 			// 	$.messager.alert("提示", "足长输入项的最小值是 10", "info");
// 			// 	return false;
// 			// }
// 			var a = $("#xyfm").val();
// 			if (a == "") {
// 				$.messager.alert("提示", "血压不能为空", "info");
// 				return false;
// 			} else {
// 				var as = a.split("/");
// 				if (as.length != 2) {
// 					$.messager.alert("提示", "血压格式不正确", "info");
// 					return false;
// 				} else {
// 					var b = new RegExp("^[0-9]+$");;
// 					if (!b.test(as[0]) || !b.test(as[1])) {
// 						$.messager.alert("提示", "血压格式不正确", "info");
// 						return false;
// 					}
// 				}
// 			}
// 			/**先校验form */
// 			if ($('#fm').form('validate')) {
// 				var dataObj = $("#fm").serializeObject();
// 				//var formData = JSON.stringify(dataObj);
// 				var ysyj = $("#ysyj").combobox("getValue");
// 				var brbs = $("#jwbsfm").val();
// 				//获取照片文件
// 				var pic1 = $("#pic1fm")[0].files[0];
// 				var pic2 = $("#pic2fm")[0].files[0];
// 				var pic3 = $("#pic3fm")[0].files[0];
// 				var sendDate = new FormData();
// 				sendDate.append('pic1', pic1);
// 				sendDate.append('pic2', pic2);
// 				sendDate.append('pic3', pic3);
// 				//传入流程必要参数
// 				sendDate.append('taskid', row.taskid);
// 				sendDate.append('jkzkString', row.jkzkString);
// 				sendDate.append('ysyj', ysyj);
// 				sendDate.append('brbs', brbs);
// 				sendDate.append('formData', JSON.stringify(dataObj));
// 				util.ajax({
// 					url: url,
// 					data: sendDate,
// 					processData: false,
// 					contentType: false,
// 					func: function (data) {
// 						if (data.success) {
// 							utils.alert(data.msg);
// 							if (tools.isFunction(callback)) {
// 								callback();
// 								utils.closeWin(popwin);
// 							}
// 						} else {
// 							utils.alert(data.msg);
// 						}
// 					}
// 				});
// 			} else {
// 				utils.alert('表单数据格式不对！');
// 			}


// 		}
// 	};
// 	return main;
// });
define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsKsrs.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zcrsKsrs',data);
            popwin = utils.showWin({
                title: '正常入所-快速入所',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    $.parser.parse('#fm');
                    main.bindEvent(data);
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.zjlx='11';
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
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

        }
    };
    return main;
});