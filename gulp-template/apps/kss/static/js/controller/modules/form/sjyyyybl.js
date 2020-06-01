define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_sjyyYybl.html');
    var url = require('modules/url');
    var common=require('common');
    var grid=require('awd/easyui/grid');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_sjyyYybl', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '移押办理',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent();
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url,callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#asblr").textbox().textbox('setValue',common.info.user.loginname);
            $.ajax({
                url: url.kssList,
                type: "POST",
                success: function (data) {
                    var js = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        js.push({
                            label: data.rows[i].jsbh,
                            value: data.rows[i].kssmc
                        });
                    }
                    $("#bsbh").combobox("loadData", js);

                }
            });

        },
        submit: function (url, callback) {
            console.log(utils)
            /**先校验form */
            if ($('#fm').form('validate')) {
               // debugger
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