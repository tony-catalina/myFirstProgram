define(function (require) {
    require('jquery');
    require('echarts');
    require('swiper');
    require('modules/charts/BaseChart');
    var StringUtil = require('dep_string');
    $(function () {
        handleInitFn();
    });
    var baseData = {
        chart: {
            one: null,
            two: null
        }
    };
    var handleInitFn = function () {
        oneFn();
        twoFn();
        tan1TitFn();
        swiperRenderFn();
    }; //弹出层标题
    var tan1TitFn = function () {
        var el = $('#tan1-tit1');
        $.ajax({
            url: BASEURL + "static/assets/json/data.json",
            success: function (resp) {
                var respData = [{
                    name: "监所名称"
                }, {
                    name: "姓名"
                }, {
                    name: "监视号"
                }, {
                    name: "风险等级"
                }, {
                    name: "列控时间"
                }, {
                    name: "列控原因"
                }, {
                    name: "管控措施"
                }, {
                    name: "管控民警"
                }];
                $.each(respData, function (idx, itm) {
                    el.append('<div class="tan1-tit1-span dper-full-h fl">\n' + '<span class="text-overflow-e">' + itm.name + '</span>\n' + '</div>');
                });
            }
        });
    }; //弹出层swiper
    var swiperRenderFn = function () {
        var $el = $('#swiperBox'),
            swiper = "<div class='swiper-container dper-full-h' id='swiper'>" + "<div class='swiper-wrapper dper-full-h'></div>" + "</div>";
        $el.empty();
        $el.append(swiper);
        renderSwiperCont();
    };
    var renderSwiperCont = function () {
        var el = $('#swiper').find('.swiper-wrapper');
        $.ajax({
            url: BASEURL + "static/assets/json/data.json",
            success: function (resp) {
                var respData = [{
                    name: "北京市第一看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }, {
                    name: "通州区看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "李某"
                }, {
                    name: "海淀区看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王某"
                }, {
                    name: "北京市第二看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }, {
                    name: "北京市第一看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }, {
                    name: "北京市第一看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }, {
                    name: "北京市第一看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }, {
                    name: "北京市第一看守所",
                    name1: "周瑜",
                    name2: "0102",
                    name3: "一级风险",
                    name4: "2019-10-23 10:33:32",
                    name5: "高血压",
                    name6: "住院观察",
                    name7: "王国"
                }];
                $.each(respData, function (idx, itm) {
                    el.append('' + '<div class="swiper-slide">\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name1 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name2 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name3 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name4 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name5 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name6 + '</span>\n' + '</div>\n' + '<div class="tan1-name fl dper-full-h">\n' + '<span>' + itm.name7 + '</span>\n' + '</div>\n' + '</div>');
                });
                var mySwiper = new Swiper('#swiper', {
                    autoplay: true,
                    grabCursor: true,
                    direction: 'vertical',
                    slidesPerView: 7,
                    mousewheel: true
                });
            }
        });
    }; //第一个echars图表
    var oneFn = function () {
        if (!baseData.chart.one) baseData.chart.one = new ChartOne($('.echars0')[0]);
        $.ajax({
            url: BASEURL + "static/assets/json/data.json",
            success: function (resp) {
                var respData = [];
                baseData.chart.one.render(respData);
            }
        });
    };
    var ChartOne = function (el) {
        this.el = el;
        this.myChart = null;
        this.option = {
            series: [{
                name: '执法人员情况',
                type: 'pie',
                radius: ['24%', '45%'],
                center: ['50%', '58%'],
                data: [{
                    value: 20,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ff9d73' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#ff71a8' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: "#fff",
                            fontSize: 14,
                            formatter: '高血压 100'
                        }
                    }
                }, {
                    value: 40,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#fdd76a' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#f38a33' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: "#fff",
                            fontSize: 14,
                            formatter: '心血管疾病 200'
                        }
                    }
                }, {
                    value: 20,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#7cf2d4' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#33e7c0' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: "#fff",
                            fontSize: 14,
                            formatter: '消化道疾病 100'
                        }
                    }
                }, {
                    value: 20,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#92befe' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#64a2fe' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            fontSize: 14,
                            color: "#fff",
                            formatter: '其中心脏病 100'
                        }
                    }
                }]
            }]
        };
        this.init();
    };
    ChartOne.prototype = {
        constructor: ChartOne,
        init: function () {
            this.initMyChart();
        },
        initMyChart: function () {
            this.myChart = echarts.init(this.el);
        },
        render: function (data) {
            if (!this.myChart) this.initMyChart();
            this.option.series.data = [];
            this.option.series.data = data;
            this.myChart.setOption(this.option);
        }
    }; //第二个echars图表
    var twoFn = function () {
        if (!baseData.chart.two) baseData.chart.two = new ChartTwo($('.echars1')[0]);
        $.ajax({
            url: BASEURL + "static/assets/json/data.json",
            success: function (resp) {
                var respData = [];
                baseData.chart.two.render(respData);
            }
        });
    };
    var ChartTwo = function (el) {
        this.el = el;
        this.myChart = null;
        this.option = {
            series: [{
                name: '面积模式',
                type: 'pie',
                radius: ['25%', '45%'],
                center: ['50%', '60%'],
                roseType: 'area',
                data: [{
                    value: 40,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: '#f6d960' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#e4a92c' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: '#fff',
                            fontSize: 24,
                            formatter: '公示  150'
                        }
                    }
                }, {
                    value: 20,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: '#09d679' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#0cc7a4' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: "#fff",
                            fontSize: 24,
                            formatter: '待审核  450'
                        }
                    }
                }, {
                    value: 40,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: '#1d9df4' // 0% 处的颜色

                            }, {
                                offset: 1,
                                color: '#0f78e3' // 100% 处的颜色

                            }],
                            globalCoord: false // 缺省为 false

                        }
                    },
                    label: {
                        normal: {
                            color: "#fff",
                            fontSize: 24,
                            formatter: '新增  200'
                        }
                    }
                }]
            }]
        };
        this.init();
    };
    ChartTwo.prototype = {
        constructor: ChartTwo,
        init: function () {
            this.initMyChart();
        },
        initMyChart: function () {
            this.myChart = echarts.init(this.el);
        },
        render: function (data) {
            if (!this.myChart) this.initMyChart();
            this.option.series.data = [];
            this.option.series.data = data;
            this.myChart.setOption(this.option);
        }
    }; //弹出层点击事件
    $('#b-l-span').on('click', function () {
        $('#tan1').css('visibility', 'visible');
    });
    $('#b-r-span').on('click', function () {
        $('#tan1').css('visibility', 'visible');
    });
    $('#b-b-span').on('click', function () {
        $('#tan1').css('visibility', 'visible');
    });
    $('#tan1').on('click', function () {
        $('#tan1').css('visibility', 'hidden');
    }); //左侧弹框移入移出事件
    $('#tan2').on('mouseover', function () {
        $('#tan2').css('left', '0%');
    });
    $('#tan2').on('mouseout', function () {
        $('#tan2').css('left', '-6.1%');
    });
});