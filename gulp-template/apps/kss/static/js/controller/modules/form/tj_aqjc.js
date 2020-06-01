define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tjHsaqjc.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var common=require('common');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            // console.log(JSON.stringify(data))
            var html = formtpl('form/_tjHsaqjc', {});
            if(!isOpen) {
                        popwin =  utils.showWin({
                                title: '提解-回所安全检查',
                                area: ['90%', '85%'],
                                content: html,
                                maxmin: true,
                                success: function () {
                                    isOpen = true;
                                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                                        return p.then(function () {
                                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'),function(el){
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
                                main.submit(url,data, callback);
                            }
                        },function(){
                            isOpen = false;
                        });
            }

        },
        bindEvent: function(data) {
            var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#tjjssjfm").datetimebox("setValue",dates);
            $("#jcsjfm").datetimebox("setValue",dates);
            $("#dlmj").textbox().textbox('setValue',common.info.user.loginname);
            console.log("--------------------------"+JSON.stringify(data));
            formTable.init("Table_ryxx", data, [
                ['监室号', '姓名', '关押期限', '办案环节', '提解单位', '提解原因'],
                ['jsh', 'xm', 'gyqx', 'bahjString', 'ldpsxx.tjdw', 'ldpsxx.tjyyString']
            ]);

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.creator = "";
                postData.createtime = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
                postData.rybh=data[0].rybh;
                postData.taskid = data[0].taskid;
                postData.ywlcid = data[0].ywlcid;
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
