(function(){
    //测试下正则表达式，得到一个_super的正则表达式对象，以检查是否使用了基类的方法
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    //基类
    this.Class = function(){};

    //extend方法
    Class.extend = function(prop) {
        //保存基类的原型，这个this就是基类类型，就是函数的名称
        var _super = this.prototype;

        //定义一个基类的实例，为了给派生类的prototype用，直接跳过了init方法，init方法可以理解为各个类私有的方法，并且不用于派生
        initializing = true;
        var prototype = new this();
        initializing = false;

        //对prototype属性的重新赋值
        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && //必须是函数
            typeof _super[name] == "function" && fnTest.test(prop[name]) ? //必须是使用了_super方法
                (function(name, fn){
                    return function() {
                        //保存原对象
                        var tmp = this._super;

                        //增加一个_super方法，并且赋值为基类的方法
                        this._super = _super[name];

                        //真正调用派生类方法，派生类方法中的this._super刚刚已经更新为了基类的方法
                        var ret = fn.apply(this, arguments);

                        //restore
                        this._super = tmp;

                        //返回值仍然是派生的调用返回值
                        return ret;
                    };
                })(name, prop[name]) :
                prop[name];//条件语句
        }

        //dummy类
        function Class() {
            // All construction is actually done in the init method
            if ( !initializing && this.init )
                this.init.apply(this, arguments);
        }

        //更新prototype
        Class.prototype = prototype;

        //因为上面这句会让它找不到constructior
        Class.prototype.constructor = Class;

        //没错，它也是有extend方法的
        Class.extend = arguments.callee;

        //返回了派生类
        return Class;
    };
})();