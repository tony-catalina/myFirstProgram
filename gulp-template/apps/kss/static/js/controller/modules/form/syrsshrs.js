define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var comboxtree = require('awd/easyui/comboxtree');
    var formtpl = require('services/form/_syrsShdj.html');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {

        init: function (url, data, callback) {
            var html = formtpl('form/_syrsShdj', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '收回登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                            Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                                return p.then(function () {
                                    return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox, .easyui-combobox'),function(el){
                                        $.parser.parse(el.parentElement);
                                    });
                                }).then(function () {
                                    return commFun.processQueued(el.querySelectorAll('.awdCombox'),function(el) {
                                        combox.initBySelect(el,urls.getDictionary);
                                    });
                                }).then(function(){
                                    return commFun.processQueued(el.querySelectorAll('.jsh'),function(el) {
                                        comboxtree.initBySelect(el,urls.getJsCombotree);
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
                    isOpen = false;
                });
            }
        },
        bindEvent: function (data) {
            $("#rsrq").datetimebox().datetimebox('setValue',(new Date()).Format('yyyy-MM-dd hh:mm:ss'));
            
            var url = '';
            $('#jsh').combotree({
                url: '',
                animate: true,
                method: 'post',
                onShowPanel: function (value) {
                    $(this).combotree("clear");
                    if (url == "" || url == undefined || url == null) {
                        $('#jsh').combotree('reload', urls.getJqCombotree);
                        $(this).combotree("panel")[0].jsh = "fontSelect";
                    } else {
                        $('#jsh').combotree('reload', url);
                        $(this).combotree("panel")[0].jsh = "fontSelect";
                    }
                },
                onClick: function (node) {
                    if (node.isparent) {
                        $("div.panel.combo-p.easyui-fluid").css('display', 'block');
                        $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);
                    }
                },
                onBeforeExpand: function (node) {
                    var jqh = "dzjs" == node.id ? "" : node.id;
                    var $tree = $('#jsh').combotree("tree");
                    // console.log(data.xb)
                    var sex = data.xb
                    //区分男女监
                    if (sex != undefined && sex == "2" || sex == "6") {
                        $tree.tree("options").url = urls.getJsCombotree+"?jqh=" + jqh + "&sex=" + sex;//展开节点时请求的后端接口
                    } else {
                        $tree.tree("options").url = urls.getJsCombotree+"?jqh=" + jqh;//展开节点时请求的后端接口
                    }
                },
                onBeforeSelect: function (node) {
                    if (node.isparent) {
                        return false;
                    }
                },


            })
        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                console.log(data)
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                            }
                            utils.closeWin(popwin);
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