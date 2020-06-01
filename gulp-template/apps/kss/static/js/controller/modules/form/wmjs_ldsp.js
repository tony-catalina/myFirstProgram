define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wmjsSzldsp.html');
    var combox = require('awd/easyui/combox');
    var common=require('common');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            console.log(data.taskid)
            var html = formtpl('form/_wmjsSzldsp',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '文明监室-领导审批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url, data,callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            // $("#blr").textbox().textbox('setValue',common.info.user.loginname); 
            // var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            // $("#blsj").datetimebox().datetimebox("setValue",dates);


            //$.parser.parse('#blsjfm');
            //$("#blsjfm").datetimebox("setValue",dates);
            $("#psbzyes").click(function () {
                    $("#ldyjfm").textbox("setValue","同意");

            });
            $("#psbzno").click(function () {
                $("#ldyjfm").textbox("setValue","不同意");
            });
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                console.log("====="+JSON.stringify(data));
                var postData = util.form2Json('fm');
                // postData.taskid = data.taskid;
                // postData.ywlcid = data.ywlcid;
                // postData.rybh = data.rybh;
                // postData.jsbh = data.jsbh;
                postData.processName = "kss_wmjssz";
                postData.processNode = "kss_wmjssz_ldsp";
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
