define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ggswAqjc.html');
    // var validation = require('modules/validation');
    var urls=require('modules/url');
    var popwin;
    var isOpen=false;
    var main = {

        init: function (url, data, callback) {
            console.log('============='+JSON.stringify(data));
            var html = formtpl('form/_ggswAqjc', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '安全检查',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox,.easyui-numberbox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                      
                        }).then(function () {
                            var len =  document.querySelectorAll('.timeline-item').length -1;
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
            // checkbox的显示与隐藏
            var checkbox = document.querySelector('#aqjcCheckbox');
            checkbox.addEventListener('change', function () {
                $('.elements-hidden').toggleClass('table-row-hidden');
                setTimeout(function (){
                        $.parser.parse('#fm');
                    }, 0);});
            // validation.tablevalidation();
        },
        submit: function (url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.fzr=$("#fzr").textbox('getValue');
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
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