define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_lshjAqjc.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common = require('common');
    var isOpen=false;
    var popwin;
   // var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_lshjAqjc',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '律师会见-会见完毕安全检查',
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
            $("#tbr").textbox().textbox('setValue',common.info.user.loginname);
            $("#tbrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#jssj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.lshjhjdd=data.ldpsxx.lshj_hjdd;
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