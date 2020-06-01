define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_swJs.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_swJs',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '送物-接收',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                        main.Load(data);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#dsrq").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#dsr").textbox().textbox('setValue',common.info.user.loginname);
			grid.init('swjsTable', {
			    url: url.wpglList,
			    method: 'POST',
			    fit: false,
			    width: '100%',
			    height: 200,
			    firstLoad: false,
			    columns: [
			        {field : 'mcString',width : 80,title:'物品名称',align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.mcString==null?"":row.mcString)+'>'+(row.mcString==null?"":row.mcString)+'</span>'}},
			        {field : 'wpdwStringwpdwString',title : '单位',width : 80,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpdwString==null?"":row.wpdwString)+'>'+(row.wpdwString==null?"":row.wpdwString)+'</span>'}},
			        {field : 'sl',title : '数量',width : 80,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sl==null?"":row.sl)+'>'+(row.sl==null?"":row.sl)+'</span>'}},
			        {field : 'bz',title : '备注',width : 100,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.bz==null?"":row.bz)+'>'+(row.bz==null?"":row.bz)+'</span>'}}
			    ]
			});
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh=data.rybh;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;

                postData.id=data.ldpsxx.wpjs_id;

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

        },
		Load:function(row){
			$("#swjsTable").datagrid("load", {
				"rybh": row.rybh,
				"uuid":row.ldpsxx.wpjs_uuid,
			});
		}
    };
    return main;
});