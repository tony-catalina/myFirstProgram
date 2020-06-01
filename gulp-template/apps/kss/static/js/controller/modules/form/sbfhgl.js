define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_sbfglTj.html');
    var url = require('modules/url');
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_sbfglTj', data);
            popwin = utils.showWin({
                title: '识别服号管理',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent();
                    }, 0);
                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);

        },
        submit: function (url, row, callback) {
            var yfh = $("#sbfh").val();
            $.ajax({
                url: url.findCountBySbfh,
                data: { yfh: yfh },
                success: function (result) {
                    console.log("打印识别服号存在与否")
                    console.log(result)
                    if (result.result != "0") {
                        $("#sbfh").textbox('setValue', '');
                        utils.alert('该识别服号已存在！');
                    } else {
                        if ($('#fm').form('validate')) {
                            var data = util.form2Json('fm');
                            $.ajax({
                                type: "POST",
                                url: url.addsbfhgl,
                                data: data,
                                success: function (data) {
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
                            })
                        } else {
                            utils.alert('表单数据格式不对！');
                        }
                    }
                }
            })
        }
    };
    return main;
});