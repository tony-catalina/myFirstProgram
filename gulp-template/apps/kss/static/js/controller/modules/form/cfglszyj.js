define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var formtpl = require('services/form/_cfglSzyj.html');
    var common=require('common');
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var grid = require('awd/easyui/grid');
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_cfglSzyj', dataall);
          if(!isOpen){
              popwin = utils.showWin({
                  title: '所长意见',
                  area: ['90%', '600px'],
                  content: html,
                  maxmin: true,
                  buttons: ['保存', '取消'],
                  success: function () {
                      isOpen = true;
                      Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                          return p.then(function () {
                              return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox,.easyui-numberbox'),function(el){
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
            $("#ldxm").textbox().textbox('setValue',common.info.user.loginname); 
            $("#ldpssj").datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));

            $('input[type=radio][name=ldpsbz]').change(function () {
                if (this.value == '1') {
                    $("#zdzyj").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#zdzyj").textbox("setValue", "不同意"); 
                }
            });
        },
        submit: function (url,jbxx, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.jsh=jbxx.jsh;
                data.xm=jbxx.xm;
                data.bm=jbxx.bm;
                data.csrq=jbxx.csrq;
                data.rsrq=jbxx.rsrq;
                data.bahj=jbxx.bahj;
                data.ay=jbxx.ay;
                data.hjdxz=jbxx.hjdxz;
                data.cfly=jbxx.ldpsxx.cfjl_cfly;
                util.ajax({
                    url: url,
                    data: data,
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