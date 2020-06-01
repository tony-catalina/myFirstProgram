define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_qjhsJkjc.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_qjhsJkjc',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '正常入所-健康检查',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            }).then(function () {
                                var len =  document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve()); 
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url,data, callback) {
            
                var sgNum = document.getElementById('sgfm').value;
                if (sgNum > 300 || sgNum < 30) { //大于30小于300
                    $.messager.alert("提示", "身高应在30~300之间", "info");
                    $("#sgfm").textbox('setValue', '');
                    return false;
                }
                var tzNum = document.getElementById('tzfm').value;
                if (tzNum > 300 || tzNum < 30) {
                    $.messager.alert("提示", "体重应在30~300之间", "info");
                    $("#tzfm").textbox('setValue', '');
                    return false;
                }
                var zcNum = document.getElementById('zcfm').value;
                if (zcNum > 100 || zcNum < 10) {
                    $.messager.alert("提示", "足长应在10~100之间", "info");
                    $("#zcfm").textbox('setValue', '');
    
                    return false;
                }
                
    
                var a = $("#xyfm").val();
                if (a == "") {
                    $.messager.alert("提示", "血压不能为空", "info");
                    return false;
                } else {
                    var as = a.split("/");
                    if (as.length != 2) {
                        $.messager.alert("提示", "血压格式不正确", "info");
                        $("#xyfm").textbox('setValue', '');
                        return false;
                    } else {
                        var b = new RegExp("^[0-9]+$");;
                        if (!b.test(as[0]) || !b.test(as[1])) {
                            $.messager.alert("提示", "血压格式不正确", "info");
                            $("#xyfm").textbox('setValue', '');
                            return false;
                        }
                    }
                }
                var xlNum = document.getElementById('xl').value
                if (xlNum > 300 || xlNum < 30) {
                    $.messager.alert("提示", "心率应在30~300之间", "info");
                    return false;
                }
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.gcbh=data.gcbh;
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
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