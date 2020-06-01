define(function(require) {
    var commFun = require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_ylxxblSqbl.html');
    var combox = require('awd/easyui/combox');
    var combogrid = require('awd/easyui/combogrid');
    var comboxtree = require('awd/easyui/comboxtree');
    var urls = require('modules/url');
    var common = require('common');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var saveData = function() {
        var data = $("#fm").serializeObject();
        data.creator = common.info.user.loginname;
        data.createtime = '2020-4-3';
        $.ajax({
            type: 'post',
            url: urls.sqdjAdd,
            data: data,
            success: function(data) {
                utils.alert(data.msg);
                utils.closeWin(popwin);
            },
            error: function() {
                utils.alert("保存失败,请注意上传图片大小不要超过4m");
            },
        });

    }

    //保存照片信息
    var zpsave = function(id) {
        var zmz = $('#upzmz')[0].files[0];
        var cmz1 = $('#upzmz1')[0].files[0];
        var cmz2 = $('#upzmz2')[0].files[0];
        var sendData = new FormData();
        sendData.append('qm', zmz);
        sendData.append('zm', cmz1);
        sendData.append('ym', cmz2);
        sendData.append("id", id);
        $.ajax({
            type: "POST", //提交方式
            processData: false,
            contentType: false,
            dataType: "json",
            url: urls.saveForBlzp,
            data: sendData, //数据，这里使用的是Json格式进行传输
            success: function(result) {
                utils.alert(result.msg);
            },
            error: function() {
                utils.alert("照片保存失败");
            },
        });
    }

    var main = {
        init: function(url, data, callback) {
            var html = formtpl('form/_ylxxblSqbl', data);
            if (!isOpen) {
                popwin = utils.showWin({
                    title: '伤情补录',
                    area: ['90%', '600px'],
                    content: html,
                    maxmin: true,
                    buttons: ['保存', '取消'],
                    success: function() {
                        isOpen = true;
                        Array.from(document.getElementsByClassName('timeline-item')).reduce(function(p, el, idx) {
                            return p.then(function() {
                                return commFun.processQueued(el.querySelectorAll('.easyui-textbox, .easyui-datetimebox,.easyui-datebox, .easyui-combobox'), function(el) {
                                    $.parser.parse(el.parentElement);
                                });
                            }).then(function() {
                                return commFun.processQueued(el.querySelectorAll('.awdCombox'), function(el) {
                                    combox.initBySelect(el, urls.getDictionary);
                                });

                            }).then(function() {
                                var len = document.querySelectorAll('.timeline-item').length - 1;
                                if (idx === len) {
                                    main.bindEvent(data);
                                }
                            });
                        }, Promise.resolve());
                    },
                    yes: function() {
                        main.submit(url, data, callback);
                    }
                }, function() {
                    isOpen = false;
                });
            }
        },
        bindEvent: function(data) {

            // 图片预览
            $("#fm .imgFile").on('change', function() {
                var previewImage = $(this).parent().siblings('img');
                var file = this.files[0];
                var imgUrl = window.URL.createObjectURL(file);
                previewImage.attr('src', imgUrl);
                previewImage.onload = function() {
                    URL.revokeObjectURL(imgUrl);
                }
            })


            var dates = (new Date()).Format("yyyy-MM-dd hh:mm:ss");
            $("#createtimefm").datetimebox("setValue", dates);
            $("#czsqfm").datetimebox("setValue", dates);
            $('#creatorfm').textbox('setValue', '');
            $("#pzsjfm").datetimebox("setValue", dates);
            $("#imghead").on("dblclick", function() {
                $("#upzmz").click();
            });
            $("#imghead2").on("dblclick", function() {
                $("#upzmz1").click();
            });
            $("#imghead3").on("dblclick", function() {
                $("#upzmz2").click();
            });

            $.ajax({
                type: 'POST',
                url: urls.selectTmsq,
                data: { rybh: data.rybh },
                success: function(e) {
                    var Picsrc = "data:image/jpeg;base64," + e.result.photo1;
                    $("#showPic").attr("src", Picsrc);
                },
                error: function() {

                }

            })
        },
        submit: function(url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var postData = util.form2Json('fm');
                var upzmz1 = document.querySelector('input[name="file1"]').files[0];
                var upzmz2 = document.querySelector('input[name="file2"]').files[0];
                var upzmz3 = document.querySelector('input[name="file3"]').files[0];
                if ((upzmz1 != null && upzmz1 != undefined) || (upzmz2 != null && upzmz2 != undefined) || (upzmz3 != null && upzmz3 != undefined)) {
                    postData.rybh = data.rybh;
                    util.ajax({
                        url: url,
                        data: postData,
                        func: function(data) {
                            if (data.success) {
                                zpsave(data.result);
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
                    layer.confirm('该人员未上传照片,是否保存？', {
                        btn: ['是', '否']
                    }, function() {
                        saveData();
                    });

                }

            } else {
                utils.alert('表单数据格式不对！');
            }

        }
    };
    return main;
});
