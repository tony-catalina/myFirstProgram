define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_fjcyglXzpj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = { 
        init: function(url,data,callback) {
            var html = formtpl('form/_fjcyglXzpj',data);
          if(!isOpen){
              popwin = utils.showWin({
                  title: '新增',
                  area: ['90%', '600px'],
                  content: html,
                  maxmin: true,
                  buttons: ['保存', '取消'],
                  success: function() {
                      isOpen=true;
                      setTimeout(function (){
                          $.parser.parse('#fm');
                          main.bindEvent(data);
                      }, 0);
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
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            // var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            // $("#pjrqfm").datetimebox("setValue",dates);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                // var postData = util.form2Json('fm');
                var postData = $("#fm").serialize();

                console.log(postData,8)
                console.log(data,9)
                var flag = '';
                $(".group-required").each(function(){
                    if($(this).prop("checked")){
                        console.log($(this).prop("checked"),5)
                        flag = flag + $(this).val();
                    }
                });
                postData.rybh = data.rybh;
                postData.dqssjd = data.bahj;
                postData.snbh = data.snbh;
                postData.xm = data.xm;
                postData.jsh = data.jsh;
                postData.zhpdyj = flag;
                if (flag==""){
                    $.messager.alert("提示","请选择至少一个综合评定意见！");
                }else {
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
                }
               
                
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});
