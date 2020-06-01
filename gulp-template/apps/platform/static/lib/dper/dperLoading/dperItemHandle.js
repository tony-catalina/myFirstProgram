define(function (require, exports, module) {
  require("sJI");
  var ItemHandle = Class.extend({
    init: function (gc) {
      if(!gc) throw new Error("主类必须存在!");
      this.gc = gc;
      gc.caseArr.push(this);
    },
    render: function () {
      throw new Error("渲染函数必须重写!");
    },
    update: function () {

    }
  });

  module.exports = ItemHandle;
});
