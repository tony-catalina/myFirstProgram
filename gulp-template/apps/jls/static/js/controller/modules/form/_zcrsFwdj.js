define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsFwdj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zcrsFwdj',data);
            popwin = utils.showWin({
                title: '正常入所-附物登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    $.parser.parse('#fm');
                    main.bindEvent(data);
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#jbrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#jbmj").textbox().textbox('setValue',common.info.user.loginname);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                let SubmitArray  = new Array();
                var postData = util.form2Json('fm');
                console.log('行数据');
                console.log(data);
                console.log('判断');
                console.log(postData.mc2);
                for(let i = 1 ; i <= 10 ; i++){
                    let transData = {};
                        transData = {
                            "tbr": postData.jbmj,
                            "tbrq": postData.jbrq,
                            "rybh": data.rybh,
                            "ywlcid": data.ywlcid,
                            "taskid": data.taskid,
                            "mc": postData.mc+i,
                            "sl": postData.sl+i,
                            "wpdw": postData.wpdw+i,
                            "tz": postData.tz+i,
                            "bz": postData.bz+i,
                            "wplx":postData.wplx+i,
                            "djr": postData.jbmj,
                            "djrq": postData.jbrq
                        }
                        SubmitArray.push(transData);
                }
                let Submitdata=JSON.stringify(SubmitArray);
                console.log("打印最终结果");
                console.log(Submitdata);

                util.ajax({
                    url: url,
                    data: {"jsonList":Submitdata,
                           "taskid":data.ywlcid,
                           "ywlcid":data.ywlcid},
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