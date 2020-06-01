define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zcrsKsrs.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var comboxtree = require('awd/easyui/comboxtree');
    const { log } = console
    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_zcrsKsrs', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '正常入所-快速入所',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    },
                    yes: function() {
                        main.submit(url, data, callback);
                    }
                }, function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            comboxtree.initBySelect('#fm .jsh', url.jsBySexComboxTree);


            $("#rsrq").datetimebox('setValue', (new  Date()).Format("YYYY-MM-dd hh:mm:ss"));
            $.ajax({
                url: url.xyrgetDabh,
                type: 'POST',
                success: function(data) {
                    $("#dah").textbox('setValue', data.result);
                }
            });
            $('#xb').combobox({
                onSelect: function(data) {
                    let new_code = '';
                    xbcode = data.code;
                    if (xbcode == '6' || xbcode == '2') { new_code = '2' };
                    if (xbcode == '5' || xbcode == '9' || xbcode == "1") { new_code = '1' };
                    if (xbcode == '0') { new_code = "" }
                    $('#Person_jsh').combotree({
                        onBeforeLoad: function(node, param) {
                            param.sex = new_code;
                        },
                    });
                    $('#Person_jsh').combotree('reload', url.jsBySexComboxTree);

                }
            });

            // 图片预览切换
            var showPic = $('.showPic');
            $("#fm .pic").click(function() {
                var currentUrl = $(this).attr('src');
                console.log(this);
                showPic.attr('src', currentUrl);
            })

            // 图片预览
            $("#fm .imgFile").on('change', function() {
                var previewImage = $(this).parent().siblings('img');
                var file = this.files[0];
                var imgUrl = window.URL.createObjectURL(file);
                debugger
                if ($(this).attr('id') == 'pic2') {
                    showPic.attr('src', imgUrl);
                    showPic.onload = function() {
                        URL.revokeObjectURL(imgUrl);
                    }
                }
                previewImage.attr('src', imgUrl);
                previewImage.onload = function() {
                    URL.revokeObjectURL(imgUrl);
                }
            })
        },
        submit: function(url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var jbxxData = $("#fm").serializeObject();
                //获取照片文件
                var formData = new FormData();
                formData.append("xm", jbxxData.xm);
                formData.append("xb", jbxxData.xb);
                formData.append("jsh", jbxxData.jsh);
                formData.append("ay", jbxxData.ay);
                formData.append("rsrq", jbxxData.rsrq);
                formData.append("dah", jbxxData.dah);
                formData.append("leftPhoto", $("#pic1")[0].files[0]);
                formData.append("rightPhoto", $("#pic2")[0].files[0]);
                formData.append("centerPhoto", $("#pic3")[0].files[0]);
                util.ajax({
                    url: url,
                    data: formData,
                    cache: false,
                    processData: false,
                    contentType: false,
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