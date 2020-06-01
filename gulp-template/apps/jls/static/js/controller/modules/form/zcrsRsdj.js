define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsRsdj.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;
    var comboxtree = require('awd/easyui/comboxtreegrid');
    var main = {
        init: function (url, data, callback) {
            var html = formtpl('form/_zcrsRsdj', data);
            popwin = utils.showWin({
                title: '正常入所-入所登记33333',
                area: ['90%', '600px'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function () {
                    $.parser.parse('#fm');
                    main.bindEvent(data);
                    // var tab = document.getElementsByClassName("tab-item")
                    // tab.onclick = function(){
                    //     alert("这是第一种点击方式");
                    // }
                    // $(".tab-item").click(function () {
                    // $(this).addClass("active").css("background", "#0069f6").siblings().removeClass("active").css("background", "#5191f0");
                    // $(".products .mainCont").eq($(this).index()).show().siblings().hide();
                    // $(this).addClass("active")
                    // $(this).alert("111")
                    // alert("111")
                    // $(this).siblings().alert("222")
                    // $(this).siblings().removeClass("active")
                    // })

                    // $(this).attr("class", "active spanList");
                    // $(this).siblings().attr("class", "spanList");

                    var tbody = "";
                    tbody += "<tr style='margin-bottom:5px;'>" +
                        "<td><input class='easyui-textbox shgxCss'></td>" +
                        "<td><input class='awdCombox shgxCss' code='GX'></td>" +
                        "<td><input class='easyui-textbox shgxCss'></td>" +
                        "<td><input class='easyui-textbox shgxCss'></td>" +
                        "<td><input id='zjh' class='easyui-textbox shgxCss shgxZjh'></td>" +
                        "<td><input class='easyui-textbox shgxCss'></td>" +
                        "<td><input id='lxdh' name='dh' class='easyui-textbox shgxCss shgxLxdh'></td>" +
                        "<td><span class='iconfont icon-jianhao delRow' style='border:padding: 5px;'></span></td>" +
                        "</tr>";
                    $("#rsdjTbody").append(tbody)
                    $(document).on("click", ".addRow", function () {

                        $("#rsdjTbody").append(tbody);
                        $.parser.parse('#fm');
                        combox.initBySelect('#fm .awdCombox', urls.getDictionary);
                    })
                    $(document).on("click", ".delRow", function () {
                        var trcount = $("#rsdjTbody").find("tr").length;
                        if (trcount == 1) {
                            $.messager.alert("提示", "行数不少于1行！", "info");
                        } else {
                            $(this).parent().parent().remove();
                        }
                    });



                },
                yes: function () {
                    main.submit(url, data, callback);
                }
            });
        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            $(document).on("click", ".active", function () {
                alert("15613")
            })
        },
        submit: function (url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var formData = new FormData();
                //var jbxxData = JSON.stringify($("#jbxx").serializeObject());
                //var ajxxData = JSON.stringify($("#ajxx").serializeObject());
                formData.append("jbxxDate", JSON.stringify($("#jbxx").serializeObject()));
                formData.append("ajxxDate", JSON.stringify($("#ajxx").serializeObject()));
                // formData.append("leftPhoto", $("#leftPhoto")[0].files[0]);
                // formData.append("rightPhoto", $("#rightPhoto")[0].files[0]);
                // formData.append("centerPhoto", $("#centerPhoto")[0].files[0]);
                util.ajax({
                    url: url,
                    data: formData,
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