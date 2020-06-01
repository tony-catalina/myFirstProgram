/*TMODJS:{"version":"1.0.0"}*/
!function () {

    function template (filename, content) {
        return (
            /string|function/.test(typeof content)
            ? compile : renderFile
        )(filename, content);
    };


    var cache = template.cache = {};
    var String = this.String;

    function toString (value, type) {

        if (typeof value !== 'string') {

            type = typeof value;
            if (type === 'number') {
                value += '';
            } else if (type === 'function') {
                value = toString(value.call(value));
            } else {
                value = '';
            }
        }

        return value;

    };


    var escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    };


    function escapeFn (s) {
        return escapeMap[s];
    }


    function escapeHTML (content) {
        return toString(content)
        .replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    };


    var isArray = Array.isArray || function(obj) {
        return ({}).toString.call(obj) === '[object Array]';
    };


    function each (data, callback) {
        if (isArray(data)) {
            for (var i = 0, len = data.length; i < len; i++) {
                callback.call(data, data[i], i, data);
            }
        } else {
            for (i in data) {
                callback.call(data, data[i], i);
            }
        }
    };


    function resolve (from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/;
        var dirname = ('./' + from).replace(/[^/]+$/, "");
        var filename = dirname + to;
        filename = filename.replace(/\/\.\//g, "/");
        while (filename.match(DOUBLE_DOT_RE)) {
            filename = filename.replace(DOUBLE_DOT_RE, "/");
        }
        return filename;
    };


    var utils = template.utils = {

        $helpers: {},

        $include: function (filename, data, from) {
            filename = resolve(from, filename);
            return renderFile(filename, data);
        },

        $string: toString,

        $escape: escapeHTML,

        $each: each
        
    };


    var helpers = template.helpers = utils.$helpers;


    function renderFile (filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: 'Render Error',
            message: 'Template not found'
        });
        return data ? fn(data) : fn; 
    };


    function compile (filename, fn) {

        if (typeof fn === 'string') {
            var string = fn;
            fn = function () {
                return new String(string);
            };
        }

        var render = cache[filename] = function (data) {
            try {
                return new fn(data, filename) + '';
            } catch (e) {
                return showDebugInfo(e)();
            }
        };

        render.prototype = fn.prototype = utils;
        render.toString = function () {
            return fn + '';
        };

        return render;
    };


    function showDebugInfo (e) {

        var type = "{Template Error}";
        var message = e.stack || '';

        if (message) {
            // 利用报错堆栈信息
            message = message.split('\n').slice(0,2).join('\n');
        } else {
            // 调试版本，直接给出模板语句行
            for (var name in e) {
                message += "<" + name + ">\n" + e[name] + "\n\n";
            }  
        }

        return function () {
            if (typeof console === "object") {
                console.error(type + "\n\n" + message);
            }
            return type;
        };
    };


    template.get = function (filename) {
        return cache[filename.replace(/^\.\//, '')];
    };


    template.helper = function (name, helper) {
        helpers[name] = helper;
    };


    if (typeof define === 'function') {define(function() {return template;});} else if (typeof exports !== 'undefined') {module.exports = template;} else {this.template = template;}
    
    /*v:1*/
template('comTpls/dashboard',' <div class="cent malign-tl">  <div class="cent-top malign-tl dper-full-w">  <div class="cent-top-left malign-tl dper-full-h"> <div class="cent-top-left-l malign-tl dper-full-h"> <div class="top-left-l malign-center bg-img"></div> </div> <div class="cent-top-left-r malign-tr dper-full-h"> <div class="r-box dper-full-w malign-center font-22"> <div class="r-box-top dper-full-w malign-tl"> <p class="malign-center-left"> <span class="font-30">0102</span>&nbsp<span>监室</span></p> </div> <div class="r-box-bottom dper-full-w malign-bl"><span class="malign-center-left">张山正在提讯中</span></div> </div> </div> </div>  <div class="cent-top-center malign-tl dper-full-h"> <div class="cent-top-left-l malign-tl dper-full-h"> <div class="top-left-c malign-center bg-img"></div> </div> <div class="cent-top-left-r malign-tr dper-full-h"> <div class="r-box dper-full-w malign-center font-22"> <div class="r-box-top dper-full-w malign-tl"> <p class="malign-center-left"> <span class="font-30">0301</span>&nbsp<span>监室</span></p> </div> <div class="r-box-bottom dper-full-w malign-bl"><span class="malign-center-left">李四单独关押即将到期</span></div> </div> </div> </div>  <div class="cent-top-right malign-tr dper-full-h"> <div class="cent-top-left-l malign-tl dper-full-h"> <div class="top-left-r malign-center bg-img"></div> </div> <div class="cent-top-left-r malign-tr dper-full-h"> <div class="r-box dper-full-w malign-center font-22"> <div class="r-box-top dper-full-w malign-tl"> <p class="malign-center-left"> <span class="font-30">0405</span>&nbsp<span>监室</span></p> </div> <div class="r-box-bottom dper-full-w malign-bl"><span class="malign-center-left">张二械具使用即将到期 </span></div> </div> </div> </div> </div>  <div class="cent-center malign-tl dper-full-w"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-tl"> <span class="malign-center-text font-18 dper-fw">交班人员</span> </div> </div> <div class="cent-center-bottom malign-center-bottom"> <div class="center-bottom-box1 malign-tl"> <div class="center1 bg-img-full malign-bl dper-full-w"> <div class="center1-top malign-tl dper-full-w"> <div class="center1-top-t dper-full-w malign-tl"> <div class="center1-1 malign-center-bottom bg-img"></div> </div> <div class="center1-top-b malign-bl dper-full-w"> <div class="center1-top-box malign-center-top"> <span class="malign-center-text font-24">交班人员:</span> </div> </div> </div> <div class="center1-bottom malign-center-bottom dper-full-w"> <span class="malign-center-text font-24">张三</span> </div> </div> </div> <div class="center-bottom-box2 malign-tl"> <div class="center2 bg-img-full malign-bl dper-full-w"> <div class="center1-top malign-tl dper-full-w"> <div class="center1-top-t dper-full-w malign-tl"> <div class="center2-2 malign-center-bottom bg-img"></div> </div> <div class="center1-top-b malign-bl dper-full-w"> <div class="center1-top-box malign-center-top"> <span class="malign-center-text font-24">交班时间:</span> </div> </div> </div> <div class="center1-bottom malign-center-bottom dper-full-w"> <span class="malign-center-text font-22">2019-10-24 11:31:46</span> </div> </div> </div> <div class="center-bottom-box3 malign-tr"> <div class="center3 bg-img-full malign-bl dper-full-w"> <div class="center1-top malign-tl dper-full-w"> <div class="center1-top-t dper-full-w malign-tl"> <div class="center3-3 malign-center-bottom bg-img"></div> </div> <div class="center1-top-b malign-bl dper-full-w"> <div class="center1-top-box malign-center-top"> <span class="malign-center-text font-24">工作记录:</span> </div> </div> </div> <div class="center1-bottom malign-center-bottom dper-full-w"> <p class="malign-center-left font-16 dper-fw"><span>0302监室的张山正在使用笔，</span></br> <span>0301监室的李四正在办理家 属会见中.</span></p> </div> </div> </div> <div class="center-bottom-box4 malign-tr"> <div class="center4 bg-img-full malign-bl dper-full-w"> <div class="center1-top malign-tl dper-full-w"> <div class="center1-top-t dper-full-w malign-tl"> <div class="center4-4 malign-center-bottom bg-img"></div> </div> <div class="center1-top-b malign-bl dper-full-w"> <div class="center1-top-box malign-center-top"> <span class="malign-center-text font-24">注意事项:</span> </div> </div> </div> <div class="center1-bottom malign-center-bottom dper-full-w"> <span class="malign-center-text font-16 dper-fw">0403监室的张山情绪异常</span> </div> </div> </div> </div> </div>  <div class="cent-bottom malign-bl dper-full-w"> <div class="cent-bottom-left malign-tl dper-full-h"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-tl"> <span class="malign-center-text font-18 dper-fw">待办事项</span> </div> </div> <div class="echars0 dper-full-w malign-bl"></div> </div> <div class="cent-bottom-right malign-tr dper-full-h"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-tl"> <span class="malign-center-text font-18 dper-fw">安防报警</span> </div> </div> <div class="echars1-box dper-full-w malign-bl"> <div class="echars1-img bg-img malign-center"></div> <div class="echars1 dper-full-h"></div> </div> </div> </div> </div>  <div class="right malign-tr dper-full-h"> <div class="right-top malign-tl dper-full-w"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-center-left"> <span class="malign-center-text font-18 dper-fw">本日未完成工作</span> </div> </div> <div class="right-top-box malign-bl dper-full-w"> <div class="right-top-box-one malign-center-top"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">谈话教育</span></div> <div id="right-top-tiao" class="box-one-tiao malign-center dper-full-h" style="cursor: pointer"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">10</span><span class="malign-center-right font-18">条</span></p> </div> <div class="right-top-box-two malign-center"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">值班安排</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> <div class="right-top-box-three malign-center-bottom"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">清监</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> </div> </div> <div class="right-center malign-tl dper-full-w"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-center-left"> <span class="malign-center-text font-18 dper-fw">本周未完成工作</span> </div> </div> <div class="right-center-box malign-bl dper-full-w"> <div class="right-center-box-t malign-center-top"> <div class="box-t-t malign-tl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">谈话教育</span></div> <div id="right-center-tiao" class="box-one-tiao malign-center dper-full-h" style="cursor: pointer"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">10</span><span class="malign-center-right font-18">条</span></p> </div> <div class="box-t-b malign-bl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">值班安排</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> </div> <div class="right-center-box-b malign-center-bottom"> <div class="box-t-t malign-tl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">清监</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> <div class="box-t-b malign-bl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">械具解除</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">3</span><span class="malign-center-right font-18">条</span></p> </div> </div> </div> </div> <div class="right-bottom malign-bl dper-full-w"> <div class="cent-center-title malign-tl"> <div class="cent-center-title-left malign-center-left"></div> <div class="cent-center-title-right dper-full-h malign-center-left"> <span class="malign-center-text font-18 dper-fw">本月未完成工作</span> </div> </div> <div class="right-bottom-box malign-bl dper-full-w"> <div class="right-bottom-box-t malign-center-top"> <div class="bottom-box-t-t malign-tl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">谈话教育</span></div> <div id="right-bottom-tiao" class="box-one-tiao malign-center dper-full-h" style="cursor: pointer"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">10</span><span class="malign-center-right font-18">条</span></p> </div> <div class="bottom-box-t-c malign-tl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">值班安排</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> <div class="bottom-box-t-b malign-bl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">清监</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> </div> </div> <div class="right-bottom-box-b malign-center-bottom"> <div class="bottom-box-b-t malign-tl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">械具解除</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">3</span><span class="malign-center-right font-18">条</span></p> </div> <div class="bottom-box-b-b malign-bl dper-full-w"> <div class="box-one-span malign-tl dper-full-h"><span class="malign-center-text font-16">单独关押</span></div> <div class="box-one-tiao malign-center dper-full-h"> <div class="box-one-tiao1 malign-tl dper-full-h"></div> </div> <p class="box-one-shu malign-tr dper-full-h"><span class="malign-center-left font-30">1</span><span class="malign-center-right font-18">条</span></p> </div> </div> </div> </div> </div> ');

}()