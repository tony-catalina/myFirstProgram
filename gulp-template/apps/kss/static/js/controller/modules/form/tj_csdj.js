define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tjTjcsdj.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
   // var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    //  var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_tjTjcsdj',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '提解出所登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
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
            var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#tjsjfm").datetimebox("setValue",dates);
            formTable.init("Table_ryxx", data, [
                ['监室号', '姓名', '入所日期', '办案环节', '涉嫌罪名'],
                ['jsh', 'xm', 'rsrq', 'bahjString', 'ayString' ]
            ]);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var jbxxData = {};
                jbxxData["xm"]=data.xm;
                jbxxData["xb"]=data.xb;
                jbxxData["bm"]=data.bm;
                jbxxData["rybh"]=data.rybh;
                jbxxData["snbh"]=data.snbh;
                jbxxData["jsh"]=data.jsh;
                jbxxData["jsbh"]=data.jsbh;
                jbxxData["ywlcid"]=data.ywlcid;
                jbxxData["taskid"]=data.taskid;
                var ywxxData = {};
                ywxxData["id"]=data.ldpsxx.tjdj_Id;
                ywxxData["ywlcid"]=data.ywlcid;
                ywxxData["tjsj"]=postData.tjsj;
                ywxxData["tjyy"]=postData.tjyy;
                ywxxData["tjjtyy"]=postData.tjjtyy;
                ywxxData["tjry1"]=postData.tjry1;
                ywxxData["tjkh1"]=postData.tjkh1;
                ywxxData["tjry2"]=postData.tjry2;
                ywxxData["tjkh2"]=postData.tjkh2;
                ywxxData["qttjry"]=postData.qttjry;
                ywxxData["pzr"]=postData.pzr;
                ywxxData["lxdh"]=postData.lxdh;
                ywxxData["tjdw"]=postData.tjdw;
                ywxxData = JSON.stringify(ywxxData);
                jbxxData = JSON.stringify(jbxxData);
                util.ajax({
                    url: url,
                    data: {"data_Jbxx":jbxxData,"data_ywxx":ywxxData},
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                                grid.reload('table');
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
