define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var formtpl = require('services/form/_qjhsFwdj.html');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_qjhsFwdj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '修改标题',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-numberbox, .easyui-datetimebox'),function(el){
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
                    yes: function () {
                        main.submit(url, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            //combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#jbmj").textbox().textbox('setValue',common.info.user.loginname);
            $("#jbrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var ywlcid = $("#ywlcid").val();
                var taskid = $("#taskid").val();
                var rybh = $("#rybh").val();
                var jbr = $("#jbmj").val();
                var jbsj = $("#jbrq").val();
               
                var data =util.getJson("wpdjfm");
                
                util.ajax({
                    url: url,
                    data: {jsonList:data,taskid:taskid,ywlcid:ywlcid,rybh:rybh,jbr:jbr,jbsj:jbsj},
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                            }
                            utils.closeWin(popwin);
                            $('#table').datagrid('reload')
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