define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zyafxg.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var main = {
        init: function (url, data,subdata, callback) {
            console.log('data')
            console.log(data)
            var html = formtpl('form/_zyafxg', data);
            popwin = utils.showWin({
                title: '修改重要案犯',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent(subdata);
                    }, 0);
                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function (data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: postData,
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