define(function (require, exports, module) {

  var dperAjax = require("dperAjax");                 // 接口数据请求工具
  var config = require("app_config");                 // 项目配置

  /**
   * 快码
   * @desc 更便捷的页面逻辑处理方式
   * @param el
   * @param opt
   *        opt: {
                App: undefined,         视图解决方案实例
                desc: undefined,        模块描述
                url: undefined,         模块接口地址
                cb: undefined,          数据请求成功回调函数
                data: undefined,        请求参数
                type: "GET",            请求方式  默认GET
                useLoading: undefined   是否启用加载动画
   *        }
   */
  var basefn = function (el, opt) {

    if (!(opt.App))
      throw new Error("视图解决方案实例未定义");
    if (!(opt.desc))
      throw new Error("模块描述未定义");
    if (!(opt.url))
      throw new Error("模块接口地址未定义");
    if (!(opt.cb))
      throw new Error("数据请求成功回调函数未定义");

    if ((typeof opt.useLoading === "undefined") ? true : opt.useLoading) {
      opt.App.state(el, 1);
    }
    dperAjax(opt.desc, opt.url, {
      data: opt.data,
      type: opt.type || "GET",
      successfn: function (resp) {
        typeof opt.cb(resp, el) === 'undefined' && (opt.App.state(el, 2));
      },
      completefn: function (state, resp) {
        (!state) && opt.App.state(el, 0, resp[config.ajax.MESSAGE]);
      }
    })
  }
  module.exports = basefn;
});
