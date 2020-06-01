define(function(require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ryxxblJkbl.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var popwin;
    var isOpen=false;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_ryxxblJkbl',data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '健康补录',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    // $.parser.parse('#fm');
                    // main.bindEvent(data);
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


        bindEvent: function() {
            
            $("#jcrq").datebox('calendar').calendar({  
                validator:function(jcrq){  
                    var date = new Date();  
                    return jcrq < date;  
                }  
            });  
            $("#jcrq").datebox({  
                onSelect:function(jcrq){  
                    $('#qmrq').datebox().datebox('calendar').calendar({  
                        validator:function(qmrq){  
                            var date = new Date();  
                            return jcrq <= qmrq && qmrq <= date;  
                        }  
                    });  
                }  
            });  
          },
        submit: function(url,data, callback) {
            var num = document.getElementById('sgfm').value;
			if (!(/^6[0-9]$|^[6-9]\d$|^1\d{2}$|^2\d{2}$|^3\d{2}$/.test(num))) { //大于60小于400
				$.messager.alert("提示", "身高输入项的最小值是 60", "info");
				return false;
            }
            var num = document.getElementById('tzfm').value;
			if (!(/^3[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
				$.messager.alert("提示", "体重输入项的最小值是 30", "info");
				return false;
            }
            var num = document.getElementById('zcfm').value;
			if (!(/^1[0-9]$|^[2-9]\d$|^1\d{2}$|^2\d{2}$|^9\d{2}$/.test(num))) {
				$.messager.alert("提示", "足长输入项的最小值是 10", "info");
				return false;
            }

           
            
            

            var a = $("#xyfm").val();
			if (a == "") {
				$.messager.alert("提示", "血压不能为空", "info");
				return false;
			} else {
				var as = a.split("/");
				if (as.length != 2) {
					$.messager.alert("提示", "血压格式不正确", "info");
					return false;
				} else {
					var b = new RegExp("^[0-9]+$");;
					if (!b.test(as[0]) || !b.test(as[1])) {
						$.messager.alert("提示", "血压格式不正确", "info");
						return false;
					}
				}
			}
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.jsbh=data.jsbh;
                postData.id=data.id;
                postData.taskid=data.taskid;
                postData.ywlcid=data.ywlcid;
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