define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_dtfxJlcx.html');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            // var dataall = {};
            // Object.assign(dataall, data, row);
            var html = formtpl('form/_dtfxJlcx', data);
            if(!isOpen) {
                layer.open({
                    type: 1,
                    title: '数据录入',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    btn: ['关闭'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent();
                    },

                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
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