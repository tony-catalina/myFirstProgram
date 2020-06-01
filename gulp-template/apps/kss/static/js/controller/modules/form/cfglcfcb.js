define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var formtpl=require('services/form/_cfglCfcb.html');
    var common=require('common');
    var popwin;
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var comboxtree = require('awd/easyui/comboxtree');
    var main = {

        init: function (url, data, callback) {
            var dataall = {};
            Object.assign(dataall, data);
            var html = formtpl('form/_cfglCfcb', dataall);
          if(!isOpen){
              popwin = utils.showWin({
                  title: '处罚呈报',
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
                      main.submit(url,data, callback);
                  }
              },function(){
                  isOpen=false;
              });
          }
        },
        bindEvent: function () {
           
            var trcount = $("#tbody").find("tr").length;
            for(var i=0;i<3;i++){
                var trHtml = "<tr>" +
                "<td style='width:156px;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'></td>"+
                "<td style='border: 1px soild red'><input id='fjcs"+(trcount+1)+"' class='awdCombox' code='CFXS' style='width:156px;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                "<td><input id='cfyy"+(trcount+1)+"' class='easyui-textbox' type='text' name='cfyy' style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                "<td><input id='ksrq"+(trcount+1)+"' class='easyui-datebox'  style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                "<td><input id='jsrq"+(trcount+1)+"' class='easyui-datebox'  style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                "<td style='text-align: center;'><div style='padding-bottom:4%;'><input id='DelRow' name='jiantr' type='button' style='border:1px solid;width:20px;height:20px;margin:5px;' value='―'/><input id='AddRow' type='button' name='addtr' style='border:1px solid;width:20px;height:20px;margin:5px;' value='✛'/></div></td>" +
                "<td><input style='padding:5px;width:100%;' type='button' class='tcfrq' value='同处罚日期'></td>" +
                "</tr>"
                $("#tbody").append(trHtml);
            }
            
            $(document).on("click","#DelRow",function(){
                var trcount = $("#tbody").find("tr").length;
                if (trcount == 3) {
                    $.messager.alert("提示", "行数不少于3行！", "info");
                } else {
                    $(this).parent().parent().parent().remove();
                } 
            })
            $(document).on("click","#AddRow",function(){
                var trcount = $("#tbody").find("tr").length;
                if(trcount >= 6){
                    $.messager.alert("提示", "行数不得大于6！", "info");
                }else{
                    var trHtml = "<tr>" +
                    "<td style='width:156px;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'></td>"+
                    "<td style='border: 1px soild red'><input id='fjcs"+(trcount+1)+"' class='awdCombox' name='cfzl' code='CFXS' style='width:156px;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                    "<td><input id='cfyy"+(trcount+1)+"' class='easyui-textbox' name='cfyy' type='text'  style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                    "<td><input id='ksrq"+(trcount+1)+"' class='easyui-datetimebox'  style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                    "<td><input id='jsrq"+(trcount+1)+"' class='easyui-datetimebox' style='width:100%;height:96%;border-left-width:0px;border-top-width:0px;border-right-width:0px;'/></td>" +
                    "<td style='text-align: center;'><div style='padding-bottom:4%;'><input id='DelRow' name='jiantr' type='button' style='border:1px solid;width:20px;height:20px;margin:5px;' value='―'/><input id='AddRow' type='button' name='addtr' style='border:1px solid;width:20px;height:20px;margin:5px;' value='✛'/></div></td>" +
                    "<td><input style='padding:5px;width:100%;' type='button' class='tcfrq' value='同处罚日期'></td>" +
                    "</tr>"
                    $("#tbody").append(trHtml); 
                    $.parser.parse("#tbody");
                    trcount++;
                    combox.initBySelect('#fm .awdCombox', urls.getDictionary);
                    setTimeout(function (){
                        $.parser.parse('#fm');
                    }, 0);}
                
            })
            $("#creator").textbox().textbox('setValue',common.info.user.loginname); 
            $("#createtime").datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));

            setTimeout(function (){
                        $.parser.parse('#fm');
                    }, 0);},
        submit: function (url,jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var fjcst = {};
                var fjcsarr=[];
                var fjcscount=$("#tbody").find("tr").length;
                var cfts=$("#cftsfm").textbox("getValue");
                for(var i=1;i<=fjcscount;i++){
                    var fjcs = $("#fjcs"+i).val();
                    var cfyy = $("#cfyy"+i).val();
                    var ksrq = $("#ksrq"+i).val();
                    var jsrq = $("#jsrq"+i).val();
                    if(fjcs != "" && fjcs != null){
                        fjcst.fjcs = fjcs;
                    }
                    if(cfts != "" && cfts != null){
                        fjcst.cfyy = cfyy;
                    }
                    if(ksrq != "" && ksrq != null){
                        fjcst.kssj = ksrq;
                    }
                    if(jsrq != "" && jsrq != null){
                        fjcst.jssj = jsrq;
                    }
                    if(JSON.stringify(fjcst) != '{}'){
                        fjcsarr.push(fjcst);
                    }
                    fjcst = {};
                }
                var fjcsjson = JSON.stringify(fjcsarr);
                var data = util.form2Json('fm');
                data.rybh=jbxx.rybh;
                data.jsh_jjx=jbxx.jsh;
                data.xm_jjx=jbxx.xm;
                data.snbh_jjx=jbxx.snbh;
                data.fjcs=fjcsjson;

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