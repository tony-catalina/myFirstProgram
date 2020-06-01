define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jjpslJjwpsl.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common = require('common');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen = false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jjpslJjwpsl', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '救济物品申领',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox,.easyui-numberbox'), function (el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function (el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function (el) {
                                    combogrid.initPageClass(el, urls.getDictionaryPage);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.jsh'), function (el) {
                                    comboxtree.initBySelect(el, urls.getJsCombotree);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdTagbox'), function (el) {
                                    comboxtree.initTagBox(el, urls.getDictionary);
                                });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function () {
                        main.bindEvent();
                        main.submit(url, data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            $.ajax({
                url: "/kss/kss_jjwpgl/jjwpglList",
                type: "POST",
                success: function (data) {
                    console.log(data.result.rows)
                    $("#wpmc0").combobox({
                        data: data.result.rows,
                        valueField: 'jjwpid',
                        textField: 'jjwpmc'
                    });
                },
            });
            $("#djr").textbox().textbox('setValue', common.info.user.loginname);
            var nowDate = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#jjrq").datetimebox().datetimebox("setValue", nowDate);
            $("#djsj").datetimebox().datetimebox("setValue", nowDate);
            main.ListChange();
            main.wptjChange();

        },
        wptjChange: () => {
            var num = 1;
            $(document).on("click", ".wpjia", function () {
                var str = '<div style="display:flex;padding: 0px 10px 10px 0px;">' +
                    '<div><input class="easyui-combobox wpmc" id="wpmc' + num + '" name="wpmc' + num + '"  required></div>' +
                    '<div><input class="easyui-numberbox" id="wp' + num + 'n" name="wp' + num + 'n"  required></div>' +
                    '<div>' +
                    '<span style="font-weight:bold;display:block;margin-left:7px;padding: 3px 5px 3px 5px;border: 1px solid #1b5b9b;cursor: pointer;" class="iconfont icon-jianhao wpjian"></span>' +
                    '</div>' +
                    '</div>'

                $("#wpid").append(str);
                $.parser.parse($("#wpid"));
                $.ajax({
                    url: "/kss/kss_jjwpgl/jjwpglList",
                    type: "POST",
                    success: function (data) {
                        console.log(data.result.rows)
                        $(".easyui-combobox").combobox({
                            data: data.result.rows,
                            valueField: 'jjwpid',
                            textField: 'jjwpmc'
                        });
                    },
                });
                num++
            })
            $(document).on("click", ".wpjian", function () {
                $(this).parent().parent().remove();

            })
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id = data.id;
                postData.rybh = data.rybh;
                //postData.ywlcid=data.ywlcid;
                //postData.taskid=data.taskid;
                //postData.processName='kss_emsz';
                //postData.processNode='kss_emsz_emszcb';
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
        },
        ListChange: () => {
            $('.wpmc').combobox({
                url: urls.jjwplist,
                valueField: 'jjwpid',
                textField: 'jjwpmc'
            })

        }
    };
    return main;
});