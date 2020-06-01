define(function(require){
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var tpl = require('services/zdgl_form.html');
    var combox=require('awd/layui/combox');
    var isOpen = false;
    var util = require('awd/easyui/util');
    var urls = require('modules/url');
    var tree = require('awd/layui/tree');

    var main={
        update:function(datas,refresh){
            if (datas.length == 0 || datas.length > 1) {
                utils.alert("请先选中一条记录办理");
                return false;
            }else if(datas.length>1){
                utils.alert("只能选中一条记录办理");
                return false;
            }
            if(datas[0].editable==0){
                utils.alert("该数据不可修改");
            }else{

                if (!isOpen) {
                    var html=tpl('zdgl_form',datas[0]);
                    popwin = utils.showWin({
                        area: ['100%', '100%'],
                        content: html,
                        buttons: ['保存', '取消'],
                        success: function () {
                            isOpen = true;
                            combox.init('.awdcombox',urls.getDictionary);
    
                        },
                        yes: function () {
                            main.submit(datas,refresh);
                        }
                    }, function () {
                        isOpen = false;
                    });
                }
            }
        },
        submit: function(datas,refresh) {
            /**先校验form */
            var flag = true;
            $("input[lay-verify='required']").not(".min1").not(".max7").each(function(i, item) {
                if (item.value == "") {
                    flag = false;
                }
            });
            if (flag == true) {
                var postData = util.form2Json('fm');
                console.log(postData)
                util.ajax({
                    url: urls.saveDictionary,
                    data: postData,
                    func: function(data) {
                        if (data.code == 'true') {
                            utils.closeWin(popwin);
                            utils.alert(data.data);
                            if(tools.isFunction(refresh)){
                                refresh({state:'R2'});
                            }
                            // tree.otherinit('tree', {
                            //     url: urls.dictionaryGetType,
                            //     line: true
                            // })
                        } else {
                            utils.alert(data.data);
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