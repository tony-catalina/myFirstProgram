define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_csglCs.html');
    var formTable = require('modules/Form_Table');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, rows, callback) {
            console.log(rows)
            var html = formtpl('form/_csglCs', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '处理出所',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
                            $.parser.parse('#fm');
                        }, 0);
                        main.bindEvent(rows);
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
                ['监室号', '姓名', '关押期限', '办案环节', '拟出所日期', '出所原因'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'cssj', 'csyyString']
            ]);
        },
        submit: function (url, rows, callback) {
            var taskid = "";
            var ywlcid = "";
            var jshs = "";
            var rybhs = "";
            for (var i = 0; i < rows.length; i++) {
                taskid += rows[i].taskid + ",";
                ywlcid += rows[i].ywlcid + ",";
                jshs += rows[i].jsh + ",";
                rybhs += rows[i].rybh + ",";
            }

            if (taskid.length > 0) {
                taskid = taskid.substr(0, taskid.length - 1);
            }
            if (ywlcid.length > 0) {
                ywlcid = ywlcid.substr(0, ywlcid.length - 1);
            }
            if (jshs.length > 0) {
                jshs = jshs.substr(0, jshs.length - 1);
            }
            if (rybhs.length > 0) {
                rybhs = rybhs.substr(0, rybhs.length - 1);
            }
            /**先校验form */
            if ($('#fm').form('validate')) {
                var cssj = $('#cssj').datetimebox('getValue')
                var blsj = $('#blsj').datetimebox('getValue')
                var dlmj = $('#dlmj').textbox('getValue')
                util.ajax({
                    url: url,
                    data: {
                        taskid: taskid,
                        ywlcid: ywlcid,
                        jshs: jshs,
                        rybhs: rybhs,
                        cssj: cssj,
                        blsj: blsj,
                        dlmj: dlmj,
                        processDefinitionKey: ''
                    },
                    func: function (data) {
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