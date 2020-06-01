define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_yqZjhd.html');
    var url = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_yqZjhd', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '证件核对',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#blr").textbox().textbox('setValue',common.info.user.loginname);
            $('#fm .awdCombox').each(function () {
                var $this = $(this);
                var value = $this.attr('id');
                console.log(data[value + 'String'])
                if (data[value + 'String']) {
                    if ($this.hasClass('awdCombox')) {
                        $this.combobox().combobox('setText', data[value + 'String']);
                    } else {
                        $this.combogrid().combogrid('setText', data[value + 'String']);
                    }
                }

            });

        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var dataObj = $("#fm").serializeObject();
                var formData = JSON.stringify(dataObj);
                // var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: { jbxx: JSON.stringify(row), data: formData },
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