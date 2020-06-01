define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_dwkfWbdj.html');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_dwkfWbdj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '对外开放-完毕登记',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function (row) {
            combox.initBySelect('#fm .awdCombox', url.getProcessTaskList);
            $("#fzr").textbox().textbox('setValue',common.info.user.loginname);
            $("#jssj").datetimebox('setValue',new Date().Format('yyyy-MM-dd hh:mm:ss'));
            var htmlcontent = '<tr>' +
            	'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm0 == undefined ? "" : row.ldpsxx.ryxx_xm0) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_xb0 == undefined ? "" : row.ldpsxx.ryxx_xb0) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_csrq0 == undefined ? "" : row.ldpsxx.ryxx_csrq0) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjlx0 == undefined ? "" : row.ldpsxx.ryxx_zjlx0) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjh0 == undefined ? "" : row.ldpsxx.ryxx_zjh0) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_lxdh0 == undefined ? "" : row.ldpsxx.ryxx_lxdh0) + '</td>' +
            	'</tr >' +
            	'<tr>' +
            	'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm1 == undefined ? "" : row.ldpsxx.ryxx_xm1) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_xb1 == undefined ? "" : row.ldpsxx.ryxx_xb1) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_csrq1 == undefined ? "" : row.ldpsxx.ryxx_csrq1) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjlx1 == undefined ? "" : row.ldpsxx.ryxx_zjlx1) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjh1 == undefined ? "" : row.ldpsxx.ryxx_zjh1) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_lxdh1 == undefined ? "" : row.ldpsxx.ryxx_lxdh1) + '</td>' +
            	'</tr >' +
            	'<tr>' +
            	'<td style="height:30px;">' + (row.ldpsxx.ryxx_xm2 == undefined ? "" : row.ldpsxx.ryxx_xm2) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_xb2 == undefined ? "" : row.ldpsxx.ryxx_xb2) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_csrq2 == undefined ? "" : row.ldpsxx.ryxx_csrq2) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjlx2 == undefined ? "" : row.ldpsxx.ryxx_zjlx2) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_zjh2 == undefined ? "" : row.ldpsxx.ryxx_zjh2) + '</td>' +
            	'<td>' + (row.ldpsxx.ryxx_lxdh2 == undefined ? "" : row.ldpsxx.ryxx_lxdh2) + '</td>' +
            	'</tr >'
            $('#cjryxx').append(htmlcontent)
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var datas = util.form2Json('fm');
				datas.rybh = row.ldpsxx.dwkf_uuid;
				datas.jsbh = row.ldpsxx.jsbh;
				datas.ywlcid = row.ywlcid;
				datas.taskid = row.taskid;
				datas.tbr = common.info.user.loginname;
				var tbrq = new Date().Format('yyyy-MM-dd');
				datas.tbrq = tbrq;
                util.ajax({
                    url: url,
                    data: datas,
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
    };
    return main;
});