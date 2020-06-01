define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var formtpl = require('services/form/_mjjbxxZw.html');
    var url = require('modules/url');

    var popwin;
    var main = {
        init: function(url, data, callback) {
            // debugger;
            var html = formtpl('form/_mjjbxxZw', data);
            popwin = utils.showWin({
                title: '民警基本信息',
                area: ['90%', '85%'],
                content: html,
                maxmin: true,
                buttons: ['保存', '取消'],
                success: function() {
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent();
                    }, 0);
                },
                yes: function() {
                    main.submit(url,data,callback);
                }
            });
        },
        bindEvent: function() {

            combox.initBySelect('#fm .awdCombox', url.getDictionary);

        },
        submit: function(url, data, callback) {
            /**先校验form */
            if ($('#fm').form('validate')) {
                var mjzp = document.querySelector('input[type="file"]').files[0];
                var formData = util.form2Json('fm');
                formData.id = data.id;
                var postData = new FormData();
                postData.append('mjzp', mjzp);
                postData.append('formData', JSON.stringify(formData));
                console.log(postData);
                util.ajax({
                    url: url,
                    data: postData,
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