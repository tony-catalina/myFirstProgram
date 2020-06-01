define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_xsjlxg.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtree');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_xsjlxg', data);
            popwin = utils.showWin({
                title: '巡视记录修改',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {

                    setTimeout(function () {
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    }, 0);
                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function (data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            comboxtree.initBySelect('#fm .jsh');
            $("#xsfwfm").combobox({
                loadFilter: function (data) {
                    return data.result;
                }
            });
            $('#xslx').combobox('setValue', data.xslx)
            $('#xslx').combobox('setText', data.xslxString)


        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id = data.id;
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
