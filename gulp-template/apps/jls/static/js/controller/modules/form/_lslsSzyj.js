define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_lslsSzyj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_lslsSzyj',data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '临时离所-所长意见',
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
                },function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $('#szqmsj').datetimebox('setValue',new Date().Format('yyyy-MM-dd hh:mm:ss'));
            $('#szqm').textbox().textbox('setValue',common.info.user.loginname);
            $('#szyjnr').textbox('setValue','同意该拘留人请假出所');

            //1为同意,2为不同意
            $('#szyjty').click(function(){
                if ($('input[name="szyj"]:checked').val()==1) {
                    $('#szyjnr').textbox('setValue','同意该拘留人请假出所');
                }
            });
            $('#szyjbty').click(function(){
                if($('input[name="szyj"]:checked').val()==2) {
                    $('#szyjnr').textbox('setValue','不同意该拘留人请假出所');
                }
            });
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.jsbh=data.jsbh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;

                postData.id=data.ldpsxx.lscs_id;
                postData.csyy=data.ldpsxx.lscs_csyy;
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