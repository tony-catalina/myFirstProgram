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
      this.cradius = this.gc.canvas.width * 0.02;
      this.angleSmall = 0;
      radiusR = radiusR || 0.45;
      this.orbitRadius = this.ctx.canvas.width * radiusR;
      this.mark = 0;
    },
    update: function () {
      this.angle += this.gc.step * 0.2;
      this.opacity -= 0.01;
      this.color += 0.2;
      (this.cradius > 4) && (this.cradius -= 0.1);
      if (this.opacity < 0) this.destroy();

      this.mark++;
      (this.mark > 10) && (this.angleSmall += 120);
    },
    render: function () {
      this.ctx.fillStyle = this.ctx.strokeStyle = "hsla(" + this.color + ", 100%, 60%, " + this.opacity + ")";
      this.x = this.ctx.canvas.width * .5 + this.orbitRadius * Math.cos(this.gc.UC.toRad(this.angle)) + (this.mark * 0.04) * Math.cos(this.gc.UC.toRad(this.angleSmall));
      this.y = this.ctx.canvas.height * .5 + this.orbitRadius * Math.sin(this.gc.UC.toRad(this.angle)) + (this.mark * 0.04) * Math.sin(this.gc.UC.toRad(this.angleSmall));
      this.ctx.beginPath();
      this.ctx.arc(
        this.x,
        this.y,
        this.cradius,
        0, Math.PI * 2);
      this.ctx.fill();
    },
    destroy: function () {
      this.gc.caseArr = _.without(this.gc.caseArr, this);
    }
  });
  module.exports = Circle;
});
