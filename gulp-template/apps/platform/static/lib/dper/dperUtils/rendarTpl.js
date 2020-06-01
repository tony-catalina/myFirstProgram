define(function (require, exports, module) {

  /**
   * 模板渲染
   * @param els_      模板
   * @param obj       渲染对象
   * @return {*}
   */
  var rendarTpl = function (obj, els_, key) {
    // 模板替换
    var rendar = function (obj, key) {
      var obkeys = [];
      for (var k in obj) {
        obkeys.push(k);
      }
      if (typeof obj !== "object" || obkeys.length < 1) {
        if (typeof obj === "string" ? obj.trim() === '' : (typeof obj === "undefined" || obj === null)) {
          obj = "--";
        }
        while (!(els_.indexOf('{{' + key + '}}') === -1)) {
          els_ = els_.replace('{{' + key + '}}', obj);
        }
      } else {
        for (var i = 0; i < obkeys.length; i++) {
          rendar(obj[obkeys[i]], obkeys[i]);
        }
      }
    }
    rendar(obj, key);
    return els_;
  }
  module.exports = rendarTpl;
});
