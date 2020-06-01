define(function (require, exports, module) {
  require("UnderScore");
  require("sJI");
  var ObjectUtil = require("dperUtils/object");
  var DperLoading = require("utils/dper/dperLoading/dperLoading");

  var DperView = Class.extend({
    init: function (rootEl, opt, cb) {
      this.rootEl = document.querySelector(rootEl);
      if (this.rootEl === null) throw new Error("未匹配到根节点!");
      this.opt = {
        loading_: {
          circle_: {
            // 颜色只针对家在样式1
            color: "#0fc4ff",
            size: 64,
            // 加载样式: 0 默认  1 canvas-炫彩
            type: 2
          },
          text_: {
            color: "#0fc4ff",
            fontSize: 14
          }
        },
        tip_: {
          color: '#fff',
          fontSize: 14
        }
      };
      this.views = {};


      if (typeof opt === "function") cb = opt;
      else this.opt = ObjectUtil.mergeObjDeep(this.opt, opt);

      this.initEls(function (app) {
        cb && cb(app);
      });
    },
    initEls: function (cb) {
      // 添加插件样式
      this.addSylToHead();
      // 标签转换
      this.resolveEl(function (app) {
        cb && cb(app);
      });
    },
    /**
     * 状态管理
     * @param v 视图ID
     * @param type 0: 异常, 1: 加载中 2: 加载完成
     * @param err_txt 异常内容
     */
    state: function (v, type, err_txt) {
      if (type != '0' && type != '1' && type != '2') {
        console.error("状态码错误: 0: 异常, 1: 加载中 2: 加载完成");
        return;
      }
      if (!this.views[v]) {
        console.error("不存在此ID " + v + " 对应模型!");
        return;
      }
      type = Number(type);
      switch (type) {
        case 0:
          sh(this.views[v].loading_, 0);
          sh(this.views[v].tip_, 1);
          sh(this.views[v].vct_.parentNode, 0);
          this.views[v].tip_.innerHTML = err_txt;
          this.views[v].loading_.querySelector('.ry-icon').innerHTML = "";
          break;
        case 1:
          sh(this.views[v].loading_, 1);
          sh(this.views[v].tip_, 0);
          sh(this.views[v].vct_.parentNode, 0);
          if (this.opt.loading_.circle_.type !== 0) new DperLoading(this.views[v].loading_.querySelector('.ry-icon'), {amt: this.opt.loading_.circle_.type});
          break;
        case 2:
          sh(this.views[v].loading_, 0);
          sh(this.views[v].tip_, 0);
          sh(this.views[v].vct_.parentNode, 1);
          this.views[v].loading_.querySelector('.ry-icon').innerHTML = "";
          break;
      }

      // 显示/隐藏 1/0
      function sh(el, type) {
        if (type === 0) {
          el.className = el.className.replace(" dper-vhide", "") + " dper-vhide";
        } else {
          el.className = el.className.replace(" dper-vhide", "")
        }
      }
    },
    /**
     * 获取主视图
     * @param v 视图ID
     */
    getView: function (v) {
      return this.views[v].vct_;
    },
    // 添加插件样式
    addSylToHead: function () {
      var syls = document.querySelectorAll("style"), appended = false;
      _.each(syls, function (el) {
        if (el.getAttribute("dper-plugin") === "dper-view") appended = true;
      });
      if (appended) return false;

      // 样式添加
      var lab_style = document.createElement('style');
      lab_style.setAttribute("type", "text/css");
      lab_style.setAttribute("dper-plugin", "dper-view");
      lab_style.innerHTML = this.css_();
      document.querySelector("head").appendChild(lab_style);
    },
    // 标签转换
    resolveEl: function (cb) {
      var _self = this;
      var els = [];
      var target_els = [];
      // 获取所有节点
      els = this.rootEl.querySelectorAll("[dper-v]");
      _.each(els, function (el) {
        target_els.push(el);
      });

      _.each(target_els, function (itm) {
        if (!itm.hasAttribute('id')) throw new Error("被dper-v标注的标签必须包含ID");
        if (itm.className.indexOf("dper-relative") !== -1) return false;

        var cnodes;
        itm.className += " dper-relative";
        // 保留主内容
        if (itm.hasChildNodes()) cnodes = itm.cloneNode(true);
        // 清空视图中的节点
        itm.innerHTML = "";
        // 新增视图 - 加载动画
        _self.view.appendView(itm, null, _self.view.loading_());
        // 新增视图 - 主内容
        _self.view.appendView(itm, null, _self.view.vct());
        // 新增视图 - 提示
        _self.view.appendView(itm, null, _self.view.tip_());
        // 还原主内容
        if (cnodes) {
          var els = [];
          var target_el = itm.querySelector('.dper-vct');
          _.each(cnodes.children, function (cnode) {
            els.push(cnode);
          });
          _.each(els, function (itm) {
            target_el.appendChild(itm);
          });
        }
        // 状态管理数据注入
        _self.views[itm.getAttribute('id')] = {
          loading_: itm.querySelector('.dper-loading'),
          tip_: itm.querySelector('.dper-tip'),
          vct_: itm.querySelector('.dper-vct')
        };

        // 加载样式处理
        setTimeout(function () {
          itm.querySelector('.dper-loading .ry-icon').style.width = _self.opt.loading_.circle_.size + "px";
          itm.querySelector('.dper-loading .ry-icon').style.height = _self.opt.loading_.circle_.size + "px";
          if (_self.opt.loading_.circle_.type !== 0) new DperLoading(itm.querySelector('.dper-loading .ry-icon'), {amt: _self.opt.loading_.circle_.type});
        });
      });
      this.rootEl.style.display = "block";
      cb && cb(this);
    },
    // 刷新插件控制阈
    refresh: function () {
      this.initEls();
    },
    // 视图
    view: {
      /**
       * 添加视图
       * @param dom 节点
       * @param pst 位置
       */
      appendView: function (dom, pst, els) {
        !pst && (pst = "beforeend");
        dom.insertAdjacentHTML(pst, els)
      },
      loading_: function () {
        return "" +
          "                            <!-- 加载动画 -->\n" +
          "                            <div class=\"dper-loading\">\n" +
          "                                <div class=\"ry-icon\">\n" +
          "                                    <span class=\"scale-fir\"></span>\n" +
          "                                    <span class=\"scale-sed\"></span>\n" +
          "                                </div>\n" +
          "                                <div class=\"ry-text\">加载中...</div>\n" +
          "                            </div>";
      },
      vct: function () {
        return "" +
          "\n" +
          "                            <!-- 内容 -->\n" +
          // "                            <div class=\"dper-v\">\n" +
          "                            <div class=\"dper-v dper-vhide\">\n" +
          "                                <div class=\"dper-vct\">\n" +
          "\n" +
          "                                </div>\n" +
          "                            </div>";
      },
      tip_: function () {
        return "" +
          "\n" +
          "                            <!-- 提示 -->\n" +
          "                            <p class=\"dper-tip dper-vhide\"></p>";
      }
    },
    // css
    css_: function () {
      return "" +
        "" +
        // 加载动画
        ".dper-loading {\n" +
        "    position: absolute;\n" +
        "    left: 50%;\n" +
        "    top: 50%;\n" +
        "    -webkit-transform: translate(-50%, -50%);\n" +
        "    -moz-transform: translate(-50%, -50%);\n" +
        "    -ms-transform: translate(-50%, -50%);\n" +
        "    -o-transform: translate(-50%, -50%);\n" +
        "    transform: translate(-50%, -50%);\n" +
        "    text-align: center;\n" +
        "    font-size: 14px;\n" +
        "    -webkit-transition: all .2s ease-in-out;\n" +
        "    -moz-transition: all .2s ease-in-out;\n" +
        "    -ms-transition: all .2s ease-in-out;\n" +
        "    -o-transition: all .2s ease-in-out;\n" +
        "    transition: all .2s ease-in-out;" +
        "}\n" +
        "\n" +
        ".dper-loading .ry-icon {\n" +
        "    position: relative;\n" +
        "    display: inline-block;\n" +
        "    width: 40px;\n" +
        "    height: 40px;\n" +
        "}\n" +
        "\n" +
        ".dper-loading .ry-icon .scale-fir,\n" +
        ".dper-loading .ry-icon .scale-sed {\n" +
        "    position: absolute;\n" +
        "    left: 0;\n" +
        "    top: 0;\n" +
        "    display: block;\n" +
        "    width: 100%;\n" +
        "    height: 100%;\n" +
        "    -webkit-border-radius: 100%;\n" +
        "    -moz-border-radius: 100%;\n" +
        "    border-radius: 100%;\n" +
        "    border: 1px solid " + this.opt.loading_.circle_.color + ";\n" +
        "    -webkit-animation: loadingScale 2s infinite linear backwards;\n" +
        "    -o-animation: loadingScale 2s infinite linear backwards;\n" +
        "    animation: loadingScale 2s infinite linear backwards;\n" +
        "}\n" +
        "\n" +
        ".dper-loading .ry-icon .scale-sed {\n" +
        "    animation-delay: 1s;\n" +
        "}\n" +
        "\n" +
        "@keyframes loadingScale {\n" +
        "    0% {\n" +
        "        opacity: .5;\n" +
        "        transform: scale(0);\n" +
        "    }\n" +
        "    80% {\n" +
        "        opacity: 1;\n" +
        "        transform: scale(1);\n" +
        "    }\n" +
        "    100% {\n" +
        "        opacity: 0;\n" +
        "        transform: scale(1.1);\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "@-webkit-keyframes loadingScale {\n" +
        "    0% {\n" +
        "        opacity: .5;\n" +
        "        transform: scale(0);\n" +
        "    }\n" +
        "    80% {\n" +
        "        opacity: 1;\n" +
        "        transform: scale(1);\n" +
        "    }\n" +
        "    100% {\n" +
        "        opacity: 0;\n" +
        "        transform: scale(1.1);\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        ".dper-loading .ry-text {\n" +
        "    margin-top: 12px;\n" +
        "    color: #0fc4ff;\n" +
        "}" +
        ".dper-loading .ry-text {\n" +
        "    margin-top: 12px;\n" +
        "    color: " + this.opt.loading_.text_.color + ";\n" +
        "}" +
        // 提示
        "" +
        "\n" +
        ".dper-tip{\n" +
        "  position: absolute;\n" +
        "  top: 50%;\n" +
        "  left: 0;\n" +
        "  width: 100%;\n" +
        "  padding-left: 8px;\n" +
        "  padding-right: 8px;\n" +
        "  text-align: center;\n" +
        "  color: " + this.opt.tip_.color + ";\n" +
        "  font-size: " + this.opt.tip_.fontSize + "px;\n" +
        "  transform: translateY(-50%);\n" +
        "  -webkit-box-sizing: border-box;\n" +
        "  -moz-box-sizing: border-box;\n" +
        "  box-sizing: border-box;\n" +
        "    -webkit-transition: all .2s ease-in-out;\n" +
        "    -moz-transition: all .2s ease-in-out;\n" +
        "    -ms-transition: all .2s ease-in-out;\n" +
        "    -o-transition: all .2s ease-in-out;\n" +
        "    transition: all .2s ease-in-out;" +
        "}" +
        // 内容
        "" +
        ".dper-v {\n" +
        "  position: absolute;\n" +
        "  left: 0;\n" +
        "  top: 0;\n" +
        "  width: 100%;\n" +
        "  height: 100%;\n" +
        "    -webkit-transition: all .2s ease-in-out;\n" +
        "    -moz-transition: all .2s ease-in-out;\n" +
        "    -ms-transition: all .2s ease-in-out;\n" +
        "    -o-transition: all .2s ease-in-out;\n" +
        "    transition: all .2s ease-in-out;" +
        "}\n" +
        ".dper-v > .dper-vct {\n" +
        "  width: 100%;\n" +
        "  height: 100%;\n" +
        "}" +
        // 相对定位
        "" +
        ".dper-relative {" +
        "   position: relative;" +
        "}" +
        // 影藏
        ".dper-vhide {" +
        "   opacity: 0;" +
        "}" +
        "";
    }
  });


  var DperV = {
    version: "1.0.0",
    load: function (rootId, opt, cb) {
      return new DperView(rootId, opt, cb);
    }
  };
  module.exports = DperV;
});

