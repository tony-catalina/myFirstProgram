define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_cwth.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_cwth', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '现金退还',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent();
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#blr").textbox().textbox('setValue', common.info.user.loginname);
            $("#blrq").datetimebox('setValue', (new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#allzy").textbox().textbox('setValue', '出所退还金额');

            var xjth = localStorage.getItem("xjth");
            $("#xfqje").textbox().textbox('setValue', xjth);
            $("#xfje").textbox().textbox('setValue', xjth);
            $("#currency").textbox().textbox('setValue', '人民币');
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.currency = '156';
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                                $('#table').datagrid('reload')
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