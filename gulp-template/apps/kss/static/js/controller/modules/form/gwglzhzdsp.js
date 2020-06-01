define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_gwglZhzdsp.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, addData1,rows, callback) {
            var addData = {};
            Object.assign(addData, data, addData1);
            var html = formtpl('form/_gwglZhzdsp', addData);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '综合中队审批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent();
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, rows, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary); 

            // $('input[type=radio][name=psbz]').change(function () {
            //     if (this.value == '1') {
            //         $("input :radio[value='1']").attr('checked', 'true');
            //         $("input :radio[value='2']").removeAttr('checked');
            //     } else if (this.value == '2') {
            //         $("input :radio[value='2']").attr('checked', 'true');
            //         $("input :radio[value='1']").removeAttr('checked');
            //     }
            // });
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $("#spyjnrIDU").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#spyjnrIDU").textbox("setValue", "不同意");
                }
            });

        },
        submit: function (url, _jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                // var postData = util.form2Json('fm');
                var psbz = $("input[name=psbz]:checked").val();
                var spyj = $("#spyjnrIDU").textbox("getValue");
                var blr = $("#blrIDU").textbox("getValue");
                var blsj = $("#blrqIDU").datetimebox("getValue");
                util.ajax({
                    url: url,
                    data: {
                        "list": JSON.stringify(_jbxx),
                        "flag": "3",
                        "psbz": psbz,
                        "spyj": spyj,
                        "blr": blr,
                        "blsj": blsj,
                    },
                    func: function (data) {
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