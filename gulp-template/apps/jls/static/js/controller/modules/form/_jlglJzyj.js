define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jlglJzyj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    // var comboxtree = require('awd/easyui/comboxtreegrid');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_jlglJzyj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '警组意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox, .easyui-combobox'),function(el){
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
                        main.submit(url,data, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $('#zdqmsj').datetimebox('setValue',data.zdqmsj);
            // $('input[type=radio][name=zdyj]').change(function () {
            //     if (this.value == '1') {
            //         $('#zdyjnr').textbox('setValue', '同意');
            //     } else if (this.value == '2') {
            //         $('#zdyjnr').textbox('setValue', '不同意');
            //     }
            // });
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
               // postData.xb=data.xb;
               // postData.ay=data.ay;
               // postData.hjd=data.hjd;
                postData.processName='jls_jlgl_jzyj';
                postData.tbr=data.tbr;
                postData.tbrq=data.tbrq;
                postData.rybh = data.rybh;

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
