define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_xljkXljkjl.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var popwin;
    var main = {
        init: function(url,data,jl,callback) {
            var html = formtpl('form/_xljkXljkjl',data);
          if(!isOpen){
              popwin = utils.showWin({
                  title: '新增',
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
                      main.submit(url,data,jl, callback);
                  }
              },function(){
                  isOpen=false;
              });
          }
        },
        bindEvent: function(jl) {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            if (false != jl){
                $("#djrfm").textbox('setValue',jl.djr);
                $("#djsjfm").datetimebox('setValue',jl.djsj);
                $("#jynrfm").textbox('setValue',jl.jynr);
                $("#bzfm").textbox('setValue',jl.bz);
            }
        },
        submit: function(url,data,jl, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                if (false != jl){
                    postData.id = jl.id;
                }
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
