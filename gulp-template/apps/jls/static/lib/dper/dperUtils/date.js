define(function (require, exports, module) {
  /************************************************  时间工具   *********************************************************/

  /** * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
   可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
   Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
   * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
   * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
   * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
   * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
   */
  Date.prototype.pattern = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    var week = {
      "0": "天",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }

  /**
   * 时间截转换为格式化时间
   * @param time    时间截
   * @param fmt    格式化字符
   */
  function coverToryDate(time, fmt) {
    return new Date(time).pattern(fmt);
  }

  /**
   * 某某日期减去多少天  可以是今天或者某一天
   * 当参数只输入减去的天数时，日期默认今天，输出格式可传入也可以不传  例如(10,'',new Date())或者(10,'','2018-10-11')
   * @param days    减去的天数 //days = 10
   * @param fmt    输出格式  //fmt = 'yyyy-MM-dd' 等等格式
   * @param date    日期字符串或者日期对象 //date = "2018-10-10" // new Date()
   */
  function reduceDays(days, fmt, date) {
    var day_, month_, year_;
    if (typeof date === "string") {
      date = date.split("-");
      day_ = parseInt(date[2]); //日期的天
      month_ = parseInt(date[1]); //日期对象的月
      year_ = parseInt(date[0]); //日期对象的年
    } else if (typeof date === "object") {
      day_ = parseInt(date.getDate());   //日期对象的天
      month_ = parseInt(date.getMonth() + 1);  //日期对象的月
      year_ = parseInt(date.getFullYear());  //日期对象的年
    } else {
      day_ = parseInt((new Date()).pattern('dd')); //当前的天
      month_ = parseInt((new Date()).pattern('MM')); //当前的月
      year_ = parseInt((new Date()).pattern('yyyy'));//本年
    }
    (!fmt) && (fmt = 'yyyy-MM-dd');

    var pre_year; //上一年
    var pre_month; //前一个月
    var dates; //前n天的日期

    var presen_day = (day_ - days) + 1; //前n天的日期第一天
    if (presen_day < 1) {
      // console.info('不是本月');
      pre_month = month_ - 1;
      if (pre_month < 1) {
        // console.info('不是本年');
        pre_year = year_ - 1;
        presen_day = 31 + presen_day;
        dates = pre_year + '-' + 12 + '-' + presen_day;
      } else {
        // console.info('是本年');
        if ((year_ % 4 == 0 && year_ % 100 != 0) || (year_ % 4 == 0 && year_ % 400 == 0)) {
          // console.info("是润年");
          if (pre_month === 2) {
            presen_day = 29 + presen_day;
            dates = year_ + '-' + pre_month + '-' + presen_day;
          } else {
            if (pre_month === 1 || pre_month === 3 || pre_month === 5 || pre_month === 7 || pre_month === 8 || pre_month === 10 || pre_month === 12) {
              presen_day = presen_day + 31;
              dates = year_ + '-' + pre_month + '-' + presen_day;
              // console.info(dates)
            } else {
              presen_day = presen_day + 30;
              dates = year_ + '-' + pre_month + '-' + presen_day;
            }
          }
        } else {
          // console.info("不是润年");
          if (pre_month === 2) {
            presen_day = 28 + presen_day;
            dates = year_ + '-' + pre_month + '-' + presen_day;
          } else {
            if (pre_month === 1 || pre_month === 3 || pre_month === 5 || pre_month === 7 || pre_month === 8 || pre_month === 10 || pre_month === 12) {
              presen_day = presen_day + 31;
              dates = year_ + '-' + pre_month + '-' + presen_day;
              // console.info(dates)
            } else {
              presen_day = presen_day + 30;
              dates = year_ + '-' + pre_month + '-' + presen_day;
            }
          }
        }
      }
    } else {
      dates = year_ + '-' + month_ + '-' + presen_day;
      // console.info('显示本月');
    }
    var e_da = new Date();
    dates = dates.split("-");
    e_da.setFullYear(dates[0]);
    e_da.setMonth(Number(dates[1]) - 1);
    e_da.setDate(dates[2]);
    dates = e_da.pattern(fmt);
    // console.info('近' + days + '天' + dates);
    return dates;
  }


  /**
   * 秒  转换为  00+:00:00格式
   * @param seconds   秒
   */
  function timeFormatter(seconds) {
    // 时
    var h = parseInt(seconds / 3600);
    h = h < 10 ? "0" + h : h;

    // 分
    var m = parseInt((seconds - Number(h) * 3600) / 60);
    m = m < 10 ? "0" + m : m;

    // 秒
    var s = parseInt(seconds % 60);
    s = s < 10 ? "0" + s : s;

    return h + ":" + m + ":" + s;
  }


  // 获取当日为本月的第几周
  var getMonthWeek = function () {
    var no_week = 0;

    // 月初为一周的第几天
    var first_week = new Date();
    first_week.setDate(1);
    first_week = getWeek(first_week.getDay());

    // 今天为一周的第几天
    var today_week = getWeek(new Date().getDay());

    // 今天为当月的第几天
    var today_mouth = new Date().getDate();

    // 第一周天数计算
    var firstweek_days = Number(8 - first_week);

    // 计算除去第一周和当前周所剩的天数
    var l_day = today_mouth - firstweek_days - today_week;

    // 计算最终周数
    no_week = l_day / 7 + 2;

    /**
     * 获取1开始的星期几
     * @param dindex
     */
    function getWeek(dindex) {
      var arr_num = [7, 1, 2, 3, 4, 5, 6];
      return arr_num[dindex];
    }

    return no_week;
  };
  // 时间
  var showTime = function (el, fmt) {
    !fmt && (fmt = "yyyy年MM月dd日    HH:mm:ss");
    document.querySelector(el).innerText = new Date().pattern(fmt);
  }

  module.exports = {
    coverToryDate: coverToryDate,
    reduceDays: reduceDays,
    timeFormatter: timeFormatter,
    getMonthWeek: getMonthWeek,
    showTime: showTime
  }
});
