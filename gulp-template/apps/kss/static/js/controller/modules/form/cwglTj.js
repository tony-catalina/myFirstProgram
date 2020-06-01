define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_cwglTj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var common=require('common');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_cwglTj',data);
            console.log(html);
            console.log(formtpl);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '床位管理',
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
        bindEvent: function(data) {
            $("#cwh").textbox({
                onChange:function(){
                    var flag= $("#cwh").val();
                   if(flag!=null && flag!=''){
                       var cwh = $(this).val();
                       $.ajax({
                           type : "post",  //提交方式
                           url : urls.findPwglByCwh,
                           data : {cwh:cwh,jsh:data.jsh},//数据，这里使用的是Json格式进行传输
                           success : function(result) {
                               var data = result.result.result
                               if(data!="0"){
                                   console.log("=="+JSON.stringify(result))
                                   utils.alert('该床位号已存在！');
                                   $("#cwh").textbox("setValue","");
                               }
                           }
                       });
                   }
                }
            });

           $("#blr").textbox().textbox('setValue',common.info.user.loginname); 
            var dateString = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#blsj").datetimebox('setValue',dateString);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id=data.id;
                postData.xb=data.xb;
                postData.ay=data.ay;
                postData.bahj=data.bahj;
                postData.hjd=data.hjd;
                postData.rybh=data.rybh;
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