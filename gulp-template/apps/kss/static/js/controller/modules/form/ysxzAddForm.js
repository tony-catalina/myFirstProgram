define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ysxz.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');

    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ysxz',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '医生巡诊',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-numberspinner, .easyui-combobox'),function(el){
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
            $("#sfxyfy").click(function () {
                event.stopPropagation(); // 阻止向上冒泡
                    $(".xfypSH").show();
                    $.parser.parse($(".xfypSH"));
            });

            $("#sfxyfymm").click(function () {
                $(".xfypSH").hide();
                $("#csfm").numberbox("setValue","");
                $("#slfm").numberbox("setValue","");
                $("#fyjgfm").numberbox("setValue","");
                $("#fyzysxfm").textbox("setValue","");
            });


            $("#ypbhfm").combobox({
                url:url.getKcYpmcList,
                valueField:'tm',
                textField:"ypmc",
                panelHeight:'30%',
                panelWidth:'15%',
                editable: true,
                onLoadSuccess:function(res){

                },
                onBeforeLoad:function(param){
                    param.page="1";
                    param.rows="99999";
                    param.ypmc="";
                },
                onSelect:function(val){
                    if(val.ypzs == "0"){
                        $.messager.alert("提示","该药品库存不足","info",function(){
                            $("#ypbhfm").combobox("setValue","");
                        });
                    }else{
                        sl=val.ypzs;
                        name=val.ypmc;
                    }

                }
            });


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.snbh=data.snbh;
                postData.rybh=data.rybh;
                postData.jsh=data.jsh;
                postData.xm=data.xm;
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
