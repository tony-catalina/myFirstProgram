define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_qjcsQjcp.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common=require('common');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var isOpen = false; //弹框默认不打开
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_qjcsQjcp',data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '请假出所-请假呈批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
                            return p.then(function() {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'), function(el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                            }).then(function() {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $('#gjqm').textbox().textbox('setValue',common.info.user.loginname);
            $('#gjqmrq').datetimebox('setValue',new Date().Format('yyyy-MM-dd hh:mm:ss'));

            $("#qjkssjfm").datetimebox({
                onChange:function (newValue,oldValue) {
                    var date=new Date(newValue);
                    var timetemp=date.getTime();
                    var qjqxfm=$("#qjqxfm").textbox("getValue");
                    if(qjqxfm){
                        var newTimeTemp=timetemp+qjqxfm*24*3600*1000;
                        var dates=new Date(newTimeTemp);
                        var dateStr=dates.Format("yyyy-MM-dd hh:mm:ss");
                        console.log(dateStr);
                        $("#qjjssjfm").datetimebox("setValue",dateStr);
                    }

                }
            });
            $("#qjqxfm").numberbox({
                onChange:function (newValue,oldValue) {
                    var qjkssj=$("#qjkssjfm").datetimebox("getValue");
                    if(qjkssj){
                        var date=new Date(qjkssj);
                        var timetemp=date.getTime();
                        var newTimeTemp=timetemp+newValue*24*3600*1000;
                        var dates=new Date(newTimeTemp);
                        var dateStr=dates.Format("yyyy-MM-dd hh:mm:ss");
                        console.log(dateStr);
                        $("#qjjssjfm").datetimebox("setValue",dateStr);
                    }
                }
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
                postData.id=data.ldpsxx.qjcs_id;
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