define(function(require) {
    var commFun=require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tsclLdsp.html');
    var combox = require('awd/easyui/combox');
    var urls = require('modules/url');
    var isOpen=false;
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_tsclLdsp',data);
            if(!isOpen){
            popwin = utils.showWin({
                title: '审批',
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
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen=false;
            });
        }
        },
        bindEvent: function() {

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.jsbh=data.jsbh;
                postData.rybh=data.rybh;
                postData.xm=data.xm;
                postData.jsh=data.jsh;
                postData.snbh=data.snbh;
                postData.tslx=data.ldpsxx.tslx;
                postData.gx=data.ldpsxx.gx;
                postData.tsrxm=data.ldpsxx.tsrxm;
                postData.tsdx=data.ldpsxx.tsdx;
                postData.btsdx=data.ldpsxx.btsdx;
                postData.tsnr=data.ldpsxx.tsnr;
                postData.tssj=data.ldpsxx.tssj;
                postData.slr=data.ldpsxx.slr;
                postData.slsj=data.ldpsxx.slsj;
                postData.ywlcid=data.ywlcid;
                postData.taskid=data.taskid;
                postData.processName='kss_tscl';
                postData.processNode='kss_tscl_ldsp';
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