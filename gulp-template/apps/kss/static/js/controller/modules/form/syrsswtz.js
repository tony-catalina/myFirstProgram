define(function (require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_syrsSwtzZw.html');
    var formtplTp = require('services/form/_swtzTp.html');
    var formtplTpjn = require('services/form/_swtzTpjn.html');
    var formtplHm = require('services/form/_syrsSwtzHm.html');
    var formtplRl = require('services/form/_syrsSwtzRl.html');
    var formtplSh = require('services/form/_syrsSwtzSh.html');
    var url = require('modules/url');
    var urls = require('modules/url');
    var isOpen = false; //弹框默认不打开
    var popwin;
    var userdata;
    var main = {

        init: function (url, data, callback) {
            userdata = data;
            if (data.btnid == 'zw') {
                var html = formtpl('form/_syrsSwtzZw', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '指纹采集',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            isOpen = true;
                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.zwbindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submit(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            } else if (data.btnid == 'hm') {
                var html = formtplHm('form/_syrsSwtzHm', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '虹膜采集',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            isOpen = true;
                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.hmbindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submit(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            } else if (data.btnid == 'rl') {
                var html = formtplRl('form/_syrsSwtzRl', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '人脸采集',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            isOpen = true;
                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.rlbindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submit(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            } else if (data.btnid == 'sh') {
                var html = formtplSh('form/_syrsSwtzSh', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '手环采集',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            isOpen = true;
                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.bindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submitsh(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            } else if (data.btnid == 'tp') {
                var html = formtplTp('form/_swtzTp', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '照片补录',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            $.ajax({
                                url: urls.photosList,
                                type: 'post',
                                data: { "rybh": data.rybh },
                                success: function (res) {
                                    console.log("打印人像照片")
                                    console.log(res.result.rows)
                                    isOpen = true;
                                    if (res.result.total != 0) {
                                        for (var i = 0; i < res.result.total; i++) {
                                            if (res.result.rows[i].photoUrl != null && res.result.rows[i].photoUrl != "") {
                                                if (res.result.rows[i].type == "1") {
                                                    $("#img1").attr("src", res.result.rows[i].photoUrl)
                                                } else if (res.result.rows[i].type == "2") {
                                                    $("#img2").attr("src", res.result.rows[i].photoUrl)
                                                    $("#img4").attr("src", res.result.rows[i].photoUrl)
                                                } else if (res.result.rows[i].type == "3") {
                                                    $("#img3").attr("src", res.result.rows[i].photoUrl)
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.bindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submit(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            } else if (data.btnid == 'tpjn') {
                var html = formtplTpjn('form/_swtzTpjn', data);
                if (!isOpen) {
                    popwin = utils.showWin({
                        title: '照片（佳能）补录',
                        area: ['90%', '600px'],
                        content: html,
                        maxmin: true,
                        buttons: ['保存', '取消'],
                        success: function () {
                            $.ajax({
                                url: url.photosList,
                                type: 'post',
                                data: { "rybh": data.rybh },
                                success: function (res) {
                                    console.log("打印人像（补录）照片")
                                    console.log(res.result.rows)
                                    isOpen = true;
                                    if (res.result.total != 0) {
                                        for (var i = 0; i < res.result.total; i++) {
                                            if (res.result.rows[i].photoUrl != null && res.result.rows[i].photoUrl != "") {
                                                if (res.result.rows[i].type == "1") {
                                                    $("#img1").attr("src", res.result.rows[i].photoUrl)
                                                } else if (res.result.rows[i].type == "2") {
                                                    $("#img2").attr("src", res.result.rows[i].photoUrl)
                                                    $("#img4").attr("src", res.result.rows[i].photoUrl)
                                                } else if (res.result.rows[i].type == "3") {
                                                    $("#img3").attr("src", res.result.rows[i].photoUrl)
                                                }
                                            }
                                        }
                                    }
                                }
                            });

                            setTimeout(function () {
                                $.parser.parse('#fm');
                                main.bindEvent();
                            }, 0);
                        },
                        yes: function () {
                            main.submitzpjn(url, callback);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }

            }

        },
        bindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            // 图片预览切换
            var showPic = $('.showPic');
            $("#fm .pic").click(function () {
                var currentUrl = $(this).attr('src');
                console.log(this);
                showPic.attr('src', currentUrl);
            })

            // 上传照片预览
            $('#imgFile1').change(function () {
                var preview = document.getElementById('img1')
                var fileDom = document.getElementById('imgFile1')
                // 获取得到file 对象
                var file = fileDom.files[0]
                // 创建url
                var imgUrl = window.URL.createObjectURL(file)
                preview.setAttribute("src", imgUrl)
                // 更改img url 以后释放 url
                preview.onload = function () {
                    URL.revokeObjectURL(imgUrl)
                }
            })
            $('#imgFile2').change(function () {
                var preview2 = document.getElementById('img2')
                var preview4 = document.getElementById('img4')
                var fileDom2 = document.getElementById('imgFile2')
                var file2 = fileDom2.files[0]
                var imgUrl2 = window.URL.createObjectURL(file2)
                preview2.setAttribute("src", imgUrl2)
                preview2.onload = function () {
                    URL.revokeObjectURL(imgUrl2)
                }
                preview4.setAttribute("src", imgUrl2)
                preview4.onload = function () {
                    URL.revokeObjectURL(imgUrl2)
                }
            })
            $('#imgFile3').change(function () {
                var preview3 = document.getElementById('img3')
                var fileDom3 = document.getElementById('imgFile3')
                var file3 = fileDom3.files[0]
                var imgUrl3 = window.URL.createObjectURL(file3)
                preview3.setAttribute("src", imgUrl3)
                preview3.onload = function () {
                    URL.revokeObjectURL(imgUrl3)
                }
            })


            // $('#imgFile1').change(function() {
            //     var preview = document.getElementById('img1')
            //     var fileDom = document.getElementById('imgFile1')
            //         // 获取得到file 对象
            //     var file = fileDom.files[0]
            //         // 创建url
            //     var imgUrl = window.URL.createObjectURL(file)
            //     preview.setAttribute("src", imgUrl)
            //         // 更改img url 以后释放 url
            //     preview.onload = function() {
            //         URL.revokeObjectURL(imgUrl)
            //     }
            // })



        },
        //人臉采集
        rlbindEvent: function () {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            //采集
            $(".collectBtn").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $.messager.alert("提示", data.result, "info");
                        } else {
                            $.messager.alert("提示", "人脸采集失败", "info");
                        }
                    }
                })

            })
            //获取
            $(".obtain").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $(".eximg").attr("src", data.rltxurl);
                        } else {
                            $.messager.alert("提示", "该人员暂无人脸信息", "info");
                        }
                    }
                })

            })

        },
        //指紋采集
        zwbindEvent: function () {
            //采集
            $(".collectBtn").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $.messager.alert("提示", data.result, "info");
                        } else {
                            $.messager.alert("提示", "指纹采集失败", "info");
                        }
                    }
                })

            })
            //获取
            $(".obtain").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $(".eximg").attr("src", data.rltxurl);
                        } else {
                            $.messager.alert("提示", "该人员暂无指纹信息", "info");
                        }
                    }
                })

            })

        },
        //虹膜采集
        hmbindEvent: function () {
            //采集
            $(".collectBtn").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $(".eximg").attr("src", data.rltxurl);
                        } else {
                            $.messager.alert("提示", "虹膜采集失败", "info");
                        }
                    }
                })

            })
            //获取
            $(".obtain").on("click", function () {
                var rybh = userdata.rybh;
                var url = "/kss/biometric/zfaceCJ"
                $.ajax({
                    type: "post",
                    url: url,
                    data: { rybh: rybh },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 0) {
                            $(".eximg").attr("src", data.rltxurl);
                        } else {
                            $.messager.alert("提示", "该人员暂无虹膜信息", "info");
                        }
                    }
                })

            })

        },
        submit: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var dataObj = $("#fm").serializeObject();
                //var formData = JSON.stringify(dataObj);
                var zm = $('#imgFile1')[0].files[0];
                var cm1 = $('#imgFile2')[0].files[0];
                var cm2 = $('#imgFile3')[0].files[0];
                var sendData = new FormData();
                sendData.append('zmz', zm);
                sendData.append('cmz1', cm1);
                sendData.append('cmz2', cm2);
                sendData.append('formData', JSON.stringify(dataObj));
                util.ajax({
                    url: url,
                    data: sendData,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
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


        },
        submitsh: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                util.ajax({
                    url: url,
                    data: data,
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


        },
        submitzpjn: function (url, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var dataObj = $("#fm").serializeObject();
                //var formData = JSON.stringify(dataObj);
                var zm = $('#imgFile1')[0].files[0];
                var cm1 = $('#imgFile2')[0].files[0];
                var cm2 = $('#imgFile3')[0].files[0];
                var sendData = new FormData();
                sendData.append('zmz', zm);
                sendData.append('cmz1', cm1);
                sendData.append('cmz2', cm2);
                sendData.append('formData', JSON.stringify(dataObj));
                util.ajax({
                    url: url,
                    data: sendData,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
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


        },
    };
    return main;
});