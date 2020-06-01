define(function(require) {
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jstzJstzdj.html');
    var combox = require('awd/easyui/combox');
  //  var comboxtree=require('awd/easyui/comboxtreegrid');
    var combogrid = require('awd/easyui/combogrid');
    var common=require('common');
    var urls = require('modules/url');
    var comboxtree = require('awd/easyui/comboxtree');
    var commFun = require('modules/commFun');
    var isOpen = false
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jstzJstzdj',data);
            if(!isOpen){
                popwin = utils.showWin({
                    title: '监室调整登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox'),function(el){
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
        tafEvent: function(data){
        	  $.ajax({
      			type : "POST",  //提交方式
      			url : urls.tafList,//路径
      			async:true,
      			data : {
      				rybh:data.rybh
      			},
      			success : function(result) {
      				var data = result.rows;
      				if (data.length>0){
      					for(var i = 0;i<data.length;i++){
      						var xh = data.length-i;
      						$("#taftable").prepend(
      							'<tr align="center"><td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+xh+'"></td>'+
      							'<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].jsh+'"></td>'+
      							'<td><input type="text" style="border: none;outline:none;text-align: center;" readonly value="'+data[i].xm+'"></td></tr>'
      						)
      					}
      				} else{
      					$("#taftable").prepend(
      						'<tr align="center"><td colspan="3"><input type="text" style="border: none;outline:none;text-align: center;" readonly value="无同案人员"></td></tr>'
      					)
      				}
      			}
      		});
        },
        
        bindEvent: function(data) {
          //   combox.initBySelect('#fm .awdCombox', urls.getDictionary);
          //   comboxtree.initPageClass('awdCombotree');
          //   combogrid.initPageClass('.awdCombogrid', urls.getDictionaryPage);
            combogrid.initJstzJshClass('.awdCombogridJstzJs', urls.getJsXqList,data.ay,data.hjd,data.xb);
          //  comboxtree.initBySelect('#fm .jsh', url.getJsCombotree);


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.snbh=data.snbh;
                postData.xm=data.xm;
                postData.yjsh=data.jsh;
                postData.bm=data.bm;
                postData.xb=data.xb;
                postData.rsrq=data.rsrq;
                postData.bahj=data.bahj;
                postData.badw=data.badw;
                postData.gyqx=data.gyqx;
                postData.tbr=common.info.user.loginname;
                var ss=(new Date()).Format("yyyy-MM-dd hh:mm:ss");
                postData.tbsj=ss;

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