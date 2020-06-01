define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_ryxxwh.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            console.log(data);
            var html = formtpl('form/_ryxxwh', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '人员信息维护',
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
                       
                        }).then(function () {
                            var len = document.querySelectorAll('.timeline-item').length -1;
                            if (idx === len) {
                                main.bindEvent(data);
                            }
                        });
                    }, Promise.resolve());
                },
                yes: function () {
                    main.submit(url, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function (data) {
            // 回显部分

            $('#ay').each(function () {
                var fieldName = $(this).prev().next().attr("code");
                if (fieldName == undefined) {
                    fieldName = $(this).attr("code");
                }
                $(this).tagbox({
                    url: urls.getDictionary+'?node=AJLB',
                    method: 'post',
                    valueField: 'code',
                    textField: 'content',
                    limitToList: true,
                    hasDownArrow: true,
                    onSelect: function (value) {
                        if ($(this).tagbox("getValues").length > 4) {
                            $.messager.alert("提示", '选择不能大于5个', 'info', function () {
                                $('#ay').tagbox("unselect", value.code)
                            });
                        }
                    }
                });
            });
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
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