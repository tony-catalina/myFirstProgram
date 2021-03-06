define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_qmcsSzsp.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var grid = require('awd/easyui/grid');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var isOpen = false;//弹框默认不打开
    var common=require('common');
    debugger
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_qmcsSzsp',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '期满出所-所长审批',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox'),function(el){
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
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#szqmsj").datetimebox("setValue",(new Date()).Format("YYYY-MM-dd hh:mm:ss"));
            $("#szqm").textbox().textbox('setValue',common.info.user.loginname);
            $('#szyjnr').textbox('setValue','同意拘留人解除拘留');

            //1为同意,2为不同意
            $('#szyjty').click(function(){
                if ($('input[name="szyj"]:checked').val()==1) {
                    $('#szyjnr').textbox('setValue','同意拘留人解除拘留');
                }
            });
            $('#szyjbty').click(function(){
                if($('input[name="szyj"]:checked').val()==2) {
                    $('#szyjnr').textbox('setValue','不同意拘留人解除拘留');
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
                postData.csyy=data.ldpsxx.clcs_csyy;
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