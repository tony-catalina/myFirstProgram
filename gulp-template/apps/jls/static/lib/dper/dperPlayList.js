define(function (require, exports, module) {
  var StringUtil = require("dperUtils/string"),   // 字符串工具
    ObjectUtil = require("dperUtils/object"),   // 对象工具
    rendarTpl = require("rendarTpl"),           // 模板渲染工具
    dperAjax = require("dperAjax")              // 接口数据获取工具
  ;

  /**
   * 列表播放
   * @param el 节点
   * @param opt
   *
   *      样例
   * DperPlayList("dper-lispro", {
            // 视图解决方案实例
            App: App,
            // 接口地址
            url: config.interface.demo,
            // 行类名
            row_clsname: ".dper-msg-itm",
            // 行模板
            el_tpl: '<div class="dper-msg-itm dper-box dper-hide-o" style="top: -60px;"></div>',
            // 数据转换函数
            coverData: function (itm) {
                if (itm.errState === 0) {
                    itm.errState = "未处理";
                } else {
                    itm.errState = "已处理";
                }
                return itm;
            }
        });
   */
  var DperPlayList = function (el, opt) {
    if (!(this instanceof DperPlayList)) {
      return new DperPlayList(el, opt);
    }
    var _self = this;
    // 窗口ID
    this.el = el;
    // 窗口Y轴偏移
    this.el_y_s = 0;
    this.el_y = 0;
    // 标记  是否首次加载
    this.loadFirst = true;
    // 信息模板
    // 定时器
    this.inter = {
      // 数据动画插入
      amt: null
    };

    this.opt = {
      App: undefined,
      // 接口地址
      url: "",
      // 每行类名
      row_clsname: "",
      // 刷新时间
      refresh: 5000,
      // 信息模板
      el_tpl: "",
      // 数据处理函数
      coverData: null
    };
    if (opt)
      _self.opt = ObjectUtil.mergeObjDeep(_self.opt, opt);

    if (!(this.opt.App))
      throw new Error("视图解决方案实例未定义");
    if (this.opt.url === null || this.opt.url === "")
      throw new Error("未配置数据接口");
    if (this.opt.url === null || this.opt.url === "")
      throw new Error("未配置数据接口");
    if (this.opt.el_tpl === null || this.opt.el_tpl === "")
      throw new Error("未配置模板");
    if (this.opt.row_clsname === null || this.opt.row_clsname === "")
      throw new Error("未配置每行的类名");

    // 初始化
    this.init();
  }
  DperPlayList.prototype = {
    constructor: DperPlayList,
    init: function () {
      var _self = this;

      _self.eventbind();
      _self.render_DperPlayList();
      setInterval(function () {
        _self.render_DperPlayList();
      }, _self.opt.refresh);
    },
    render_DperPlayList: function () {
      var _self = this;
      // 页面优化
      this.optimizationEls();
      dperAjax("故障处理情况播报", _self.opt.url, {
        data: {},
        successfn: function (resp) {

          // 模拟数据  若接入真是数据  请将其删除
          resp = [
            {
              id: StringUtil.UUID().getUUID(),
              errType: "离线故障",
              errAddress: "青海体育中心52号交流7kW离线",
              errState: 0
            },
            {
              id: StringUtil.UUID().getUUID(),
              errType: "离线故障",
              errAddress: "南小街03号直流A口",
              errState: 0
            },
            {
              id: StringUtil.UUID().getUUID(),
              errType: "连接器故障",
              errAddress: "南小街03号直流B口",
              errState: 0
            },
            {
              id: StringUtil.UUID().getUUID(),
              errType: "连接器故障",
              errAddress: "城中区检察院01号交流7kW",
              errState: 1
            }
          ];

          if (!_self.loadFirst) {
            resp = [
              {
                id: StringUtil.UUID().getUUID(),
                errType: "未知故障",
                errAddress: "位置地址",
                errState: parseInt(Math.random() * 2)
              }
            ]
          }


          // 判断首次加载是否存在数据
          if (resp.length < 1) {
            if (_self.loadFirst) {
              _self.opt.App.state(_self.el, 0, "暂无相关数据哦!");
              return;
            } else {
              return;
            }
          }
          resp = resp.reverse();
          var els_arr = [];
          for (var i = 0; i < resp.length; i++) {
            var itm = resp[i];
            var els_ = _self.opt.el_tpl;
            _self.opt.coverData && (itm = _self.opt.coverData(itm));
            els_ = rendarTpl(itm, els_, 'itm');
            els_arr.push(els_);
          }
          var s_len = els_arr.length;
          clearInterval(_self.inter.amt);
          _self.inter.amt = setInterval(function () {
            _self.opt.App.getView(_self.el).insertAdjacentHTML("afterbegin", els_arr.shift());
            _self.rendarEls();
            if (els_arr.length === 0) {
              clearInterval(_self.inter.amt);
            }
            if ((s_len - els_arr.length) * 1000 > _self.opt.refresh - 1100) {
              for (var m = 0; m < els_arr.length; m++) {
                _self.opt.App.getView(_self.el).insertAdjacentHTML("afterbegin", els_arr[m]);
              }
              _self.rendarEls();
              clearInterval(_self.inter.amt);
            }
          }, 1000);
          _self.rendarEls();
          // 加载成功
          if (_self.loadFirst) {
            _self.opt.App.state(_self.el, 2);
          }
          // 标记并非之后首次加载
          _self.loadFirst = false;
        }
      })
    },

    /**
     * 数据呈现
     */
    rendarEls: function () {
      var _self = this;
      var els = _self.opt.App.getView(_self.el).querySelectorAll(_self.opt.row_clsname);
      var el_arr = [];
      for (var i = 0; i < els.length; i++) {
        var itm = els[i];
        el_arr.unshift(itm);
      }
      els = el_arr;
      var all_length = 0;
      for (var i = 0; i < els.length; i++) {
        all_length += els[i].offsetHeight;
      }

      var dz_length = 0;
      for (var i = 0; i < els.length; i++) {
        dz_length += els[i].offsetHeight;
        els[i].style.top = (all_length - dz_length) + "px";
        els[i].className = els[i].className.replace("dper-hide-o", "");
      }
    },

    /**
     * 标签优化
     */
    optimizationEls: function () {
      var _self = this;
      // var els = _self.opt.App.getView(_self.el).querySelectorAll(_self.opt.row_clsname);
      // if(els.length > 10){
      //     for(var i = 0; i < els.length; i++){
      //         if(i > 10){
      //             var el = els[i];
      //             el.parentNode.removeChild(el);
      //         }
      //     }
      // }
      $('' + _self.opt.row_clsname + ':gt(50)').remove();
    },

    /**
     * 事件绑定
     */
    eventbind: function () {
      var _self = this;
      var inter_m = null;
      var el = document.querySelector('#' + this.el).querySelector('.dper-vct');

      if (el.addEventListener) {
        el.addEventListener("DOMMouseScroll", doTing, false);
      }
      el.onmousewheel = el.onmousewheel = doTing;

      function doTing(e) {
        e = e || event;
        clearTimeout(inter_m);
        inter_m = setTimeout(function () {
          var els = (Array.from(_self.opt.App.getView(_self.el).querySelectorAll(_self.opt.row_clsname))).reverse();
          var all_length = 0;
          var canMove = false;
          for (var i = 0; i < els.length; i++) {
            all_length += els[i].offsetHeight;
          }

          if (all_length > el.clientHeight) {
            canMove = true;
          }

          if (e.wheelDelta < 0) {
            _self.el_y_s++;
          } else {
            _self.el_y_s--;
            // if(_self.el_y_s < 0){
            //     _self.el_y_s = 0;
            // }
          }
          canMove && (el.style.transform = 'translateY(' + (-(Math.abs(e.wheelDelta) * _self.el_y_s)) + 'px)');
          setTimeout(function () {
            if (!(Math.abs(e.wheelDelta) * _self.el_y_s > (all_length - el.clientHeight))) {
              _self.el_y = -(Math.abs(e.wheelDelta) * _self.el_y_s);
            } else {
              canMove && (el.style.transform = 'translateY(' + ((-(all_length - el.clientHeight)) - _self.opt.App.getView(_self.el).parentNode.parentNode.parentNode.querySelector('.dper-bottom').clientHeight) + 'px)');
              _self.el_y_s--;
            }
            if (_self.el_y_s < 0) {
              _self.el_y_s = 0;
              canMove && (el.style.transform = 'translateY(0px)');
            }
          }, 500);
        }, 10);
      }
    },
  }
  module.exports = DperPlayList;
});
