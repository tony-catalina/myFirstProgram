define(function(require){
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var formtpl = require('services/form/_jbglYcysyj.html');
    var popwin;

    var main = {
        init:function(url, data, row, callback){
            main.initForm(url, data, row, callback);
        },
        initForm:function(url, data, row, callback){
            var dataall = {};
            Object.assign(dataall, data, row);
            var html=formtpl('form/_jbglYcysyj',dataall);
            utils.showWin({
                title:'医生意见',
                area: ['90%', '85%'],
                content:html,
                maxmin:true,
                success:function(){
                    setTimeout(function (){
                        $.parser.parse('#fm');
                    }, 0);},
                yes:function(){
                    main.submit('kss/','')
                }
                });   
            $(".Form_ReadOnly :text").attr("readonly", "readonly");        
        },
        submit: function (url, callback) {
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


        }
    }
    return main;
})