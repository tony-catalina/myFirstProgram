define(function (require) {
    var tools = require('awd/jquery/tools');
    main = {
        init: function (id, options, callback) {
            $this = this;
            var _url = tools.isUndefined(options['url']) ? '' : options['url'];
            var _checkbox = tools.isUndefined(options['checkbox']) ? false : options['checkbox'];
            var _line = tools.isUndefined(options['line']) ? false : options['line'];
            layui.use(['tree', 'util'], function () {
                var tree = layui.tree, layer = layui.layer, util = layui.util;
                $.ajax({
                    url: _url,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    async: false,//这得注意是同步
                    success: function (result) {
                        if (result.data) {
                            tree.render({
                                elem: '#' + id,
                                data: $this.getData(result['data']),
                                showLine: false,  //是否开启连接线
                                showCheckbox: _checkbox,
                                click: function (obj) {
                                    if (tools.isFunction(callback)) {
                                        callback(obj.data);
                                    }
                                }
                            });
                        }
                    }
                });


            });
        },
        getData: function (result) {
            var t = function (e) {
                for (var i = 0; e.length > i; i++) {
                    if (undefined != e[i]) {
                        e[i].pid = e[i].parent_id;
                        e[i].id = e[i].group_id;
                        e[i].title = e[i].name;
                        delete e[i].children;
                        delete e[i].parent_id;
                        delete e[i].group_id;
                        if (e[i].child) {
                            e[i].children = e[i].child;
                            delete e[i].child;
                            t(e[i].children);
                        }
                    } else {
                        delete e[i];
                    }
                }
            },
                i = [],
                a = $.extend(true, {}, result);
            for (var n in a) {
                var o = a[n],
                    s = o.parent_id;
                if (a[s]) a[s].child || (a[s].child = []),
                    a[s].child.push(a[o.group_id]);
                else {
                    var r = a[o.group_id];
                    if (r) {
                        i.push(r);
                    }
                }
            }
            t(i);
            return i;
        },
        otherinit: function (id, options, callback) {
            $this = this;
            var _url = tools.isUndefined(options['url']) ? '' : options['url'];
            var _checkbox = tools.isUndefined(options['checkbox']) ? false : options['checkbox'];
            var _line = tools.isUndefined(options['line']) ? false : options['line'];
            layui.use(['tree', 'util'], function () {
                var tree = layui.tree, layer = layui.layer, util = layui.util;
                $.ajax({
                    url: _url,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    async: false,//这得注意是同步
                    success: function (result) {
                        if (result.data) {
                            tree.render({
                                elem: '#' + id,
                                data: $this.otherData(result['data']),
                                showLine: false,  //是否开启连接线
                                showCheckbox: _checkbox,
                                click: function (obj) {
                                    if (tools.isFunction(callback)) {
                                        callback(obj.data);
                                    }
                                }
                            });
                        }
                    }
                });


            });
        },
        otherData: function (result) {
            var t = function (e) {
                for (var i = 0; e.length > i; i++) {
                    if (undefined != e[i]) {
                        e[i].pid = e[i].parent_id;
                        e[i].id = e[i].id;
                        e[i].title = e[i].name;
                        delete e[i].children;
                        delete e[i].parent_id;
                        // delete e[i].id;
                        if (e[i].child) {
                            e[i].children = e[i].child;
                            delete e[i].child;
                            t(e[i].children);
                        }
                    } else {
                        delete e[i];
                    }
                }
            },
                i = [],
                a = $.extend(true, {}, result);
            for (var n in a) {
                var o = a[n],
                    s = o.parent_id;
                if (a[s]) a[s].child || (a[s].child = []),
                    a[s].child.push(a[o.id]);
                else {
                    var r = a[o.id];
                    if (r) {
                        i.push(r);
                    }
                }
            }
            t(i);
            return i;
        },
        jsinit: function (id, options, callback) {
            $this = this;
            var _url = tools.isUndefined(options['url']) ? '' : options['url'];
            var _checkbox = tools.isUndefined(options['checkbox']) ? false : options['checkbox'];
            var _line = tools.isUndefined(options['line']) ? false : options['line'];
            layui.use(['tree', 'util'], function () {
                var tree = layui.tree, layer = layui.layer, util = layui.util;
                $.ajax({
                    url: _url,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    async: false,//这得注意是同步
                    success: function (result) {
                        if (result.data) {
                            tree.render({
                                elem: '#' + id,
                                data: $this.jsData(result['data']),
                                showLine: false,  //是否开启连接线
                                showCheckbox: _checkbox,
                                click: function (obj) {
                                    if (tools.isFunction(callback)) {
                                        callback(obj.data);
                                    }
                                }
                            });
                        }
                    }
                });


            });
        },
        jsData: function (result) {
            var t = function (e) {
                for (var i = 0; e.length > i; i++) {
                    if (undefined != e[i]) {
                        e[i].pid = e[i].jslx;
                        e[i].id = e[i].code;
                        e[i].title = e[i].name;
                        delete e[i].children;
                        delete e[i].code;
                        delete e[i].name;
                        if (e[i].child) {
                            e[i].children = e[i].child;
                            delete e[i].child;
                            t(e[i].children);
                        }
                    } else {
                        delete e[i];
                    }
                }
            },
                i = [],
                a = $.extend(true, {}, result);
            for (var n in a) {
                var o = a[n],
                    s = o.parent_id;
                i.push(o);
            }
            t(i);
            return i;

        },
        ycinit: function (id, options, callback) {
            $this = this;
            var _url = tools.isUndefined(options['url']) ? '' : options['url'];
            var _checkbox = tools.isUndefined(options['checkbox']) ? false : options['checkbox'];
            var _line = tools.isUndefined(options['line']) ? false : options['line'];
            layui.use(['tree', 'util'], function () {
                var tree = layui.tree, layer = layui.layer, util = layui.util;
                $.ajax({
                    url: _url,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    async: false,//这得注意是同步
                    success: function (result) {
                        if (result.data) {
                            tree.render({
                                elem: '#' + id,
                                data: $this.ycData(result['data']),
                                showLine: false,  //是否开启连接线
                                showCheckbox: _checkbox,
                                click: function (obj) {
                                    if (tools.isFunction(callback)) {
                                        callback(obj.data);
                                    }
                                }
                            });
                        }
                    }
                });


            });
        },
        ycData: function (result) {
            var t = function (e) {
                for (var i = 0; e.length > i; i++) {
                    if (undefined != e[i]) {
                        e[i].pid = e[i].jslx;
                        e[i].id = e[i].id;
                        e[i].title = e[i].name;
                        delete e[i].children;
                        // delete e[i].id;
                        delete e[i].name;
                        if (e[i].child) {
                            e[i].children = e[i].child;
                            delete e[i].child;
                            t(e[i].children);
                        }
                    } else {
                        delete e[i];
                    }
                }
            },
                i = [],
                a = $.extend(true, {}, result);
            for (var n in a) {
                var o = a[n],
                    s = o.parent_id;
                i.push(o);
            }
            t(i);
            return i;

        },
    };

    return main;
});