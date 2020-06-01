define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_emglLdps.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common=require('common');
    var popwin;
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var commFun = require('modules/commFun');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_emglLdps',data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '耳目管理--领导意见',
                   area: ['90%', '600px'],
                   content: html,
                   maxmin: true,
                   buttons: ['保存', '取消'],
                   success: function() {
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
                   yes: function() {
                       main.submit(url,data, callback);
                   }
               },function(){
                   isOpen=false;
               });
           }
        },
        bindEvent: function() {
            $("#ldxm").textbox().textbox('setValue',common.info.user.loginname);
            $("#ldpssj").datetimebox().datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var emlx;
                var psbz = $("input[name='psbz']:checked").val();
                if (psbz==1){
                    emlx=='03';
                } else {
                    emlx=data.emlx;
                }
                postData.rybh=data.rybh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
                postData.emlx=emlx;

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