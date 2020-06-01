define(function(require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jjxSq.html');
    var combox = require('awd/easyui/combox');
	var urls = require('modules/url');
	var common=require('common');
	var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,callback) {
			var html = formtpl('form/_jjxSq',data);
			if(!isOpen){
            popwin = utils.showWin({
                title: '加减刑申请',
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
			$("#blr").textbox().textbox('setValue',common.info.user.loginname);
            dataChange();
            formMake();
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.snbh=data.snbh;
                postData.id='';
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();

                            }
							utils.closeWin(popwin);
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
    //刑满日期年月日的合并
	var jjxqhbgs=function(){
		var year = $('#year').textbox('getValue');
		var month = $('#month').textbox('getValue');
		var day = $('#day').textbox('getValue');
		var jjxq =("0"+year).substring(("0"+year).length-2)+"-"+("0"+month).substring(("0"+month).length-2)+"-"+("0"+day).substring(("0"+day).length-2);
		$("#jjxqfm").textbox('setValue',jjxq);
	};
	
	//form表单年月日时间的处理
	var formMake = function(){
		$(".nyrsjpd").on("click",function(){
			var year = $('#year').textbox('getValue');
			var month = $('#month').textbox('getValue');
			var day = $('#day').textbox('getValue');
			var yxmrq = $('#yxmrqfm').datebox('getValue'); 
			if(year==""||month==""||day==""){
				$.messager.alert("提示", '必填项不能为空！');
			};
			if($(":radio[name='flag'][value='01']").prop("checked")){
				var yrq=$("#yxmrqfm").datebox('getValue');
				var date=new Date(yrq);
				date.setFullYear(date.getFullYear()+parseInt(year));
				date.setMonth(date.getMonth() + parseInt(month));
				date.setDate(date.getDate() + parseInt(day));
				var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
				$("#xmsfrqfm").datebox('setValue',d);
				jjxqhbgs();
			};
			if($(":radio[name='flag'][value='02']").prop("checked")){
				var yrq=$("#yxmrqfm").datebox('getValue');
				var date=new Date(yrq);
				date.setFullYear(date.getFullYear()-parseInt(year));
				date.setMonth(date.getMonth() - parseInt(month));
				date.setDate(date.getDate() - parseInt(day));
				var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
				$("#xmsfrqfm").datebox('setValue',d);
				jjxqhbgs();
			};	
		});
		
		
}
	//日期变化自动计算
	var dataChange = function(){         	
		 $('#year').textbox({
			 onChange:function(n,o){
					var year = $('#year').textbox('getValue');
					var month = $('#month').textbox('getValue');
					var day = $('#day').textbox('getValue');
					var yxmrq = $('#yxmrqfm').datebox('getValue'); 
					if(year==""||month==""||day==""){
						$.messager.alert("提示", '必填项不能为空！');
					};
					if($(":radio[name='flag'][value='01']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()+parseInt(year));
						date.setMonth(date.getMonth() + parseInt(month));
						date.setDate(date.getDate() + parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};
					if($(":radio[name='flag'][value='02']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()-parseInt(year));
						date.setMonth(date.getMonth() - parseInt(month));
						date.setDate(date.getDate() - parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};	
				
			 }
		 });
		 $('#month').textbox({
			 onChange:function(n,o){

					var year = $('#year').textbox('getValue');
					var month = $('#month').textbox('getValue');
					var day = $('#day').textbox('getValue');
					var yxmrq = $('#yxmrqfm').datebox('getValue'); 
					if(year==""||month==""||day==""){
						$.messager.alert("提示", '必填项不能为空！');
					};
					if($(":radio[name='flag'][value='01']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()+parseInt(year));
						date.setMonth(date.getMonth() + parseInt(month));
						date.setDate(date.getDate() + parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};
					if($(":radio[name='flag'][value='02']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()-parseInt(year));
						date.setMonth(date.getMonth() - parseInt(month));
						date.setDate(date.getDate() - parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};	
				
			 }
		 });
		 $('#day').textbox({
			 onChange:function(n,o){

					var year = $('#year').textbox('getValue');
					var month = $('#month').textbox('getValue');
					var day = $('#day').textbox('getValue');
					var yxmrq = $('#yxmrqfm').datebox('getValue'); 
					if(year==""||month==""||day==""){
						$.messager.alert("提示", '必填项不能为空！');
					};
					if($(":radio[name='flag'][value='01']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()+parseInt(year));
						date.setMonth(date.getMonth() + parseInt(month));
						date.setDate(date.getDate() + parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};
					if($(":radio[name='flag'][value='02']").prop("checked")){
						var yrq=$("#yxmrqfm").datebox('getValue');
						var date=new Date(yrq);
						date.setFullYear(date.getFullYear()-parseInt(year));
						date.setMonth(date.getMonth() - parseInt(month));
						date.setDate(date.getDate() - parseInt(day));
						var d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
						$("#xmsfrqfm").datebox('setValue',d);
						jjxqhbgs();
					};	
				
			 }
         });
    }
    return main;
});