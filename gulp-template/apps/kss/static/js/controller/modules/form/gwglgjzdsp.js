define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_gwglGjzdsp.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,rows,callback) {
            var html = formtpl('form/_gwglGjzdsp',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '管教中队审批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(rows);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, rows, callback);
                    }
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#blrq").datetimebox("setValue",(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#blr").textbox("setValue",common.info.user.loginname);

            $("#spyjnrIDU").textbox("setValue", "同意");
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $("#spyjnrIDU").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#spyjnrIDU").textbox("setValue", "不同意");
                }
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var psbz = $("input[name=psbz]:checked").val();
                var spyj=$("#spyjnrIDU").textbox("getValue");
                var blr = $("#blr").textbox("getValue");
                var blsj = $("#blrq").datetimebox("getValue");
                var sendData={};
                sendData.list=JSON.stringify(data);
                sendData.flag="1";
                sendData.psbz=psbz;
                sendData.spyj=spyj;
                sendData.blr=blr;
                sendData.blsj=blsj;

                util.ajax({
                    url: url,
                    type:'post',
                    data: sendData,
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