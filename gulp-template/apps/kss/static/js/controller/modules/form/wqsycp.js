define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wqsycp.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, row, callback) {
            var html = formtpl('form/_wqsycp', data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '武器使用呈批',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-datebox,.easyui-numberbox'),function(el){
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
                    main.submit(url, data, row, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function () {
    
        },
        submit: function (url, data, row, callback) {
            // console.log(row)
            // console.log('打印传过来的data值')
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data1 = util.form2Json('fm');
                data1.jh = row.jh;
                data1.creator = data.cpr;
                data1.createtime = data.cprq;
                console.log(data);
                util.ajax({
                    url: url,
                    data: data1,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                $("#table").datagrid("reload");
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
