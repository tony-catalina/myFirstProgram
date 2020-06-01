define(function (require, exports, module) {
  var $ = require("jquery");
  var config = require("app_config");
  var yer = require("yer");
  /**
   * ajax构造函数
   * @param url_desc  接口描述
   * @param url       接口地址
   * @param options   其他配置参数
   * @return {dperAjax.init}
   */
  var dperAjax = function (url_desc, url, options) {
    return new dperAjax.prototype.init(url_desc, url, options);
  }

  /**
   * ajax原型模式
   * @type {{constructor: dperAjax|*, init: dperAjax.init, ajax: dperAjax.ajax}}
   */
  dperAjax.prototype = {
    constructor: dperAjax,
    /**
     * 初始化
     * @param url_desc  接口描述
     * @param url       接口地址
     * @param options   其他配置参数
     */
    init: function (url_desc, url, options) {

      if (url == '' || url == null || typeof url === 'undefined' || typeof url !== 'string') {
        console.error('the url is error!');
        return;
      }
      if (url_desc == '' || url_desc == null || typeof url_desc === 'undefined') {
        url_desc = '接口';
      }

      this.url_desc = url_desc;
      this.url = url;
      // 模拟接口
      // this.url = BASEURL + "static/assets/json/simdata.json";

      // 请求接口返回数据格式配置
      this.ajaxConfig = config.ajax;

      // 默认配置
      this.options = {
        data: {},
        async: true,
        type: 'GET',
        dataType: 'JSON',
        cache: false,
        contentType: "application/x-www-form-urlencoded",
        successfn: undefined,
        errorfn: undefined,
        completefn: undefined,
        header: {}
      };

      // 请求是否正确
      this.sreq = true;

      // 传入配置继承默认配置
      if (options && typeof options === 'object') {
        for (var key in options) {
          if (this.options.hasOwnProperty(key) && this.options[key] !== null) {
            this.options[key] = options[key];
          }
        }
      }

      // 默认调用方法
      this.ajax();
    },
    /**
     * ajax请求数据
     */
    ajax: function () {
      var _self = this;
      /**
       * 调用jquery-ajax进行数据请求
       */
      $.ajax({
        type: _self.options.type,
        async: _self.options.async,
        data: _self.options.data,
        url: _self.url,
        cache: _self.options.cache,
        dataType: _self.options.dataType,
        contentType: _self.options.contentType,
        header: _self.options.header,
        beforeSend: function (request) {

        },
        success: function (resp) {
          // 转换为JSON格式
          if (typeof resp === "string") {
            resp = JSON.parse(resp);
          }
          // 请求状态 [ 失败 ]  == 》 执行方法
          if (resp[_self.ajaxConfig.STATE.NAME] != _self.ajaxConfig.STATE.SUCVAL) {
            yer('操作失败: </br>&nbsp;&nbsp;&nbsp;&nbsp;[' + _self.url_desc + ']&nbsp;&nbsp;' + resp[_self.ajaxConfig.MESSAGE], 0);
            _self.sreq = false;
            return;
          }
          // 请求状态 [ 成功 ]  == 》 执行方法
          if (_self.options.successfn == undefined) {
            console.error('请求失败: [ ' + _self.url_desc + ' ] 接口 未定义请求成功执行方法~');
            yer('操作失败: </br>&nbsp;&nbsp;&nbsp;&nbsp;[ ' + _self.url_desc + ' ] 接口 未定义请求成功执行方法~', 0);
            return;
          }
          _self.options.successfn(resp);
        },
        complete: function (XMLHttpRequest) {
          var status = XMLHttpRequest.status;
          switch (status) {
            case 0:
              yer('请求失败: </br>&nbsp;&nbsp;&nbsp;&nbsp;请检查网络连接或联系项目开发人员!', 0);
              break;
            case 404:
              yer('请求失败: </br>&nbsp;&nbsp;&nbsp;&nbsp;[' + _self.url_desc + '] 接口不存在!', 0);
              break;
            case 500:
              _self.options.errorfn != undefined ? _self.options.errorfn() : yer("请求失败: </br>&nbsp;&nbsp;&nbsp;&nbsp;[ " + _self.url_desc + " ] 接口 系统异常~", 0);
              break;
            case 504:
              yer("[ " + _self.url_desc + " ] 接口 请求超时~", 5);
              break;
          }
          _self.options.completefn != undefined ? _self.options.completefn(_self.sreq, XMLHttpRequest.responseJSON) : '';
        }
      });
    }
  };
  dperAjax.prototype.init.prototype = dperAjax.prototype;
  module.exports = dperAjax;
});
