define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_xjglSxdj.html');
    var urls = require('modules/url');
    var common=require('common');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var commFun = require('modules/commFun');
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_xjglSxdj', data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '收信登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                    combogrid.initPageClass(el,urls.getDictionaryPage);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                    comboxtree.initBySelect(el,urls.getJsCombotree);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                    comboxtree.initTagBox(el,urls.getDictionary);
                                });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function () {
                        main.submit(url, callback);
                    }
                },function(){
                    isOpen=false;
                });
            }
        },
        bindEvent: function (_jbxx) {
            $("#djr").textbox().textbox('setValue',common.info.user.loginname); 
            var times=(new Date()).Format("yyyy-MM-dd");
            $("#xjrq").datebox().datebox("setValue",times);
            $("#djrq").datebox().datebox("setValue",times);


            $.ajax({
                type: "post",
                url: url.jsxmList,
                data: { rybh: _jbxx.rybh },
                success: function (res) {
                    var datas = res.result.rows
                    if (datas.length > 0) {
                        $('#jsr').each(function () {
                            var fieldName = $(this).prev().next().attr("code");
                            if (fieldName == undefined) {
                                fieldName = $(this).attr("code");
                            }
                            var url = $(this).attr("url");
                            $(this).combobox({
                                data: datas,
                                valueField: 'JSXM',
                                textField: 'JSXM',
                            });
                        });

                    } else {
                        $('#jsr').each(function () {
                            $(this).textbox({ prompt: '请输入收信人姓名' });
                        });
                    }

                },
                error: function () {

                }

            })
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: data,
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