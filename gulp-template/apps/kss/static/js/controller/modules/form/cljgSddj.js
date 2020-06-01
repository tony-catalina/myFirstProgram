define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var url = require('modules/url');
    var formtpl = require('services/form/_cljgSddj.html');
    var common=require('common');
    var popwin;
    var main = {

        init: function (url, data,row,callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
			var html = formtpl('form/_cljgSddj', dataall);
            popwin = utils.showWin({
                title: '执行通知书送达登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent();
                    }, 0);
                },
                yes: function () {
                    main.submit(url, callback);
                }
            });
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#updator").textbox().textbox('setValue',common.info.user.loginname); 
            $("#updatetime").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
				//var data =$("#fm").serialize();
                util.ajax({
                    url: url,
                    data: data,
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