define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_lscsLdsp.html');
    var formTable = require('modules/Form_Table');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, rows, callback) {
            var html = formtpl('form/_lscsLdsp', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '领导意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function (){
                            $.parser.parse('#fm');
                            main.bindEvent(rows);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, rows, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
            
        },
        bindEvent: function (_jbxx) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            formTable.init("Table_ryxx", _jbxx, [
                ['监室号', '姓名', '涉嫌罪名', '出所时间', '关押期限','出所去向'],
                ['jsh', 'xm', 'ayString', 'cssj', 'gyqx','csqx']
            ]);
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $('#ldyj').textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $('#ldyj').textbox("setValue", "不同意");
                }
            });
        },
        submit: function (url, jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var arr = [];
                for (var j = 0; j < jbxx.length; j++) {
                    var arrJson = {
                        xm: jbxx[j].xm,
                        xb: jbxx[j].xb,
                        bm: jbxx[j].bm,
                        rybh: jbxx[j].rybh,
                        snbh: jbxx[j].snbh,
                        jsh: jbxx[j].jsh,
                        jsbh: jbxx[j].jsbh,
                        ywlcid: jbxx[j].ywlcid,
                        taskid: jbxx[j].taskid,
                        sqyy: jbxx[j].ldpsxx.sqyy,
                        ldspid: jbxx[j].ldpsxx.lscs_id,
                    };
                    arr.push(arrJson);
                }
                var arrStr = JSON.stringify(arr);
                var data = $("#fm").serializeObject();
                var dataStr = JSON.stringify(data);
                util.ajax({
                    url: url,
                    data: { data_Jbxx: arrStr, data_ywxx: dataStr },
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