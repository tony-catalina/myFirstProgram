define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_lscsCs.html');
    var formTable = require('modules/Form_Table');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, rows, callback) {
            var html = formtpl('form/_lscsCs', data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '出所',
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
                ['监室号', '姓名', '涉嫌罪名', '拟定出所时间', '出所原因', '所领导意见','出所去向'],
                ['jsh', 'xm', 'ayString', 'cssj', 'csyyString', 'ldpsxx.ldyj','csqx']
            ]);
        },
        submit: function (url, _jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var arr = [];
                for (var j = 0; j < _jbxx.length; j++) {
                    var arrJson = {
                        xm: _jbxx[j].xm,
                        xb: _jbxx[j].xb,
                        bm: _jbxx[j].bm,
                        rybh: _jbxx[j].rybh,
                        snbh: _jbxx[j].snbh,
                        jsh: _jbxx[j].jsh,
                        jsbh: _jbxx[j].jsbh,
                        ywlcid: _jbxx[j].ywlcid,
                        taskid: _jbxx[j].taskid,
                        ldspid: _jbxx[j].ldpsxx.lscs_id
                    };
                    arr.push(arrJson);
                }
                var arrStr = JSON.stringify(arr);
                var data = $("#fm").serializeObject();
                var dataStr = JSON.stringify(data);
                // var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: { data_Jbxx: arrStr, data_ywxx: dataStr },
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                // 弹窗确认后关闭弹窗
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