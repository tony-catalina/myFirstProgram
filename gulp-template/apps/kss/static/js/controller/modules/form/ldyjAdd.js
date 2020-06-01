define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_csglLdsp.html');
    var formTable = require('modules/Form_Table');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, rows, callback) {
            var html = formtpl('form/_csglLdsp', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '领导意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
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
                ['监室号', '姓名', '关押期限', '办案环节', '拟出所日期','出所原因'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'cssj','csyyString']
            ]);
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $("#ldyj").textbox("setValue", "同意出所");
                } else if (this.value == '2') {
                    $("#ldyj").textbox("setValue", "不同意出所");
                }
            });
        },
        submit: function (url, _jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var rybhs = "";
                var taskids = "";
                var ywlcids = "";
                var sqyys = "";
                var xms = "";
                var jshs = "";
                for (i = 0; i < _jbxx.length; i++) {
                    if (rybhs != "") {
                        rybhs = rybhs + "," + _jbxx[i].rybh;
                    } else {
                        rybhs = _jbxx[i].rybh;
                    }
                    if (taskids != "") {
                        taskids = taskids + "," + _jbxx[i].taskid;
                    } else {
                        taskids = _jbxx[i].taskid;
                    }
                    if (ywlcids != "") {
                        ywlcids = ywlcids + "," + _jbxx[i].ywlcid;
                    } else {
                        ywlcids = _jbxx[i].ywlcid;
                    }
                    if (sqyys != "") {
                        sqyys = sqyys + "-" + _jbxx[i].csyyString;
                    } else {
                        sqyys = _jbxx[i].csyyString;
                    }
                    if (xms != "") {
                        xms = xms + "," + _jbxx[i].xm;
                    } else {
                        xms = _jbxx[i].xm;
                    }
                    if (jshs != "") {
                        jshs = jshs + "," + _jbxx[i].jsh;
                    } else {
                        jshs = _jbxx[i].jsh;
                    }
                }
                console.log('rybhs')
                console.log(rybhs)
                var data = $("#fm").serialize() + "&rybh=" + rybhs + "&taskid=" + taskids + "&ywlcid=" + ywlcids;
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            $('#fm').form('clear');
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                               
                                // $('#table').datagrid('reload');
                               
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