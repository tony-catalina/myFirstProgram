define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wlrydjLkdj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_wlrydjLkdj', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '外来人员登记-离开登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    },
                    yes: function() {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url, data, callback) {
            /**先校验form */
            var drsj = new Date($("#drsj").datetimebox('getValue').replace('-', '/'));
            var dcsj = new Date($("#dcsj").datetimebox('getValue').replace('-', '/'));
            var lksj = new Date($("#lksj").datetimebox('getValue').replace('-', '/'));
            if (dcsj < drsj || lksj < drsj) {
                utils.alert("带出时间和带入时间应均大于带入时间");
            } else
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.id = data.id;
                postData.sfls = '1';
                util.ajax({
                    url: url,
                    data: postData,
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