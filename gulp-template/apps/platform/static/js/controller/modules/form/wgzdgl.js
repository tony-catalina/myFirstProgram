define(function (require) {
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var tpl = require('services/wgzd_form.html');
    var combox=require('awd/layui/combox');
    var isOpen = false;
    var util = require('awd/easyui/util');
    var url = require('modules/url');
    var urls = require('modules/url');

    var main = {
        
        update: function (datas,refresh) {
            if(datas.length==0){
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
                    var html=tpl('wgzd_form',datas[0]);
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
        del: function (datas,) {
            if(datas.length==0){
                utils.alert("请先选中一条记录办理");
                return false;
            }
        },
        submit: function(datas,refresh) {
            /**先校验form */
            var number = document.getElementById('numberfm').value;
            //可小数
			if (!/^(\-|\+)?\d+(\.\d+)?$/.test(number)) {
				utils.alert("数字格式不对");
				return false;
			};
            var flag = true;
			$("input[lay-verify='required']").not(".min1").not(".max7").each(function (i, item) {
				if (item.value == "") {
					flag = false;
				}
			});
			if (flag == true) {
                var postData = util.form2Json('fm');
                postData.id = datas[0].id;
                postData.dj = datas[0].dj;
                postData.classid = datas[0].classid;
                console.log(postData)
                util.ajax({
                    url: url.saveWgzd,
                    type: 'post',
                    data: postData,
                    func: function(data) {
                        if (data.code == 'true') {
							utils.closeWin(popwin);
                            utils.alert(data.data);
                            if(tools.isFunction(refresh)){
                                refresh({state:'R2'});
                            }
						} else {
							utils.alert(data.data);
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