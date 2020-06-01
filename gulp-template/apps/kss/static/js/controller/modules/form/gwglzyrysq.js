define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_gwglZyrysq.html');
    var combox = require('awd/easyui/combox');
    var grid = require('awd/easyui/grid');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_gwglZyrysq', data);
            if(!isOpen) {
                popwin = utils.showWin({
                    title: '在押人员申请',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        setTimeout(function () {
                            $.parser.parse('#fm');
                            main.bindEvent(data);
                        }, 0);

                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                });
            }
        },
        bindEvent: function (getrow) {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $.ajax({
                url: url.spglLists,
                type: 'post',
                success: function (res) {
                    $('#sptm').combobox({
                        data: res.data,
                        valueField: 'code',
                        textField: 'content'
                    })
                }
            })
            $("#sptm").combobox({
                onChange: function () {
                    var getspmc = $('#sptm').combobox('getValue');
                    $.ajax({
                        url: url.spglList,
                        type: 'post',
                        data: { "tm": getspmc },
                        success: function (result) {
                            $("#lsj").textbox('setValue', result.rows[0].lsj);
                            var lsj = $("#lsj").val();

                            $('#sl').textbox({
                                onChange: function () {
                                    var sl = $('#sl').textbox('getValue')
                                    var xfzje = Number(lsj) * Number(sl);
                                    $("#xfzje").textbox("setValue", Number(xfzje));
                                }
                            });

                            var sl = $('#sl').textbox('getValue')
                            var xfzje = Number(lsj) * Number(sl);
                            $("#xfzje").textbox("setValue", Number(xfzje));
                            $('#sptxm').textbox('setValue', result.rows[0].tm);



                        }
                    })
                }
            })
            var data = []
            $('#addcart').on('click', function () {



                var validate = $("#fm").form('validate');
                if (validate) {
                    var getspmc = $('#sptm').combobox('getText');
                    var getsptm = $('#sptxm').textbox('getValue');
                    var getspsl = $('#sl').textbox('getValue');
                    var getxfzje = $('#xfzje').textbox('getValue');
                    var getlsj = $('#lsj').textbox('getValue');
                    data.push({
                        'sptmString': getspmc,
                        'sptm': getsptm,
                        'spsl': getspsl,
                        'xfje': getxfzje,
                        "rybh": getrow.rybh,
                        "snbh": getrow.snbh,
                        "xm": getrow.xm,
                        "lsj": getlsj
                    })
                    grid.init('gwcDetailId', {
                        url: '',
                        data: data,
                        fit: false,
                        singleSelect: false,
                        width: '100%',
                        height: window.innerHeight - 200,
                        firstLoad: true,
                        columns: [
                            { field: 'sptmString', title: '商品名称', align: 'center', width: '25%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'sptm', title: '商品条码', align: 'center', width: '25%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'spsl', title: '商品数量', width: '25%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'xfje', title: '应付金额', width: '25%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'xm', title: 'xm', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'rybh', title: 'rybh', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'snbh', title: 'snbh', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                            { field: 'lsj', title: 'lsj', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },

                        ],
                        pagination: false,
                    });

                } else {
                    layer.alert('请选择商品，再加入购物车!');
                }


            })
            $('#removecart').on('click', function () {
                var row = grid.getSelected('gwcDetailId')[0];
                if (row) {
                    var rowIndex = $('#gwcDetailId').datagrid('getRowIndex', row);
                    $('#gwcDetailId').datagrid('deleteRow', rowIndex);
                } else {
                    layer.alert("请选择需要删除的商品!");
                }
            })
            grid.init('gwcDetailId', {
                url: '',
                data: data,
                fit: false,
                singleSelect: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: true,
                columns: [
                    { field: 'sptmString', title: '商品名称', align: 'center', width: '25%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                    { field: 'sptm', title: '商品条码', align: 'center', width: '25%', sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                    { field: 'spsl', title: '商品数量', width: '25%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                    { field: 'xfje', title: '应付金额', width: '25%', align: 'center', hidden: false, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                    { field: 'id', title: 'id', align: 'center', hidden: true, sortable: 'true', formatter: function (value, row, index) { return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>' } },
                ],
            });

        },
        submit: function (url, data, callback) {

            /**先校验form */
            if ($('#fm').form('validate')) {
                var rows = $('#gwcDetailId').datagrid('getRows');
                var rymoney = localStorage.getItem("rymoney");
                console.log(rymoney)
                util.ajax({
                    url: url,
                    data: {
                        'list': JSON.stringify(rows),
                        'global_ryte': rymoney,
                    },
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
