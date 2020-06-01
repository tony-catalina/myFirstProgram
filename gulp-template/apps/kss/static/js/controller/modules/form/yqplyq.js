define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_yqPlyq.html');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;

    var main = {

        init: function (url, data, rows, callback) {
            var html = formtpl('form/_yqPlyq', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '批量延期',
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
            $("#pzr").textbox().textbox('setValue',common.info.user.loginname); 


            formTable.init("Table_ryxx", _jbxx, [
                ['监室号', '姓名', '关押期限', '办案环节', '当前办案单位', '当前办案单位类型'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'badw', 'dwlxString']
            ]);

        },
        submit: function (url, jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var arr = [];
                for (var i = 0; i < jbxx.length; i++) {//提取需要的人员基本信息放入json对象
                    var arrJson = {
                        xm: jbxx[i].xm,
                        xb: jbxx[i].xb,
                        bm: jbxx[i].bm,
                        rybh: jbxx[i].rybh,
                        snbh: jbxx[i].snbh,
                        jsh: jbxx[i].jsh,
                        jsbh: jbxx[i].jsbh,
                        ywlcid: jbxx[i].ywlcid,
                        taskid: jbxx[i].taskid,
                        yqid: jbxx[i].ldpsxx.yqId,
                        ygyqx: jbxx[i].gyqx,
                    };
                    arr.push(arrJson);//将人员基本信息的json对象放入数组
                }
                var arrStr = JSON.stringify(arr);//人员基本信息生成json字符串
                var _data = $("#fm").serializeObject();
                var dataStr = JSON.stringify(_data);//填写的业务信息生成json字符串
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