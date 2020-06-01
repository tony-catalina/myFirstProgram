define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jyglJydj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');

    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jyglJydj',data);
             if(!isOpen) {
                popwin = utils.showWin({
                    title: '所外就医',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-numberbox'),function(el){
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
            $("#sfyxxxfm").click(function () {
                event.stopPropagation(); // 阻止向上冒泡
                var yy = document.getElementById('sfyxxxfm').checked;
                document.getElementById('sfyxxxfm').checked=true;
                if($("#sfyxxxSH").is(":hidden")){
                    $("#sfyxxxSH").show();
                    $('#xxkssjfm').textbox({required:true});
                    $.parser.parse($("#sfyxxxSH"));

                }else{
                    $("[name = sfyxxx]:checkbox").attr("checked", false);
                    $("#sfyxxxSH").hide();
                    $('#xxkssjfm').textbox({required:false});
                    //$('#fyksrqfm').datetimebox().clear();
                }
            });
            
            $("#sfffypfm").click(function () {
                event.stopPropagation(); // 阻止向上冒泡
                var yy = document.getElementById('sfffypfm').checked;
                document.getElementById('sfffypfm').checked=true;
                //$('#xfypSH').width();   //获取宽度
                if($(".xfypSH").is(":hidden")){
                    $(".xfypSH").show();

                    $('#fyksrqfm').datebox({required:true});
                    $('#ypbhfm').textbox({required:true});
                    $('#csfm').textbox({required:true});
                    $('#slfm').textbox({required:true});
                    $('#fyjgfm').textbox({required:true});
                    $.parser.parse($(".xfypSH"));
                }else{
                    $("[name = sfffyp]:checkbox").attr("checked", false);
                    $(".xfypSH").hide();
                    $('#fyksrqfm').textbox({required:false});
                    $('#ypbhfm').textbox({required:false});
                    $('#csfm').textbox({required:false});
                    $('#slfm').textbox({required:false});
                    $('#fyjgfm').textbox({required:false});
                    $("#ypbhfm").combobox("setValue","");
                    //$('#fyksrqfm').datetimebox().clear();
                }

            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.snbh = data.snbh;
                postData.jsh = data.jsh;
                postData.xm = data.xm;
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
