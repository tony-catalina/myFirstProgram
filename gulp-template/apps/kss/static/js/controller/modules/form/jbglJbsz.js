define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jbglJbsz.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var common=require('common');
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jbglJbsz',data);
           if(!isOpen){
               popwin = utils.showWin({
                   title: '禁闭设置',
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
            $("#jbr").textbox().textbox('setValue',common.info.user.loginname); 
            var nowDate=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#kssj").datetimebox().datetimebox("setValue",nowDate);
            $("#blrq").datetimebox().datetimebox("setValue",nowDate);

            $('#sytsfm').combobox({
                valueField:'id',
                textField:'text',
                data :  [{
                    "id":1,
                    "text":"1天"
                },{
                    "id":2,
                    "text":"2天",
                },{
                    "id":3,
                    "text":"3天",
                },{
                    "id":4,
                    "text":"4天"
                },{
                    "id":5,
                    "text":"5天"
                },{
                    "id":6,
                    "text":"6天"
                },{
                    "id":7,
                    "text":"7天"
                }],
                onChange:function (newValue,oldValue) {
                 var ss=$("#kssjfm").datetimebox("getValue");
                 if(ss){
                     var times=new Date(ss);
                     var timetemp=times.getTime();
                     var newTimeTemp=timetemp+newValue*24*3600*1000;
                     var dates=new Date(newTimeTemp);
                     var dateStr=dates.Format("yyyy-MM-dd hh:mm:ss");
                     console.log(dateStr);
                     $("#jssjfm").datetimebox("setValue",dateStr);
                 }


                }
            });

            $("#kssjfm").datetimebox({
                onChange:function (newValue,oldValue) {
                    var date=new Date(newValue);
                    var timetemp=date.getTime();
                    var sytsfm=$("#sytsfm").combobox("getValue");
                    if(sytsfm){
                        var newTimeTemp=timetemp+sytsfm*24*3600*1000;
                        var dates=new Date(newTimeTemp);
                        var dateStr=dates.Format("yyyy-MM-dd hh:mm:ss");
                        console.log(dateStr);
                        $("#jssjfm").datetimebox("setValue",dateStr);
                    }
                }
            })
            

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.xm = data.xm;
                postData.jsbh=data.jsbh;
                postData.bllx='01';
                postData.jbqx=$("#jssj").val();
                postData.rybh=data.rybh;
                postData.jsh = data.jsh;
                postData.snbh = data.snbh;

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
