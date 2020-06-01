/**
 * 业务动态页面
 */
define(function(require) {
    require('jquery');
    require('easyui');
    require('layer.config');
    var echarts = require('echarts');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var ywdtPage = require('services/com/ywdt.html');
    var echartFrom = require('awd/echart/echart');
    var echartValue;
    var echartArg;
    var main = {
        init: function(className, option) {
            var ywdtHtml = ywdtPage('com/ywdt', option);
            document.querySelector('.' + className).innerHTML = ywdtHtml;
            $.parser.parse('.' + className);
            main.initEvents(option, className);
        },
        initEvents: function(option, className) {
            var search = function(data, url) {
                util.ajax({
                    url: url,
                    data: data,
                    func: function(data) {
                        if (data.status == 200) {
                            utils.alert(data.message);
                            echartValue = data.result;
                            resealRes(data.result);
                        } else {
                            utils.alert(data.message);
                        }
                    }
                });
            }
            var resealRes = function(getRes) {
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
            var parentDom = document.querySelector("." + className);
            // 点击按钮查询事件
            if (parentDom.querySelector('.ywdt-btn')) {
                parentDom.querySelector('.ywdt-btn').addEventListener('click', function() {
                    var startTime = $(".starttime").datebox('getValue');
                    var endTime = $(".endtime").datebox('getValue');
                    search(Object.assign({}, { starttime: startTime, endtime: endTime }, option.search.parameter), option.search.url);
                })
            }
            // 点击统计按钮事件
            parentDom.onclick = function(event) {
                event = event || window.event;
                var target = event.srcElement || event.target;
                if (target.className.toUpperCase() == 'ECHARTBTN') {
                    if (echartValue == undefined) {
                        layer.msg('尚无数据，请先查询！');
                        return;
                    }
                    // 从ajax返回的数据中找到当前按钮需要统计的数据{key:value}
                    for (key in echartValue) {
                        if (key == target.dataset.filed) {
                            // 封装数据数组
                            var values = [];
                            for (k in echartValue[key][0]) {
                                values.push(echartValue[key][0][k]);
                            }
                            // 封装labels数组
                            var labels = [];
                            option.formItems.forEach(function(item, index, arr) {
                                    if (item.itemTitle.searchBtn == key) {
                                        item.itemLists.forEach(function(item, index, arr) {
                                            labels.push(item.name);
                                        })
                                    }
                                })
                                // 封装成可传入到echartFrom.getOption()函数的参数对象{values:[], labels:[]}
                            echartArg = Object.assign({}, { values: values }, { labels: labels });
                            break;
                        }
                    }
                    var el = document.createElement('div');
                    console.log(echartArg);
                    var echartOption = echartFrom.getOption('line', echartArg);
                    utils.showWin({
                        title: 'echart分析图',
                        area: ['90%', '85%'],
                        maxmin: true,
                        success: function() {
                            $.parser.parse('#fm');
                        },
                        yes: function() {
                            alert('第一个按钮');
                        }
                    });
                    $('.layui-layer-content').append(el);
                    var myChart = echarts.init(document.querySelector('.layui-layer-content'));
                    myChart.setOption(echartOption);
                } else if (target.className.toUpperCase() == 'DEFAULTBTN') {
                    // 默认按钮查询
                    search(option.parameter, option.search.url);
                }
            }

        }
    };
    return main;
});