define(function (require, exports, module) {
  require("sJI");
  var CanvasUtil = Class.extend({
    init: function () {
    },
    clearCvs: function (ctx) {
      if (!ctx) throw new Error(ctx + " 上下文不存在!");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    toRad: function (deg) {
      deg = Number(deg);
      if (isNaN(deg)) throw new Error(deg + " 不能转换成数字!");
      return deg * (Math.PI / 180);
    },
    toDeg: function (rad) {
      rad = Number(rad);
      if (isNaN(rad)) throw new Error(rad + " 不能转换成数字!");
      return rad * (180 / Math.PI);
    }
  });
  module.exports = CanvasUtil;
});
