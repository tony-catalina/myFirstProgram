define(function (require) {
    require('jquery');
    require('easyui');
    require('layui');
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var tpl = require('services/bar_form.html');
    var combox = require('awd/layui/combox');
    var isOpen = false;
    var util = require('awd/easyui/util');
    var urls = require('modules/url');
    var tree = require('awd/layui/tree');
    var main = {
        add: function (url, data, callback) {
            if (!isOpen) {
                var html = tpl('bar_form', data);
                popwin = utils.showWin({
                    area: ['100%', '100%'],
                    content: html,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        combox.init('.awdcombox', urls.getDictionary);
                    },
                    yes: function () {
                        main.submit(url, data, callback);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        update:function(datas,refresh){
            if(datas.length==0){
                utils.alert("请先选中一条记录办理");
                return false;
            } else if (datas.length > 1) {
                utils.alert("只能选中一条记录办理");
                return false;
            }

            if (!isOpen) {
                var html = tpl('bar_form', datas[0]);
                popwin = utils.showWin({
                    area: ['100%', '100%'],
                    content: html,
                    buttons: ['保存', '取消'],
                    success: function () {
                        isOpen = true;
                        combox.init('.awdcombox', urls.getDictionary);
                    },
                    yes: function () {
                        main.submit1(datas,refresh);
                    }
                }, function () {
                    isOpen = false;
                });
            }
        },
        del:function(datas,refresh){
            if(datas.length==0){
                utils.alert("请先选中一条记录办理");
                return false;
            } else {

                var ids = [];
                if (datas.length > 0) {
                    for (var i = 0; i < datas.length; i++) {
                        ids.push(datas[i].id);
                    }
                    // if(ids.substring(ids.length-1) == ','){
                    //     ids = ids.substring(0,ids.length-1)
                    // }
                }
                console.log(ids)
                 utils.confirm('确认要删除吗？',function(index){
                    util.ajax({
                        url: urls.deleteBar,
                        data: { "id": ids },
                        func: function (data) {
                            if (data.code == 'true') {
                                layer.close(index);
                                    utils.alert('删除成功');
                                    if(tools.isFunction(refresh)){
                                        refresh({state:'R2'});
                                    }
                            } else {
                                utils.alert('删除失败');
                            }
                            
                            
                        }
                    });


                })
            }
        },
        submit: function (url, data, callback) {
            /**先校验form */
            var flag = true;
            var city = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江 ",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北 ",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏 ",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外 "
            };
            var sfzhcode = document.getElementById('sfzhfm').value;
            if (sfzhcode.length != 18) {
                utils.alert( '身份证位数不合法');
                return false;
            } else if (!sfzhcode || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(sfzhcode)) {
                utils.alert('身份证号格式错误');
                return false;
            } else if (!city[sfzhcode.substr(0, 2)]) {
                utils.alert('地址编码错误');
                return false;
            } else {
                //18位身份证需要验证最后一位校验位
                if (sfzhcode.length == 18) {
                    sfzhcode = sfzhcode.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                    //校验位
                    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++) {
                        ai = sfzhcode[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if (parity[sum % 11] != sfzhcode[17]) {
                        utils.alert('身份证校验位错误');
                        return false;
                    }
                }
            };

            $("input[lay-verify='required']").not(".min1").not(".max7").each(function (i, item) {
                if (item.value == "") {
                    flag = false;
                }
            });
            if (flag == true) {

                var postData = util.form2Json('fm');
                // postData.id = data.id;
                util.ajax({
                    url: url,
                    data: postData,
                    func: function (data) {
                        if (data.code == 'true') {
                            // alert(data.data)
                            utils.closeWin(popwin);
							utils.alert(data.data);
                            if(tools.isFunction(callback)){
                                callback({state:'R2'});
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
        submit1: function(datas,refresh) {
            /**先校验form */
            var flag = true;
            var city = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江 ",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外 "
            };
            var sfzhcode = document.getElementById('sfzhfm').value;
            if (sfzhcode.length != 18) {
                utils.alert( '身份证位数不合法');
                return false;
            } else if (!sfzhcode || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(sfzhcode)) {
                utils.alert('身份证号格式错误');
                return false;
            } else if (!city[sfzhcode.substr(0, 2)]) {
                utils.alert( '地址编码错误');
                return false;
            } else {
                //18位身份证需要验证最后一位校验位
                if (sfzhcode.length == 18) {
                    sfzhcode = sfzhcode.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                    //校验位
                    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++) {
                        ai = sfzhcode[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if (parity[sum % 11] != sfzhcode[17]) {
                        utils.alert( '身份证校验位错误');
                        return false;
                    }
                }
            };

            $("input[lay-verify='required']").not(".min1").not(".max7").each(function (i, item) {
                if (item.value == "") {
                    flag = false;
                }
            });
            if (flag == true) {
                var postData = util.form2Json('fm');
                // postData.id = data.id;
                util.ajax({
                    url: urls.saveOrUpdateBar,
                    data: postData,
                    func: function (data) {
                        if (data.code == 'true') {
                            // alert(data.data)
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