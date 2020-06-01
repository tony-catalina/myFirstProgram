define(function (require) {
    require('jquery');
    'use strict';
    var tools = {
        //浏览器类型
        browserType: function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
            var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
            var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
            var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
            var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion == 7) return "IE7"
                else if (fIEVersion == 8) return "IE8";
                else if (fIEVersion == 9) return "IE9";
                else if (fIEVersion == 10) return "IE10";
                else if (fIEVersion == 11) return "IE11";
                else return "IE7以下" //IE版本过低
            }

            if (isFF) return "FF";
            if (isOpera) return "Opera";
            if (isEdge) return "Edge";
            if (isSafari) return "Safari";
            if (isChrome) return "Chrome";
        },
        //选择对象
        $: function (selector) {
            var type = selector.substring(0, 1);
            if (type === '#') {
                if (document.querySelecotor) {
                    return document.querySelector(selector);
                } else {
                    return document.getElementById(selector.substring(1));
                }
            } else if (type === '.') {
                if (document.querySelecotorAll) return document.querySelectorAll(selector)
                return document.getElementsByClassName(selector.substring(1))
            } else {
                return document['querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'](selector)
            }
        },
        /*检测类名*/
        hasClass: function (ele, name) {
            return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
        },
        /*添加类名*/
        addClass: function (ele, name) {
            if (!this.hasClass(ele, name)) ele.className += " " + name;
        },
        /*删除类名*/
        removeClass: function (ele, name) {
            if (this.hasClass(ele, name)) {
                var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
                ele.className = ele.className.replace(reg, '');
            }
        },
        /*替换类名*/
        replaceClass: function (ele, newName, oldName) {
            this.removeClass(ele, oldName);
            this.addClass(ele, newName);
        },
        /*获取兄弟节点*/
        siblings: function (ele) {
            //console.log(ele.parentNode)获取父节点
            var chid = ele.parentNode.children,
                eleMatch = [];
            for (var i = 0, len = chid.length; i < len; i++) {
                if (chid[i] != ele) {
                    eleMatch.push(chid[i]);
                }
            }
            return eleMatch;
        },
        /*获取行间样式属性*/
        /*
         * obj: dom节点
         * attr:节点属性
         * */
        getStyl: function (obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, false)[attr];
            }
        },
        //添加事件兼容,绑定多个事件
        bindEvent: function (obj, type, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(type, fn);
            } else {
                obj.attachEvent('on' + type, fn);
            }
        },
        //获取url链接参数
        getUrlParam: function (name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var r = decodeURI(window.location.search).substr(1).match(reg);
            if (r != null) {
                return r[2];
            }
            return null;
        },
        getUrlParams: function (url) {
            var _url = url ? url : window.location.href;
            var _pa = _url.substring(url.indexOf('?') + 1),
                _arrS = _pa.split('&'),
                _rs = {};
            for (var i = 0, _len = _arrS.length; i < _len; i++) {
                var pos = _arrS[i].indexOf('=');
                if (pos == -1) {
                    continue;
                }
                var name = _arrS[i].substring(0, pos),
                    value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
                _rs[name] = value;
            }
            return _rs;
        },
        delParamsUrl: function (url, name) {
            var baseUrl = url.split('?')[0] + '?';
            var query = url.split('?')[1];
            if (query.indexOf(name) > -1) {
                var obj = {}
                var arr = query.split("&");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].split("=");
                    obj[arr[i][0]] = arr[i][1];
                }
                ;
                delete obj[name];
                var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
                return url
            } else {
                return url;
            }
        },
        //localStorage的存储、获取、删除
        setLocalStorage: function (key, value) {
            value = typeof value != 'object' ? value : JSON.stringify(value);
            window.localStorage.setItem(key, value);
        },
        getLocalStorage: function (key) {
            var obj = window.localStorage.getItem(key);
            return obj && (obj.indexOf('{') === 0 || obj.indexOf('[') === 0) ? eval('(' + obj + ')') : obj;
        },
        deleteLocalStorage: function (key) {
            key ? window.localStorage.removeItem(key) : window.localStorage.clear();
        },
        //sessionStorage的存储、获取、删除
        setSessionStorage: function (key, value) {
            value = typeof value !== 'object' ? value : JSON.stringify(value);
            window.sessionStorage.setItem(key, value);
        },
        getSessionStorage: function (key) {
            var obj = window.sessionStorage.getItem(key);
            return obj && (obj.indexOf('{') === 0 || obj.indexOf('[') === 0) ? eval('(' + obj + ')') : obj;
        },
        deleteSessionStorage: function (key) {
            key ? window.sessionStorage.removeItem(key) : window.sessionStorage.clear();
        },
        //cookie的存储、获取、删除
        setCookie: function (key, value, days, otherParams) {
            var str = key + '=' + escape(value) + ';path=/';
            var nowTime = new Date().getTime();
            var addDate = new Date(nowTime + days * 24 * 60 * 60 * 1000);
            if (!isNaN(days) && days > 0) {
                str += '; expires=' + addDate.toGMTString();
            }
            if (otherParams && typeof otherParams === 'object')
                for (var i in otherParams) str += ';' + i + '=' + otherParams[i];
            document.cookie = str;
        },
        getCookie: function (key) {
            var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
            if (!arr || !arr.length) return null;
            return unescape(arr[2]);
        },
        deleteCookie: function (key) {
            document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
        },
        isString: function (o) {/**是否字符串*/
            return Object.prototype.toString.call(o).slice(8, -1) === 'String';
        },
        isNumber: function (o) { /**是否数字*/
            return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
        },
        isObj: function (o) { //是否对象
            return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
        },
        isArray: function (o) { //是否数组
            return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
        },
        isDate: function (o) { //是否时间
            return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
        },
        isBoolean: function (o) { //是否boolean
            return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
        },
        isFunction: function (o) { //是否函数
            return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
        },
        isNull: function (o) { //是否为null
            return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
        },
        isUndefined: function (o) { //是否undefined
            return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
        },
        isFalse: function (o) {
            if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true;
            return false;
        },
        isTrue: function (o) {
            return !tools.isFalse(o)
        },
        isIos: function () {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
                // return "Android";
                return false
            } else if (u.indexOf('iPhone') > -1) { //苹果手机
                // return "iPhone";
                return true
            } else if (u.indexOf('iPad') > -1) { //iPad
                // return "iPad";
                return false
            } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
                // return "Windows Phone";
                return false
            } else {
                return false
            }
        },
        isPC: function () { //是否为PC端
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"
            ];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        isUrl:function(alt) {
            var str=URL;
            //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
            //下面的代码中应用了转义字符"\"输出一个字符"/"
            var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp=new RegExp(Expression);
            if(objExp.test(str)==true){
                return true;
            }else{
                return false;
            }
        },
        //检查字符类型 正则表达式
        checkStr: function (str, type) {
            switch (type) {
                case 'phone': //手机号码
                    return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
                case 'tel': //座机
                    return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
                case 'card': //身份证
                    return /^\d{15}|\d{18}$/.test(str);
                case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                    return /^[a-zA-Z]\w{5,17}$/.test(str)
                case 'postal': //邮政编码
                    return /[1-9]\d{5}(?!\d)/.test(str);
                case 'QQ': //QQ号
                    return /^[1-9][0-9]{4,9}$/.test(str);
                case 'email': //邮箱
                    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
                case 'money': //金额(小数点2位)
                    return /^\d*(?:\.\d{0,2})?$/.test(str);
                case 'URL': //网址
                    return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
                case 'IP': //IP
                    return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
                case 'date': //日期时间
                    return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
                case 'number': //数字
                    return /^[0-9]$/.test(str);
                case 'english': //英文
                    return /^[a-zA-Z]+$/.test(str);
                case 'chinese': //中文
                    return /^[\u4E00-\u9FA5]+$/.test(str);
                case 'lower': //小写
                    return /^[a-z]+$/.test(str);
                case 'upper': //大写
                    return /^[A-Z]+$/.test(str);
                case 'HTML': //HTML标记
                    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
                default:
                    return true;
            }
        },
        //用一个开始时间加上天数得出结果时间 -- 返回长日期格式 ------还没测试
        getLongDatePlus: function (startDate, dayCount) {
            var sfm = startDate.split(' ')[1]; //切割获取时分秒
            var nyr = startDate.split(' ')[0]; //切割获取年月日
            var ksDate = new Date(nyr);
            thisDate = new Date((ksDate / 1000 + (86400 * dayCount)) * 1000);
            new_date = this.timeType(thisDate) + ' ' + sfm;
            return new_date;
        },
        timeType: function (date) { // 短日期格式化
            var datetime = date.getFullYear()
                + "-"// "年"
                + ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0"
                    + (date.getMonth() + 1)) + "-"// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
            return datetime;
        },
        //判断是否是闰年
        isRunNian: function (year) {
            if ((!(year % 4) && year % 100) || !(year % 400)) {
                return true;
            }
            return false;
        },
        //获取指定月份的天数
        getDaysForMonth: function (year, month) {
            var datesDate = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month === 2 && tools.isRunnian(year)) {
                return 29;
            }
            return datesDate[month];
        },
        //格式化时间
        //formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
        formatTime: function (time, cFormat) {
            if (arguments.length === 0) return null
            if ((time + '').length === 10) {
                time = +time * 1000
            }
            var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
                date
            if (typeof time === 'object') {
                date = time
            } else {
                date = new Date(time)
            }
            var formatObj = {
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                i: date.getMinutes(),
                s: date.getSeconds(),
                a: date.getDay()
            }
            var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
                var value = formatObj[key]
                if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
                if (result.length > 0 && value < 10) {
                    value = '0' + value
                }
                return value || 0
            })
            return time_str
        },
        /**
         * 返回指定长度的月份集合
         *
         * @param {time} 时间
         * @param {len} 长度
         * @param {direction} 方向： 1: 前几个月; 2: 后几个月; 3:前后几个月 默认 3
         * @return {Array} 数组
         *
         * @example  getMonths('2018-1-29', 6, 1) // -> ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
         */
        getMonths: function (time, len, direction) {
            var mm = new Date(time).getMonth(),
                yy = new Date(time).getFullYear(),
                direction = isNaN(direction) ? 3 : direction,
                index = mm;
            var cutMonth = function (index) {
                if (index <= len && index >= -len) {
                    return direction === 1 ? formatPre(index).concat(cutMonth(++index)) :
                        direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index))
                }
                return []
            }
            var formatNext = function (i) {
                var y = Math.floor(i / 12),
                    m = i % 12
                return [yy + y + '-' + (m + 1)]
            }
            var formatPre = function (i) {
                var y = Math.ceil(i / 12),
                    m = i % 12
                m = m === 0 ? 12 : m
                return [yy - y + '-' + (13 - m)]
            }
            var formatCurr = function (i) {
                var y = Math.floor(i / 12),
                    yNext = Math.ceil(i / 12),
                    m = i % 12,
                    mNext = m === 0 ? 12 : m
                return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)]
            }
            var unique = function (arr) {
                if (Array.hasOwnProperty('from')) {
                    return Array.from(new Set(arr));
                } else {
                    var n = {},
                        r = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (!n[arr[i]]) {
                            n[arr[i]] = true;
                            r.push(arr[i]);
                        }
                    }
                    return r;
                }
            }
            return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
                return new Date(t1).getTime() - new Date(t2).getTime()
            }))
        },
        /**
         * 返回指定长度的天数集合
         *
         * @param {time} 时间
         * @param {len} 长度
         * @param {direction} 方向： 1: 前几天; 2: 后几天; 3:前后几天 默认 3
         * @return {Array} 数组
         *
         * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
         */
        getDays: function (time, len, diretion) {
            var tt = new Date(time)
            var getDay = function (day) {
                var t = new Date(time)
                t.setDate(t.getDate() + day)
                var m = t.getMonth() + 1
                return t.getFullYear() + '-' + m + '-' + t.getDate()
            }
            var arr = []
            if (diretion === 1) {
                for (var i = 1; i <= len; i++) {
                    arr.unshift(getDay(-i))
                }
            } else if (diretion === 2) {
                for (var i = 1; i <= len; i++) {
                    arr.push(getDay(i))
                }
            } else {
                for (var i = 1; i <= len; i++) {
                    arr.unshift(getDay(-i))
                }
                arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate())
                for (var i = 1; i <= len; i++) {
                    arr.push(getDay(i))
                }
            }
            return diretion === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
                diretion === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr
        },
        /**
         * @param {s} 秒数
         * @return {String} 字符串
         *
         * @example formatHMS(3610) // -> 1h0m10s
         */
        formatHMS: function (s) {
            var str = ''
            if (s > 3600) {
                str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
            } else if (s > 60) {
                str = Math.floor(s / 60) + 'm' + s % 60 + 's'
            } else {
                str = s % 60 + 's'
            }
            return str
        },
        /*获取某月有多少天*/
        getMonthOfDay: function (time) {
            var date = new Date(time)
            var year = date.getFullYear()
            var mouth = date.getMonth() + 1
            var days

            //当月份为二月时，根据闰年还是非闰年判断天数
            if (mouth == 2) {
                days = year % 4 == 0 ? 29 : 28
            } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
                //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                days = 31;
            } else {
                //其他月份，天数为：30.
                days = 30;
            }
            return days
        },
        /*获取某年有多少天*/
        getYearOfDay: function (time) {
            var firstDayYear = this.getFirstDayOfYear(time);
            var lastDayYear = this.getLastDayOfYear(time);
            var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
            return Math.ceil(numSecond / (24 * 3600));
        },
        /*获取某年的第一天*/
        getFirstDayOfYear: function (time) {
            var year = new Date(time).getFullYear();
            return year + "-01-01 00:00:00";
        },
        /*获取某年最后一天*/
        getLastDayOfYear: function (time) {
            var year = new Date(time).getFullYear();
            var dateString = year + "-12-01 00:00:00";
            var endDay = this.getMonthOfDay(dateString);
            return year + "-12-" + endDay + " 23:59:59";
        },
        /*获取某个日期是当年中的第几天*/
        getDayOfYear: function (time) {
            var firstDayYear = this.getFirstDayOfYear(time);
            var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
            return Math.ceil(numSecond / (24 * 3600));
        },
        /*获取某个日期在这一年的第几周*/
        getDayOfYearWeek: function (time) {
            var numdays = this.getDayOfYear(time);
            return Math.ceil(numdays / 7);
        },
        //Array
        /*判断一个元素是否在数组中*/
        contains: function (arr, val) {
            return arr.indexOf(val) != -1 ? true : false;
        },
        /**
         * @param {arr} 数组
         * @param {fn} 回调函数
         * @return {undefined}
         */
        each: function (arr, fn) {
            fn = fn || Function;
            var a = [];
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < arr.length; i++) {
                var res = fn.apply(arr, [arr[i], i].concat(args));
                if (res != null) a.push(res);
            }
        },
        /**
         * @param {arr} 数组
         * @param {fn} 回调函数
         * @param {thisObj} this指向
         * @return {Array}
         */
        map: function (arr, fn, thisObj) {
            var scope = thisObj || window;
            var a = [];
            for (var i = 0, j = arr.length; i < j; ++i) {
                var res = fn.call(scope, arr[i], i, this);
                if (res != null) a.push(res);
            }
            return a;
        },
        getDateStr3:function (date) {
            var year = "";
            var month = "";
            var day = "";
            var now = date;
            year = ""+now.getFullYear();
            if((now.getMonth()+1)<10){
                month = "0"+(now.getMonth()+1);
            }else{
                month = ""+(now.getMonth()+1);
            }
            if((now.getDate())<10){
                day = "0"+(now.getDate());
            }else{
                day = ""+(now.getDate());
            }
            return year+"-"+month+"-"+day;
        },
        getWeekStartAndEnd:function(AddWeekCount) {
            //起止日期数组
            var startStop = new Array();
            //一天的毫秒数
            var millisecond = 1000 * 60 * 60 * 24;
            //获取当前时间
            var currentDate = new Date();
            //相对于当前日期AddWeekCount个周的日期
            currentDate = new Date(currentDate.getTime() + (millisecond * 7*AddWeekCount));
            //返回date是一周中的某一天
            var week = currentDate.getDay();
            //返回date是一个月中的某一天
            var month = currentDate.getDate();
            //减去的天数
            var minusDay = week != 0 ? week - 1 : 6;
            //获得当前周的第一天
            var currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
            //获得当前周的最后一天
            var currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
            //添加至数组
            startStop.push(tools.getDateStr3(currentWeekFirstDay));
            startStop.push(tools.getDateStr3(currentWeekLastDay));

            return startStop;
        },
        getMonthStartAndEnd:function (AddMonthCount) {
            //起止日期数组
            var startStop = new Array();
            //获取当前时间
            var currentDate = new Date();
            var month=currentDate.getMonth()+AddMonthCount;
            if(month<0){
                var n = parseInt((-month)/12);
                month += n*12;
                currentDate.setFullYear(currentDate.getFullYear()-n);
            }
            currentDate = new Date(currentDate.setMonth(month));
            //获得当前月份0-11
            var currentMonth = currentDate.getMonth();
            //获得当前年份4位年
            var currentYear = currentDate.getFullYear();
            //获得上一个月的第一天
            var currentMonthFirstDay = new Date(currentYear, currentMonth,1);
            //获得上一月的最后一天
            var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0);
            //添加至数组
            startStop.push(tools.getDateStr3(currentMonthFirstDay));
            startStop.push(tools.getDateStr3(currentMonthLastDay));
            //返回
            return startStop;
        },
        /**
         * @param {arr} 数组
         * @param {type} 1：从小到大  2：从大到小  3：随机
         * @return {Array}
         */
        sort: function (arr, type = 1) {
            return arr.sort((a, b) => {
                switch (type) {
                    case 1:
                        return a - b;
                    case 2:
                        return b - a;
                    case 3:
                        return Math.random() - 0.5;
                    default:
                        return arr;
                }
            })
        },
        //数组去重
        unique: function (arr) {
            if (Array.hasOwnProperty('from')) {
                return Array.from(new Set(arr));
            }
            var newArr = [];
            var flag = true;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] !== arr[i]) {
                    if (flag && newArr.indexOf(arr[i]) === -1) {
                        newArr.push(arr[i]);
                        flag = false;
                    }
                } else {
                    if (newArr.indexOf(arr[i]) === -1) {
                        newArr.push(arr[i]);
                    }
                }
            }
            return newArr;
        },
        //求两个集合的并集
        union: function (a, b) {
            var newArr = a.concat(b);
            return tools.unique(newArr);
        },
        /*求两个集合的交集*/
        intersect: function (a, b) {
            var _this = this;
            a = this.unique(a);
            return this.map(a, function (o) {
                return _this.contains(b, o) ? o : null;
            });
        },

        /*删除其中一个元素*/
        remove: function (arr, ele) {
            var index = arr.indexOf(ele);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        },

        /*将类数组转换为数组的方法*/
        formArray: function (ary) {
            var arr = [];
            if (Array.isArray(ary)) {
                arr = ary;
            } else {
                arr = Array.prototype.slice.call(ary);
            }
            ;
            return arr;
        },

        /*最大值*/
        max: function (arr) {
            return Math.max.apply(null, arr);
        },

        /*最小值*/
        min: function (arr) {
            return Math.min.apply(null, arr);
        },

        /*求和*/
        sum: function (arr) {
            return arr.reduce((pre, cur) => {
                return pre + cur
            })
        },

        /*平均值*/
        average: function (arr) {
            return this.sum(arr) / arr.length
        },
        /**
         * 去除空格
         * @param {str}
         * @param {type}
         *    type: 1-所有空格 2-前后空格 3-前空格 4-后空格
         * @return {String}
         */
        trim: function (str, type) {
            type = type || 1
            switch (type) {
                case 1:
                    return str.replace(/\s+/g, "");
                case 2:
                    return str.replace(/(^\s*)|(\s*$)/g, "");
                case 3:
                    return str.replace(/(^\s*)/g, "");
                case 4:
                    return str.replace(/(\s*$)/g, "");
                default:
                    return str;
            }
        },

        /**
         * @param {str}
         * @param {type}
         *    type: 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
         * @return {String}
         */
        changeCase: function (str, type) {
            type = type || 4
            switch (type) {
                case 1:
                    return str.replace(/\b\w+\b/g, function (word) {
                        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

                    });
                case 2:
                    return str.replace(/\b\w+\b/g, function (word) {
                        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                    });
                case 3:
                    return str.split('').map(function (word) {
                        if (/[a-z]/.test(word)) {
                            return word.toUpperCase();
                        } else {
                            return word.toLowerCase()
                        }
                    }).join('')
                case 4:
                    return str.toUpperCase();
                case 5:
                    return str.toLowerCase();
                default:
                    return str;
            }
        },

        /*
          检测密码强度
        */
        checkPwd: function (str) {
            var Lv = 0;
            if (str.length < 6) {
                return Lv
            }
            if (/[0-9]/.test(str)) {
                Lv++
            }
            if (/[a-z]/.test(str)) {
                Lv++
            }
            if (/[A-Z]/.test(str)) {
                Lv++
            }
            if (/[\.|-|_]/.test(str)) {
                Lv++
            }
            return Lv;
        },

        /*过滤html代码(把<>转换)*/
        filterTag: function (str) {
            str = str.replace(/&/ig, "&");
            str = str.replace(/</ig, "<");
            str = str.replace(/>/ig, ">");
            str = str.replace(" ", " ");
            return str;
        },
        delHtmlTag: function (str) {
            return str.replace(/<[^>]+>/g, "");  //正则去掉所有的html标记
        },

        //Numbr

        /*随机数范围*/
        random: function (min, max) {
            if (arguments.length === 2) {
                return Math.floor(min + Math.random() * ((max + 1) - min))
            } else {
                return null;
            }

        },
        //将阿拉伯数字翻译成中文的大写数字
        numberToChinese: function (num) {
            var AA = new Array('零"', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
            var BB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
            var a = ('' + num).replace(/(^0*)/g, '').split('.'),
                k = 0,
                re = '';
            for (var i = a[0].length - 1; i >= 0; i--) {
                switch (k) {
                    case 0:
                        re = BB[7] + re;
                        break;
                    case 4:
                        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$')
                            .test(a[0]))
                            re = BB[4] + re;
                        break;
                    case 8:
                        re = BB[5] + re;
                        BB[7] = BB[5];
                        k = 0;
                        break;
                }
                if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
                    re = AA[0] + re;
                if (a[0].charAt(i) != 0)
                    re = AA[a[0].charAt(i)] + BB[k % 4] + re;
                k++;
            }

            if (a.length > 1) // 加上小数部分(如果有小数部分)
            {
                re += BB[6];
                for (var i = 0; i < a[1].length; i++) {
                    re += AA[a[1].charAt(i)];
                }
            }
            if (re == '一十') {
                re = '十';
            }
            if (re.match(/^一/) && re.length == 3) {
                re = re.replace('一', '');
            }
            return re;
        },
        /*将数字转换为大写金额*/
        changeToChinese: function (Num) {
            //判断如果传递进来的不是字符的话转换为字符
            if (typeof Num == "number") {
                Num = new String(Num);
            }
            ;
            Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
            Num = Num.replace(/ /g, "") //替换tomoney()中的空格
            Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
            if (isNaN(Num)) { //验证输入的字符是否为数字
                //alert("请检查小写金额是否正确");
                return "";
            }
            ;
            //字符处理完毕后开始转换，采用前后两部分分别转换
            var part = String(Num).split(".");
            var newchar = "";
            //小数点前进行转化
            for (var i = part[0].length - 1; i >= 0; i--) {
                if (part[0].length > 10) {
                    return "";
                    //若数量超过拾亿单位，提示
                }
                var tmpnewchar = ""
                var perchar = part[0].charAt(i);
                switch (perchar) {
                    case "0":
                        tmpnewchar = "零" + tmpnewchar;
                        break;
                    case "1":
                        tmpnewchar = "壹" + tmpnewchar;
                        break;
                    case "2":
                        tmpnewchar = "贰" + tmpnewchar;
                        break;
                    case "3":
                        tmpnewchar = "叁" + tmpnewchar;
                        break;
                    case "4":
                        tmpnewchar = "肆" + tmpnewchar;
                        break;
                    case "5":
                        tmpnewchar = "伍" + tmpnewchar;
                        break;
                    case "6":
                        tmpnewchar = "陆" + tmpnewchar;
                        break;
                    case "7":
                        tmpnewchar = "柒" + tmpnewchar;
                        break;
                    case "8":
                        tmpnewchar = "捌" + tmpnewchar;
                        break;
                    case "9":
                        tmpnewchar = "玖" + tmpnewchar;
                        break;
                }
                switch (part[0].length - i - 1) {
                    case 0:
                        tmpnewchar = tmpnewchar + "元";
                        break;
                    case 1:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                        break;
                    case 2:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                        break;
                    case 3:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                        break;
                    case 4:
                        tmpnewchar = tmpnewchar + "万";
                        break;
                    case 5:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                        break;
                    case 6:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                        break;
                    case 7:
                        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                        break;
                    case 8:
                        tmpnewchar = tmpnewchar + "亿";
                        break;
                    case 9:
                        tmpnewchar = tmpnewchar + "拾";
                        break;
                }
                var newchar = tmpnewchar + newchar;
            }
            //小数点之后进行转化
            if (Num.indexOf(".") != -1) {
                if (part[1].length > 2) {
                    // alert("小数点之后只能保留两位,系统将自动截断");
                    part[1] = part[1].substr(0, 2)
                }
                for (i = 0; i < part[1].length; i++) {
                    tmpnewchar = ""
                    perchar = part[1].charAt(i)
                    switch (perchar) {
                        case "0":
                            tmpnewchar = "零" + tmpnewchar;
                            break;
                        case "1":
                            tmpnewchar = "壹" + tmpnewchar;
                            break;
                        case "2":
                            tmpnewchar = "贰" + tmpnewchar;
                            break;
                        case "3":
                            tmpnewchar = "叁" + tmpnewchar;
                            break;
                        case "4":
                            tmpnewchar = "肆" + tmpnewchar;
                            break;
                        case "5":
                            tmpnewchar = "伍" + tmpnewchar;
                            break;
                        case "6":
                            tmpnewchar = "陆" + tmpnewchar;
                            break;
                        case "7":
                            tmpnewchar = "柒" + tmpnewchar;
                            break;
                        case "8":
                            tmpnewchar = "捌" + tmpnewchar;
                            break;
                        case "9":
                            tmpnewchar = "玖" + tmpnewchar;
                            break;
                    }
                    if (i == 0) tmpnewchar = tmpnewchar + "角";
                    if (i == 1) tmpnewchar = tmpnewchar + "分";
                    newchar = newchar + tmpnewchar;
                }
            }
            //替换所有无用汉字
            while (newchar.search("零零") != -1)
                newchar = newchar.replace("零零", "零");
            newchar = newchar.replace("零亿", "亿");
            newchar = newchar.replace("亿万", "亿");
            newchar = newchar.replace("零万", "万");
            newchar = newchar.replace("零元", "元");
            newchar = newchar.replace("零角", "");
            newchar = newchar.replace("零分", "");
            if (newchar.charAt(newchar.length - 1) == "元") {
                newchar = newchar + "整"
            }
            return newchar;
        },
        /**
         * @param {url}
         * @param {setting}
         * @return {Promise}
         */
        fetch: function (url, setting) {
            //设置参数的初始值
            let opts = {
                method: (setting.method || 'POST').toUpperCase(), //请求方式
                headers: setting.headers || {}, // 请求头设置
                credentials: setting.credentials || true, // 设置cookie是否一起发送
                body: setting.body || {},
                mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin
                redirect: setting.redirect || 'follow', // follow, error, manual
                cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
            }
            let dataType = setting.dataType || "json", // 解析方式
                data = setting.data || "" // 参数

            // 参数格式化
            function params_format(obj) {
                var str = ''
                for (var i in obj) {
                    str += `${i}=${obj[i]}&`
                }
                return str.split('').slice(0, -1).join('')
            }

            if (opts.method === 'POST') {
                url = url + (data ? `?${params_format(data)}` : '')
            } else {
                setting.body = data || {}
            }
            return new Promise((resolve, reject) => {
                fetch(url, opts).then(async res => {
                    let data = dataType === 'text' ? await res.text() :
                        dataType === 'blob' ? await res.blob() : await res.json()
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //获取客户端ip地址需创建id为address的标签
        getYourIP: function () {
            var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
            if (RTCPeerConnection) (function () {
                var rtc = new RTCPeerConnection({
                    iceServers: []
                });
                if (1 || window.mozRTCPeerConnection) {
                    rtc.createDataChannel('', {
                        reliable: false
                    });
                }
                ;
                rtc.onicecandidate = function (evt) {
                    if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
                };
                rtc.createOffer(function (offerDesc) {
                    grepSDP(offerDesc.sdp);
                    rtc.setLocalDescription(offerDesc);
                }, function (e) {
                    console.warn("offer failed", e);
                });
                var addrs = Object.create(null);
                addrs["0.0.0.0"] = false;

                function updateDisplay(newAddr) {
                    if (newAddr in addrs) return;
                    else addrs[newAddr] = true;
                    var displayAddrs = Object.keys(addrs).filter(function (k) {
                        return addrs[k];
                    });
                    for (var i = 0; i < displayAddrs.length; i++) {
                        if (displayAddrs[i].length > 16) {
                            displayAddrs.splice(i, 1);
                            i--;
                        }
                    }
                    document.getElementById('address').textContent = displayAddrs[0];
                }

                function grepSDP(sdp) {
                    var hosts = [];
                    sdp.split('\r\n').forEach(function (line, index, arr) {
                        if (~line.indexOf("a=candidate")) {
                            var parts = line.split(' '),
                                addr = parts[4],
                                type = parts[7];
                            if (type === 'host') updateDisplay(addr);
                        } else if (~line.indexOf("c=")) {
                            var parts = line.split(' '),
                                addr = parts[2];
                            updateDisplay(addr);
                        }
                    });
                }
            })();
            else {
                document.getElementById('address').textContent = "请使用主流浏览器：chrome,firefox,opera,safari"
                //                  console.log("请使用主流浏览器：chrome,firefox,opera,safari");
            }

        },
        /* 获取剪切板中的内容 */
        tm_GetClipboard: function () {
            if (window.clipboardData) {
                return (window.clipboardData.getData('text'));
            } else {
                if (window.netscape) {
                    try {
                        netscape.security.PrivilegeManager
                            .enablePrivilege("UniversalXPConnect");
                        var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
                            .createInstance(Components.interfaces.nsIClipboard);
                        if (!clip) {
                            return;
                        }
                        var trans = Components.classes["@mozilla.org/widget/transferable;1"]
                            .createInstance(Components.interfaces.nsITransferable);
                        if (!trans) {
                            return;
                        }
                        trans.addDataFlavor("text/unicode");
                        clip.getData(trans, clip.kGlobalClipboard);
                        var str = new Object();
                        var len = new Object();
                        trans.getTransferData("text/unicode", str, len);
                    } catch (e) {
                        alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                        return null;
                    }
                    if (str) {
                        if (Components.interfaces.nsISupportsWString) {
                            str = str.value
                                .QueryInterface(Components.interfaces.nsISupportsWString);
                        } else {
                            if (Components.interfaces.nsISupportsString) {
                                str = str.value
                                    .QueryInterface(Components.interfaces.nsISupportsString);
                            } else {
                                str = null;
                            }
                        }
                    }
                    if (str) {
                        return (str.data.substring(0, len.value / 2));
                    }
                }
            }
            return null;
        },
        /**
         * 往剪切板里赋值
         * @param txt
         * @returns {Boolean}
         */
        tmSetClipboard: function (txt) {
            if (window.clipboardData) {
                window.clipboardData.clearData();
                window.clipboardData.setData("Text", txt);
            } else if (navigator.userAgent.indexOf("Opera") != -1) {
                window.location = txt;
            } else if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager
                        .enablePrivilege("UniversalXPConnect");
                } catch (e) {
                    alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                    return false;
                }
                var clip = Components.classes['@mozilla.org/widget/clipboard;1']
                    .createInstance(Components.interfaces.nsIClipboard);
                if (!clip)
                    return;
                var trans = Components.classes['@mozilla.org/widget/transferable;1']
                    .createInstance(Components.interfaces.nsITransferable);
                if (!trans)
                    return;
                trans.addDataFlavor('text/unicode');
                var str = Components.classes["@mozilla.org/supports-string;1"]
                    .createInstance(Components.interfaces.nsISupportsString);
                var copytext = txt;
                str.data = copytext;
                trans.setTransferData("text/unicode", str, copytext.length * 2);
                var clipid = Components.interfaces.nsIClipboard;
                if (!clip)
                    return false;
                clip.setData(trans, null, clipid.kGlobalClipboard);
            }
        },
        // 获取form表单中表格里面的数据，根据name属性转换为对应json字符串   根据class或者
        getJsonByClass: function (id) {
            var jsonStr;
            $('.' + id + ' tbody').find('tr').each(function () {
                jsonStr += "{";
                $(this).find('td').each(function () {
                    $(this).find('input').each(function () {
                        if ($(this).attr("name")) {
                            if ($(this).val() != "") {
                                jsonStr += "\"" + $(this).attr("name") + "\":\"" + $(this).val() + "\",";
                            }
                        }
                    })
                })
                jsonStr = jsonStr.substring(0, jsonStr.length - 1);
                if (jsonStr != "undefined") {
                    var endWith = jsonStr.substr(jsonStr.length - 1, 1);
                    if (endWith != ",") {
                        jsonStr += "},";
                    }
                }
            })
            if (jsonStr != "undefined") {
                jsonStr = "[" + jsonStr.substring(9, jsonStr.length - 1) + "]";
            } else {
                jsonStr = "";
            }
            return jsonStr;
        },
        getJsonByForm:function(id){
            var arr = $('#'+id).serializeArray();//form表单数据 name：value
            var param = {};
            $.each(arr,function(i,obj){ //将form表单数据封装成json对象
                param[obj.name] = obj.value;
            })
            return param;
        }


    };
    return tools;
});
