require(['jquery', 'bootstrap', 'respond', 'echarts','layui'], function($, bootstrap, respond, echarts,layui) {
  'use strict';
  var jgEchart = echarts.init(document.getElementById('jg_detail'));
  var ayEchart = echarts.init(document.getElementById('ay_detail'));
  var jsEchart = echarts.init(document.getElementById('js-info'));
  var main = {
    init: function() {
      main.load_hjd_data('/mock/hjd/all');
      main.load_ay_data('/mock/hjd/all');
      main.load_js_data('/mock/js/all');
      main.load_ywdt_data('');
    },
    load_hjd_data: function(url) {
      $.get(url, function(data) {
        var option = {
          title: {
            text: '籍贯分布',
            subtext: '看守所、拘留所、戒毒所',
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff' //标题颜色
            }
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {
                readOnly: false
              },
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['人数'],
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff' //标题颜色
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: data.hjd,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              fontSize:15
            }
          },
          series: [{
            name: '人数',
            type: 'bar',
            data: data.rs,
            itemStyle: {
                   normal: {
                       label: {
                           show: true,		//开启显示
                           position: 'right',	//在上方显示
                           textStyle: {	    //数值样式
                               color: 'white',
                               fontSize: 16
                           }
                       }
                   }
               }
          }]
        };
        jgEchart.hideLoading();
        jgEchart.clear();
        jgEchart.setOption(option);
        jgEchart.on('click', function (params) {
          console.log(params);
          main.show_ryxx('/mock/ryxx/all',params);
        });
      });
    },
    load_ay_data: function(url) {
      $.get(url, function(data) {
        var option = {
          title: {
            text: '案由分布',
            subtext: '看守所、拘留所、戒毒所',
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff' //标题颜色
            }
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {
                readOnly: false
              },
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: [ '人数'],
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff' //标题颜色
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: data.hjd,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              },
              fontSize:15
            }
          },
          series: [{
            name: '人数',
            type: 'bar',
            data: data.rs,
            itemStyle: {
                   normal: {
                       label: {
                           show: true,		//开启显示
                           position: 'right',	//在上方显示
                           textStyle: {	    //数值样式
                               color: 'white',
                               fontSize: 16
                           }
                       }
                   }
               }
          }]
        };
        ayEchart.hideLoading();
        ayEchart.clear();
        ayEchart.setOption(option);
        ayEchart.on('click', function (params) {
          console.log(params);
          main.show_ryxx('/mock/ryxx/all',params);
        });
      });
    },
    load_js_data: function(url) {
      $.get(url, function(data) {
        var option = {
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
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          calculable: true,
          legend: {
            data: ['Growth', '隔离房间', '关押人数'],
            itemGap: 5,
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff' //标题颜色
            }
          },
          grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: data.names,
            axisLabel: {
              textStyle: {
                color: '#ffffff'
              }
            }
          }],
          yAxis: [{
            type: 'value',
            name: '人数',
            axisLabel: {
              formatter: function(a) {
                a = +a;
                return isFinite(a) ?
                  echarts.format.addCommas(+a / 1000) :
                  '';
              },
              color: '#ffffff'
            }
          }],
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
              name: '隔离房间',
              type: 'bar',
              data: data.fjs,
              itemStyle: {
                  normal: {
      　　　　　　　　//这里是重点
                      color: function(params) {
                      	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                          var colorList = ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B', '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
                          return colorList[0]
                      }
                  }
              }
            },
            {
              name: '关押人数',
              type: 'bar',
              data: data.gys,
              itemStyle: {
                  normal: {
      　　　　　　　　//这里是重点
                      color: function(params) {
                      	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                          var colorList = ['#C1232B','#B5C334','#FCCE10','#E87C25','#27727B', '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
                          return colorList[7]
                      }
                  }
              }
            }
          ]
        };
        jsEchart.hideLoading();
        jsEchart.clear();
        jsEchart.setOption(option);
        jsEchart.on('click', function (params) {
          console.log(params);
          main.show_ryxx('/mock/ryxx/all',params);
        });
      });

    },
    load_ywdt_data:function(url){
        $.get(url, function(data) {
          var xs='1月23号以来，共新收0人，昨天新收0人，今天新收0人';
          var ts='1月23号以来，共提审0人，昨天提审0人，今天提审0人';
          var lshj='1月23号以来，共律师会见0人，昨天律师会见0人，今天律师会见0人';
          var ctsl='1月23号以来，共开庭0人，昨天开庭0人，今天开庭0人';
          $("#ywdt_xs").html(xs);
          $("#ywdt_ts").html(ts);
          $("#ywdt_lshj").html(lshj);
          $("#ywdt_ctsl").html(ctsl);
        });
    },
    show_ryxx:function(url,param){
      layer.open({
        type: 1
        ,title: '人员信息' //不显示标题栏
        ,closeBtn: false
        ,area: ['90%','80%']
        ,shade: 0.8
        ,id: 'RY_info' //设定一个id，防止重复弹出
        ,btn: ['关闭']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<table id="rytable" class="office-efficiency-index" ></table>'
        ,success: function(layero){
          layui.use('table', function(){
          var table = layui.table;

          //第一个实例
          table.render({
            elem: '#rytable'
            ,url: url //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
              { field: 'rank', title: '序号', width: '5%', sort: true, fixed: 'left', templet: '#rank' }
              ,{field: 'xm', title: '姓名', width:'15%'}
              ,{field: 'jg', title: '籍贯', width:'30%', sort: true}
              ,{field: 'ay', title: '案由', width:'30%'}
              ,{field: 'rsrq', title: '入所日期', width: '15%'},
              ,{field: 'yrts', title: '已押天数', width: '5%'}
            ]]
          });

        });
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').on('click',function(){
            layer.closeAll();
          });
        }
      });
    }
  };
  main.init();
});
