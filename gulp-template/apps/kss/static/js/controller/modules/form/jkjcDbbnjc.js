define(function(require) {
    var commFun = require('modules/commFun');
    require('fieldset');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jkjcDbbnjc.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');

    var isOpen = false;//弹框默认不打开
    var popwin;
    //判断是否需要五项补录
    var sfwxjc_flag = function() {
        var sfwxjc ;
        var flag1 = $('#xyfm').textbox('getValue');
        var flag2 = $('#xcgfm').textbox('getValue');
        var flag3 = $('#xdtfm').textbox('getValue');
        var flag4 = $('#bcfm').textbox('getValue');
        var flag5 = $('#xpfm').textbox('getValue');
        if (flag1 == '' || flag2 == '' || flag3 == '' || flag4 == '' || flag5 == '' ) {
            return sfwxjc  = 0;
        }else {
            return sfwxjc  = 1;
        }
    }
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jkjcDbbnjc',data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '半年检查',
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

                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdCombogrid'),function(el) {
                            //         combogrid.initPageClass(el,url.getDictionaryPage);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                            //         comboxtree.initBySelect(el,url.getJsCombotree);
                            //     });
                            // }).then(function(){
                            //     return commFun.processQueued(el.querySelectorAll('.awdTagbox'),function(el) {
                            //         comboxtree.initTagBox(el,url.getDictionary);
                            //     });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length-1;
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
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            $("#tzy").lqfieldset({
                title:'体貌特征一',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz2").lqfieldset({
                title:'体貌特征二',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz3").lqfieldset({
                title:'体貌特征三',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz4").lqfieldset({
                title:'体貌特征四',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz5").lqfieldset({
                title:'体貌特征五',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz6").lqfieldset({
                title:'体表伤情',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });
            $("#tz7").lqfieldset({
                title:'特殊检查项目',
                collapsible:true,
                collapsed:true,
                checkboxToggle:false
            });

        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var sfwxjc_flags = sfwxjc_flag();
                postData.gcbh=data.rybh;
                postData.sfyjs=0;
                postData.sfwxjc=sfwxjc_flags;
                util.ajax({
                    url: url,
                    data: postData,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                             //   $('#table').datagrid('reload')
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