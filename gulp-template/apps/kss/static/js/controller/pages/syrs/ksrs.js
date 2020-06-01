/**
 * 快速入所 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    require('layer.config');
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var comboxtree = require('awd/easyui/comboxtree');
    var common = require('common');
    var xbcode = '';
    //界面控件
    var main = {
        init: function () {
            $.parser.parse();
            main.layout();
            main.eventBind();
        },
        layout: function () {
            //布局初始化
            // 字典渲染
            combox.initBySelect('.awdCombox', url.getDictionary);
            comboxtree.initBySelect('.jsh', url.getJsCombotree);
            // 默认回显内容
            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
            $('#rsrq').datetimebox('setValue', currentTime);
            // 获取档案编号
            $.ajax({
                type: "POST",
                url: url.dabh,
                success: function (result) {
                    $("#dah").textbox("setValue", result.result);
                }
            });
        },
        eventBind: function () {

            $('#xb').combobox({
                onSelect: function (data) {
                    xbcode = data.code;
                    if (xbcode == '6') {
                        xbcode = '2';
                    }
                    if (xbcode == '5' || xbcode == '9' || xbcode == '0') {
                        xbcode = '1';
                    }
                    $('.jsh').combotree({
                        onBeforeLoad: function (node, param) {
                            param.type = xbcode;
                        },
                    });
                    $('.jsh').combotree('reload');
                }
            });

            // 图片预览切换
            var showPic = $('.showPic');
            $("#fm .pic").click(function () {
                var currentUrl = $(this).attr('src');
                console.log(this);
                showPic.attr('src', currentUrl);
            })

            // 图片预览
            $("#imgFile1").on('change', function () {
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


            $(".ksrsBtn input[type='button']").on('click', function () {
                var className = this.getAttribute('class').toUpperCase();
                if (className == 'KEEPBTN') {
                    // 保存
                    if ($('#fm').form('validate')) {
                        var zmz = document.querySelector('.file1').files[0];
                        var cmz1 = document.querySelector('.file2').files[0];
                        var cmz2 = document.querySelector('.file3').files[0];
                        if ((zmz != null && zmz != undefined) || (cmz1 != null && cmz1 != undefined) || (cmz2 != null && cmz2 != undefined)) {
                            var jbxxData = util.form2Json('fm');
                            util.ajax({
                                url: url.saveForKsrs,
                                async: false,
                                data: jbxxData,
                                func: function (data) {
                                    if (data.success) {
                                        var gcbh = data.result;
                                        var obj = { creator: common.info.user.loginname };
                                        var data = JSON.stringify(obj);
                                        var zmz = document.querySelector('.file1').files[0];
                                        var cmz1 = document.querySelector('.file2').files[0];
                                        var cmz2 = document.querySelector('.file3').files[0];
                                        var sendData = new FormData();
                                        sendData.append('qm', zmz);
                                        sendData.append('zm', cmz1);
                                        sendData.append('ym', cmz2);
                                        sendData.append('gcbh', gcbh);
                                        sendData.append('formData', data);
                                        util.ajax({
                                            url: url.saveForKsrsZp,
                                            processData: false,
                                            contentType: false,
                                            data: sendData,
                                            type:'post',
                                            dataType: 'json',
                                            func: function (data) {
                                                utils.alert(data.msg);
                                                setTimeout(function () {
                                                    window.location.href = '/apps/kss/views/pages/syrs/ksrs.html'
                                                }, 3000);
                                            }
                                        });
                                        // window.location.href = '/apps/kss/views/pages/syrs/ksrs.html'
                                    } else {
                                        utils.alert(data.msg);
                                    }
                                }
                            });
                        } else {
                            $.messager.confirm("提示", "该人员未上传照片,是否保存？", function (b) {
                                if (b) {
                                    var jbxxData = util.form2Json('fm');
                                    util.ajax({
                                        url: url.saveForKsrs,
                                        data: jbxxData,
                                        func: function (data) {
                                            if (data.success) {
                                                utils.alert(data.msg);
                                                setTimeout(function () {
                                                    window.location.href = '/apps/kss/views/pages/syrs/ksrs.html'
                                                }, 3000);
                                                // 
                                            } else {
                                                utils.alert(data.msg);
                                            }
                                        }
                                    });
                                }
                            });
                        }




                    } else {
                        utils.alert('表单数据格式不对！');
                    }

                } else if (className == "CLOSEBTN") {
                    // 返回
                    window.location.href = '/apps/kss/views/pages/syrs/ywlc_dv.html'
                }


            });

        },

    };

    /**
     *运行入口
     */
    $(main.init);
});