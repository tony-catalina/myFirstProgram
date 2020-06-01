define(function(require) {
    var commFun= require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_mjjbxxXz.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_mjjbxxXz', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '民警基本信息',
                area: ['90%', '85%'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                   
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-combobox, .easyui-datetimebox, .easyui-datebox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            console.log('as');
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                        }).then(function () {
                            console.log(idx);
                            var len = document.querySelectorAll('.timeline-item').length -1;
                            if (idx === len) {
                                main.bindEvent(data);
                            }
                        });
                    }, Promise.resolve());

                },
                yes: function() {
                    main.submit(url, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function() {
            $("#mz").combobox().combobox('setValue', '01').combobox('setText', '汉');
            //根据身份证获取出生日期
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
                        //根据身份证获取出生日期
                        var csrq = code.substring(6, 14);
                        var csrq1 = csrq.substring(0, 4);
                        var csrq2 = csrq.substring(4, 6);
                        var csrq3 = csrq.substring(6, 8);
                        csrq = csrq1 + "-" + csrq2 + "-" + csrq3
                        $("#csrq").datebox("setValue", csrq);
                        // //根据身份证获取默认籍贯、户籍地、现住地
                        var hjd = code.substring(0, 6);
                        $.ajax({
                            type: "POST",  //提交方式
                            url: urls.getDictionaryContent,
                            data: { "code": hjd, "fieldname": "XZQH" },
                            success: function (result) {
                                $('#jg').combobox('setValue', { code: hjd, content: result.result });
                                $("#hjd").combogrid('setValue', { code: hjd, content: result.result });
                                $("#xzd").combogrid('setValue', { code: hjd, content: result.result });
                                $('#hjdxz').textbox('setValue', result.result)
                                $('#xzdxz').textbox('setValue', result.result)
                            }
                        });


                    }

                }
            })
        },
        submit: function(url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var mjzp = document.querySelector('input[type="file"]').files[0];
                var data = util.form2Json('fm');
                var postData = new FormData();
                postData.append('mjzp', mjzp);
                postData.append('formData', JSON.stringify(data));
                console.log(postData);
                util.ajax({
                    url: url,
                    data: postData,
                    processData: false,
                    contentType: false,
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