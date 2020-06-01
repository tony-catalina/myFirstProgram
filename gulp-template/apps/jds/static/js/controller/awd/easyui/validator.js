define(function (require) {
    'use strict';
    require('easyui');

    /**
     * 使用方法 <input class="easyui-validatebox" missingMessage="必填项" validType="englishCheckSub"  maxlength="20" id="bzbm" name="bzbm" required="true"/>
     * if($('#funcform').form("validate")){
     *   提交表单的代码
     *   }
     *
     */
    $.extend($.fn.validatebox.defaults.rules,
        {
            // 验证中文
            CHS : {
                validator : function(value) {
                    return /^[\u0391-\uFFE5]+$/.test(value);},
                message : "只能输入汉字"
            },
            // 字符验证
            stringCheck : {
                validator : function(value) {
                    return /^[\u0391-\uFFE5\w]+$/.test(value);},
                message : "只能包括中文字、英文字母、数字和下划线"
            },
            // 验证中文,英文,数字
            stringCheckSub : {
                validator : function(value) {
                    return /^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(value);},
                message : "只能包括中文字、英文字母、数字"
            },
            // 验证英文字母、数字
            englishCheckSub : {
                validator : function(value) {
                    return /^[a-zA-Z0-9]+$/.test(value);},
                message : "只能包括英文字母、数字"
            },
            // 验证数字
            numberCheckSub : {
                validator : function(value) {
                    return /^[0-9]+$/.test(value);},
                message : "只能输入数字"
            },
            // 手机号码验证
            mobile : {
                validator : function(value) {
                    var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                    return value.length == 11 && reg.test(value);},
                message : "请正确填写您的手机号码."
            },

            // 电话号码验证

            telephone : {
                validator : function(value) {
                    // 电话号码格式010-12345678
                    var reg = /^\d{3,4}?\d{7,8}$/;
                    return reg.test(value);
                },
                message : "请正确填写您的电话号码."
            },

            // 联系电话(手机/电话皆可)验证

            mobileTelephone : {
                validator : function(value) {
                    var cmccMobile = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                    var tel = /^\d{3,4}?\d{7,8}$/;
                    return tel.test(value)
                        || (value.length == 11 && cmccMobile
                            .test(value));
                },
                message : "请正确填写您的联系电话."
            },

            // 验证国内邮编验证
            zipCode : {
                validator : function(value) {
                    var reg = /^[1-9]\d{5}$/;
                    return reg.test(value);
                },
                message : "邮编必须长短0开端的6位数字."
            },

            // 身份证号码验证
            idCardNo : {
                validator : function(value) {
                    return isIdCardNo(value);
                },
                message : "请正确输入您的身份证号码."
            },

            // 验证两个不同时为空

            // 可以自定义提示信息
            allNotNull : {
                validator : function(toValue, fromValue) {
                    if (fromValue == null || fromValue.length == 0
                        || fromValue[0] == null
                        || fromValue[0] == "") {
                        if (toValue == null || toValue.length == 0
                            || toValue[0] == null
                            || toValue[0] == "") {
                            $.fn.validatebox.defaults.rules.compareDigit.message = "中，英.文名不可同时为空 ";
                            return false;
                        } else {
                            return true;
                        }
                    } else
                    {
                        return true;
                    }
                },
                message : ""
            },

            // 数字验证大小，结束值应该大于开始值
            // 可以自定义提示信息
            compareDigit : {
                validator : function(toValue, fromValue) {
                    if (fromValue == null || fromValue.length == 0
                        || fromValue[0] == null
                        || fromValue[0] == "") {
                        return true;
                    }

                    if (parseFloat(toValue) > parseFloat(fromValue[0])) {
                        return true;
                    } else {
                        if (fromValue.length >= 2) {
                            $.fn.validatebox.defaults.rules.compareDigit.message = fromValue[1];
                        } else {
                            $.fn.validatebox.defaults.rules.compareDigit.message = '结束值应该大于开始值';
                        }
                        return false
                    }
                },
                message : ""
            },

            // 日期、时间验证大小，结束日期应该大于开始日期

            // 可以自定义提示信息
            compareDate : {
                validator : function(toDate, param) {
                    if (param == null || param.length == 0
                        || param[0] == null || param[0] == "") {
                        return true;
                    }
                    if (toDate > param[0]) {
                        return true;
                    } else {
                        if (param.length >= 2) {
                            $.fn.validatebox.defaults.rules.compareDate.message = param[1];
                        }
                        else {
                            $.fn.validatebox.defaults.rules.compareDate.message = '结束日期应该大于开始日期';
                        }
                        return false
                    }
                },
                message : ''
            }

            // 到服务器端验证
            /*
             * remote:{
             *
             * validator:function(value,param){
             *
             * var params = {};
             *
             * params[param[1]] = value;
             *
             * $.post(param[0],params,function(data){
             *
             * if(!data.msg){
             *
             * $.fn.validatebox.defaults.rules.account.message = param[2];
             *  }
             *
             * return data.msg;
             *
             * });
             *  },
             *
             * message:""
             *  }
             */

        }
    );

// --身份证号码验证-支持新的带x身份证
    function isIdCardNo(num)
    {
        var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4,
            2, 1);
        var error;
        var varArray = new Array();
        var intValue;
        var lngProduct = 0;
        var intCheckDigit;
        var intStrLen = num.length;
        var idNumber = num;
        // initialize
        if ((intStrLen != 15) && (intStrLen != 18)) {
            // error = "输入身份证号码长度不对！";
            // alert(error);
            // frmAddUser.txtIDCard.focus();
            return false;
        }
        // check and set value
        for (i = 0; i < intStrLen; i++) {
            varArray[i] = idNumber.charAt(i);
            if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
                // error = "错误的身份证号码！.";
                // alert(error);
                // frmAddUser.txtIDCard.focus();
                return false;
            } else if (i < 17) {
                varArray[i] = varArray[i] * factorArr[i];
            }
        }

        if (intStrLen == 18) {
            // check date
            var date8 = idNumber.substring(6, 14);
            if (isDate8(date8) == false) {
                // error = "身份证中日期信息不正确！.";
                // alert(error);
                return false;
            }

            // calculate the sum of the products
            for (i = 0; i < 17; i++) {
                lngProduct = lngProduct + varArray[i];
            }

            // calculate the check digit
            intCheckDigit = 12 - lngProduct % 11;
            switch (intCheckDigit) {
                case 10:
                    intCheckDigit = 'X';
                    break;
                case 11:
                    intCheckDigit = 0;
                    break;
                case 12:
                    intCheckDigit = 1;
                    break;
            }

            // check last digit
            if (varArray[17].toUpperCase() != intCheckDigit) {
                // error = "身份证效验位错误!...正确为： " + intCheckDigit + ".";
                // alert(error);
                return false;
            }
        }
        else { // length is 15
               // check date
            var date6 = idNumber.substring(6, 12);
            if (isDate6(date6) == false) {
                // alert("身份证日期信息有误！.");
                return false;
            }
        }

        // alert ("Correct.");
        return true;
    }

    /**
     *
     * 判断是否为“YYYYMM”式的时期
     *
     *
     *
     */

    function isDate6(sDate) {
        if (!/^[0-9]{6}$/.test(sDate)) {
            return false;
        }
        var year, month, day;
        year = sDate.substring(0, 4);
        month = sDate.substring(4, 6);
        if (year < 1700 || year > 2500)
            return false
        if (month < 1 || month > 12)
            return false
        return true
    }

    /**
     *
     * 判断是否为“YYYYMMDD”式的时期
     *
     *
     *
     */

    function isDate8(sDate) {
        if (!/^[0-9]{8}$/.test(sDate)) {
            return false;
        }

        var year, month, day;
        year = sDate.substring(0, 4);
        month = sDate.substring(4, 6);
        day = sDate.substring(6, 8);
        var iaMonthDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

        if (year < 1700 || year > 2500)
            return false

        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
            iaMonthDays[1] = 29;

        if (month < 1 || month > 12)
            return false

        if (day < 1 || day > iaMonthDays[month - 1])
            return false

        return true

    }
});