define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_cwsqsw.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var grid = require('awd/easyui/grid');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var jsxn;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_cwsqsw', data);
            if(!isOpen) {
            popwin = utils.showWin({
                title: '现金接济',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    isOpen = true;
                    Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                        return p.then(function () {
                            return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.awdCombox,.easyui-datebox'),function(el){
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
                    main.submit(url, callback);
                }
            },function(){
                isOpen = false;
            });
            }

        },
        bindEvent: function (data) {
            $('.drxxBtnjs').on("click", function () {
                var drjsxx = "";
                drjsxx += '<div style="margin-top:2%;width:100%;">' +
                    '<table id="drjsxxTable"></table>' +
                    '</div>'
                jsxn = layer.open({
                    type: 1,
                    title: '家属信息',
                    area: ['65%', '60%'],
                    content: drjsxx,
                    btn: ['导入', '关闭'],
                    maxmin: true,
                    success: function () {
                        $.parser.parse('#fm');
                        grid.init('drjsxxTable', {
                            url: url.shgxList,
                            data: { "rybh": data.rybh},
                            fit: false,
                            width: '98%',
                            height: window.innerHeight - 200,
                            firstLoad: true,
                            columns: [
                                { field: 'jsxm', title: '家属姓名', align: 'center', width: '20%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                { field: 'jszjh', title: '家属证件号', align: 'center', width: '20%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                { field: 'gxString', title: '关系', width: '20%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                { field: 'dh', title: '电话', width: '20%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                { field: 'dz', title: '地址', align: 'center', width: '20%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                // { field: 'rybh', title: 'rybh', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                // { field: 'snbh', title: 'snbh', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                                // { field: 'lsj', title: 'lsj', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },

                            ],
                        });
                    },
                    yes: function () {
                        var rows = grid.getSelected('drjsxxTable')[0];
                        if (rows) {
                            layer.close(jsxn);
                            console.log(rows)
                        } else {
                            utils.alert("请先选择信息数据")
                        }
                    }
                });
            })

        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');

                util.ajax({
                   url: url,
                    data: postData,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();

                            }
                            utils.closeWin(popwin);
                            $('#leftTable').datagrid("reload");
                            $('#rightTable').datagrid("reload");
                            
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
