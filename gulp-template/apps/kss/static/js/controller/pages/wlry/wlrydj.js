define(function(require) {
	//公共控件、组件、工具导入
	require('jquery');
	require('easyui');
	require('easyuiZh');
	require('modules/commFun');
	require('layer.config');
	require('awd/easyui/validator')
	var utils = require('awd/layui/utils');
	var add = require('services/form/_wlrydj.html');
	var combogrid = require('awd/easyui/combogrid');
	var tools = require('awd/jquery/tools');
	var util = require('awd/easyui/util');
	var grid = require('awd/easyui/grid');
	var toolbar = require('modules/toolbar');
	var linkbar = require('modules/linkbar');
	var combox = require('awd/easyui/combox');
	var searchform = require('modules/searchform');
	var common=require('common');
	var clumn = require('modules/clumn/wlry');
	var url = require('modules/url');
	var utils = require('awd/layui/utils');



	//界面控件
	var main = {
		init: function() {
			/**界面初始化**/
			main.layout();
			main.eventBind();
			/**界面初始化**/
		},
		layout: function() {

			/**布局初始化**/
			combox.initBySelect('.awdCombox', url.getDictionary);
			/**布局初始化**/

			combogrid.initPageClass('.awdCombogrid', url.getDictionaryPage);
		},
		eventBind: function() {
			/**事件绑定**/
			$('#visiterNum').on('input propertychange',function(){
				alert(123);
				if($(this).val()<=0){
					$(this).text(1);
				}
			});
			$(".wlrydj-record .tab .tab-item").click(function() {
				$(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background",
					"#5191f0");
				$(".products .mainCont").eq($(this).index()).show().siblings().hide();
			});
			$("#jbxxTbody").append(jbxxTbody);
			$(document).on("click", ".jbxxAdd", function() {
				var trcount = $("#jbxxTbody").find("tr").length;
				if (trcount >= 8) {
					$.messager.alert("提示", "行数不多于8行！", "info");
				} else {
					//获取行数
					var trcount = $("#jbxxTbody").find("tr").length;
					jbxxTbody = `<tr style='text-align:center;'>
						<td style="width:10%;padding:3px;"><input id="xm" ${trcount + 1}   class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="zjh"  ${trcount + 1} class="easyui-textbox" data-options="validType:'idcard'"></td>
						<td style="width:10%;padding:3px;"><input id="dw"  ${trcount + 1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="lxdh"  ${trcount + 1} class="easyui-textbox" data-options="validType:'mphone'"></td>
						<td style="width:10%;padding:3px;"><input id="snzjh" ${trcount + 1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="edz" ${trcount + 1}
						 class="smBtn" type="button" value="扫描"></td> 
						<td style="width:10%;padding:3px;"><span class="iconfont icon-jiahao jbxxAdd"></span><span class="iconfont icon-jianhao jbxxDel"></span></td>
						</tr>`
					$("#jbxxTbody").append(jbxxTbody)
					$.parser.parse("#jbxxTbody");
				}

			})
			$(document).on("click", ".jbxxDel", function() {
				var trcount = $("#jbxxTbody").find("tr").length;
				if (trcount == 1) {
					$.messager.alert("提示", "行数不少于1行！", "info");
				} else {
					$(this).parent().parent().remove();
				}
			})

			$(document).on("click", ".clxxAdd", function() {
				var trcount = $("#clxxTbody").find("tr").length;
				if (trcount >= 8) {
					$.messager.alert("提示", "行数不多于8行！", "info");
				} else {
					var cltrcount = $("#clxxTbody").find("tr").length;
					clxxTbody = `<tr style="text-align:center;"> +
						<td style="width:10%;padding:3px;"><input id="clssdw" ${cltrcount+1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="cphm" ${cltrcount+1} class="easyui-textbox" data-options="validType:'carNo'"></td>
						<td style="width:10%;padding:3px;"><input id="aqjcqk" ${cltrcount+1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="snztzhm" ${cltrcount+1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><input id="clsnzjh" ${cltrcount+1} class="easyui-textbox"></td>
						<td style="width:10%;padding:3px;"><span class="iconfont icon-jiahao clxxAdd"></span><span class="iconfont icon-jianhao clxxDel"></span></td>
						</tr>`
					$("#clxxTbody").append(clxxTbody)
					$.parser.parse("#clxxTbody");
				}

			})
			$(document).on("click", ".clxxDel", function() {
				var trcount = $("#clxxTbody").find("tr").length;
				if (trcount == 1) {
					$.messager.alert("提示", "行数不少于1行！", "info");
				} else {
					$(this).parent().parent().remove();
				}
			})

			
			// $("#cphm").each(function(){
			// 	function() {  
			// 		return /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/.test(value);  
			// 	   } 
			// 	  alert('车牌号码无效（例：粤B12350）') 
			// })

			$.parser.parse();
			$("#drmj").textbox().textbox('setValue',common.info.user.loginname);
            $("#drsj").datetimebox().datetimebox("setValue",(new Date()).Format("yyyy-MM-dd hh:mm:ss"));
			$(document).on('click', '.keepBtn', function() {
				//获取行数
				//获取人员信息封装成一个数组传到后台
				var jbxx = {};
				var jbxxarr = [];
				var trcount = $("#jbxxTbody").find("tr").length;
				for (var i = 1; i <= trcount; i++) {
					var xm = $("#xm").val();
					var zjh = $("#zjh").val();
					var dw = $("#dw").val();
					var lxdh = $("#lxdh").val();
					var snzjh = $("#snzjh").val();
					var edz = $("#edz").val();
					
					jbxx = {
						"xm": xm,
						"zjh": zjh,
						"dw": dw,
						"lxdh": lxdh,
						"snzjh": snzjh,
						"edz": edz
					};
					jbxxarr.push(jbxx);
				}
				//将人员信息反序列化
				var jbxxjson = JSON.stringify(jbxxarr);
				//获取车辆信息封装成数组传入后台
				//创建一个集合
				var clxx = {};
				//创建一个数组
				var clxxarr = [];
				//获取车辆表单的行数
				var clxxcount = $("#clxxTbody").find("tr").length;
				//根据id获取数据循环放入集合中
				for (var i = 1; i <= clxxcount; i++) {
					var clssdw = $("#clssdw").val();
					var cphm = $("#cphm" ).val();
					var aqjcqk = $("#aqjcqk" ).val();
					var snztzhm = $("#snztzhm" ).val();
					var clsnzjh = $("#clsnzjhc").val();
					clxx = {
						"clssdw": clssdw,
						"cphm": cphm,
						"aqjcqk": aqjcqk,
						"snztzhm": snztzhm,
						"clsnzjh": clsnzjh
					};
					if (clssdw == "" && cphm == "" && aqjcqk == "" && snztzhm == "" && clsnzjh == "") {
						clxx = "";
					}
					//将集合放入数组中
					clxxarr.push(clxx);
				}
				//将车辆信息反序列化
				var clxxjson = JSON.stringify(clxxarr);
				
				if ($('#fm').form('validate')) {
					var _data =$("#fm").serialize()+"&jbxx="+jbxxjson+"&clxx="+clxxjson;
					util.ajax({
						url: url.rydjAdd,
						async:false,
						data: _data,
						func: function(data) {
							if (data.success) {
								utils.alert(data.msg);
								
								setTimeout("window.location.href = '/apps/kss/views/pages/wlry/ywlc_dv.html'",4000 );
								
							} else {
								utils.alert(data.msg);
							}
						}
					});
				} else {
					utils.alert('表单数据格式不对！');
				}
			})
			// $(document).on('click','.closeBtn',function(){
				
			// 	window.history.go(-1);
			// })
			/**事件绑定**/
		}
	};

	/**
	 *运行入口
	 */
	$(main.init);

});
