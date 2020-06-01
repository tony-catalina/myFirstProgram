define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var utils = require('awd/layui/utils');
    var urls=require('modules/url');
    var formtpl = require('services/form/_sqfxSwhy.html');
    var isOpen = false;
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_sqfxSwhy', data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '所务会议',
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
            },function () {
                isOpen=false;
            });
        }
        },
        bindEvent: function () {
           
        },
        submit: function (url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var hyly = $('#fileInput')[0].files[0];
                var dataObj = $('#fm').serializeObject();
                dataObj.hylyurl = data.hylyurl;
                dataObj.id = data.id;
                var formData =  JSON.stringify(dataObj);
                var sendData = new FormData();
                sendData.append('hyly',hyly);
                sendData.append('formData',formData);


                util.ajax({
                    url: url,
                    processData: false,
                    contentType: false,
                    dataType:'json',
                    data: sendData,
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
