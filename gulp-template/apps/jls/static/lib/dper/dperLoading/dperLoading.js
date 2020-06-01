define(function (require, exports, module) {
  require("UnderScore");
  require("sJI");
  var ObjectUtil = require("dperUtils/object"),
    CanvasUtil = require("dperUtils/canvas"),
    Circle = require("./dperCircle"),
    CirclePipe = require("./dperCirclePipe")
  ;
  var DperLoading = Class.extend({
    init: function (el, opt) {
      this.el = el;
      this.canvas = null;
      this.ctx = null;
      this.FNO = 0;
      this.angle = 0;
      this.color = 0;
      this.step = 4;
      this.radiusP = 0;

      this.caseArr = [];
      this.UC = new CanvasUtil();

      this.opt = {
        amt: "2"
      };

      this.opt = ObjectUtil.mergeObjDeep(this.opt, opt);
      this.initCanvas();
      this.initItem();
      this.start();
    },
    initCanvas: function () {
      var pst = window.getComputedStyle(this.el, null).position;
      if (!(pst === "absolute" || pst === "relative")) this.el.style.position = "relative";
      var canvasSize = this.el.offsetWidth < this.el.offsetHeight ? this.el.offsetWidth : this.el.offsetHeight;
      this.canvas = document.createElement("canvas");
      this.canvas.width = canvasSize;
      this.canvas.height = canvasSize;
      this.canvas.style.position = "absolute";
      this.canvas.style.left = "50%";
      this.canvas.style.top = "50%";
      this.canvas.style.transform = "translate(-50%, -50%)";
      this.ctx = this.canvas.getContext("2d");
      this.el.innerHTML = "";
      this.el.appendChild(this.canvas);
      this.UC.clearCvs(this.ctx);

      // 基础样式设置
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.font = "16px 微软雅黑";
      this.ctx.fillStyle = "#fff";
    },
    initItem: function () {

    },
    start: function () {
      var _self = this;
      _self.UC.clearCvs(this.ctx);
      _self.FNO++;
      _self.color += 1;
      _self["amt" + this.opt.amt]();
      _self.angle += _self.step;
      _.each(_self.caseArr, function (item) {
        item.render();
        item.update();
      });
      requestAnimationFrame(_self.start.bind(_self));
    },
    // 逐渐增加
    amt1: function () {
      var _self = this;
      if (this.FNO < 60) {
        _self.step = 1;
        new Circle(this, _self.angle);
      } else if (this.FNO < 120) {
        _self.step = 1.5;
        new Circle(this, _self.angle);
        new Circle(this, _self.angle - 90);
      } else if (this.FNO < 180) {
        _self.step = 2;
        new Circle(this, _self.angle);
        new Circle(this, _self.angle - 90);
        new Circle(this, _self.angle - 180);
      } else {
        if ((this.FNO / 60) % 2 === 0) {
          _self.step = 2.5;
        } else {
          _self.step = 2;
        }
        new Circle(this, _self.angle);
        new Circle(this, _self.angle - 90);
        new Circle(this, _self.angle - 180);
        new Circle(this, _self.angle - 270);
      }
    },
    // 三个太极
    amt2: function () {
      if (this.radiusP < 0.3) this.radiusP += 0.008;
      this.step = 2;
      new Circle(this, this.angle, this.radiusP);
      new Circle(this, this.angle - 120, this.radiusP);
      new Circle(this, this.angle - 240, this.radiusP);
    },
    // 很酷的不知道叫啥名字
    amt3: function () {
      this.step = 2;
      this.ctx.globalCompositeOperation = "lighter";
      new CirclePipe(this, this.angle);
    }
  });

  module.exports = DperLoading;
});
