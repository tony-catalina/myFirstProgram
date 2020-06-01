define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_aqxxyglSldyj.html');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data,callback) {
            // var dataall = {};
            // Object.assign(dataall, data,);
            var html = formtpl('form/_aqxxyglSldyj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '安全信息员管理-所领导意见',
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
                            // }).then(function () {
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                            //         combox.initBySelect(el,urls.getDictionary);
                            //     });
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
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            var nowDate=(new Date()).Format('yyyy-MM-dd hh:mm:ss');
            console.log(nowDate);
            $("#sldqmsj").datetimebox('setValue',nowDate);
            $("#emdj_blsj").datetimebox('setValue',nowDate);
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.taskid=data.taskid;
                postData.processName='jls_aqxxygl_sldyj';
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid; 
                postData.jsbh=data.jsbh;
                postData.tbr=$("#blr").textbox('getValue');
                postData.tbrq=(new Date()).Format('yyyy-MM-dd');
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();

                            }
                            utils.closeWin(popwin);
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