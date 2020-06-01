define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var url = require('modules/url');
    var formTable = require('modules/Form_Table');
    var formtpl = require('services/form/_tjtarytjtaf.html');
   // var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    //  var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_tjtarytjtaf',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '添加同案犯',
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
                    main.submit(url, callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function(data) {
            formTable.init("Table_ryxx", data, [
                ['监室号', '姓名', '关押期限', '办案环节', '同案编号'],
                ['jsh', 'xm', 'rsrq', 'bahjString', 'ayString' ]
            ]);
        },
        submit: function(url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
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
