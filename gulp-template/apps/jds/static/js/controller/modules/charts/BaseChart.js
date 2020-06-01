define(function (require, exports, module) {
  require("sJI");

  var BaseChart = Class.extend({
    init: function (el) {
      this.el = el;
      this.myChart = null;

      this.autoSize = function (px) {
        var wi_ = window.innerWidth < 1220 ? 1220 : window.innerWidth;
        var times = wi_ / 1920;
        return Number(px) * times;
      };
    }
  });
  module.exports = BaseChart;
});