define(function (require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_wlrylk.html');
    //var url = require('modules/url');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false;//弹框默认不打开
    var popwin;
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_wlrylk', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '离开登记',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function (p, el, idx) {
                            return p.then(function () {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox,.awdCombox, .easyui-datetimebox'), function (el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function (el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdCombogrid'), function (el) {
                                    combogrid.initPageClass(el, urls.getDictionaryPage);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.jsh'), function (el) {
                                    comboxtree.initBySelect(el, urls.getJsCombotree);
                                });
                            }).then(function () {
                                return commFun.processQueued(el.querySelectorAll('.awdTagbox'), function (el) {
                                    comboxtree.initTagBox(el, urls.getDictionary);
                                });
                            }).then(function () {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function () {
                        main.submit(url,data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }

        },
        bindEvent: function (data) {

            $("#lssy").combobox("setValue", data.lssy).combobox("setText", data.lssyString);
            $(".wllk-record .tab .tab-item").click(function () {
                $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
                $(".products .mainCont").eq($(this).index()).show().siblings().hide();
            })

            var wlry = new Array();
            var wlcl = new Array();
            wlry = data.wljbxx;
            wlcl = data.clxx;
            var jsonData = eval("(" + wlry + ")");
            var jsonDatas = eval("(" + wlcl + ")");
            var lkJbxx = '';
            var lkClxx = '';
            for (var i = 0; i < jsonData.length; i++) {
                lkJbxx += "<tr style='text-align:center;'>" +
                    '<td style="border: 1px solid #297aff;" >' + (i + 1) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonData[i].xm == undefined ? "" : jsonData[i].xm) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonData[i].zjh == undefined ? "" : jsonData[i].zjh) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonData[i].dw == undefined ? "" : jsonData[i].dw) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonData[i].snzjh == undefined ? "" : jsonData[i].snzjh) + '</td>' +
                    "</tr>"
            }
            $("#jbxxTbody").append(lkJbxx);
            for (var j = 0; j < jsonDatas.length; j++) {
                lkClxx += '<tr style="text-align:center;">' +
                    '<td style="border: 1px solid #297aff;">' + (j + 1) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonDatas[j].clssdw == undefined ? "" : jsonDatas[j].clssdw) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonDatas[j].cphm == undefined ? "" : jsonDatas[j].cphm) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonDatas[j].aqjcqk == undefined ? "" : jsonDatas[j].aqjcqk) + '</td>' +
                    '<td style="border: 1px solid #297aff;">' + (jsonDatas[j].snztzhm == undefined ? "" : jsonDatas[j].snztzhm) + '</td>' +
                    '</tr>'
            }
            $("#clxxTbody").append(lkClxx);
            setTimeout(function () {
                $.parser.parse('#fm');
            }, 0);
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