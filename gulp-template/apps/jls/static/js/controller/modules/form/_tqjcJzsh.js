define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tqjcJzsh.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_tqjcJzsh',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '提前解除-警组审核',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
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
                            }).then(function () {
                                var len =  document.querySelectorAll('.timeline-item').length -1;
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
        bindEvent: function() {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#jzqmsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));           
            $("#jzqm").textbox().textbox('setValue',common.info.user.loginname);
            $('input[type=radio][name=jzyj]').change(function () {
                if (this.value == '1') {
                    $("#jzyjnr").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#jzyjnr").textbox("setValue", "不同意");
                }
            });
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;           
                postData.id=data.ldpsxx.clcs_id;
                postData.jcly=data.ldpsxx.clcs_jcly;
                postData.yjlx='1'; // 1 警组意见 2 所长意见 3 分管领导
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