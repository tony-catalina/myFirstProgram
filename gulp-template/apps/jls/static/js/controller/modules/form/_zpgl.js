define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_zpgl.html');
    var popwin;
    var main = {

        init: function(url, data, row, callback) {
            var dataall = {};
            Object.assign(dataall, data, row);
            var html = formtpl('form/_zpgl', dataall);
            popwin = utils.showWin({
                title: '信息维护——人员信息维护',
                area: ['90%', '85%'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    $.parser.parse('#fm');
                    main.bindEvent();
                },
                yes: function() {
                    main.submit(url, dataall, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            // 图片预览
            $("#fm .imgFile").on('change', function() {
                var previewImage = $(this).parent().siblings('img');
                var file = this.files[0];
                var imgUrl = window.URL.createObjectURL(file);
                
                console.log(imgUrl);
                previewImage.attr('src', imgUrl);
                previewImage.onload = function() {
                    URL.revokeObjectURL(imgUrl);
                }
            })
        },
        submit: function(url, row, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var data = util.form2Json('fm');
                var formData = new FormData();
                formData.append("rybh", row.rybh);
                formData.append("leftPhoto", $("#leftPhoto")[0].files[0]);
                formData.append("rightPhoto", $("#rightPhoto")[0].files[0]);
                formData.append("centerPhoto", $("#centerPhoto")[0].files[0]);

                util.ajax({
                    url: url,
                    data: formData,
                    processData: false,
                    contentType: false,
                    func: function(data) {
                        if (data.success) {
                            utils.alert(data.msg);
                            utils.closeWin(popwin);
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