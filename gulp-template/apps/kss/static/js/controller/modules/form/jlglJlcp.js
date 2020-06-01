define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jlglJlcp.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common=require('common');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');

    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jlglJlcp', data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '奖励呈批',
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
                       main.submit(url, data, callback);
                   }
               },function(){
                   isOpen=false;
               });
           }
        },
        bindEvent: function () {
            $("#jbr").textbox().textbox('setValue',common.info.user.loginname); 
            var dateString = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#jbsj").datetimebox().datetimebox('setValue',dateString);

        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.xm=data.xm;
                postData.bm=data.bm;
                postData.jsh=data.jsh;
                postData.csrq=data.csrq;
                postData.rsrq=data.rsrq;
                postData.bahjString=data.bahjString;
                postData.ayString=data.ayString;
                postData.hjdString=data.hjdString;
                postData.ayString=data.ayString;

                util.ajax({
                    url: url,
                    data: postData,
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