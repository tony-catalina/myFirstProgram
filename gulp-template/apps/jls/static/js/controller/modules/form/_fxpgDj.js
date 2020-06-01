define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    //var url = require('modules/url');
    var formtpl = require('services/form/_fxpgDj.html');
    var common=require('common');
    var urls = require('modules/url');
    var isOpen=false;
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var popwin;
    var vIds = '';
    var main = {

        init: function (url, data,  callback) {
            //var dataall = {};
           // Object.assign(dataall, data, row);
            var html = formtpl('form/_fxpgDj', data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '风险评估登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    $.parser.parse("#fm")
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
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
                yes: function() {
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen=false;
            });
            }
        },
        bindEvent: function () {
            $("#xfxdj").combobox({
                onSelect:function(res){
                    if(res.code == "1"){
                        $("#MiniTabs").tabs('enableTab','一级重大安全风险');
                        $("#MiniTabs").tabs('select','一级重大安全风险');
                        $("#MiniTabs").tabs('disableTab','二级重大安全风险');
                        $("#MiniTabs").tabs('disableTab','三级重大安全风险');
                    }else if(res.code == "2"){
                        $("#MiniTabs").tabs('disableTab','一级重大安全风险');
                        $("#MiniTabs").tabs('enableTab','二级重大安全风险');
                        $("#MiniTabs").tabs('select','二级重大安全风险');
                        $("#MiniTabs").tabs('disableTab','三级重大安全风险');
                    }else if(res.code == "3"){
                        $("#MiniTabs").tabs('disableTab','一级重大安全风险');
                        $("#MiniTabs").tabs('disableTab','二级重大安全风险');
                        $("#MiniTabs").tabs('enableTab','三级重大安全风险');
                        $("#MiniTabs").tabs('select','三级重大安全风险');
                    }
                }
            })
            $("input[type=checkbox]:checked").each(function() {
                console.log("执行函数");
                vIds += $(this).attr('value') + ",";
            });
            if (vIds.length > 0) {
                vIds = vIds.substring(0, vIds.length - 1);
            }
            console.log("vIds"+vIds);
            $('#pgrfm').textbox().textbox('setValue',common.info.user.loginname);
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                vIds = '';
                $("input[type=checkbox]:checked").each(function() {
                    console.log("执行函数");
                    vIds += $(this).attr('value') + ",";
                });
                if (vIds.length > 0) {
                    vIds = vIds.substring(0, vIds.length - 1);
                }
                console.log("vIds"+vIds);
                data.rybh = row.rybh;
                data.jsbh  = row.jsbh;
                data.ywlcid = row.ywlcid;
                data.fxqk = vIds;
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
