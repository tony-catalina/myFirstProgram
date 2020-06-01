define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jsswQtbl.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var common = require('common');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jsswQtbl', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '前台办理',
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
                        main.submit(url, callback);
                    }
                });
            }
        },
        bindEvent: function () {
             combox.initBySelect('#fm .awdCombox', url.getDictionary);
             $('#qtblrfm').textbox().textbox('setValue',common.info.user.loginname);
             $("#qtblsjfm").datetimebox("setValue",(new Date()).Format('yyyy-MM-dd hh:mm:ss'));

        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                // var postData = util.form2Json('fm');
                var data = $("#fm").serialize();
                var ss = data.split("&");
                var datas = "";
                var flag = $("input[name=qtwpqr]:checked").val();
                //  submitLoad();
                if (1 == flag) {
                    ss[ss.length + 1] = "ywzt=6";
                } else {
                    ss[ss.length + 1] = "ywzt=9";
                }
                for (var i = 0; i < ss.length; i++) {
                    datas += ss[i] + "&";
                }
                var dtatss = datas.substring(0, datas.length - 1);
                // if (postData.qtwpqr == '1'){

                // }
                util.ajax({
                    url: url,
                    data: dtatss,
                    func: function (data) {
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
