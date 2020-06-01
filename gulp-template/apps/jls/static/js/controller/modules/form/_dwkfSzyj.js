define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_dwkfSzyj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_dwkfSzyj',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '对外开放-所长意见',
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
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $('#szqm').textbox().textbox('setValue',common.info.user.loginname);
            $('#szqmsj').datetimebox('setValue',new Date().Format('yyyy-MM-dd hh:mm:ss'));
            $('#szyjnr').textbox().textbox('setValue','同意');

            $('input[type=radio][name=szyj]').change(function () {
                if (this.value == '1') {
                    $("#szyjnr").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#szyjnr").textbox("setValue", "不同意");
                }
            });
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
				var tbrq=data.ldpsxx.dwkf_createtime;
				var str=tbrq.substring(0,10);
				postData.tbrq=str;
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