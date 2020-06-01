define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var utils = require('awd/layui/utils');
	var combox = require('awd/easyui/combox');
	var urls = require('modules/url');
    var formtpl = require('services/form/_syrsFwdj.html');
    var common=require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data,row,callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_syrsFwdj', dataall);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '附物登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                            Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                                return p.then(function () {
                                    return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datebox, .easyui-combobox'),function(el){
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
                    yes: function () {
                        main.submit(url, callback);
                    }
                },function(){
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
           
            $("#djr").textbox().textbox('setValue',common.info.user.loginname);
        },
        submit: function (url, callback) {
            /**先校验form */
            let data = main.screenData();
            if(!data)return;
            util.ajax({url: url,data: data,
                func: function(data) {
                    if (data.success) {
                        utils.alert(data.msg);
                        utils.closeWin(popwin);
                        grid.reload('table');
                    } 
                    else utils.alert(data.msg)
                    }});

        },
        screenData:()=>{
            const initData = $("#fm").serializeArray(),{log}=console;
            let SubmitData = new Object;
            try{initData.forEach(item=>{SubmitData[item.name]=item.value
                switch(item.name){
                    case 'fzdsl' : if(!item.value){utils.alert('封装带数量未填写');throw new Error('表单字段未填写完整')}break;
                    case 'fzdbh' : if(!item.value){utils.alert('封装带编号未填写');throw new Error('表单字段未填写完整')}break;
                    case 'djwpsl' : if(!item.value){utils.alert('大件物品数量未填写');throw new Error('表单字段未填写完整')}break;
                    case 'djwpbh' : if(!item.value){utils.alert('大件物品编号未填写');throw new Error('表单字段未填写完整')}break;
                    case 'jsje' : if(!item.value){utils.alert('金额未填写');throw new Error('表单字段未填写完整')}break;
                    case 'blrq' : if(!item.value){utils.alert('办理日期未填写');throw new Error('表单字段未填写完整')}break;
                } });
            return SubmitData;
            }catch(err){log(err)}
        },
    };
    return main;
});