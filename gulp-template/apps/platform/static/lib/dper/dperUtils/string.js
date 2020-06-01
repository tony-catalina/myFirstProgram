define(function (require, exports, module) {
  /************************************************  字符串工具   *********************************************************/
  /**
   * 数字格式化   每三位一个逗号
   * @num 数字
   * @poNum 小数点位数
   */
  function numFmtCmapo(num, point) {
    point = (point == null || point === "" || typeof(point) === "undefined") ? 0 : point;
    return (num.toFixed(point) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }

  /**
   * 数字累加效果
   * @param node 容器
   * @param num 目标数字
   * @param deci 小数点位数
   * @constructor
   * 依赖countUp.js
   */
  function NumAnimate(node, num, text, deci) {
    this.node = node;
    this.num = num;
    this.text = text;
    this.deci = deci;
  }

  NumAnimate.prototype = {
    constructor: NumAnimate,
    init: function () {
      if (this.deci == undefined) {
        this.deci = 0;
      }
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
      };

      new (require("./../../countUp/countUp.min"))(this.node, 0, this.num, this.text, this.deci, 2.6, options).start();
    }
  };

  /**
   * UUID
   * @param len   UUID长度
   */
  var UUID = function (len) {
    return new UUID.prototype.init(len);
  };
  UUID.prototype = {
    constructor: UUID,
    /**
     * 字符
     */
    chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
    /**
     * 初始化
     */
    init: function (len) {
      this.len = len || 32;
      this.uuid = [];
    },
    /**
     * 生成UUID
     */
    getUUID: function () {
      var _self = this;
      for (var i = 0; i < _self.len; i++) _self.uuid.push(_self.chars[0 | parseInt(Math.random() * 32)]);
      return _self.uuid.join("");
    }
  };
  UUID.prototype.init.prototype = UUID.prototype;

  /**
   * 数字 转 中文
   */
  var Number_Cover = function (number) {
    return new Number_Cover.prototype.init(number);
  };
  Number_Cover.prototype = {
    constructor: Number_Cover,
    /**
     * 相关参数
     */
    ary0: ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    ary1: ["", "十", "百", "千"],
    ary2: ["", "万", "亿", "兆"],
    /**
     * 初始化
     */
    init: function (number) {
      this.number = (((number + "").split("")).reverse()).join("");
    },
    /**
     * 转换
     */
    cover_through: function () {
      var _self = this;
      if (isNaN(Number(_self.number))) {
        console.error(_self.number + "不是一个数字");
        return;
      }
      var zero = ""
      var newary = ""
      var i4 = -1
      for (var i = 0; i < _self.number.length; i++) {
        if (i % 4 == 0) { //首先判断万级单位，每隔四个字符就让万级单位数组索引号递增
          i4++;
          newary = _self.ary2[i4] + newary; //将万级单位存入该字符的读法中去，它肯定是放在当前字符读法的末尾，所以首先将它叠加入$r中，
          zero = ""; //在万级单位位置的“0”肯定是不用的读的，所以设置零的读法为空

        }
        //关于0的处理与判断。
        if (_self.number[i] == '0') { //如果读出的字符是“0”，执行如下判断这个“0”是否读作“零”
          switch (i % 4) {
            case 0:
              break;
            //如果位置索引能被4整除，表示它所处位置是万级单位位置，这个位置的0的读法在前面就已经设置好了，所以这里直接跳过
            case 1:
            case 2:
            case 3:
              if (_self.number[i - 1] != '0') {
                zero = "零"
              }
              ; //如果不被4整除，那么都执行这段判断代码：如果它的下一位数字（针对当前字符串来说是上一个字符，因为之前执行了反转）也是0，那么跳过，否则读作“零”
              break;

          }

          newary = zero + newary;
          zero = '';
        }
        else { //如果不是“0”
          newary = _self.ary0[parseInt(_self.number[i])] + _self.ary1[i % 4] + newary; //就将该当字符转换成数值型,并作为数组ary0的索引号,以得到与之对应的中文读法，其后再跟上它的的一级单位（空、十、百还是千）最后再加上前面已存入的读法内容。
        }

      }
      if (newary.indexOf("零") == 0) {
        newary = newary.substr(1)
      }//处理前面的0
      return newary;
    }
  };
  Number_Cover.prototype.init.prototype = Number_Cover.prototype;


  /**
   * 随机数生成
   * @param scope 范围
   * @param point 小数点位数
   * @return {*}
   * @constructor
   */
  var Random = function (scope, point) {
    if (isNaN(Number(scope))) {
      return 0;
    }
    return Number((Math.random() * Number(scope)).toFixed((point || 0)));
  }

  module.exports = {
    numFmtCmapo: numFmtCmapo,
    NumAnimate: NumAnimate,
    UUID: UUID,
    Number_Cover: Number_Cover,
    Random: Random
  }
});
