define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var formtpl = require('services/form/_ygryYgsz.html');
    var common=require('common');
    var popwin;
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_ygryYgsz', data);
            popwin = utils.showWin({
                title: '新增严管人员',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    }, 0);
                },
                yes: function() {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function() {
            comboxtree.initBySelect('#fm .jsh');
            combox.initBySelect('#fm .awdCombox', urls.getDictionary);
             $("#blr").textbox().textbox('setValue',common.info.user.loginname); 
            // var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            // $("#blrq").datetimebox().datetimebox("setValue",dates);
            // $("#kssj").datetimebox().datetimebox("setValue",dates);
           
        },
        submit: function(url,data, callback) {
              /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.snbh = data.snbh;
                postData.xm = data.xm;
                postData.jsh = data.jsh;
                postData.bllx = '1';
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
