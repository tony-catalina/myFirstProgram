define(function(require) {
    require('layerui');
    var tools = require('awd/jquery/tools');
    var main = {
        showWin: function(option) {
            var laywin = layer.open({
                title: tools.isUndefined(option.title) ? '信息' : option.title,
                area: tools.isUndefined(option.area) ? 'auto' : option.area,
                type: tools.isUndefined(option.type) ? 1 : option.type,
                maxmin: tools.isUndefined(option.maxmin) ? true : option.maxmin,
                content: tools.isUndefined(option.content) ? '' : option.content,
                shade: 0,
                shadeClose: true,
                success: tools.isUndefined(option.success) ? function() {
                    console.log("弹出成功");
                } : option.success,
                cancel: tools.isUndefined(option.cancel) ? function() {
                    console.log("关闭弹窗");
                } : option.cancel,
                zIndex: 1000,
                yes: function(index, layero) {
                    if (tools.isFunction(option.yes)) {
                        option.yes();
                    }
                },
                btn2: function(index, layero) {
                    if (tools.isFunction(option.btn2)) {
                        option.btn2();
                    }
                },
                btn3: function(index, layero) {
                    if (tools.isFunction(option.btn3)) {
                        option.btn3();
                    }
                }
            });
            if (tools.isTrue(option.max)) {
                layer.full(laywin);
            }
            return laywin;
        },
        closeWin: function(index) {
            layer.close(index);
        },
        alert: function(msg) {
            layer.alert(msg, { icon: 0, shade: 0 });
        }
    };
    return main;
});