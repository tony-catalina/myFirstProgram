define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ylxxblRstjbl.html');
    var combox = require('awd/easyui/combox');
    var grid=require('awd/easyui/grid')
    var url = require('modules/url');
    var grid=require('awd/easyui/grid')
    var urls = require('modules/url');
    var combogrid=require('awd/easyui/combogrid');
    var comboxtree=require('awd/easyui/comboxtree')

    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ylxxblRstjbl',data);
           if(!isOpen) {
                popwin = utils.showWin({
                    title: '入所体检补录',
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

                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                            //         combogrid.initPageClass(el,url.getDictionaryPage);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,url.getJsCombotree);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                            //         comboxtree.initTagBox(el,url.getDictionary);
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
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            var dates=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
            var shortDate = (new Date()).Format("yyyy-MM-dd");
            $("#tbrqfm").datebox("setValue",shortDate);
            $('#tbrfm').textbox('setValue','');
            $("#ysjcrqfm").datetimebox("setValue",dates);
            $("#ysqmrqfm").datetimebox("setValue",dates);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.gcbh=data.rybh;
                postData.jsbh=data.jsbh;
                postData.sydw=data.sydw;
                postData.dah=data.dah;
                postData.jsh=data.jsh;
                var pic1 = $('#pic1fm')[0].files[0];
                var pic2 = $('#pic2fm')[0].files[0];
                var pic3 = $('#pic3fm')[0].files[0];
                var sendData = new FormData();
                sendData.append('pic1', pic1);
                sendData.append('pic2', pic2);
                sendData.append('pic3', pic3);
                sendData.append('formData', JSON.stringify(postData));

                util.ajax({
                    url: url,
                    data: sendData,
                    processData: false,
                    contentType: false,
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
