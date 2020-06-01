define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
   // var url = require('modules/url');
    var formtpl = require('services/form/_yjylYldj.html');
    var common=require('common');
    var urls = require('modules/url');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var dataall = {};
            Object.assign(dataall, data);
            var html = formtpl('form/_yjylYldj', dataall);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '应急演练-演练登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox,.easyui-numberbox'),function(el){
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
                yes: function() {
                    main.submit(url, callback);
                }
            },function(){
                isOpen=false;
            });
            }
        },
        bindEvent: function () {
            $("#kssj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
        },
        submit: function (url,  callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.tbr = common.info.user.loginname;
                var date=(new Date()).Format("yyyy-MM-dd");
                data.dqjd = '1';
                data.tbrq = date;
                util.ajax({
                    url: url,
                    data: data,
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