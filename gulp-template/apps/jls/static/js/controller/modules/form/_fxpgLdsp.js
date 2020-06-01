define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    //var url = require('modules/url');
    var formtpl = require('services/form/_fxpgLdsp.html');
    var common=require('common');
    var urls = require('modules/url');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var popwin;
    var main = {

        init: function (url, data,  callback) {
            //var dataall = {};
            //Object.assign(dataall, data, row);
            var html = formtpl('form/_fxpgLdsp', data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '数据录入',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
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
                isOpen=false;
            });
            }
        },
        bindEvent: function (data) {
            var pgrq = data.ldpsxx.fxpg_pgrq.split(" ");
            console.log("pgrq-----------------------"+pgrq[0]);
            $("#pgrq").textbox('setValue',pgrq[0]);

        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                var currentTime = new Date().Format("yyyy-MM-dd");
                data.tbr = common.info.user.loginname;
                data.tbrq = currentTime;
                data.rybh = row.rybh;
                data.jsbh = row.jsbh;
                data.ywlcid = row.ywlcid;
                data.taskid = row.taskid;
                data.pglx = row.ldpsxx.fxpg_pglx;
                data.updatetime = row.ldpsxx.createTime;
                data.xfxdj = row.ldpsxx.fxpg_xfxdj;
                data.fxqk = row.ldpsxx.fxpg_fxqk;
                data.updator = row.ldpsxx.fxpg_createor;
                data.processName = 'jls_zdryjc_jzyj';



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
