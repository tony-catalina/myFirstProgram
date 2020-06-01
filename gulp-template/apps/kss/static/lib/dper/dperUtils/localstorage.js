define(function (require, exports, module) {
  /*********************************************  localStorage工具   ****************************************************/

  /**
   * localstorage 存储对象
   * @param key
   * @param value
   * @returns
   */
  function lsSet(key, value) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
    }
  }

  /**
   * localstorage 取数据
   * @param key    键
   * @returns
   */
  function lsGet(key) {
    if (typeof Storage !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    } else {
      alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
    }
  }

  /**
   * localstorage 删除key对应数据
   * @params key
   * @returns
   */
  function lsRemove(key) {
    if (typeof Storage !== "undefined") {
      localStorage.removeItem(key);
    } else {
      alert("浏览器不支持web存储,请使用其它浏览器浏览！！！");
    }

  }

  module.exports = {
    lsSet: lsSet,
    lsGet: lsGet,
    lsRemove: lsRemove
  }
});
