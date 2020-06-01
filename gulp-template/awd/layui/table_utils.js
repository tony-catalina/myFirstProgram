define(function (require) {
    const $ = require('jquery');
    require('layerui');
    require('layui');
    var utils = require('awd/layui/utils');
    var util = require('awd/easyui/util');
    var tools = require('awd/jquery/tools');
    var main = {
        popup: function (options) {
            layui.use('table', function () {
                var table = layui.table;
                var _title = options.title === undefined ? '数据展示' : options.title;
                var _area = options.area === undefined ? ['95%', '95%'] : options.area;
                var _url = options.url === undefined ? '' : options.url;
                var _toolbar = options.toolbar === undefined ? '' : options.toolbar;
                var _height = options.height === undefined ? '480px' : options.height;
                var _params = options.params === undefined ? '' : options.params;
                var _columns = options.columns === undefined ? '' : options.columns;
                var _method = options.method === undefined ? 'post' : options.method;
                var _parseData = options.parseData === undefined ? function (res) { //res 即为原始返回的数据
                    return {
                        "code": res.code, //解析接口状态
                        "msg": res.msg, //解析提示文本
                        "count": res.result.total, //解析数据长度
                        "data": res.result.rows //解析数据列表
                    };
                } : options.parseData;
                var _request = tools.isUndefined(options['request']) ? [] : options['request'];
                var _content = options.content === undefined ? '<div><table id="templateTable"></table></div>' : options.content;
                layer.open({
                    title: [_title, 'font-size:18px;font-weight: bold;'],
                    area: _area,
                    content: _content,
                    closeBtn: 1,
                    btn: ['确认', '取消'],
                    maxmin: true,
                    success: function (index, layero) {
                        var index = layer.load();
                        table.render({
                            elem: '#templateTable',
                            height: _height,
                            width: '100%',
                            method: _method,
                            cellMinWidth: 80,
                            toolbar: _toolbar,
                            url: _url,
                            limit: 20,
                            page: true,
                            request: _request,
                            where: _params,
                            cols: [_columns],
                            parseData: _parseData,
                            done: function () {
                                layer.close(index);
                            }
                        });
                    }
                })
            })
        },
        init: function (_id, options, callback) {
            layui.use('table', function () {
                var _url = tools.isUndefined(options['url']) ? '' : options['url'];
                var _method = tools.isUndefined(options['method']) ? 'post' : options['method'];
                var _page = tools.isUndefined(options['page']) ? true : options['page'];
                var _even = tools.isUndefined(options['even']) ? true : options['even'];
                var _height = tools.isUndefined(options['height']) ? '50' : options['height'];
                var _skin = tools.isUndefined(options['skin']) ? 'line' : options['skin'];
                var _param = tools.isUndefined(options['param']) ? { rows: 20 } : options['param'];
                var _clumns = tools.isUndefined(options['clumns']) ? [] : options['clumns'];
                var _pagesize = tools.isUndefined(options['pagesize']) ? [] : options['pagesize'];
                var _toolbar = options.toolbar === undefined ? '' : options.toolbar;
                var _rowclick = options.rowclick === undefined ? function () { } : options.rowclick;
                var _parseData = options.parseData === undefined ? function (res) { //res 即为原始返回的数据
                    return {
                        "code": res.code, //解析接口状态
                        "msg": res.msg, //解析提示文本
                        "count": res.result.total, //解析数据长度
                        "data": res.result.rows //解析数据列表
                    };
                } : options.parseData;
                var table = layui.table;
                var layuiTable = table.render({
                    id: _id,
                    elem: '#' + _id,
                    url: _url,
                    toolbar: _toolbar,
                    method: _method,
                    page: _page,
                    even: _even,
                    height: _height,
                    skin: _skin,
                    limit: _pagesize,
                    where: _param,
                    cols: [
                        _clumns
                    ],
                    parseData: _parseData
                });
                if (tools.isFunction(callback)) {
                    callback(layuiTable);
                }
                $(document).on("click", ".layui-table-body table.layui-table tbody tr", function () {
                    var obj = event ? event.target : event.srcElement;
                    var tag = obj.tagName;
                    var checkbox = $(this).find("td div.laytable-cell-checkbox div.layui-form-checkbox I");
                    if (checkbox.length != 0) {
                        checkbox.click();
                        var form = layui.form;
                        var checkStatus = table.checkStatus(_id);
                        if (tools.isFunction(_rowclick)) {
                            _rowclick(checkStatus.data);
                        }
                    }

                });

                $(document).on("click", "td div.laytable-cell-checkbox div.layui-form-checkbox", function (e) {
                    e.stopPropagation();
                });

                $(document).on("click", ".layui-table-body table.layui-table tbody tr", function () {
                    var obj = event ? event.target : event.srcElement;
                    var tag = obj.tagName;
                    var radio = $(this).find("td div.laytable-cell-radio div.layui-form-radio I");
                    if (radio.length != 0) {
                        radio.click();
                        var form = layui.form;
                        var checkStatus = table.checkStatus(_id);
                        if (tools.isFunction(_rowclick)) {
                            _rowclick(checkStatus.data);
                        }
                    }

                });

                $(document).on("click", "td div.laytable-cell-radio div.layui-form-radio", function (e) {
                    e.stopPropagation();
                });

            });

        },
        initPop: function (options) {
            layui.use('table', function () {
                var table = layui.table;
                var _title = options.title === undefined ? '数据展示' : options.title;
                var _area = options.area === undefined ? ['95%', '95%'] : options.area;
                var _url = options.url === undefined ? '' : options.url;
                var _height = options.height === undefined ? '480px' : options.height;
                var _params = options.params === undefined ? '' : options.params;
                var _columns = options.columns === undefined ? '' : options.columns;
                var _content = options.content === undefined ? '<div><table id="templateTable"></table></div>' : options.content;
                var _toolbar = options.toolbar === undefined ? '' : options.toolbar;
                var _parseData = options.parseData === undefined ? function (res) { //res 即为原始返回的数据
                    return {
                        "code": res.code, //解析接口状态
                        "msg": res.msg, //解析提示文本
                        "count": res.result.total, //解析数据长度
                        "data": res.result.rows //解析数据列表
                    };
                } : options.parseData;
                layer.open({
                    title: [_title, 'font-size:18px;font-weight: bold;'],
                    area: _area,
                    content: _content,
                    toolbar: _toolbar,
                    closeBtn: 1,
                    btn: ['确认', '取消'],
                    maxmin: true,
                    success: function (index, layero) {
                        table.render({
                            elem: '#templateTable',
                            height: _height,
                            width: '100%',
                            method: 'post',
                            cellMinWidth: 80,
                            url: _url,
                            limit: 20,
                            page: true,
                            where: _params,
                            cols: [_columns],
                            parseData: _parseData
                        });
                    }
                });
            });
        },
        getSelected: function (id, callback, refresh) {
            layui.use('table', function () {
                var table = layui.table;
                var checkStatus = table.checkStatus(id);
                if (tools.isFunction(callback)) {
                    callback(checkStatus.data, refresh);
                }
            });
        },
        jjbPop: function (option, callback) {
            var buttons = tools.isUndefined(option.buttons) ? ['确定', '取消'] : option.buttons;
            var laywin = layer.open({
                title: tools.isUndefined(option.title) ? '数据展示' : option.title,
                area: tools.isUndefined(option.area) ? ['98%', '100%'] : option.area,
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
                // yes: function (index, layero) {
                //     if (tools.isFunction(option.yes)) {
                //         option.yes();
                //     }
                // },
                // no: function (index, layero) {
                //     if (tools.isFunction(option.yes)) {
                //         option.yes();
                //     }
                // },
                // end: function () {
                //     console.log('as');
                //     if (tools.isFunction(callback)) {
                //         callback();
                //     }
                // },
                // btn2: function (index, layero) {
                //     if (tools.isFunction(option.btn2)) {
                //         option.btn2();
                //     }
                // },
                // btn3: function (index, layero) {
                //     if (tools.isFunction(option.btn3)) {
                //         option.btn3();
                //     }
                //     return false;

                // },
            });
        }
    };
    return main;
});
