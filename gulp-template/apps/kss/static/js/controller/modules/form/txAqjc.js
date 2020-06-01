define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_txAqjc.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var urls = require('modules/url');
    var url = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var formTable = require('modules/Form_Table');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_txAqjc', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '提讯-安全检查登记',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    success: function () {
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
                                var len = document.querySelectorAll('.timeline-item').length-1;
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
                    isOpen = false;
                });
        }

        },
        bindEvent: function(data) {
            $("#jcry").textbox().textbox('setValue',common.info.user.loginname);
            $("#jcsj").datetimebox().datetimebox('setValue',(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#jssj").datetimebox().datetimebox('setValue',(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#zbmj").textbox().textbox('setValue',common.info.user.loginname);
            $("#djsj").datetimebox().datetimebox('setValue',(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            formTable.init("Table_ryxx", data, [
                ['监室号', '姓名', '关押期限', '办案环节', '当前办案单位', '当前办案单位类型'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'badw', 'dwlxString']
            ]);

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.tbr=$("#zbmj").val();
                postData.rybh=data[0].rybh;
                postData.tbrq=(new Date()).Format("yyyy-MM-dd");
                postData.ywlcid=data[0].ywlcid;
                postData.taskid=data[0].taskid;
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