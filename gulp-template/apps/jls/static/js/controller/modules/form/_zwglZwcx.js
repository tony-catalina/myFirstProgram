define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zwglzwcx.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zwglzwcx',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '指纹查询',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['关闭'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datebox,  .easyui-combobox'),function(el){
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                    combox.initBySelect(el,urls.getDictionary);
                                });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,urls.getJsCombotree);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length -1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        utils.closeWin(popwin);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            // if ($('#fm').form('validate')) {
            //     var postData = util.form2Json('fm');
            //     postData.rybh=data.rybh;
            //     util.ajax({
            //         url: url,
            //         data: postData,
            //         func: function(data) {
            //             if (data.success) {
            //                 utils.alert(data.msg);
            //                 if (tools.isFunction(callback)) {
            //                     callback();
            //                     utils.closeWin(popwin);
            //                 }
            //             } else {
            //                 utils.alert(data.msg);
            //             }
            //         }
            //     });
            // } else {
            //     utils.alert('表单数据格式不对！');
            // }
        }
    };
    return main;
});