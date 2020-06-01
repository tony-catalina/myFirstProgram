// 表单上使用到的函数
define(function(require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');

    // 在jquery原型上加serializeObject方法
    $.fn.serializeObject = function() {
        var a, o, h, i, e;
        a = this.serializeArray();
        o = {};
        h = o.hasOwnProperty;
        for (i = 0; i < a.length; i++) {
            e = a[i];
            if (!h.call(o, e.name)) {
                o[e.name] = e.value;
            }
        }
        return o;
    }

    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18

    Date.prototype.Format = function(fmt) { // author: meizz
        var o = {
            "M+": this.getMonth() + 1, // 月份
            "d+": this.getDate(), // 日
            "h+": this.getHours(), // 小时
            "m+": this.getMinutes(), // 分
            "s+": this.getSeconds(), // 秒
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
            "S": this.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    $.fn.form.methods.validate = function(target) {
        if ($.fn.validatebox) {
            var t = $(target);
            t.find('.validatebox-text:not(:disabled)').validatebox('validate');
            var invalidbox = t.find('.validatebox-invalid:visible');
            console.log(invalidbox);
            invalidbox.filter(':not(:disabled):first').focus();
            return invalidbox.length == 0;
        }
        return true;
    };

    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        number: {
            validator: function(value, param) {
                if (/^[0-9]*$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入数字'
        }
    });

    //手机号验证
    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        mphone: {
            validator: function(value, param) {
                if (/^1[0-9]{10}$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入正确的手机号码'
        }
    });

    //身份证号验证
    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        idcard: {
            validator: function(value, param) {
                if (/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入正确的身份证号码'
        }
    });

    //固定电话号码验证
    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        telephone: {
            validator: function(value, param) {
                if (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入正确的固定电话号码'
        }
    });



    //项目中不常用

    //邮箱验证
    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        email: {
            validator: function(value, param) {
                if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入正确的邮箱'
        }
    });

    //邮政编码验证
    $.extend($.fn.validatebox.defaults.rules, {
        //验证名称
        postalcode: {
            validator: function(value, param) {
                if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) || value == ' ') {
                    return true;
                } else {
                    return false;
                }
            },
            message: '请输入正确的邮箱'
        }
    });

    const exports = {
        /**
         * 元素项处理函数
         * @callback ProcessQueuedCallback
         * @param {HTMLElement} el 需要处理的元素
         */
        /**
         * 对指定的元素逐个执行对应的回调函数
         * @param {(HTMLElement|NodeList|HTMLCollection|string)} selector 指定元素
         * @param {ProcessQueuedCallback} fn 回调函数
         */
        processQueued: function(selector, fn) {
            return new Promise(function(resolve, reject) {
                let elements = selector,
                    selectorType = Object.prototype.toString.call(selector).slice(8, -1);

                // 通过输入的参数获取/转换为 HTMLElement 类数组结构
                switch (selectorType) {
                    case 'String':
                        elements = document.querySelectorAll(selector);
                        break;
                    case 'HTMLElement':
                        elements = [selector];
                        break;
                }

                // 判断转换后的类型是否正确
                let elementsType = Object.prototype.toString.call(elements).slice(8, -1);
                if (elementsType !== 'NodeList' && elementsType !== 'HTMLCollection' && elementsType !== 'Array') {
                    reject(new TypeError('selector must be an HTMLElement|NodeList|HTMLCollection|string'));
                    return;
                }


                // 过滤掉不可见元素、重复元素
                let filteredElements = Array.from(new Set(Array.prototype.filter.call(elements, function( /** @type {HTMLElement} */ el) {
                    return el.offsetParent !== null;
                })));


                // 对每个元素执行回调函数
                let elemsPromises = filteredElements.map(function(el) {
                    return new Promise(function(resolve, reject) {
                        setTimeout(function() {
                            try {
                                fn.call(null, el);
                                resolve();
                            } catch (err) {
                                reject(err);
                            }
                        }, 10);
                    });
                });

                resolve(Promise.all(elemsPromises));
            });
        }
    };

    return exports;

})