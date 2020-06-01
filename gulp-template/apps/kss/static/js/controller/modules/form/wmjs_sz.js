define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wmjsSzOrCx.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var common=require('common');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_wmjsSzOrCx',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '文明监室-设置',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-combobox'),function(el){
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
                        main.submit(url, data,callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
            $("#blr").textbox().textbox('setValue',common.info.user.loginname); 
            var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#blsjfm").datetimebox("setValue",dates);

            // var jsh='';
            // for(var i=0;i<data.length;i++){
            //     if(data[i].id){
            //         jsh+=data[i].id+',';
            //     }
            // }
            // console.log("==55=="+JSON.stringify(jsh));
            // $("#jshfm").textbox("setValue",jsh);


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                console.log("====="+JSON.stringify(data));
                var postData = util.form2Json('fm');
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
                            grid.reload("table");
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
