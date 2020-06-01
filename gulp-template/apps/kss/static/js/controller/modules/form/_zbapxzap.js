define(function(require) {
    require('modules/commFun');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var formtpl = require('services/form/_zbapxzap.html');
    var combox = require('awd/easyui/combox');
    var url = require('modules/url');
    var popwin;

    var dizhi;

     var main = {
        init: function(url,data,callback) {
            var html = formtpl('form/_zbapxzap',data);
            popwin = utils.showWin({
                title:'新增值日安排',
                area: ['70%', '65%'],
                content:html,
                maxmin:true,
                buttons:["保存","关闭"],
                success:function(){
                    var zbap_form;
                    zbap_form +='<tr style="height:37px;text-align:center;">'+
                    '<td>12:00-14:30</td>'+
                    '<td>22:30-00:30</td>'+
                    '<td>00:30-02:30</td>'+
                    '<td>02:30-04:30</td>'+
                    '<td>04:30-06:30</td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'+
                    '<tr style="height:37px"><td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '<td><input class="easyui-combobox"></td>'+
                    '</tr>'
                    $("#zbap_form").append(zbap_form);
                    setTimeout(function (){
                        $.parser.parse('#fm');
                        main.bindEvent(data);
                    }, 0);
                },
                yes: function() {
                    main.submit(url,data, callback);
                }
            });
        },
        bindEvent: function() {
            combox.initBySelect('#fm .awdCombox', url.getDictionary);
            dizhi=url.zrapAdd
        },



        submit: function(url,data, callback) {
            /**先校验form */
            console.log(url)
            console.log('6666')            
            if ($('#fm').form('validate')) {
            console.log('7')            

                var postData = util.form2Json('fm');
                console.log(postData)
                console.log(dizhi)
                console.log(url.zrapAdd)
                postData.rybh=data.rybh;
                util.ajax({
                    url: dizhi,
                    data: postData,
                    func: function(data) {
                        console.log(data)
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
                console.log('data')
                utils.alert('表单数据格式不对！');
            }
        }
    };
    return main;
});