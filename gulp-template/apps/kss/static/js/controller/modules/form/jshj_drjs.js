define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jshjDrjs.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var common=require('common');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jshjDrjs',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '家属会见-带入监室',
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
                            var len = document.querySelectorAll('.timeline-item').length-1;
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
            $("#blsj").datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#dlmj").textbox().textbox('setValue',common.info.user.loginname);
            $("#fitem1").hide();
            $("#fitem2").hide();
            $("#fitem3").hide();
            $("#ywtbs1").on("click", function (){
                var _check = $("#fitem1").css("display") ;
                if(_check=="none"){
                    $("#fitem1").show();
                    $("#sbqkfm").textbox({required:true});
                    $.parser.parse($("#fitem1"));
                    $("#ywtbs1").val("1");
                } else{
                    $("#fitem1").hide();
                    $("#sbqkfm").textbox({required:false});
                    $("#ywtbs1").val("2");
                }
            });
            $("#ywwjp1").on("click", function (){
                var _check = $("#fitem2").css("display") ;
                if(_check=="none"){
                    $("#fitem2").show();
                    $("#wjpqkfm").textbox({required:true});
                    $.parser.parse($("#fitem2"));
                    $("#ywwjp1").val("1");
                }
                else{
                    $("#fitem2").hide();
                    $("#wjpqkfm").textbox({required:false});
                    $("#ywwjp1").val("2");
                }
            });
            $("#ywqxyc1").on("click", function (){
                var _check = $("#fitem3").css("display") ;
                if(_check=="none"){
                    $("#fitem3").show();
                    $("#qxycqkfm").textbox({required:true});
                    $.parser.parse($("#fitem3"));
                    $("#ywqxyc1").val("1");
                }
                else{
                    $("#fitem3").hide();
                    $("#qxycqkfm").textbox({required:false});
                    $("#ywqxyc1").val("2");

                }
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');

                postData.rybh=data.rybh;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
                postData.creator=common.info.user.loginname;
                var ss=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                postData.createtime=ss;
                if(!postData.ywtbs){
                    postData.ywtbs="2";
                }
                if(!postData.ywwjp){
                    postData.ywwjp="2";
                }
                if(!postData.ywqxyc){
                    postData.ywqxyc="2";
                }
                var datas={};
                datas.data=JSON.stringify(postData);


                util.ajax({
                    url: url,
                    data: datas,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                
                            }
                            utils.closeWin(popwin);
                            grid.reload('table');
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
