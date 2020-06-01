define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_jjwpgl.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var clumn = require('modules/clumn/jbxx');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_jjwpgl',data);
             if(!isOpen) {
            popwin = utils.showWin({
                title: '接济物品管理',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                     isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.easyui-datetimebox,.easyui-datebox'),function(el){
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
                    main.submit(url,data, callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function() {
            var sswp='';
            sswp+="<tr>"+
                "<td class='sspwTd'>物品：<font style='color:red;'>*</font><input class='easyui-textbox' name='wpmc' required></td>"+
                "<td class='sspwTd'>数量：<font style='color:red;'>*</font><input class='easyui-numberbox' name='sl' required></td>"+
                "<td class='sspwTd'>型号：<font style='color:red;'>*</font><input class='easyui-textbox' name='xh' required></td>"+
                "<td class='sspwTd'>特征：<font style='color:red;'>*</font><input class='easyui-textbox' name='tz' required></td>"+
                "<td class='sspwTd'>备注：<font style='color:red;'>*</font><input class='easyui-textbox' name='bz' required></td>"+
                "<td class='sspwTd'><button type='button' id='sswpDel'>删除物品</button></td>"+
                "</tr>";
            $("#sswpTable").append(sswp);
            $.parser.parse('#fm');
            $(document).on("click","#",function(){
                $("#sswpTable").append(sswp);
                $.parser.parse('#fm');
                combox.initBySelect('#fm .awdCombox', urls.getDictionary);
            })
            $(document).on("click","#sswpDel",function(){
                var trcount = $("#sswpTable").find("tr").length;
                if (trcount == 1) {
                    $.messager.alert("提示", "行数不少于1行！", "info");
                } else {
                    $(this).parent().parent().remove();
                }
            });
            $('.drxxBtn').on("click", function () {
                var drjsxx = "";
                drjsxx += '<div>'+
                '<table id="drjsxxTable"></table>'+
                '</div>'
                layer.open({
                    type: 1,
                    title: '家属信息',
                    area: ['80%', '60%'],
                    content: drjsxx,
                    btn: ['导入','关闭'],
                    maxmin: true,
                    success: function () {
                        $.parser.parse('#fm');
                        grid.init('drjsxxTable', {
                            url: url.jbxx,
                            fit: false,
                            width: '98%',
                            height: '85%',
                            firstLoad: false,
                            columns: clumn({
                                check: false,
                                clumns: ['rybh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                                hidden: [, 'xbString', 'csrq', 'rsxzString', 'dwlxString', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'ayString', 'jyrq']
                            })
                        });
                    }
                });
            })
        },
        submit: function(url,data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                //postData.id=data.id;
                postData.rybh=data.rybh;
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