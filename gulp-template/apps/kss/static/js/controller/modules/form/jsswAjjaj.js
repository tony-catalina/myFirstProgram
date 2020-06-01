define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jsswAjjaj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            console.log(data);
            var html = formtpl('form/_jsswAjjaj',data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '安检机安检',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function() {
             combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = $("#fm").serialize();
                var ss = postData.split("&");
                var datas="";
                var flag = $("input[name=ajqk]:checked").val()	;
                if(2 == flag){
                    ss[ss.length+1] = "ywzt=9";
                }else{
                    ss[ss.length+1] = "ywzt=7";
                }
                for(var i = 0;i<ss.length;i++){
                    datas+=ss[i]+"&"
                }
                var dtatss = datas.substring(0,datas.length-1);
                console

                util.ajax({
                    url: url,
                    data: dtatss,
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
