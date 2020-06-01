define(function (require, exports, module) {
  var ImgUtil = {
    /**
     * 判断图片是否加载完成
     * @param arr_img   图片连接数组 可以是单个链接
     * @param cb        加载完成回调函数
     * @constructor
     */
    IsLoadImg: function (arr_img, cb) {
      var count = 0;
      (typeof arr_img === "string") && (arr_img = [arr_img]);

      for (var i = 0; i < arr_img.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', arr_img[i]);
        img.onload = function () {
          count++;
          if (count === arr_img.length) {
            cb && cb(true);
          }
        }
        img.onerror = function () {
          cb && cb(false);
        }
      }
    }
  };

  module.exports = ImgUtil;
});
