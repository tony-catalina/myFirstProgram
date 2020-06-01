define(function (require, exports, module) {

  /**
   * 输入框正则验证
   * 自动扫描
   *
   * input标签属性
   *  dper-do（非必需）                not   不验证    其他/不写 验证
   *  dper-empty（非必需）             false 不验证    其他/不写 进行是否为空验证
   *
   *  dper-validate（非必需）          正则表达式
   *
   *  dper-empty-tip（非必需）         为空提示
   *  dper-err（非必需）               错误提示
   *
   * @param tar_el
   */
  var ValidateInput = function (tar_el) {
    if (!(this instanceof ValidateInput)) {
      return new ValidateInput(tar_el);
    }

    // 输入框包裹元素
    this.tar_el = document.getElementById(tar_el);

    this.els_input = [];

    // 全局定时器模块标记
    this.obj_mark = '_dperval_' + tar_el;

    // 默认为空提示
    this.tip_empty = "请输入内容哦!";

    // 初始化
    this.init();

    // 驱动委派事件
    this.loadValidate();
  }

  ValidateInput.prototype = {
    constructor: ValidateInput,
    init: function () {
      this.els_input = this.tar_el.querySelectorAll("input");
    },
    // 事件委派
    loadValidate: function () {
      if (this.els_input.length < 1) {
        return;
      }

      // 新增input全局时间属性
      (!window.dperValidate) && (window.dperValidate = {});
      window.dperValidate[this.obj_mark] = [];

      for (var i = 0; i < this.els_input.length; i++) {
        var el_input = this.els_input[i];
        if (el_input.getAttribute('dper-do') !== "not") {
          el_input.setAttribute('dper-va', 'el_input' + i);
          window.dperValidate[this.obj_mark].push({
            name: 'el_input' + i,
            tmt: null
          });
          this.inputKeyEvent(el_input);
        } else {
          el_input.setAttribute('dper-va', '');
        }
        el_input.parentNode.querySelector('.dper-err').innerText = "";
      }
    },
    // 重置事件委派
    reloadValidate: function () {
      this.loadValidate();
    },
    // 开启事件监听
    inputKeyEvent: function (el) {
      var _vlt_ = el.getAttribute('dper-empty');
      var _regx = el.getAttribute('dper-validate');
      var _self = this;
      var _reg_ = "";

      if (_vlt_ === "false" && _regx === null) {
        return;
      }

      if (_regx !== null) {
        _reg_ = _regx;
      }

      if (el.addEventListener) {
        el.addEventListener('keydown', function () {
          temp_vlt(this);
        });
        el.addEventListener('blur', function () {
          temp_vlt(this);
        })

        function temp_vlt(el_input) {
          var el_input_tmt = el_input.getAttribute('dper-va');
          if (el_input_tmt === "" || el_input_tmt === null) {
            return false;
          }
          clearTimeout(window.dperValidate[_self.obj_mark][el_input_tmt]);
          window.dperValidate[_self.obj_mark][el_input_tmt] = setTimeout(function () {
            _self.validate(el_input.value, _reg_, el_input);
          }, 300);
        }
      }
    },
    /**
     * 验证
     * @param value 数值
     * @param reg   正则
     * @param el    被验证元素
     * @return {boolean}
     */
    validate: function (value, reg, el) {
      var val_rel = true;
      var el_err = el.parentNode.querySelector('.dper-err');
      var el_input_err = el.getAttribute('dper-err');
      var text_err = el.getAttribute('dper-empty-tip');
      var _self = this;
      if (reg === "") {
        if (value.trim() === "") {
          val_rel = false;
          el_input_err = (text_err === null) ? _self.tip_empty : text_err;
        }
      } else {
        if (value.trim() === "") {
          val_rel = false;
          el_input_err = (text_err === null) ? _self.tip_empty : text_err;
        } else {
          var part = new RegExp(reg, 'g');
          val_rel = (part).test(value);
          (el_input_err === null) && (el_input_err = "格式错误!");
        }
      }
      if (val_rel) {
        el_err.innerText = "";
      } else {
        el_err.innerText = el_input_err;
      }
      return val_rel;
    },

    ValidateOut: function () {
      var rel_ = true;
      for (var i = 0; i < this.els_input.length; i++) {
        var el_input = this.els_input[i];
        if (el_input.getAttribute('dper-do') !== "not") {

          var _vlt_ = el_input.getAttribute('dper-empty');
          var _regx = el_input.getAttribute('dper-validate');
          var _reg_ = "";
          if (_vlt_ === "false" && _regx === null) {
            return;
          }
          if (_regx !== null) {
            _reg_ = _regx;
          }
          if (!this.validate(el_input.value, _reg_, el_input)) {
            rel_ = false;
            break;
          }
        }
      }
      return rel_;
    }
  }

  module.exports = ValidateInput;
});
