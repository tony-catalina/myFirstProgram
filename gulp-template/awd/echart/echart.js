define(function(require) {
    'use strict';
    require('jquery');
    var echarts = require('echarts');
    var tools = require('awd/jquery/tools');
    var main = {
        getOption: function(type, data, config) {
            var option = {};
            var labels = tools.isUndefined(data.labels) ? [] : data.labels;
            var values = tools.isUndefined(data.values) ? [] : data.values;
            console.log(type);
            if (type == 'line') {
                option = {
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    grid: {
                        top: '12%',
                        left: '1%',
                        right: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: labels
                    },
                    yAxis: {
                        type: 'value'
                    },
                    dataZoom: [{
                            show: true,
                            start: 94,
                            end: 100
                        },
                        {
                            type: 'inside',
                            start: 94,
                            end: 100
                        },
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 30,
                            height: '80%',
                            showDataShadow: false,
                            left: '93%'
                        }
                    ],
                    series: [{
                        data: values,
                        type: 'line',
                        smooth: true
                    }]
                };
            }
            if (type == 'bar') {
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true
                            }
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    grid: {
                        top: '12%',
                        left: '1%',
                        right: '10%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: labels,
                        axisTick: {
                            alignWithLabel: true
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    dataZoom: [{
                            show: true,
                            start: 0,
                            end: 100
                        },
                        {
                            type: 'inside',
                            start: 0,
                            end: 100
                        },
                        {
                            show: true,
                            yAxisIndex: 0,
                            filterMode: 'empty',
                            width: 30,
                            height: '80%',
                            showDataShadow: false,
                            left: '93%'
                        }
                    ],
                    series: values
                };
            }
            if (type == 'bars'){
                option = {
                    legend: {},
                    tooltip: {},
                    grid: {
                       height:data && !tools.isUndefined(data.yheight) ? data.yheight : '',
                       top:'10%'
                    },
                    xAxis: {
                        type: 'category', 
                        data: data && !tools.isUndefined(data.xdata) ? data.xdata : '',
                        axisLabel:{
                            interval:0
                        }
                    },
                    yAxis: {},
                    series: config
                };
            }
            if (type == 'bar_lins'){
                option = {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: data
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    series: [
                        {type: 'bar',itemStyle:{
                            normal:{
                                color:'#2EC7C9',
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize:'10',
                                        fontFamily : '微软雅黑',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        }},
                        {type: 'bar',itemStyle:{
                            normal:{
                                color:'#B6A2DE',
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize:'10',
                                        fontFamily : '微软雅黑',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        }},
                        {type: 'bar',itemStyle:{
                            normal:{
                                color:'#5AB1EF',
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize:'10',
                                        fontFamily : '微软雅黑',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        }}
                    ]
                };
            }
            if (type == 'bar_line'){
                option = {
                    legend: {},
                    tooltip: {},
                    xAxis: {type: 'category',
                            axisLine:{show:false},
                            axisTick:{show:false},
                            splitLine:{show:false}},
                    yAxis: {show:false},
                    series: config
                };
            }
            if (type == 'pie') {
                option = {
                    title: {
                        text: config && !tools.isUndefined(config.text) ? config.text : '',
                        subtext: config && !tools.isUndefined(config.subtext) ? config.subtext : '',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        right: 0,
                        top: data && !tools.isUndefined(data.legendHeight) ? data.legendHeight : '',
                        bottom: 0,
                        data: data.legendData,
                        textStyle:{
                            fontSize:11
                        },
                        selected: data.selected
                    },
                    series: [{
                        name: config && !tools.isUndefined(config.name) ? config.name : '',
                        type: 'pie',
                        radius: config && !tools.isUndefined(config.radius) ? config.radius : '60%',
                        center: config && !tools.isUndefined(config.center) ? config.center : ['40%', '50%'],
                        data: data.seriesData,
                        color: data.seriesColors,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: config && !tools.isUndefined(config.label) ? config.label : {
                            show: true
                        },
                        itemStyle: config && !tools.isUndefined(config.itemStyle) ? config.itemStyle : {}
                    }]
                };
            }
            if (type == 'scatter') {
                option = {
                    xAxis: {},
                    yAxis: {},
                    series: [{
                        symbolSize: 20,
                        data: [
                            [10.0, 8.04],
                            [8.0, 6.95],
                            [13.0, 7.58],
                            [9.0, 8.81],
                            [11.0, 8.33],
                            [14.0, 9.96],
                            [6.0, 7.24],
                            [4.0, 4.26],
                            [12.0, 10.84],
                            [7.0, 4.82],
                            [5.0, 5.68]
                        ],
                        type: 'scatter'
                    }]
                };
            }
            if (type == 'map') {

            }
            if (type == 'candelstick') {

            }
            if (type == 'radar') {

            }
            if (type == 'boxplot') {

            }
            if (type == 'heatmap') {

            }
            if (type == 'graph') {

            }
            if (type == 'lines') {

            }
            if (type == 'tree') {

            }
            if (type == 'treemap') {

            }
            if (type == 'sunburst') {

            }
            if (type == 'parallel') {

            }
            if (type == 'sankey') {

            }
            if (type == 'funnel') {

            }
            if (type == 'gauge') {

            }
            if (type == 'pictorialbar') {

            }
            if (type == 'themeriver') {

            }
            if (type == 'calendar') {

            }
            if (type == 'custom') {

            }
            return option;
        },
        init: function(id, option) {
            if (!document.getElementById(id)) return;
            var myChart = echarts.init(document.getElementById(id));
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _type = tools.isUndefined(option.type) ? 'line' : option.type;
            var _onClick = !tools.isFunction(option.click) ? function(params) {} : option.click;
            $.ajax({
                url: _url,
                method: 'post',
                success: function(data) {
                    myChart.setOption(main.getOption(_type, data));
                    myChart.on('click', function(params) {
                        _onClick(params);
                    });
                }
            });

        }
    };
    return main;
});
