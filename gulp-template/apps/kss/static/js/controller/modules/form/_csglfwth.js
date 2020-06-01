/**
 * 服务财务退还
 */
define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var clumn = require('modules/clumn/wpgl');
    var common = require('common');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_csglfwth.html');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_csglfwth', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '附物/附物退还',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
            console.log(data, 999)
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            grid.init('wjwp', {
                url: url.wpglList,
                fit: false,
                queryParams: { rybh: data.rybh, lqzt: 1 },
                width: '100%',
                height: '300px',
                firstLoad: true,
                singleSelect: false,
                columns: clumn({
                    check: true,
                    clumns: ['wpmcString', 'sl', 'tz', 'xh', 'lqr', 'lqrq', 'wpmc'],
                    hidden: []
                }),
                onLoadSuccess: function (data) {
                    if (data.total > 0) {
                        kthwpnum = data.total;
                    }

                },
                onLoadError: function () {
                    utils.alert("连接超时，稍后再尝试");
                    utils.closeWin(popwin);
                }
            });

            grid.init('kthwp', {
                url: url.wpglList,
                fit: false,
                queryParams: { rybh: data.rybh, lqzt: 0 },
                width: '100%',
                height: '300px',
                firstLoad: true,
                singleSelect: false,
                columns: clumn({
                    check: true,
                    clumns: ['wpmc', 'sl', 'tz', 'xh', 'lqr', 'lqrq'],
                    hidden: []
                }),
                onLoadSuccess: function (data) {
                    $('#kthwp').datagrid('selectAll');
                    var rows = $('#kthwp').datagrid('getSelections')
                    for (let i = 0; i <rows.length ; i++) {
                        $('#kthwp'  ).parent().find('input[name="selectCheckBox"]')[i].checked = true;
                    }
                },
                onLoadError: function () {
                    utils.alert("连接超时，稍后再尝试");
                    utils.closeWin(popwin);

                }
            });
            $("#lwrq").datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#twrq").datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#lwr").textbox().textbox("setValue", data.ldpsxx.xm);
            $("#twjbr").textbox().textbox('setValue', common.info.user.loginname);
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var rows = $('#kthwp').datagrid('getSelections')

                console.log(rows.length)
                if (rows.length != 0) {
                    var postData = util.form2Json('fm');
                    postData.wps = JSON.stringify(rows);
                    postData.taskid = data.taskid;
                    postData.jsh = data.jsh;
                    postData.snbh = data.snbh;
                    postData.rybh = data.rybh;
                    postData.xm = data.xm;
                    postData.jsbh = data.jsbh;
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
                            } else {
                                utils.alert(data.msg);
                            }
                        }
                    });
                } else {
                    utils.alert("请选择可退还的物品!")
                }
            } else {
                utils.alert('表单数据格式不对！');
            }
        },
    };
    return main;
});