define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_gwjjbJbqr.html');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var main = {

        init: function(url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_gwjjbJbqr', dataall);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '接班确认登记表',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
                            return p.then(function() {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox'), function(el) {
                                    $.parser.parse(el.parentElement);
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
                        main.submit(url, dataall, callback);
                    }
                }, function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            $("#absj").datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
        },
        submit: function(url, row, callback) {
            /**先校验form */
            var absj = new Date($("#absj").datetimebox('getValue').replace('-', '/'));
            var jbsj = new Date($("#jbsj").datetimebox('getValue').replace('-', '/'));
            if (absj < jbsj) {
                utils.alert("接班时间应该晚于交班时间!");
            } else
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.tbr = $("#jbry").textbox('getValue');
                data.tbrq = (new Date()).Format('yyyy-MM-dd');
                data.id = row.id;
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