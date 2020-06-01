define(function(require) {
    var commFun = require('modules/commFun');
    var isOpen = false;//弹框默认不打开
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzJzyj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jstzJzyj',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '拘室调整-警组意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox,  .easyui-datebox, .easyui-combobox'),function(el){
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
        bindEvent: function(data) {
            // combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#jzyjfm").textbox("setValue", "同意");
            $('input[type=radio][name=jzyj]').change(function () {
                if (this.value == '1') {
                    $("#jzyjfm").textbox("setValue", "同意");
                } else if (this.value == '2') {
                    $("#jzyjfm").textbox("setValue", "不同意");
                }
            });


                // // 回显部分
                // $('#fm .awdCombox').each(function() {
                //     var $this = $(this);
                //     var value = $this.attr('comboname').trim();
                //     if (data[value + 'String']) {
                //         $this.combobox().combobox('setValue', data[value]);
                //         $this.combobox().combobox('setText', data[value + 'String']);
                //     }
    
                // })
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
               
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;

                postData.tjyy=data.ldpsxx.jstz_tjyy;
                postData.processName='jls_jstz_jzyj';

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
            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});