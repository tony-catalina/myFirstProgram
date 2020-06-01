define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_tszglAdd.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var url = require('modules/url');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,jl,callback) {
            console.log(JSON.stringify(data));
            var title = '';
            if (false == jl){
                title = '提审证-新增';
            } else{
                title = '提审证-修改';
            }
            var html = formtpl('form/_tszglAdd',data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: title,
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.awdCombogrid, .easyui-datetimebox'),function(el){
                                $.parser.parse(el.parentElement);
                            });
                        }).then(function () {
                            return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                combox.initBySelect(el,urls.getDictionary);
                            });
                        }).then(function(){
                            return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                                combogrid.initPageClass(el,urls.getDictionaryPage);
                            });
                        }).then(function(){
                            return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                comboxtree.initBySelect(el,urls.getJsCombotree);
                            });
                        }).then(function(){
                            return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                                comboxtree.initTagBox(el,urls.getDictionary);
                            });
                        }).then(function () {
                            var len = document.querySelectorAll('.timeline-item').length-1;
                            if (idx === len) {
                                main.bindEvent(data);
                            }
                        });
                    }, Promise.resolve());
                },
                yes: function() {
                    main.submit(url,data,jl, callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function(data,jl) {
            var dates=(new Date()).Format('yyyy-MM-dd hh:mm:ss');

            if (false == jl){
                $("#barfm").textbox().textbox('setValue',common.info.user.loginname);
                $('#fzrqfm').datetimebox().datetimebox('setValue',dates);
                $("#blrfm").textbox().textbox('setValue',common.info.user.loginname);
                $('#badwfm').textbox().textbox('setValue','');
            }else{
                $("#barfm").textbox().textbox('setValue',common.info.user.loginname);
                $('#fzrqfm').datetimebox().datetimebox('setValue',dates);
                $("#blrfm").textbox().textbox('setValue',common.info.user.loginname);

            }
        },
        submit: function(url,data,jl, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                postData.rybh = data.rybh;
                postData.badw = $("#badwfm").combobox('getText');
                postData.jsbh = data.jsbh;
                if (false != jl){
                    postData.id = jl.id;
                }
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
