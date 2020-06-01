define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_txTxdj.html');
    var combox = require('awd/easyui/combox');
   // var url = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var combogrid = require('awd/easyui/combogrid');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_txTxdj',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '提讯登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.awdCombotree, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
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
                    main.submit(url, data, callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function() {
            var ss=(new Date()).Format("yyyy-MM-dd");
            $("#txrqfm").datebox("setValue",ss);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var jbxx = {};
                jbxx.xm=data.xm;
                jbxx.xb=data.xb;
                jbxx.bm=data.bm;
                jbxx.rybh=data.rybh;
                jbxx.snbh=data.snbh;
                jbxx.jsh=data.jsh;
                jbxx.jsbh=data.jsbh;
                jbxx.ywlcid=data.ywlcid;
                jbxx.taskid=data.taskid;
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.processName='kss_tsdj';
                postData.processNode='kss_tsdj_tsdj';
                var jbxxArray=[];
                jbxxArray.push(jbxx);
                util.ajax({
                    url: url,
                    data: {'data_Jbxx':JSON.stringify(jbxxArray),'data_ywxx':JSON.stringify(postData)},
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