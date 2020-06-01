define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var comboxtree = require('awd/easyui/comboxtree');
    var formtpl = require('services/form/_syrsAqjc.html');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function(url, data, callback) {
            var html = formtpl('form/_syrsAqjc', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '安全检查',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            }).then(function(){
                                return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                    comboxtree.initBySelect(el,urls.getJsCombotree);
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
                        main.submit(url, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {
            var checkbox = document.querySelector('#ywwjp');
            checkbox.addEventListener('change', function() {
                $('#wjpxx.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function() {
                    $.parser.parse('#fm');
                }, 0);
            });
            var checkbox1 = document.querySelector('#ywwjpwu');
            checkbox1.addEventListener('change', function() {
                $('#wjpxx.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function() {
                    $.parser.parse('#fm');
                }, 0);
            });

            var checkbox2 = document.querySelector('#ywkysqdj');
            checkbox2.addEventListener('change', function() {
                $('#sqxx.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function() {
                    $.parser.parse('#fm');
                }, 0);
            });
            var checkbox3 = document.querySelector('#ywkysqdjwu');
            checkbox3.addEventListener('change', function() {
                $('#sqxx.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function() {
                    $.parser.parse('#fm');
                }, 0);
            });
        },
        submit: function(url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: data,
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