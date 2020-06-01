/**
 * 业务动态页面
 */
define(function (require) {
    require('jquery');
    require('easyui');
    var utils = require('awd/layui/utils');
    var ywdtPage = require('services/com/ywdt.html');

    var main = {
        init: function (className, option) {
            var ywdtHtml = ywdtPage('com/ywdt', option);
            document.querySelector('.' + className).innerHTML = ywdtHtml;
            $.parser.parse('.' + className);
            main.initEvents(option.search, className);
        },
        initEvents: function (arg, className) {
            console.log(arg);
            // 查询事件
            var search = function (data, url) {
                $.ajax({
                    url: url,
                    type: 'post',
                    data: data,
                    success: function (res) {
                        if (res.status == 200) {
                            utils.alert(res.message);
                            // 重新封装获取的结果
                            resealRes(res.result);
                        } else {
                            utils.alert(res.message);
                        }
                    }
                })
            }
            var resealRes = function (getRes) {
                var resetValue = [];
                // 把ajax获取的结果转化成json形式的数组 [{key:value}]
                for (let key in getRes) {
                    var temporaryObject = getRes[key][0];
                    for (let k in temporaryObject) {
                        resetValue.push({
                            [k]: temporaryObject[k]
                        })
                    }
                }
                for (let i = 0; i < resetValue.length; i++) {
                    for (let key in resetValue[i]) {
                        var dom = document.querySelector('div[data-filed=' + key + ']');
                        if (dom) {
                            document.querySelector('div[data-filed=' + key + ']').innerHTML = resetValue[i][key];
                        }

                    }
                }
            }
            // 默认查询
            search(arg.parameter, arg.url);
            // 点击按钮查询
            var parentDom = document.querySelector("." + className);
            console.log(parentDom);
            parentDom.querySelector('#searchBtn').addEventListener('click', function () {
                var startTime = $(".starttime").datebox('getValue');
                var endTime = $(".endtime").datebox('getValue');
                search(Object.assign({}, { starttime: startTime, endtime: endTime }, arg.parameter), arg.url);
            });
        }
    };
    return main;
});