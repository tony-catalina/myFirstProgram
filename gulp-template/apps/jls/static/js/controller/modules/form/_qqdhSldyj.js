define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_qqdhSldyj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    //var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_qqdhSldyj',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '亲情电话-所领导意见',
                    area: ['90%', '600px'],
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
        bindEvent: function() {
			$("#szyjnr").textbox("setValue", "同意");
			$('input[type=radio][name=szyj]').change(function () {
			    if (this.value == '1') {
			        $("#szyjnr").textbox("setValue", "同意");
			    } else if (this.value == '2') {
			        $("#szyjnr").textbox("setValue", "不同意");
			    }
			});
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
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