define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_swrypgSwrypg.html');
    var url = require('modules/url');
    var common = require('common');
    var isOpen = false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_swrypgSwrypg', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '涉维人员评估',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent();
                        }, 0);
                    },
                    yes: function () {
                        main.submit(url, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#pqr").textbox().textbox('setValue', common.info.user.loginname);
            $("#pgrq").datetimebox().datetimebox("setValue", (new Date()).Format("yyyy-MM-dd hh:mm:ss"));
			var sfsw=$("input[name='sfswpg']:checked").val();
			var ss=parseInt(sfsw);
			if(ss==0){
				 $("input[name='kytz']").prop('disabled', true);
			}else{
				 $("input[name='kytz']").prop('disabled', false);
			}
            $("input[name='sfswpg']").click(function () {
                //禁用
                if ($(this).attr("id") == "sfswnofm") {
                    $('input:checkbox[name="kytz"]').attr("disabled", true);
                    //取消被选中
                    $('input:checkbox[name="kytz"]').removeAttr("checked");
                }
                //启用
                if ($(this).attr("id") == "sfswyesfm") {
                    $('input:checkbox[name="kytz"]').attr("disabled", false)
                }
            })


            $(".input_zb").click(function () {
                if (!$(this).attr("checked")) {
                    $(this).attr("checked", "checked");
                } else {
                    $(this).removeAttr("checked");
                }
            });
        },
        submit: function (url, callback) {
            /**先校验form */
            var sf = $("input[name='sfswpg']:checked").val();
            var sss = 0;
            var str = "";

            $(".input_zb").each(function () {
                if ($(this).attr("checked") == "checked") {
                    sss += 1;
                    str += $(this).val() + ",";
                }
            })
            if (sf == 0) {
                sss = 1;
            }
            if ($('#fm').form('validate')) {
                if (sss > 0) {
                    str = str.substr(0, str.length - 1);
                    var data = $("#fm").serialize();
                    data = data + "&swpgzb=" + str;
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: data,
                        success: function (data) {
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
                    utils.alert('涉维评估指标至少选中一个！');
                }
                // var data = util.form2Json('fm');
            } else {
                utils.alert('表单数据格式不对！');
            }


        }
    };
    return main;
});