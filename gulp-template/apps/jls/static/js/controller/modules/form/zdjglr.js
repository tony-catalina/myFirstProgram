define(function(require) {
    var commFun= require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zdjglr.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen=false;
    var popwin;
  //  var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zdjglr',data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '所内就医-诊断结果录入',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    // $.parser.parse('#fm');
                    // main.bindEvent(data);
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
                yes: function() {
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function() {
           // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#zzys").textbox().textbox('setValue',common.info.user.loginname);
            $("#zzrq").datebox('setValue',(new Date()).Format('yyyy-MM-dd'));
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var date = new Date().Format('yyyy-MM-dd');
                postData.rybh=data.rybh;
                postData.jsh=data.jsh;
                postData.tbr = common.info.user.loginname;
                postData.tbrq = date;
                util.ajax({
                    url: url,
                    data: postData,
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