define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tsclLdsp.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common = require('common');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_tsclLdsp',data);
            popwin = utils.showWin({
                title: '领导审批',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    }, 0);
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm.awdCombox', url.getDictionary);
            $("#spyjfm").textbox().textbox("setValue", "同意");
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $("#spyjfm").textbox().textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#spyjfm").textbox().textbox("setValue", "不同意");
                }
            });
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