define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_aqjcSldqr.html');
    var common=require('common');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_aqjcSldqr', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '安全检查-所领导确认',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent();
                    },
                    yes: function () {
                        main.submit(url, dataall, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#qrldfm").textbox("setValue",common.info.user.loginname);
            var nowDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            console.log(nowDate);
            $("#qrsjfm").datetimebox("setValue",nowDate);

        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var newDates=(new Date()).Format("yyyy-MM-dd");
                var data = util.form2Json('fm');
                data.id=row.id;
                data.tbr=common.info.user.loginname;
                data.tbrq=newDates;
                data.cljd='0';


                util.ajax({
                    url: url,
                    data: data,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();

                            }
                            utils.closeWin(popwin);
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