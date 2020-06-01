define(function(require) {
    var commFun= require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wqsySldsp.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_wqsySldsp',data);
            if(!isOpen){
            popwin = utils.showWin({ 
                title: '武器使用-所领导审批',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox,.easyui-numberbox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                       
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
                isOpen=false;
            });
        }
        },
        bindEvent: function() {
            $("#ldpssj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));

            $("#ldyj").textbox("setValue", "同意使用");
            $('input[type=radio][name=psbz]').change(function () {
                if (this.value == '1') {
                    $("#ldyj").textbox("setValue", "同意使用");
                } else {
                    $("#ldyj").textbox("setValue", "不同意使用");
                }
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                   postData.taskid=data.taskid;
                   postData.ywlcid=data.ywlcid;
                   postData.sqyy = data.ywlcxx.syly;
                //    postData.sqsj = data.ywlcxx.sykssj;
                   postData.rybh = data.jh;
                   postData.xm = data.xm;
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
