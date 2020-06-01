/**
 模块名称:
 开始时间: 2020-3-7
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('easyuiZh');
    var echarts = require('echarts')
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var ywdtPage = require('services/com/ywdtTable.html');
    var url = require('modules/url');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            var nowdate = new Date();
            //获取系统前一个月的时间
            nowdate.setMonth(nowdate.getMonth() - 1);
            var y = nowdate.getFullYear();
            var m = nowdate.getMonth() + 1;
            var d = nowdate.getDate();
            if (m < 10) {
                m = "0" + m;
            }
            if (d < 10) {
                d = "0" + d;
            }
            var toward = y + '-' + m + '-' + d;
            $('#timeStart').datebox('setValue', toward)
            $('#searchBtn').click(function () {
                $("#datagrid").empty();
                Date.prototype.format = function () {
                    var s = '';
                    var mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
                    var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
                    s += this.getFullYear() + '-'; // 获取年份。
                    s += mouth + "-"; // 获取月份。
                    s += day; // 获取日。
                    return (s); // 返回日期。
                };
                function getAll(begin, end) {
                    var arr = [];
                    var ab = begin.split("-");
                    var ae = end.split("-");
                    var db = new Date();
                    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
                    var de = new Date();
                    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
                    var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
                    var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
                    for (var k = unixDb; k <= unixDe;) {
                        k = k + 24 * 60 * 60 * 1000;
                        arr.push((new Date(parseInt(k))).format());
                    }
                    return arr;
                }
                var start = $("#timeStart").datebox("getValue");
                var end = $("#timeEnd").datebox("getValue");

                var dateArr = getAll(start, end)
                $.ajax({
                    type: "POST",
                    url: url.getGyl,
                    data: {
                        'dateArr': JSON.stringify(dateArr)
                    },
                    success: function (result) {
                        if (result.result.total > 0) {
                            var list = result.result.rows;
                            var newDate = []
                            var newNumber = []
                            for (var i = 0; i < list.length; i++) {
                                var datagrid = '';
                                datagrid += '<div style="width:10%;text-align:center;">' +
                                    '<p style="border:1px solid #f2f2f2;">' + list[i].date +
                                    '</p>' +
                                    '<p style="border:1px solid #f2f2f2;">' + list[i].gyl +
                                    '</p>' +
                                    '</div>'
                                $("#datagrid").append(datagrid)
                                newDate.push(list[i].date)
                                newNumber.push(list[i].gyl)
                            }
                            $(".echart").addClass('addEchart')
                            var option = {
                                color: ['#3398DB'],
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis: [
                                    {
                                        type: 'category',
                                        data: newDate,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value'
                                    }
                                ],
                                series: [
                                    {
                                        name: '',
                                        type: 'bar',
                                        barWidth: '60%',
                                        data: newNumber
                                    }
                                ]
                            };

                            var myChart = echarts.init(document.getElementById("zzid"));
                            myChart.setOption(option);
                        } else {
                            $.messager.alert("确定", "数据加载失败", "warn");
                        }
                    },

                });



            });



            /**事件绑定**/
        }

    };

    /**
     *运行入口
     */
    $(main.init);

});
