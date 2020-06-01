define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ryxxblJcwh.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var html;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var main = {
        init: function (url, data, callback) {
            $.ajax({
                url: urls.jkqklist+'?rybh=' + data.rybh,
                success: function (result) {
                    let rowdata = result.result.rows[0];
                    rowdata.jsh = data.jsh;
                    rowdata.xm = data.xm;
                    rowdata.csrq = data.csrq;
                    rowdata.jlrq = data.jlrq;
                    rowdata.gyqx = data.gyqx;
                    var html = formtpl('form/_ryxxblJcwh', rowdata);
                    if(!isOpen){
                    popwin = utils.showWin({
                        title: '检查维护',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            // $.parser.parse('#fm');
                            // main.bindEvent(url, callback);
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
                            main.submit(url, data, callback);
                        }
                    },function(){
                        isOpen=false;
                    });
                }
            }
            });
        
        },
        bindEvent: function (url, callback) {
           // combox.initBySelect('#fm .awdCombox', urls.getDictionary);
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
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