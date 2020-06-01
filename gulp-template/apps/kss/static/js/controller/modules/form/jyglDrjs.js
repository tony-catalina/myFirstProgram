define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jyglDrjs.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var popwin;
    var isOpen = false;//弹框默认不打开
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jyglDrjs', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '带入监室',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-combobox'), function (el) {
                                    $.parser.parse(el.parentElement);
                                });
                                // }).then(function () {
                                //     return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                //         combox.initBySelect(el,urls.getDictionary);
                                //     });
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
            $("input[name='ywtbs']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.tbsbqk').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.tbsbqk').show()
                    $.parser.parse('#fm');
                }
            })
            $("input[name='ywwjp']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.ywwjp').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.ywwjp').show()
                    $.parser.parse('#fm');
                }
            })
            $("input[name='ywqxyc']").on("click", function () {
                if ($(this).attr("checked")) {
                    $(this).removeAttr("checked");
                    $('.ywyc').hide()
                } else {
                    $(this).attr("checked", 'true');
                    $('.ywyc').show()
                    $.parser.parse('#fm');
                }
            })
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.bllx = '2';
                postData.taskid = data.taskid;
                postData.ywlcid = data.ywlcid;
                postData.rybh = data.rybh;
                postData.snbh = data.snbh;
                postData.xm = data.xm;
                postData.jsh = data.jsh;
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
