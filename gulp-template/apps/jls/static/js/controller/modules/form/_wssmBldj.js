define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_wssmBldj.html');
    var common=require('common');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_wssmBldj', dataall);
            if(!isOpen) {
                // popwin = utils.showWin({
                //     title: '文书扫描',
                //     area: ['90%', '85%'],
                //     content: html,
                //     maxmin: true,
                //     buttons: ['保存', '取消'],
                //     success: function () {
                //         $.parser.parse('#fm');
                //         main.bindEvent();
                //     },
                //     yes: function () {
                //         main.submit(url,dataall, callback);
                //     }
                // });
                layer.open({
                    title: '文书扫描',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    btn: ['图片上传', '查询', '扫描', '关闭'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent(dataall);
                    },
                    btn1: function () {

                        layer.open({
                            title: '文书照片',
                            area: ['60%', '55%'],
                            content: '<div style="text-align:center;margin-top:10%;">' +
                                '<input id="qxzwszp" type="file" style="color:#fff;background:#297aff;border:none;border-radius:3px;padding:10px 15px;">请选择文书照片</input>' +
                                '</div>',
                            maxmin: true,
                            btn: ['提交', '清空', '关闭'],
                            success: function () {
                                $.parser.parse();
                                // $('#qxzwszp').on("click", function () {
                                //     // alert("515312")
                                // })
                            },
                            btn2:function(){
                                
                                
                                $('#qxzwszp').val("");
                                layer.open({
                                    title: '文书照片',
                                    area: ['60%', '55%'],
                                    content: '<div style="text-align:center;margin-top:10%;">' +
                                        '<input id="qxzwszp" type="file" style="color:#fff;background:#297aff;border:none;border-radius:3px;padding:10px 15px;">请选择文书照片</input>' +
                                        '</div>',
                                    maxmin: true,
                                    btn: ['提交', '清空', '关闭'],
                                })
                                

                            },
                            btn3:function(){
                                
                            },
                            yes:function(){
                                main.submit(url,dataall,callback);
                            }
                        })
                        // main.submit(url, dataall, callback);
                    },
                    btn2: function () {
                        alert("查询")
                        return false;
                    },
                    btn3: function () {
                        alert("扫描")
                        return false;
                    },
                    btn4: function () {
                       
                    }
                })
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#scsj").datetimebox("setValue", (new Date()).Format("YYYY-MM-dd hh:mm:ss"));
            $("#scr").textbox("setValue",common.info.user.loginname);

        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.rybh = row.rybh;
                data.jsbh = row.jsbh;
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