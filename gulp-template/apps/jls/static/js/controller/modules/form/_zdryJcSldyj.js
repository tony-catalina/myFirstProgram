define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zdryJcSldyj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zdryJcSldyj',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '重点人员-解除所领导意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    },
                    yes: function() {
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#tbrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#sldqm").textbox().textbox('setValue',common.info.user.loginname);


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
               
                postData.rybh=data.rybh;
                postData.jsbh=data.jsbh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.rygllb=data.ldpsxx.zdryjc_rygllb;
                postData.updatetime=data.ldpsxx.zdryjc_createtime;
                postData.updator=data.ldpsxx.updator;
                postData.processName='jls_zdryjc_sldyj';

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