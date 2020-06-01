define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_xjglJcshyj.html');
    var urls = require('modules/url');
    var common=require('common');
    var popwin;
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var commFun = require('modules/commFun');
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_xjglJcshyj', data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '寄出审核意见',
                   area: ['90%', '600px'],
                   content: html,
                   maxmin: true,
                   buttons: ['保存', '取消'],
                   success: function () {
                       isOpen = true;
                       Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                           return p.then(function () {
                               return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
                                   $.parser.parse(el.parentElement);
                               });
                           }).then(function () {
                               return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                   combox.initBySelect(el,urls.getDictionary);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                   combogrid.initPageClass(el,urls.getDictionaryPage);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                   comboxtree.initBySelect(el,urls.getJsCombotree);
                               });
                           }).then(function(){
                               return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                   comboxtree.initTagBox(el,urls.getDictionary);
                               });
                           }).then(function () {
                               var len = document.querySelectorAll('.timeline-item').length -1;
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
                   isOpen=false;
               });
           }
        },
        bindEvent: function () {
            $("#ldqm").textbox().textbox('setValue',common.info.user.loginname); 
            var times=(new Date()).Format("yyyy-MM-dd");
            $("#ldqmrq").datebox().datebox("setValue",times);

            $('input[type=radio][name=sldyj]').change(function () {
                if (this.value == '1') {
                    $("#ldzs").textbox("setValue", "转交被监管人");
                } else if (this.value == '2') {
                    $("#ldzs").textbox("setValue", "信件存档，不予转交");
                } else if (this.value == '3') {
                    $("#ldzs").textbox("setValue", "销毁信件");
                }
            });
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
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