define(function (require) {

    var $ = require('jquery');
    // 按需引入的模块
    var urls = require('modules/url');
    // 必须引入的对应html文件
    var opened = false;
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var formtpl = require('services/form/_syrsXxbl.html');
    var url = require('modules/url');
    var common = require('common');
    var popwin;
    var main = {
        cache: function () {
            setTimeout(() => {
                var popform = $('#formCache').html();
                if (popform == '') {
                    var html = formtpl('form/_syrsXxbl', {});
                    $('#formCache').html(html);
                    $.parser.parse('#fm');
                    main.bindEvent();
                    $('#formCache').hide();
                }
            }, 0);
        },
        init: function (url, data, callback) {
            if (!opened) {
                util.loadProgress($, true);
                popwin = utils.showWin({
                    title: '信息补录',
                    area: ['90%', '600px'],
                    content: $('#formCache'),
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        $('#formCache').show();
                        setTimeout(function () {
                            main.initData(data);
                        }, 0);
                        opened = true;
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    },
                    btn2: () => { $('#formCache').hide(); opened = false },
                    cancel: function () {
                        $('#formCache').hide();
                        opened = false;
                    }
                });
            }
            // var html = formtpl('form/_syrsXxbl', data);
            // popwin = utils.showWin({
            //     title: '信息补录',
            //     area: ['90%', '600px'],
            //     content: html,
            //     maxmin: true,
            //     buttons: ['保存', '取消'],
            //     success: function() {
            //         $.ajax({
            //             type: "POST",
            //             url: url.dabh,
            //             success: function(result) {
            //                 $("#dah").textbox("setValue", result.result);
            //             }
            //         })
            //         setTimeout(function (){
            //             $.parser.parse('#fm');
            //             main.bindEvent();
            //         }, 0);
            //     },
            //     yes: function() {
            //         main.submit(url,data, callback);
            //     }
            // });
        },
        initData: function (data) {
            $('#fm').form('clear');
            $("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
            $("#gj").combogrid().combogrid('setValue', '156').combogrid('setText', '中国');
            $("#mz").combogrid().combogrid('setValue', '01').combobox('setText', '汉');
            $("#zjlx").combobox().combobox('setValue', '11').combobox('setText', '身份证');
            
            $("#bar").textbox().textbox('setValue', common.info.user.loginname);
            
            $("#dah").textbox().textbox('setValue', data.dah);
            $('#fm').form('load', data);
            if (data.ayString == '' || data.ayString == null || data.ayString == undefined) {
                $('#ay').tagbox().tagbox('clear')
            }
            $('#fm .awdCombox,.awdCombogrid').each(function () {
                var $this = $(this);
                setTimeout(function () {
                    var value = $this.attr('id');
                    if (data[value + 'String']) {
                        if ($this.hasClass('awdCombox')) {
                            $this.combobox().combobox('setText', data[value + 'String']);
                        } else {
                            $this.combogrid().combogrid('setText', data[value + 'String']);
                        }
                    }
                }, 0);

            });
            $('#sfhs').combobox({
                data: [{
                    "value": 1,
                    "text": "未核实",
                    "selected": true
                }, {
                    "value": 2,
                    "text": "已核实",
                    disabled: true
                }, {
                    "value": 3,
                    "text": "待定",
                    disabled: true
                }],
                valueField: 'value',
                textField: 'text',
                editable: false
            })
            util.clearProgress($);
        },
        bindEvent: function () {
            combogrid.initPageClass('#fm .awdCombogrid', urls.getDictionaryPage);
            combox.initBySelect('#fm .awdCombox', urls.getDictionary);
            comboxtree.initBySelect('#fm .jsh', urls.getJsCombotree);
            $('#hjd').combogrid({
                onChange: function () {
                    var hjdtext = $(this).combogrid("getText")
                    $('#hjdxz').textbox('setValue', hjdtext)
                }
            })
            $('#xzd').combogrid({
                onChange: function (data) {
                    var xzdtext = $(this).combogrid("getText")
                    $('#xzdxz').textbox('setValue', xzdtext)
                }
            })
            $('#cc').combobox("disable");
            $('#cc').combobox('setValue','未核实');
                
                $('#ay').each(function () {
                    
                    $(this).tagbox({
                        url: urls.getDictionary + '?node=AJLB',
                        method: 'post',
                        valueField: 'code',
                        textField: 'content',
                        limitToList: true,
                        hasDownArrow: true,
                        onSelect: function (value) {
                            if ($(this).tagbox("getValues").length > 4) {
                                utils.alert('选择不能大于5个', function () {
                                    $('#ay').tagbox("unselect", value.code)
                                });
                            }
                        }
                    });
                });
           
            
            $('#xb').combobox({
                onSelect: function (data) {
                    var xbcode = data.code;
                    $('.jsh').combotree({
                        onBeforeLoad: function (node, param) {
                            param.type = xbcode;
                        },
                    });
                    $('.jsh').combotree('reload');
                }
            });
            $('#zjh').textbox({
                onChange: function () {
                    $('#zjh').textbox({
                        onChange: function () {
                            console.log(document.getElementById('zjlx'))
                            var zjlx = $("#zjlx").combobox('getValue');
                            console.log(zjlx)
                            var code = $('#zjh').textbox('getValue')
                            if (zjlx == 11) {
                                //根据身份证获取性别
                                var xb = code.substring(16, 17);
                                if (xb == 1 || xb == 3 || xb == 5 || xb == 7 || xb == 9) {
                                    $("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
                                    $('.jsh').combotree({
                                        onBeforeLoad: function (node, param) {
                                            param.type = '1';
                                        },
                                    });
                                } else if (xb == "0" || xb == "2" || xb == "4" || xb == "6" || xb == "8" || xb == "X") {
                                    $("#xb").combobox().combobox("setValue", "2").combobox("setText", "女性");
                                    $('.jsh').combotree({
                                        onBeforeLoad: function (node, param) {
                                            param.type = '2';
                                        },
                                    });
                                }
                                //根据身份证获取出生日期
                                var csrq = code.substring(6, 14);
                                var csrq1 = csrq.substring(0, 4);
                                var csrq2 = csrq.substring(4, 6);
                                var csrq3 = csrq.substring(6, 8);
                                csrq = csrq1 + "-" + csrq2 + "-" + csrq3
                                $("#csrq").datebox("setValue", csrq);
                                // //根据身份证获取默认籍贯、户籍地、现住地
                                var hjd = code.substring(0, 6);
                                $.ajax({
                                    type: "POST", //提交方式
                                    url: urls.getDictionaryContent,
                                    data: {
                                        "code": hjd,
                                        "fieldname": "XZQH"
                                    },
                                    success: function (result) {
                                        $('#jg').combogrid('setValue', {
                                            code: hjd,
                                            content: result.result
                                        });
                                        $("#hjd").combogrid('setValue', {
                                            code: hjd,
                                            content: result.result
                                        });
                                        $("#xzd").combogrid('setValue', {
                                            code: hjd,
                                            content: result.result
                                        });
                                        $('#hjdxz').textbox('setValue', result.result)
                                        $('#xzdxz').textbox('setValue', result.result)
                                    }
                                });
        
        
                            }
        
                        }
                    });

                    // var code = $('#zjh').textbox('getValue')
                    // if (code.length == 18) {
                        //根据身份证获取性别
                       // var xb = code.substring(16, 17);
                        // if (xb == 1 || xb == 3 || xb == 5 || xb == 7 || xb == 9) {
                        //     $("#xb").combobox().combobox('setValue', '1').combobox('setText', '男性');
                        //     // $('.jsh').combotree({
                        //     //     onBeforeLoad: function (node, param) {
                        //     //         param.type = '1';
                        //     //     },
                        //     // });
                        // } else if (xb == "0" || xb == "2" || xb == "4" || xb == "6" || xb == "8" || xb == "X") {
                        //     $("#xb").combobox().combobox("setValue", "2").combobox("setText", "女性");
                        //     $('.jsh').combotree({
                        //         onBeforeLoad: function (node, param) {
                        //             param.type = '2';
                        //         },
                        //     });
                        // }
                        //根据身份证获取出生日期
                        // var csrq = code.substring(6, 14);
                        // var csrq1 = csrq.substring(0, 4);
                        // var csrq2 = csrq.substring(4, 6);
                        // var csrq3 = csrq.substring(6, 8);
                        // csrq = csrq1 + "-" + csrq2 + "-" + csrq3
                        // $("#csrq").datebox("setValue", csrq);
                        // // //根据身份证获取默认籍贯、户籍地、现住地
                        // var hjd = code.substring(0, 6);
                        // $.ajax({
                        //     type: "POST",  //提交方式
                        //     url: url.getDictionaryContent,
                        //     data: { "code": hjd, "fieldname": "XZQH" },
                        //     success: function (result) {
                        //         $('#jg').combogrid('setValue', { code: hjd, content: result.result });
                        //         $("#hjd").combogrid('setValue', { code: hjd, content: result.result });
                        //         $("#xzd").combogrid('setValue', { code: hjd, content: result.result });
                        //         $('#hjdxz').textbox('setValue', result.result)
                        //         $('#xzdxz').textbox('setValue', result.result)
                        //     }
                        // });


                    // }

                }
            });
            $("#rsrqfm").datetimebox({
                onChange: function (newValue, oldValue) {
                    var jytime = $("#jyrqfm").datebox('getValue');
                    var rstime = $("#rsrqfm").datetimebox('getValue');
                    var start = new Date(jytime.replace("-", "/").replace("-", "/"));
                    var end = new Date(rstime.replace("-", "/").replace("-", "/"));
                    if (end < start) {
                        utils.alert('入所时间不能早于羁押时间！');
                        $("#rsrqfm").datetimebox('clear');
                        return;
                    }
                }
            });
            $("#jyrqfm").datebox({
                onChange: function (newValue, oldValue) {
                    var jytime = $("#rsrqfm").datetimebox('getValue');
                    var rstime = $("#jyrqfm").datebox('getValue');
                    var start = new Date(jytime.replace("-", "/").replace("-", "/"));
                    var end = new Date(rstime.replace("-", "/").replace("-", "/"));
                    if (end > start) {
                        utils.alert('入所时间不能早于羁押时间！');
                        $("#jyrqfm").datebox('clear');
                        return;
                    }
                }
            });

        },
        submit: function (url, rows, callback) {
            console.log(code)
            var zjlx = $("#zjlx").combobox('getValue');
            var code = $('#zjh').textbox('getValue')
            if (zjlx == 11) {
                if (code.length !== 18) {
                    utils.alert('身份证格式不正确');
                    return
                }
            }

            /**先校验form */
            $('#cc').attr("disabled",false);
            /** 身份证号码验证 */
            var zjlx = $("#zjlx").combobox('getValue');
            var city = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江 ",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外 "
            };
            if(zjlx==11){
                var sfzhcode =$("#zjh").textbox('getValue');
            if (sfzhcode.length != 18) {
                utils.alert( '身份证位数不合法');
                return false;
            } else if (!sfzhcode || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(sfzhcode)) {
                utils.alert('身份证号格式错误');
                return false;
            } else if (!city[sfzhcode.substr(0, 2)]) {
                utils.alert( '地址编码错误');
                return false;
            } else {
                //18位身份证需要验证最后一位校验位
                if (sfzhcode.length == 18) {
                    sfzhcode = sfzhcode.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                    //校验位
                    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++) {
                        ai = sfzhcode[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if (parity[sum % 11] != sfzhcode[17]) {
                        utils.alert( '身份证校验位错误,最后一位X为大写');
                        return false;
                    }
                }
            };
            }
            
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                data.badw = $("#badw").combobox('getText');
                data.zrdw = $("#zrdw").combobox('getText');
                data.sydw = $("#sydw").combobox('getText');
                data.xxbl = "true";
                data.taskid = rows.taskid;
                data.ay = $('#fm .awdTagbox').tagbox("getValues").join(',');
                util.ajax({
                    url: url,
                    data: data,
                    func: function (data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            if (tools.isFunction(callback)) {
                                callback();
                                utils.closeWin(popwin);
                                $('#table').datagrid('reload');
                                opened = false;
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
