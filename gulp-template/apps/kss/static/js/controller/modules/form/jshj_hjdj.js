define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jshjHjdj.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var url = require('modules/url');
    var common=require('common');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var chickradio =function(ss1,ss2,ss3){
        var value1 = $('input:radio[name='+ss1+']:checked').val();
        if(value1 == "1"){
            $(ss2).show();
        }else{
            $(ss2).hide();
            $(ss3).siblings().prop("checked",false);
        }
    }
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jshjHjdj',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '家属会见-会见登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消','扫描二代证'],
                success: function() {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-numberbox,.awdCombox,.awdCombogrid, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'),function(el){
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
                    main.submit(url, data,callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function() {
            $("#zjlx").combobox('setValue','11').combobox('setText','身份证');
            $("#tfrxb").combobox('setValue','1').combobox('setText','男性');
            $("#tfrqfm").datetimebox().datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
            $("#sjmj").textbox().textbox('setValue',common.info.user.loginname);

            $("input:radio[name=sfswgx]").on("click",function(){
                chickradio("sfswgx",".swgxtz1",".wp2");
            });
            $("input:radio[name=detfrsfsw]").on("click",function(){
                chickradio("detfrsfsw",".swgxtz2",".wp3");
            });
            $("input:radio[name=dstfrsfsw]").on("click",function(){
                chickradio("dstfrsfsw",".swgxtz3",".wp4");
            });
            $(".wp2").on("click", function (){
                $(this).siblings().prop("checked",true);
            });
            $(".wp3").on("click", function (){
                $(this).siblings().prop("checked",true);
            });
            $(".wp4").on("click", function (){
                $(this).siblings().prop("checked",true);
            });
            $("#hjs").combogrid({
                onChange: function(newValue, oldValue){
                	console.log(newValue)
                    $.ajax({
                		type:"POST",
                		url:"/kss_jshj/jshjHjs",
                		data:{
                			"hjs":newValue,
                		},
                		success:function(result){
                			if(result.result.length!="0"){
                				$.messager.alert("提示", "房间正在使用","warn");
                				 $("#hjs").combotree("initValue","");
                			}else{
                			}
                		}
                	})
                },
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
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