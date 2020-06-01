define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_txJqtrdj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var formTable = require('modules/Form_Table');
    var grid = require('awd/easyui/grid');
    var common=require('common');
    // 按需引入的模块
    var combogrid = require('awd/easyui/combogrid');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,rows,callback) {
            var html = formtpl('form/_txJqtrdj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '退讯',
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
            $("#dlmjfm").textbox().textbox('setValue',common.info.user.loginname);
            $("#blsjfm").datetimebox().datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            formTable.init("Table_ryxx", data, [
                ['监室号', '姓名', '入所日期', '办案环节', '涉嫌罪名', '提讯单位'],
                ['jsh', 'xm', 'rsrq', 'bahjString', 'ayString', 'dwlxString']
            ]);

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
                jbxx.ldspid=data.ldpsxx.tsdj_id;
                postData.tbr=$("#dlmj").val();
                postData.rybhs=data.rybh;
                postData.ids=data.ldpsxx.tsdj_id;
                postData.tbrq=(new Date()).Format("yyyy-MM-dd");
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.processName='kss_tsdj';
                postData.processNode='kss_tsdj_jqtrdj';
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
                                
                            }
                            utils.closeWin(popwin);
                            grid.reload('table');
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