define(function (require, exports, module) {

  var closeWebPage = function () {
    if (navigator.userAgent.indexOf("MSIE") > 0) {//close IE
      if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
        window.opener = null;
        window.close();
      } else {
        window.open('', '_top');
        window.top.close();
      }
    }
    else if (navigator.userAgent.indexOf("Firefox") > 0) {//close firefox
      window.location.href = 'about:blank';
    } else {//close chrome;It is effective when it is only one.
      window.opener = null;
      window.open('', '_self');
      window.close();
    }
  };

  module.exports = {
    closeWebPage: closeWebPage
  }
});
