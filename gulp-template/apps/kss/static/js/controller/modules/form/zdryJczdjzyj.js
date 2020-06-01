define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zdryJczdjzyj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var grid = require('awd/easyui/grid');
    var common=require('common');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');

    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_zdryJczdjzyj', data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '重点人员-解除中队警组意见',
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
            $("#zdzxm").textbox().textbox('setValue',common.info.user.loginname); 
            var dateString = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#zdzpssj").datetimebox().datetimebox('setValue',dateString);

            $('input[type=radio][name=zdzpsbz]').change(function () {
                if (this.value == '1') {
                    $("#zdzyj").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#zdzyj").textbox("setValue", "不同意");
                }
            });
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.hjd = data.hjd;
                postData.bahj = data.bahj;
                postData.ay = data.ay;
                postData.xb = data.xb;
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
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
