define(function (require, exports, module) {
  require("sJI"); // 引入echarts


  var echarts = require("echarts");

  var BaseChart = require("./BaseChart");

  var ChartBar = BaseChart.extend({
    init: function (el) {
      this._super(el);

      this.option = {};
      this.myChart = echarts.init(this.el);
    },

    /**
     * 图表渲染
     * @param data
     *
     */
    
    render: function (data) {
      this.myChart === null && (this.myChart = echarts.init(this.el)); // 数据装载
      // 图标渲染

      this.myChart.setOption(this.option);
    }
  });
  module.exports = ChartBar;
});