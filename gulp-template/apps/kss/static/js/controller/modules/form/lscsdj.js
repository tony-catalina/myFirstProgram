define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_lscsCsdj.html');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, rows, callback) {
            var html = formtpl('form/_lscsCsdj', data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '临时出所登记',
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
                ['监室号', '姓名', '性别', '出生日期'],
                ['jsh', 'xm', 'xbString', 'csrq']
            ]);

        },
        submit: function (url, jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var arr = [];
                for (var j = 0; j < jbxx.length; j++) {
                    var csyy = $("input[name='csyy']").val();
                    var cssj = $("input[name='cssj']").val();
                    var csqx = $("input[name='csqx']").val();
                    var yjmj = $("input[name='yjmj']").val();
                    var csdriver = $("input[name='csdriver']").val();
                    var arrJson = {
                        jbxxXm: jbxx[j].xm,
                        jbxxXb: jbxx[j].xb,
                        jbxxBm: jbxx[j].bm,
                        jbxxJsh: jbxx[j].jsh,
                        rybh: jbxx[j].rybh,
                        snbh: jbxx[j].snbh,
                        jsh: jbxx[j].jsh,
                        jsbh: jbxx[j].jsbh,
                        ywlcid: jbxx[j].ywlcid,
                        taskid: jbxx[j].taskid,
                        "csyy": csyy,
                        "cssj": cssj,
                        "csqx": csqx,
                        "yjmj": yjmj,
                        "csdriver": csdriver
                    };
                    arr.push(arrJson);
                }
                var jsonarr = JSON.stringify(arr);
                // var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: { data: jsonarr },
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                                $('#table').datagrid("reload")
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