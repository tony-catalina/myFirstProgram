define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_shgxDj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, addData, data, callback) {
            var dataall = {};
            Object.assign(dataall, addData, data);
            var html = formtpl('form/_shgxDj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '社会关系-关系登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
							return p.then(function () {
								return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'),function(el){
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
                    yes: function () {
                        main.submit(url, dataall, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
// $('#xm')
//             var rule = /(^\d*$)|(^\S+\s+\S+$)/;
//             var str = "1234576";
//             if(str.match(rule)){
//                 alert("false");
//             }
            $('#xm').textbox({
                onChange:function () {

                    var value= $('#xm').textbox('getValue')
                    console.log(value)

                    var reg=/^[1-9]\d*$|^0$/; // 注意：故意限制了 0321 这种格式，如不需要，直接reg=/^\d+$/;
                    if(reg.test(value)==false){
                        return true;
                    }else{
                        alert("姓名不得为纯数字");
                        $('#xm').textbox('setValue','');
                        return false;
                    }
                }
            });

            $('#gzdw').textbox({
                onChange:function () {
                    var value= $("#gzdw").textbox("getValue")

                    var reg=/^[1-9]\d*$|^0$/; // 注意：故意限制了 0321 这种格式，如不需要，直接reg=/^\d+$/;
                    if(reg.test(value)==false){
                        return true;
                    }else{
                        alert("工作单位不得为纯数字");
                        $('#xm').textbox('setValue','');
                        return false;
                    }
                }
            });
            
            
            $('#zjh').textbox({
                onChange: function () {

                    var code = $('#zjh').textbox('getValue')
                    if (code.length == 18) {
                        //根据身份证获取性别
                        var xb = code.substring(16, 17);
                        if (xb == 1 || xb == 3 || xb == 5 || xb == 7 || xb == 9) {
                            $("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
                        } else if (xb == "0" || xb == "2" || xb == "4" || xb == "6" || xb == "8" || xb == "X") {
                            $("#xb").combobox().combobox("setValue", "2").combobox("setText", "女性");
                        }
                    }

                }
            });
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.tbr = data.tbr;
                postData.tbrq = data.tbrq;
                postData.zjlx = '11';
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