define(function(require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jqglJlcl.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_jqglJlcl', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '警情记录处理',
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
                    main.submit(url,data,callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function(data) {
            $("#cljg").combobox("setValue",data.cljg).combobox("setText",data.cljg);
            $("#clrfm").textbox("setValue",data.clr);
            $("#clsjfm").datetimebox("setValue",data.clsj);
            $("#bz").textbox("setValue",data.bz);
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.id = data.id;
                postData.jsbh = data.jsbh;
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
                        if (data.success) {
                            utils.alert("处理成功");
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