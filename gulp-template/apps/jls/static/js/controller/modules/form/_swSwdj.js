define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_swSwdj.html');
    var grid = require('awd/easyui/grid');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_swSwdj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '送物登记',
                    area: ['90%', '85%'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $.parser.parse('#fm');
                        main.bindEvent();
                        main.Load(row);
                    },
                    yes: function () {
                        main.submit(url, callback);
                    }
                });
            }
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $("#swsj").datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            $("#zqmj").textbox().textbox('setValue',common.info.user.loginname);
			
			grid.init('swdjTable', {
			    url: url.wpjslist,
			    method: 'POST',
			    fit: false,
			    width: '100%',
			    height: 200,
			    firstLoad: false,
			    columns: [
			        {field : 'wpmcString',width : 100,title:'物品名称',align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.wpmcString==null?"":row.wpmcString)+'>'+(row.wpmcString==null?"":row.wpmcString)+'</span>'}},
			        {field : 'sqje',width : 50,title:'送钱金额',align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.sqje==null?"":row.sqje)+'>'+(row.sqje==null?"":row.sqje)+'</span>'}},
			        {field : 'swrxm',title : '送物人姓名',width : 50,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrxm==null?"":row.swrxm)+'>'+(row.swrxm==null?"":row.swrxm)+'</span>'}},
			        {field : 'swrxbString',title : '送物人性别',width : 50,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrxbString==null?"":row.swrxbString)+'>'+(row.swrxbString==null?"":row.swrxbString)+'</span>'}},
			        {field : 'swrdw',title : '送物人单位',width : 50,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swrdw==null?"":row.swrdw)+'>'+(row.swrdw==null?"":row.swrdw)+'</span>'}},
			        {field : 'swsj',title : '送物时间',width : 100,align: 'center', halign: 'center',sortable:'true',formatter: function(value,row,index){return '<span title='+(row.swsj==null?"":row.swsj)+'>'+(row.swsj==null?"":row.swsj)+'</span>'}},
			    ]
			});
        },
        submit: function (url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = $("#fm").serialize();
                util.ajax({
                    url: url,
                    data: data,
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

         },
		 Load:function(row){
			 $("#swdjTable").datagrid("load", {
			 	"rybh": row.rybh,
			 });
		 }
    };
    return main;
});