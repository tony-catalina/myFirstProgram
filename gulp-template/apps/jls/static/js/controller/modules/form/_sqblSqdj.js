define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var formtpl = require('services/form/_sqblSqdj.html');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data,  callback) {
            // var dataall = {};
            // Object.assign(dataall, data, row);
            var html = formtpl('form/_sqblSqdj', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '伤情登记',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    // $.parser.parse('#fm');
                    // main.bindEvent();
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
                yes: function () {
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function () {
           // combox.initBySelect('#fm .awdCombox', url.getDictionary);
        },
        submit: function (url, row, callback) {
            var photoInfo=$("#photo")[0].files[0];
            console.log("===="+photoInfo);
            /**先校验form */
            if(photoInfo){
                if ($('#fm').form('validate')) {
                    var data = util.form2Json('fm');
                    var formData = new FormData();
                    formData.append("sqms",data.sqms);
                    formData.append("rybh",row.rybh);
                    formData.append("djr",data.djr);
                    formData.append("djsj",data.djsj);
                    formData.append("photo",$("#photo")[0].files[0]);

                    util.ajax({
                        url: url,
                        data: formData,
                        processData: false,
                        contentType: false,
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
            }else {
                utils.alert('请上传图片！');
            }


         }
    };
    return main;
});