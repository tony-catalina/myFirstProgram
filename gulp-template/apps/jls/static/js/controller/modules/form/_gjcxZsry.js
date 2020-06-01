define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_gjcxZsry.html');
    var popwin;
    var common=require('common');
    var combogrid = require('awd/easyui/combogrid');
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_gjcxZsry', dataall);
            popwin = utils.showWin({
                title: '在所人员查询',
                area: ['100%', '100%'],
                content: html,
                maxmin: true,
                buttons: ['高级查询', '清空', '关闭'],
                success: function () {
                    $.parser.parse('#fm');
                    main.bindEvent(dataall);
                },
                yes: function () {
                    main.submit(url, dataall,callback);
                }
            });
        },
        bindEvent: function () {

            $(".btn").click(function () {
                $(".hideDiv").toggle();
            });
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            combogrid.initPageClass('#fm .awdCombogrid', url.getDictionaryPage);
            
            $('#gjcx_jsly').combobox({
                data: [
                    { label: '该人健康不合格', value: '该人健康不合格' },
                    { label: '法律文书不全', value: '法律文书不全' },
                    { label: '该人健康不合格，法律文书不全', value: '全部' }
                ],
                valueField: 'value',
                textField: 'label'
            })
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.tbr = common.info.user.loginname;
                data.tbrq = (new Date()).Format('yyyy-MM-dd');
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