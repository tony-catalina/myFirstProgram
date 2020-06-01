define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_syrsSldyj.html');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_syrsSldyj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '所领导意见',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
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
            $("#xb").combobox('setValue', '1').combobox('setText', '男性');
            $("#ldxm").textbox().textbox('setValue', common.info.user.loginname);

            $('input[type=radio][name=ldpsbz]').change(function () {
                if (this.value == '1') {
                    $("#ldps").textbox("setValue", "同意入所");
                } else if (this.value == '2') {
                    $("#ldps").textbox("setValue", "不同意入所");
                }
            });

        },
        submit: function (url, callback) {
            main.initControl(url); 
        },
        initControl:url=>{
            const jbxxData = $('#fm').serializeArray(),{log} = console;
            let SubmitData = new Object;
            try{
               jbxxData.forEach(item=>{SubmitData[item.name] = item.value;
               switch(item.name){
                   case 'ldxm':if(!item.value){utils.alert('领导姓名未填写');throw new Error('表单字段未填写完整');}break;
                   case 'qmrq':if(!item.value){utils.alert('领导签名日期未填写');throw new Error('表单字段未填写完整');}break;
               }})
                util.ajax({
                   url: url,
                   data: SubmitData,
                   func: function (data) {
                    if (data.success) {
                        utils.alert(data.msg);
                        utils.closeWin(popwin);
                        $('#table').datagrid('reload');
                    }
                    else utils.alert(data.msg)
                   }});
            }catch(err){log(err)}
        }
    };
    return main;
});