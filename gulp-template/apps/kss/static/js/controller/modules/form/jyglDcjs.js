define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jyglDcjs.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            console.log(data.taskid)
            var html = formtpl('form/_jyglDcjs', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '带出监室',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'), function (el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function (el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                                // }).then(function(){
                                //     return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                //         combogrid.initPageClass(el,urls.getDictionaryPage);
                                //     });
                                // }).then(function(){
                                //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                //         comboxtree.initBySelect(el,urls.getJsCombotree);
                                //     });
                                // }).then(function(){
                                //     return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                //         comboxtree.initTagBox(el,urls.getDictionary);
                                //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            $("input[name='ywzssb']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.zsssqk').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.zsssqk').show()
                    $.parser.parse('#fm');
                }
            })
            $("input[name='ywtbs']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.tbsbqkqk').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.tbsbqkqk').show()
                    $.parser.parse('#fm');
                }
            })
            $("input[name='ywwjp']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.wjpqk').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.wjpqk').show()
                    $.parser.parse('#fm');
                }
            })
            $("input[name='ywqxyc']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.ycqk').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.ycqk').show()
                    $.parser.parse('#fm');
                }
            })
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.bllx = '1';
                // postData.taskid = data.taskid;
                // postData.ywlcid = data.ywlcid;
                // postData.rybh = data.rybh;
                // postData.snbh = data.snbh;
                // postData.xm = data.xm;
                // postData.jsh = data.jsh;
                postData.processDefinitionKey = 'kss_jy';
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                                $('#table').datagrid('reload')
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
