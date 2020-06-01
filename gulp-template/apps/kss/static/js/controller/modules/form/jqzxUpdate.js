define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jszxjcUpdate.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtree');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var commFun = require('modules/commFun');
    var main = {
        init: function(url,data,callback,flag) {
            var html = formtpl('form/_jszxjcUpdate',data);
          if(!isOpen){
              popwin = utils.showWin({
                  title: '监室秩序检查-修改',
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
                      main.submit(url,data, callback,flag);
                  }
              },function(){
                  isOpen=false;
              });
          }
        },
        bindEvent: function(data) {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $('#sjryfm').combobox({
                valueField:'code',
                textField:'content',
                multiple:true,
                url:urls.sjrySelected+"?jsh="+data.jsh,
                formatter: function (row) {
                    //formatter方法就是实现了在每个下拉选项前面增加checkbox框的方法
                    var opts = $(this).combobox('options');
                    return '<input type="checkbox" class="combobox-checkbox" name="checkbox" >' + row[opts.textField] ;
                },
                loadFilter:function(data){
                    return data.result;
                },
                onSelect: function (row) { //选中一个选项时调用
                    var opts = $(this).combobox('options');
                    //获取选中的值的values
                    $('#sjryfm').val($(this).combobox('getValues'));

                    //设置选中值所对应的复选框为选中状态
                    var el = opts.finder.getEl(this, row[opts.valueField]);
                    el.find('input.combobox-checkbox')._propAttr('checked', true);
                },
                onUnselect: function (row) {//不选中一个选项时调用
                    var opts = $(this).combobox('options');
                    //获取选中的值的values
                    $('#sjryfm').val($(this).combobox('getValues'));
                    var el = opts.finder.getEl(this, row[opts.valueField]);
                    el.find('input.combobox-checkbox')._propAttr('checked', false);
                } ,
                onLoadSuccess:function(){
                    if($("div").hasClass("combobox-item-selected")){
                        $(".combobox-item-selected").children().addClass("xuanzhong");
                        $(".xuanzhong").prop('checked', true);
                    }
                }
            });
        },
        submit: function(url,data, callback,flag) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var rybhData =  $('#sjryfm').combobox('getValues');
                var rybh_array = [];
                if (rybhData.length!=0) {
                    for (var i = 0; i < rybhData.length; i++) {
                        rybh_array.push(rybhData[i]);
                    }
                }
                postData.rybh = rybh_array.toString();
                if (false == flag){
                    postData.id = data.id;
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
