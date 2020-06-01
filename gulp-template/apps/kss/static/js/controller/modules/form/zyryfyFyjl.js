define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zyryfyjl.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_zyryfyjl', data);
            popwin = utils.showWin({
                title: '发药记录',
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
                    main.submit(url, data, callback);

                }
            });
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $(".tjyp").on("click", function () {
                $('#ypnr').append(
                    '<tr>' +
                    '<td>' +
                    '</td>' +
                    '<td>药品名称</td>' +
                    '<td>发药单位</td>' +
                    '<td>数量</td>' +
                    '</tr >'
                )
            })
            $(".scyp").on("click", function () {
                layer.alert("选中删除");

            })
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