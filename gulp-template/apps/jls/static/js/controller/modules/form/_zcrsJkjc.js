define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsJkjc.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var isOpen = false;//弹框默认不打开
    var main = {
        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_zcrsJkjc', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '正常入所-健康检查',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['通过', '关闭', '不通过'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datebox,.easyui-datetimebox, .easyui-numberbox'),function(el){
									$.parser.parse(el.parentElement);
								});
							}).then(function () {
								return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
									combox.initBySelect(el,urls.getDictionary);
								});
							}).then(function () {
								var len =  document.querySelectorAll('.timeline-item').length -1;
								if (idx === len) {
									main.bindEvent(url, row, callback);
								}
							});
						}, Promise.resolve());
                    },
                    yes: function () {
                        var jkjcjg = "1"
    
                        main.submit(url, row, jkjcjg, callback);
                    },
                    btn3: function () {
                        //这里写不通过的事件
                        var jkjcjg = "2"
                        main.submit(url, row, jkjcjg, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function (url, row, callback) {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
            // $('#pass').on("click", function () {
            //     var jkjcjg = "1"
            //     // var num = document.getElementById('sgfm').value;
            //     // if (!(/^6[0-9]$|^[6-9]\d$|^1\d{2}$|^2\d{2}$|^3\d{2}$/.test(num))) { //大于60小于400
            //     //     layer.alert("身高应在60-400之间!");
            //     //     return false;
            //     // }
            //     main.submit(url, row, jkjcjg, callback);
            // })
        },
        submit: function (url, data, jkjcjg, callback) {
            var num = document.getElementById('sgfm').value;
            if (!(/^6[0-9]$|^[6-9]\d$|^1\d{2}$|^2\d{2}$|^3\d{2}$/.test(num))) { //大于60小于400
                utils.alert("身高应在60-400之间!");
                return false;
            }
            var num = document.getElementById('tzfm').value;
            if (!(/^3[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
                utils.alert("体重输入项的最小值是 30");
                return false;
            }
            var num = document.getElementById('zcfm').value;
            if (!(/^1[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
                utils.alert("足长输入项的最小值是 10");
                return false;
            }
            var a = $("#xyfm").val();
            if (a == "") {
                utils.alert("血压不能为空");
                return false;
            } else {
                var as = a.split("/");
                if (as.length != 2) {
                    utils.alert("血压格式不正确");
                    return false;
                } else {
                    var b = new RegExp("^[0-9]+$");;
                    if (!b.test(as[0]) || !b.test(as[1])) {
                        utils.alert("血压格式不正确");
                        return false;
                    }
                }
            }
            /**先校验form */
            if ($('#fm').form('validate')) {

                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.jkjcjg = jkjcjg;
                util.ajax({
                    url: url,
                    data: postData,
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