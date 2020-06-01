define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ddgyDdgysz.html');
    var combox = require('awd/easyui/combox');
    var comboxtree = require('awd/easyui/comboxtree');
    var url = require('modules/url');
    var common=require('common');
    var popwin;

    var main = {
        init: function(url,data,callback) {
            
            var html = formtpl('form/_ddgyDdgysz',data);
            popwin = utils.showWin({
                title: '单独关押设置',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent();
                    }, 0);
                    main.bindEvent(data);
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            comboxtree.initBySelect('#fm .jsh', url.getJsCombotree);
           $('#blr').textbox().textbox('setValue',common.info.user.loginname);

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
                postData.jsbh=data.jsbh;
                postData.processName=data.processName;
                postData.processNode=data.processNode;
                postData.id=data.id;
                console.log(url)
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