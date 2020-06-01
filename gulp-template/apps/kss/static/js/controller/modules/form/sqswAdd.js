define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var formtpl = require('services/form/_sqsw.html');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_sqsw', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '送钱送物',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-datebox,.awdCombox .easyui-datetimebox, .easyui-numberbox'), function (el) {
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
                        main.submit(url, data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }

        },
        bindEvent: function (data) {
            $("#zklbk").click(function () {
                $("#xxdiv").toggleClass("zklb", 1000);
                grid.init('yqlsxx', {
                    url: url.jsswHistoryList,
                    method: 'POST',
                    fit: false,
                    width: '100%',
                    height: window.innerHeight - 200,
                    firstLoad: true,
                    columns: [
                        {
                            field: 'xm',
                            title: '家属姓名',
                            align: 'center',
                            width: '17%',
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'gxString',
                            title: '关系',
                            align: 'center',
                            width: '17%',
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'dh',
                            title: '电话',
                            width: '17%',
                            align: 'center',
                            hidden: false,
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'swrqString',
                            title: '送物日期',
                            width: '17%',
                            align: 'center',
                            hidden: false,
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'je',
                            title: '金额',
                            width: '17%',
                            align: 'center',
                            hidden: false,
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'wpxxString',
                            title: '物品信息',
                            width: '17%',
                            align: 'center',
                            hidden: false,
                            sortable: 'true',
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                    ],
                    queryParams: {
                        "rybh": data.rybh,
                    },
                    onLoadSuccess: function (data) {

                    }
                });
                return false;
            });
            $.parser.parse('#fm');
            $("#jsxb").combobox('setValue', '1').combobox('setText', '男性');
            $("#mz").combobox('setValue', '01').combobox('setText', '汉');
            $("#zjlx").combobox('setValue', '11').combobox('setValue', '身份证');
            $("#blrq").datetimebox().datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#blr").textbox().textbox('setValue', common.info.user.loginname);
            $("#blrq2").datetimebox().datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#creator").textbox().textbox("setValue",common.info.user.loginname);

        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                //var postData = util.form2Json('fm');
                var postData = $("#fm").serialize();
                var delData;


                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();

                            }
                            utils.closeWin(popwin);
                            $('#table').datagrid('reload');
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