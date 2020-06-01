define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_jqglAdd.html');
    var jlcl = require('services/form/_jqglJlcl.html');
    var url = require('modules/url');
    var popwin;
    var main = {

        init: function (url, data, callback) {
            if (data.btnid == 'del') {
                var html = jlcl('form/_jqglJlcl', data);
                popwin = utils.showWin({
                    title: '记录处理',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $('#cljg').val(data.cljg)
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent();
                    }, 0);
                    },
                    yes: function () {
                        main.submit(url, callback);
                    }
                });
            } else {
                var html = formtpl('form/_jqglAdd', data);
                popwin = utils.showWin({
                    title: '警情管理',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $('#fbdd').val(data.fbdd)
                        $('#ly').val(data.ly)
                        setTimeout(function (){
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
        },
        submit: function (url, callback) {
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