define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ddgyDrgyjs.html');
    var combox = require('awd/easyui/combox');
    var formTable = require('modules/Form_Table');
    var url = require('modules/url');
    var common = require('common');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            
            var html = formtpl('form/_ddgyDrgyjs',data);
            popwin = utils.showWin({
                title: '带入关押监室',
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
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function(data) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            formTable.init("Table_ryxx", data, [
                ['序号','监室号', '姓名', '办案环节','涉嫌罪名', '调监理由', '拟调监室号','中队签名','中队签名日期','所长批示日期'],
                ['xh', 'jsh', 'xm', 'bahjString', 'sxzm', 'tjly', 'hljtsh','zdqm','zdqmrq','szpsrq']
            ]);
            $("#blr").textbox().textbox('setValue',common.info.user.loginname);
            $("#blsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
           
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.taskid = data.taskid;
                postData.ywlcid = data.ywlcid;
                postData.xjsh = data.xjsh;
                postData.yjsh = data.yjsh;
                postData.tbrq = (new Date()).Format('yyyy-MM-dd');
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