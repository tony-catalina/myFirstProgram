define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_jyzlgzpg.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_jyzlgzpg', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '教育质量改造评估',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    if (data.cjhywzs == "1") {
                        $("#cjhywzsyes").prop("checked", "checked");
                    } else {
                        $("#cjhywzsno").prop("checked", "checked");
                    }
                    if (data.mxfzqx == "1") {
                        $("#mxfzqxyes").prop("checked", "checked");
                    } else {
                        $("#mxfzqxno").prop("checked", "checked");
                    }
                    if (data.sjry == "1") {
                        $("#sjryyes").prop("checked", "checked");
                    } else {
                        $("#sjryno").prop("checked", "checked");
                    }
                    if (data.swry == "1") {
                        $("#swryyes").prop("checked", "checked");
                    } else {
                        $("#swryno").prop("checked", "checked");
                    }
                    if (data.ybbjdx == "1") {
                        $("#ybbjdxyes").prop("checked", "checked");
                    } else {
                        $("#ybbjdxno").prop("checked", "checked");
                    }
                    if (data.sfylrhlw == "1") {
                        $("#sfylrhlwyes").prop("checked", "checked");
                    } else {
                        $("#sfylrhlwno").prop("checked", "checked");
                    }
                    if (data.jsnbx == "2") {
                        $("#jsnbxhao").prop("checked", "checked");
                    } else if (data.jsnbx == "1") {
                        $("#jsnbxyiban").prop("checked", "checked");
                    } else if (data.jsnbx == "3") {
                        $("#jsnbxcha").prop("checked", "checked");
                    }
                    if (data.rzrcqk == "2") {
                        $("#rzrcqkhao").prop("checked", "checked");
                    } else if (data.jsnbx == "1") {
                        $("#rzrcqkyiban").prop("checked", "checked");
                    } else if (data.jsnbx == "3") {
                        $("#rzrcqkcha").prop("checked", "checked");
                    }
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
        bindEvent: function () {
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