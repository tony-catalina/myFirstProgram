define(function (require) {
    require('layerui');
    require('layer.config');
    var tools = require('awd/jquery/tools');

    var main = {
        showWin: function (option, callback) {
            var buttons = tools.isUndefined(option.buttons) ? ['确定', '取消'] : option.buttons;
            var laywin = layer.open({
                // title: tools.isUndefined(option.title) ? '信息' : option.title,
                title: tools.isUndefined(option.title) ? false : false,
                area: tools.isUndefined(option.area) ? ['98%','100%'] : ['98%','100%'],
                type: tools.isUndefined(option.type) ? 1 : option.type,
                maxmin: tools.isUndefined(option.maxmin) ? false : option.maxmin,
                content: tools.isUndefined(option.content) ? '' : option.content,
                closeBtn: tools.isUndefined(option.closeBtn) ? 0 : option.closeBtn,
                btnAlign: tools.isUndefined(option.btnAlign) ? "c" : option.btnAlign,
                style: tools.isUndefined(option.style) ? "" : option.style,
                shade: 0,
                shadeClose: true,
                success: tools.isUndefined(option.success) ? function () {
                    console.log("弹出成功");
                } : option.success,
                cancel: tools.isUndefined(option.cancel) ? function () {
                    console.log("关闭弹窗");
                } : option.cancel,
                zIndex: 1000,
                btn: buttons,
                yes: function (index, layero) {
                    if (tools.isFunction(option.yes)) {
                        option.yes();
                    }
                },
                no: function (index, layero) {
                    if (tools.isFunction(option.yes)) {
                        option.yes();
                    }
                },
                end: function () {
                    console.log('as');
                    if (tools.isFunction(callback)) {
                        callback();
                    }
                },
                btn2: function (index, layero) {
                    if (tools.isFunction(option.btn2)) {
                        option.btn2();
                    }
                },
                btn3: function (index, layero) {
                    if (tools.isFunction(option.btn3)) {
                        option.btn3();
                    }
                    return false;

                },
            });
            if (tools.isTrue(option.max)) {
                layer.full(laywin);
            }
            return laywin;
        },
        closeWin: function (index) {
            layer.close(index);
            console.log('关闭form弹窗');
        },
        alert: function (msg) {
            layer.alert(msg, { icon: 0, shade: 0 });
        },
        msg: function (msg) {
            layer.msg(msg, { icon: 0, shade: 0 });
        },
        confirm:function(msg,fun){
            layer.confirm(msg, {icon: 3, title:'提示'}, function(index){
                if(tools.isFunction(fun)){
                    fun();
                }
            });
        }
    };
    return main;
});