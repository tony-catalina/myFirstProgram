define(function (require, exports, module) {
  /************************************************  cookie工具   ********************************************************/
  //设置cookie
  function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  }

  //取回cookie
  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=")
      if (c_start !== -1) {
        c_start = c_start + c_name.length + 1;
        var c_end = document.cookie.indexOf(";", c_start)
        if (c_end === -1) c_end = document.cookie.length;
        return decodeURI(document.cookie.substring(c_start, c_end))
      }
    }
    return "";
  }

  module.exports = {
    setCookie: setCookie,
    getCookie: getCookie
  }
});
