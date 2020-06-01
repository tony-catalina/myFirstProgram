define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var formtpl = require('services/form/_jcscLsqk.html');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_jcscLsqk', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '数据录入',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent();
                    },
                    yes: function () {
                        main.submit(url, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            var htmlcontent = '<tr>'+
            '<td>111</td>' +
                '<td>111</td>' +
                '<td>111</td>' +
                '</tr >'
            $('#ptldxx').append(htmlcontent)
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                            }
                            utils.closeWin(popwin);
                            grid.reload('table')
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