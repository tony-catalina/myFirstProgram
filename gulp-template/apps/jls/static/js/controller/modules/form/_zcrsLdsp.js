define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsLdsp.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var isOpen = false; //弹框默认不打开
    var common = require('common');
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_zcrsLdsp', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '正常入所-领导审批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
                            return p.then(function() {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'), function(el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                            }).then(function() {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url, data, callback);
                    }
                }, function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            $("#ldqmrq").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#ldqm").textbox().textbox('setValue', common.info.user.loginname);
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);

            $("#spyjnrIDU").textbox("setValue", "同意拒收该人员。");
            $('input[type=radio][name=psbz]').change(function() {
                if (this.value == '1') {
                    $("#spyjnrIDU").textbox("setValue", "同意拒收该人员。");
                } else if (this.value == '2') {
                    $("#spyjnrIDU").textbox("setValue", "不同意拒收该人员。");
                }
            });
        },
        submit: function(url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.processName = 'jls_zcrs_ldsp';
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