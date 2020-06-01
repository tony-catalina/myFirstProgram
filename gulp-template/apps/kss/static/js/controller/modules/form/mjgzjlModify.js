define(function (require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_mjGzjl.html');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {

        init: function (url, data, dataall, callback) {
            //var dataall = {};
            //Object.assign(dataall, data, addData);
            var html = formtpl('form/_mjGzjl', data,dataall);
            if(!isOpen){
            popwin = utils.showWin({
                title: '民警工作经历',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                      
                        }).then(function () {
                            var len = document.querySelectorAll('.timeline-item').length -1;
                            if (idx === len) {
                                main.bindEvent(dataall);
                            }
                        });
                    }, Promise.resolve());
                },
                yes: function () {
                    main.submit(url,data,dataall, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function (dataall) {
            $("#qsny").datebox('setValue',dataall.qsny);
            $("#zzny").datebox('setValue',dataall.zzny);
            $("#zmr").textbox('setValue',dataall.zmr);
            $("#zwfm").combobox('setValue',dataall.zw);
            $("#dwmc").textbox('setValue',dataall.dwmc);
        },
        submit: function (url, data,dataall,callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.xl = data.xl;
                postData.jx = data.jx;
                postData.zzmm = data.zzmm;
                postData.creator=data.creator;
                postData.createtime=data.createtime;
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
