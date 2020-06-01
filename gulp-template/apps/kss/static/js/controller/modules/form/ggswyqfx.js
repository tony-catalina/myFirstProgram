define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_ggswYqfx.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_ggswYqfx', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '狱情分析',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox,.easyui-numberbox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                      
                        }).then(function () {
                            var len = document.querySelectorAll('.timeline-item').length-1;
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
        bindEvent: function () {
            $('#fxsqMonth').datebox({
                onSelect: function (date) {
                    var showdate = date.getDate()
                    if (showdate >= 15) {
                        $('#fxsqDay').combobox('setValue', '下半月');
                    } else if (showdate < 15) {
                        $('#fxsqDay').combobox('setValue', '上半月');
                    } else {
                        $('#fxsqDay').combobox('setValue', '');
                    }
                }
            });
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var fxsqMonth = $("#fxsqMonth").datebox('getValue');
                var fxsqDay = $("#fxsqDay").combobox('getValue');
                var fxsq = fxsqMonth + fxsqDay;
                var postData = util.form2Json('fm');
                postData.fxsq=fxsq;
                util.ajax({
                    url: url,
                    data: postData,
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