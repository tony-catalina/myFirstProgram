define(function (require, exports, module) {
  Array.prototype.max = function () {
    var max = this[0];
    this.forEach(function (v, i) {
      if (v > max) {
        max = v;
      }
    });
    return max;
  };
  var Util = function () {
    this.maxIdx = 0;
  };
  Util.prototype = {
    constructor: Util,
    // 获取最大层级
    getMaxZIndex: function () {
      var all_el = document.querySelector('body').querySelectorAll('*');
      var index_arr = [];
      for (var i = 0; i < all_el.length; i++) {
        var el_ = all_el[i];
        var z = window.getComputedStyle(el_, null).zIndex;
        if (z !== 'auto') {
          index_arr.push(Number(z));
        }
      }
      this.maxIdx = index_arr.max();
      return this.maxIdx;
    },
    // 事件绑定
    Event: function (el, evn, fn) {
      var tmt;
      if (el) {
        if (el.addEventListener) {
          el.addEventListener(evn, function (e) {
            e = e || event;
            if (el.getAttribute('dper-shadow') === "lock") return;
            clearTimeout(tmt);
            tmt = setTimeout(function () {
              fn && fn(e)
            }, 300);
          }, false);
        }
      }
    },
    // 节点销毁
    destroyEl: function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    },
    // 模板渲染
    renderTpl: function (opt, key, el) {
      var render = function (opt, key) {
        if (typeof opt !== "object" || opt === null) {
          (typeof opt === "string" ? (opt.trim() === "") : (typeof opt === "undefined" || opt === null)) && (opt = "");
          while (el.indexOf('{{' + key + '}}') !== -1) el = el.replace('{{' + key + '}}', opt);
        } else {
          for (var k in opt) {
            if (typeof opt[k] === "function" || (opt[k] instanceof HTMLElement)) continue;
            render(opt[k], k);
          }
        }
      };
      render(opt, key);
      return el;
    },
    // 对象浅合并 obj 合并对象  obj_merged 合并内容
    merge: function (obj, obj_merged) {
      for (var key in obj_merged) {
        obj[key] = obj_merged[key];
      }
      return obj;
    },
    // 拖拽功能
    dragEvent: function (el_title, el_layer) {
      if (el_title && el_layer) {
        el_title.addEventListener("mousedown", function (e) {
          e = e || event;
          var m_e_X = e.clientX - el_layer.offsetLeft;
          var m_e_Y = e.clientY - el_layer.offsetTop;
          el_title.setCapture && (el_title.setCapture());
          document.onmousemove = function (ev) {
            ev = ev || event;
            el_layer.style.left = ev.clientX - m_e_X + "px";
            el_layer.style.top = ev.clientY - m_e_Y + "px";
          };
          document.onmouseup = function () {
            document.onmouseup = document.onmousemove = null;
            el_title.releaseCapture && (el_title.releaseCapture());
          };
        }, false);
      }
    },
    // 计算模块位置至居中
    cptToCenter: function (el_layer) {
      var pst = {
        left: 0,
        top: 0
      };
      if (!el_layer) return pst;
      var win = {
        height: window.innerHeight,
        width: window.innerWidth
      };

      pst.left = (win.width - el_layer.offsetWidth) / 2;
      pst.top = (win.height - el_layer.offsetHeight) / 2;

      if (win.width < el_layer.offsetWidth) pst.left = 0;
      if (win.height < el_layer.offsetHeight) pst.top = 0;

      el_layer.style.left = pst.left + "px";
      el_layer.style.top = pst.top + "px";
      return pst;
    }
  };
  Util = new Util();
  var DperLayer = function () {
    if (!(this instanceof DperLayer)) return new DperLayer();

    /**
     * 默认配置
     * @type {
     * {
     * 标题
     * title: string,
     * 主内容（选填）
     * content: string,
     * 动画类型（选填）
     * animation: string,
     * 动画渲染类型（选填）
     * animationTiming: string,
     * 是否启用拖拽（选填）
     * drag: boolean,
     * 主内容 接口获取（选填）
     * url: string,
     * 主内容渲染后（选填）
     * created: null,
     * 弹窗销毁前（选填）
     * beforeDestroy: null,
     * 弹窗销毁后（选填）
     * destroyed: null,
     * 弹窗依附容器 （选填）默认body
     * parentNode: null
     *
     * 点击遮罩关闭弹窗 （选填）默认true
     * closeByShadow: true
     *
     * id: string,
     * elIndex: number
     * }
     * }
     */
    this.opt = {
      id: "",
      title: "",
      content: "",
      animation: "zoomIn",
      animationTiming: "cubic-bezier(0.42, 0, 0.18, 1.26)",
      drag: true,
      url: "",
      created: null,
      beforeDestroy: null,
      destroyed: null,
      parentNode: null,
      closeByShadow: true,
      elIndex: -1
    };

    // 弹窗实例
    this.layer = null;
    // 弹窗基础模板
    this.layer_tpl = '' +
      '<div class="dperLayer {{animation}}" id="{{id}}" style="z-index: {{elIndex}};" >\n' +
      '            <div class="dperLayer-view" style="animation-timing-function: {{animationTiming}};" >\n' +
      '                <div class="dperLayer-header">\n' +
      '                    <span class="dperLayer-title font-20">{{title}}</span>\n' +
      '                    <div class="dperLayer-icon-view">\n' +
      '                        <i class="dperLayer-icon dperLayer-icon-close"></i>\n' +
      '                    </div>\n' +
      '                </div>\n' +
      '                <div class="dperLayer-content">\n' +
      '{{content}}'
    '                </div>\n' +
    '                <div class="dperLayer-footer">\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>';

    // 遮罩实例
    this.shadow = null;

    // body
    this.el_body = document.querySelector('body');

    // 标记
    this.mark = {
      // 首次加载
      loadFirst: false
    };
  };
  DperLayer.prototype = {
    constructor: DperLayer,
    init: function () {
      if (!this.mark.loadFirst) {
        this.addStyle();
        this.buildShadow();
      }
    },
    // 调起弹窗
    open: function (opt) {
      var _self = this;
      _self.init();
      _self.showShadow();
      Util.merge(_self.opt, opt);
      // 解析配置动画
      _self.resolveAmt(_self.opt.animation);
      // 渲染前配置调整
      _self.opt.id = "dperLayer-" + (Math.random() * 10000000).toFixed(0);
      _self.opt.elIndex = Util.getMaxZIndex() + 100;
      // 弹窗渲染
      if (_self.opt.url) {
        $.get(_self.opt.url, function (content) {
          endTran(content);
        });
      } else {
        endTran();
      }

      function endTran(content) {
        if (_self.opt.parentNode) {
          var el_shadow = document.querySelector('div[dper-shadow]');
          _self.el_body = _self.opt.parentNode;
          _self.el_body.insertAdjacentElement("beforeend", el_shadow.cloneNode(true));
          Util.destroyEl(el_shadow);
          _self.shadow = _self.el_body.querySelector('div[dper-shadow]');
          Util.Event(_self.shadow, "click", function (e) {
            _self.close();
          });
        }
        _self.el_body.insertAdjacentHTML("beforeend", Util.renderTpl(_self.opt, "opt", _self.layer_tpl));
        // 获取弹窗
        _self.layer = document.querySelector('#' + _self.opt.id);
        // 添加获取的页面
        // _self.layer.querySelector('.dperLayer-content').insertAdjacentHTML("afterbegin", content);
        if (content) {
          try {
            $(_self.layer.querySelector('.dperLayer-content')).html(content);
          } catch (e) {
            console.error(e);
          }
        }
        // 居中
        Util.cptToCenter(_self.layer);
        // 拖拽
        if (_self.opt.drag) Util.dragEvent(_self.layer.querySelector('.dperLayer-header'), _self.layer);
        // 自适应剧中
        _self.resize(_self.layer);
        // 关闭按钮事件添加
        Util.Event(_self.layer.querySelector('.dperLayer-icon'), "click", function () {
          _self.close();
        });
        // 是否启用点击遮罩关闭弹窗
        if (!_self.opt.closeByShadow) {
          _self.shadow && _self.shadow.setAttribute("dper-shadow", "lock");
        }
        // 渲染成功回调
        _self.opt.created && (_self.opt.created(_self.layer.querySelector('.dperLayer-content'), _self));
      }
    },
    // 关闭弹窗
    close: function () {
      var _self = this;
      if (_self.opt.beforeDestroy) {
        if (_self.opt.beforeDestroy() === false) {
          return;
        }
      }
      this.hideShadow();
      this.layer.className += " " + this.opt.hideAnimation;
      setTimeout(function () {
        Util.destroyEl(_self.layer);
        _self.shadow && _self.shadow.setAttribute("dper-shadow", "unlock");
        _self.opt.destroyed && (_self.opt.destroyed());
      }, 500);
    },
    // 样式添加
    addStyle: function () {
      var syls = document.querySelectorAll('style'), hasCss = false;
      for (var i = 0; i < syls.length; i++) {
        var s_ = syls[i];
        if (s_.getAttribute("plugin-name") === "dperLayer") hasCss = true;
      }
      if (!hasCss) {
        document.querySelector('head').insertAdjacentHTML("beforeend", this.plg_css());
        this.mark.loadFirst = true;
      }
    },
    // 插件样式集合
    plg_css: function () {
      return '<style type="text/css" plugin-name="dperLayer" >' +
        '.dperLayer {\n' +
        '  position: fixed;\n' +
        '  z-index: -1;\n' +
        '  width: 30%;\n' +
        '  padding-top: 20%;\n' +
        '}\n' +
        '.dperLayer .dperLayer-view {\n' +
        '  position: absolute;\n' +
        '  width: 100%;\n' +
        '  height: 100%;\n' +
        '  left: 0;\n' +
        '  top: 0;\n' +
        '  -webkit-box-sizing: border-box;\n' +
        '  -moz-box-sizing: border-box;\n' +
        '  box-sizing: border-box;\n' +
        '  border: 1px solid #0d92fa;\n' +
        '  border-radius: 4px;\n' +
        '  background-color: #050c18;\n' +
        '  background-repeat: no-repeat;\n' +
        '  background-position: center;\n' +
        '  background-position: center center;\n' +
        '  background-size: cover;\n' +
        '}\n' +
        '\n' +
        '.dperLayer-amt-show-zoomIn .dperLayer-view{\n' +
        '  animation: dperZoomInShow .2s 1 both ease-in-out;\n' +
        '}\n' +
        '.dperLayer-amt-hide-zoomIn .dperLayer-view{\n' +
        '  animation: dperZoomInHide .5s 1 both ease-in-out;\n' +
        '}\n' +
        '.dperLayer-amt-show-fadeInDown .dperLayer-view{\n' +
        '  animation: dperfadeInDownShow .2s 1 both ease-in-out;\n' +
        '}\n' +
        '.dperLayer-amt-hide-fadeInDown .dperLayer-view{\n' +
        '  animation: dperfadeInDownHide .5s 1 both ease-in-out;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.dperLayer-icon-close {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9UlEQVRoQ92aO68NURSAvyVRiaiIhHiEQkLpesV1I/EDtBoSCZWoSBREoaOkoBIKpSh14hHvTiUUxOsmFBKN5GLJcvcc45yZM/s5HFOcm5MzZ+b77tp7rX3WHsEdqroD2A8cBBYCX4AbwAkReV+d1+dfVV0GHACOAKuAH8BT4LSI3DQWsRdVPQRcqt4PQX4AdovI857h1wG3gRUN91XgqIhcEFXdAjxsga++OwtMi8jLPiRUdQ1wF1g55n4mscsErgH7PMB6kfCEr3Cvm8CbDtO6W1GJQHjj+mQCn4ElHhEoOpwi4I3nqwk8BqYCBOzUrJGIhDeOZyZwHDgbKJBNIgHeGE6ZwCKXhTZFSmwXkVcR37X07ZNt2i5taX2qqgNLgTvAhgiQty7FBkkkwls6t7Q++0vAFbPeJHLBDypxnxI54UcESkciN3yjQE3iPrA+15woAd8q4CSWu/VIskQp+LECuSRcBLsWZm2BHmSbthMGWajtBFVNjcR3YHXEUOyE74xALTulSESw4wXvLZBhOIVIeMMHCfQkEQQfLFBY4jWwzZYHIeHqnMRNF0uc2E2XNPidImLrqqAjSiBzJKLho4ZQ/d/jImENgZg0aZdKgs8lYEUqplr/XYGM8yApClFzICN8NSKjJYIFCsAnSQQJFISPlvAW6AE+SsJLoEf4uoRXVe4USIS3yjoHrA0qr/Mne62LxgpkgJ8GvgH3Iotdp0SrQA74quGlqtYmLyLRKJATvvajqIjEiEAJ+CGJBwHt/PrUaRxOfwiUhK9JpPRDRySGW4tZe0FtmSdnm2Xym7uuvf4I2BiRq6M605mG03x7XVWPAeci4O23a/TeQCaJkybwBNgcKPBPbTFN8ibf3KRvs378Lza6twKW/xeMmQdZx3zXfHN1wiq29WRbywkwU9WBw8DFMQ97zIjIi64b5/xcVa3Tcatl2fH7YY9aOtsDnAHs4Q+LxjvgPHBVROyJld4Pt7SxPey9wGLAWvWXgSsiYqtbfgI0e9Fkfmb3rAAAAABJRU5ErkJggg==");}\n' +
        '.dperLayer .dperLayer-view .dperLayer-header {\n' +
        '  position: relative;\n' +
        '  height: 10%;\n' +
        '  background-color: #050c18;\n' +
        '  color: #fff;\n' +
        '  cursor: all-scroll;\n' +
        '}\n' +
        '.dperLayer .dperLayer-view .dperLayer-header .dperLayer-title {\n' +
        '  position: absolute;\n' +
        '  left: 0;\n' +
        '  top: 50%;\n' +
        '  width: 100%;\n' +
        '  padding-left: 5%;\n' +
        '  padding-right: 5%;\n' +
        '  overflow: hidden;\n' +
        '  -webkit-box-sizing: border-box;\n' +
        '  -moz-box-sizing: border-box;\n' +
        '  box-sizing: border-box;\n' +
        '  text-align: center;\n' +
        '  -webkit-transform: translateY(-50%);\n' +
        '  -moz-transform: translateY(-50%);\n' +
        '  -ms-transform: translateY(-50%);\n' +
        '  -o-transform: translateY(-50%);\n' +
        '  transform: translateY(-50%);\n' +
        '  text-overflow: ellipsis;\n' +
        '  white-space: nowrap;\n' +
        '}\n' +
        '.dperLayer .dperLayer-view .dperLayer-header .dperLayer-icon-view {\n' +
        '  position: absolute;\n' +
        '  right: 1%;\n' +
        '  top: 50%;\n' +
        '  -webkit-transform: translate(-50%, -50%);\n' +
        '  -moz-transform: translate(-50%, -50%);\n' +
        '  -ms-transform: translate(-50%, -50%);\n' +
        '  -o-transform: translate(-50%, -50%);\n' +
        '  transform: translate(-50%, -50%);\n' +
        '  width: 2.1%;\n' +
        '  padding-top: 2.1%;\n' +
        '}\n' +
        '.dperLayer .dperLayer-view .dperLayer-header .dperLayer-icon-view .dperLayer-icon {\n' +
        '  position: absolute;\n' +
        '  left: 0;\n' +
        '  top: 0;\n' +
        '  display: block;\n' +
        '  width: 100%;\n' +
        '  height: 100%;\n' +
        '  background-repeat: no-repeat;\n' +
        '  background-position: center;\n' +
        '  background-position: center center;\n' +
        '  background-size: contain;\n' +
        '  cursor: pointer;\n' +
        '  -webkit-transition: transform .2s ease-in-out;\n' +
        '  -moz-transition: transform .2s ease-in-out;\n' +
        '  -ms-transition: transform .2s ease-in-out;\n' +
        '  -o-transition: transform .2s ease-in-out;\n' +
        '  transition: transform .2s ease-in-out;\n' +
        '}\n' +
        '.dperLayer .dperLayer-view .dperLayer-header .dperLayer-icon-view .dperLayer-icon:active {\n' +
        '  -webkit-transform: scale(.8);\n' +
        '  -moz-transform: scale(.8);\n' +
        '  -ms-transform: scale(.8);\n' +
        '  -o-transform: scale(.8);\n' +
        '  transform: scale(.8);\n' +
        '}\n' +
        '.dperLayer .dperLayer-view .dperLayer-content {\n' +
        '  position: relative;\n' +
        '  height: 90%;\n' +
        '  overflow: hidden;\n' +
        '}\n' +
        '.dperLayerShadow {\n' +
        '  position: fixed;\n' +
        '  left: 0;\n' +
        '  top: 0;\n' +
        '  z-index: -1;\n' +
        '  width: 100%;\n' +
        '  height: 100%;\n' +
        '  overflow: hidden;\n' +
        '  -webkit-transition: opacity .2s ease-in-out, z-index .2s ease-in-out;\n' +
        '  -moz-transition: opacity .2s ease-in-out, z-index .2s ease-in-out;\n' +
        '  -ms-transition: opacity .2s ease-in-out, z-index .2s ease-in-out;\n' +
        '  -o-transition: opacity .2s ease-in-out, z-index .2s ease-in-out;\n' +
        '  transition: opacity .2s ease-in-out, z-index .2s ease-in-out;\n' +
        '  opacity: 0;\n' +
        '  background-color: rgba(0, 0, 0, 0.4);\n' +
        '}\n' +
        '\n' +
        '@keyframes dperZoomInShow {\n' +
        '  from {\n' +
        '    opacity: .5;\n' +
        '    -webkit-transform: scale(.8);\n' +
        '    -moz-transform: scale(.8);\n' +
        '    -ms-transform: scale(.8);\n' +
        '    -o-transform: scale(.8);\n' +
        '    transform: scale(.8);\n' +
        '  }\n' +
        '  to {\n' +
        '    opacity: 1;\n' +
        '    -webkit-transform: scale(1);\n' +
        '    -moz-transform: scale(1);\n' +
        '    -ms-transform: scale(1);\n' +
        '    -o-transform: scale(1);\n' +
        '    transform: scale(1);\n' +
        '  }\n' +
        '}\n' +
        '@keyframes dperZoomInHide {\n' +
        '  from {\n' +
        '    opacity: 1;\n' +
        '    -webkit-transform: scale(1);\n' +
        '    -moz-transform: scale(1);\n' +
        '    -ms-transform: scale(1);\n' +
        '    -o-transform: scale(1);\n' +
        '    transform: scale(1);\n' +
        '  }\n' +
        '  to {\n' +
        '    opacity: 0;\n' +
        '    -webkit-transform: scale(.8);\n' +
        '    -moz-transform: scale(.8);\n' +
        '    -ms-transform: scale(.8);\n' +
        '    -o-transform: scale(.8);\n' +
        '    transform: scale(.8);\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '@keyframes dperfadeInDownShow {\n' +
        '  from {\n' +
        '    opacity: .5;\n' +
        '    -webkit-transform: translateY(100px);\n' +
        '    -moz-transform: translateY(-00px);\n' +
        '    -ms-transform: translateY(100px);\n' +
        '    -o-transform: translateY(100px);\n' +
        '    transform: translateY(100px);\n' +
        '  }\n' +
        '  to {\n' +
        '    opacity: 1;\n' +
        '    -webkit-transform: translateY(0);\n' +
        '    -moz-transform: translateY(0);\n' +
        '    -ms-transform: translateY(0);\n' +
        '    -o-transform: translateY(0);\n' +
        '    transform: translateY(0);\n' +
        '  }\n' +
        '}\n' +
        '@keyframes dperfadeInDownHide {\n' +
        '  from {\n' +
        '    opacity: 1;\n' +
        '    -webkit-transform: translateY(0);\n' +
        '    -moz-transform: translateY(0);\n' +
        '    -ms-transform: translateY(0);\n' +
        '    -o-transform: translateY(0);\n' +
        '    transform: translateY(0);\n' +
        '  }\n' +
        '  to {\n' +
        '    opacity: 0;\n' +
        '    -webkit-transform: translateY(100px);\n' +
        '    -moz-transform: translateY(100px);\n' +
        '    -ms-transform: translateY(100px);\n' +
        '    -o-transform: translateY(100px);\n' +
        '    transform: translateY(100px);\n' +
        '  }\n' +
        '}' +
        '</style>';
    },
    // 遮罩生成处理
    createShadowHandle: function (create) {
      var el_shadow = document.querySelector('div[dper-shadow]');
      if (this.opt.parentNode) {
        el_shadow = this.opt.parentNode.querySelector('div[dper-shadow]');
      }
      if (!el_shadow) {
        create && create(this);
      }
    },
    // 遮罩过渡处理
    tranShadowHandle: function (create) {
      var el_shadow = document.querySelector('div[dper-shadow]');
      if (this.opt.parentNode) {
        el_shadow = this.opt.parentNode.querySelector('div[dper-shadow]');
      }
      if (el_shadow) {
        create && create(this);
      }
    },
    // 遮罩建立
    buildShadow: function () {
      this.createShadowHandle(function (_self) {
        _self.shadow = document.createElement('div');
        _self.shadow.setAttribute("dper-shadow", "unlock");
        _self.shadow.className += "dperLayerShadow";
        document.querySelector('body').appendChild(_self.shadow);
        Util.Event(_self.shadow, "click", function (e) {
          _self.close();
        });
      });
    },
    // 显示遮罩
    showShadow: function () {
      this.tranShadowHandle(function (_self) {
        _self.shadow.style.zIndex = Util.getMaxZIndex();
        _self.shadow.style.opacity = 1;
      });
    },
    // 隐藏遮罩
    hideShadow: function () {
      this.tranShadowHandle(function (_self) {
        _self.shadow.style.zIndex = -1;
        _self.shadow.style.opacity = 0;
      });
    },
    // 解析动画类
    resolveAmt: function (type) {
      var _self = this;
      type = type.toUpperCase();
      switch (type) {
        case "ZOOMIN":
          _self.opt.animation = "dperLayer-amt-show-zoomIn";
          _self.opt.hideAnimation = "dperLayer-amt-hide-zoomIn";
          break;
        case "FADEINDOWN":
          _self.opt.animation = "dperLayer-amt-show-fadeInDown";
          _self.opt.hideAnimation = "dperLayer-amt-hide-fadeInDown";
          break;
        default:
          _self.opt.animation = "dperLayer-amt-show-zoomIn";
          _self.opt.hideAnimation = "dperLayer-amt-hide-zoomIn";
      }
    },
    // 变化
    resize: function (el) {
      document.querySelector('body').onresize = function () {
        Util.cptToCenter(el)
      };
    }
  };
  window.DperLayer = DperLayer();
  module.exports = window.DperLayer;
});
