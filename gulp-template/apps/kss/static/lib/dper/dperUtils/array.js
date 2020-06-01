define(function (require, exports, module) {
    /************************************************  数组工具   *********************************************************/

    /**
     * 数组 取最大值
     */
    Array.prototype.max = function() {
        var max = this[0];
        this.forEach(function(v, i){
            if(v > max){
                max = v;
            }
        });
        return max;
    }

    /**
     * 数组 取最小值
     */
    Array.prototype.min = function() {
        var min = this[0];
        this.forEach(function(v, i){
            if(v < min){
                min = v;
            }
        });
        return min;
    }

    /**
     * 数组 排除重复项
     */
    Array.prototype.rmRepeat = function(){
        return this.filter(function (element, index, self) {
            return self.indexOf(element) === index;
        });
    }

    /**
     * 数组 判断是否包含某个元素
     * @param str   需要判断的元素
     */
    Array.prototype.containIt = function (str) {
        var result = false;
        this.forEach(function(v, i){
            if(v == str){
                result = true;
                return;
            }
        });
        return result;
    }


    /**
     * 数组 对象排序
     * @param prop   被排序的属性
     * ps：
     * 用法: Array.sort(compare([属性名]));
     *
     */
    var compare = function (prop) {
        return function (obj1, obj2) {
            var val1 = obj1[prop];
            var val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    /**
     * 数组 数字排序
     */
    var compare_number = function(x, y){
        if(x < y){
            return -1;
        }
        if(x > y){
            return 1;
        }
        return 0;
    }

    /**
     * 数组 字母排序（忽略大小写）
     */
    var compare_varter = function(x, y){
        x = x.toLowerCase();
        y = y.toLowerCase();
        if(x < y){
            return -1;
        }
        if(x > y){
            return 1;
        }
        return 0;
    }
    module.exports = {
        compare: compare,
        compare_number: compare_number,
        compare_varter: compare_varter
    }
});