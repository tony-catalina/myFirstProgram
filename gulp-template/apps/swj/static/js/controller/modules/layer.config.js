define(function (require) {
    var layer = require('layerui');

    // 由 RequireJS 或 SeaJS 加载的 layer 需指定路径以加载 CSS，文档参见：
    // https://www.layui.com/doc/modules/layer.html#//layer.config
    layer.config({
        // 由于该模块会被多个页面引用，故不可采用相对路径
        path: '/apps/swj/static/lib/'
    });

    return layer;
});
