define(function(require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_sgsjdjZdsj.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var comboxtree=require('awd/easyui/comboxtreegrid');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_sgsjdjZdsj',data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '事故事件登记-重大事件',
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
        bindEvent: function() {
            comboxtree.initPageClass('awdCombotree', [
                [{
                    field: 'ck',
                    checkbox: $(this).attr('checkBox') == 'true'
                },
                    {
                        field: 'fieldName',
                        title: 'xx',
                        width: 80,
                        hidden: true
                    },
                    {
                        field: 'code',
                        title: '人员编号',
                        width: 300
                    },
                    {
                        field: 'content',
                        title: '人员姓名',
                        width: 150
                    }]
            ]);
           


        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.qklx='03';
                postData.id=data.id;
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