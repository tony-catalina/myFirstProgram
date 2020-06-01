define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var isOpen = false;//弹框默认不打开
    var urls = require('modules/url');
    var formtpl = require('services/form/_xjglDxcd.html');
    var common = require('common');
    var grid=require('awd/easyui/grid');
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
           
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_xjglDxcd', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '信件管理-电讯传递',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,urls.getJsCombotree);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url,dataall, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
          //   combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#xjrq").datebox('setValue',(new Date()).Format('yyyy-MM-dd'));
            $("#jsr").textbox().textbox('setValue',common.info.user.loginname);
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.tbrq=(new Date()).Format('yyyy-MM-dd');
                data.rybh = row.rybh;
                data.processName = 'jls_wldx_dxcd';
                data.taskid = row.taskid;
                data.ywlcid =row.ywlcid;
                data.tbr = $("#jsr").textbox('getValue');
                util.ajax({
                    url: url,
                    data: data,
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