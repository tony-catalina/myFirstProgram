define(function (require, exports, module) {
  require("sJI");
  require("UnderScore");
  var ItemHandle = require("./dperItemHandle");
  var Circle = ItemHandle.extend({
    init: function (gc, angle, radiusR) {
      this._super(gc);
      this.ctx = gc.ctx;
      this.angle = angle;
      this.opacity = 1;
      this.color = gc.color;
      this.radius = gc.canvas.width * 0.04;
      radiusR = radiusR || 0.45;
      this.orbitRadius = this.ctx.canvas.width * radiusR;
    },
    update: function () {
      this.angle += this.gc.step * 0.1;
      this.opacity -= 0.03;
      this.color += 0.1;
      if(this.opacity < 0) this.destroy();
    },
    render: function () {
      this.ctx.fillStyle = this.ctx.strokeStyle = "hsla(" + this.color + ", 100%, 60%, " + this.opacity + ")";
      this.ctx.beginPath();
      this.ctx.arc(
        this.ctx.canvas.width * .5 + this.orbitRadius * Math.cos(this.gc.UC.toRad(this.angle)),
        this.ctx.canvas.height * .5 + this.orbitRadius * Math.sin(this.gc.UC.toRad(this.angle)),
        this.radius,
        0, Math.PI * 2);
      this.ctx.fill();
    },
    destroy: function () {
      this.gc.caseArr = _.without(this.gc.caseArr, this);
    }
  });
  module.exports = Circle;
});
