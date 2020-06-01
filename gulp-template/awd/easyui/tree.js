define(function(require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/easyui/util');
    'use strict';
    var main = {
        initTree: function(id, option) {
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _method = tools.isUndefined(option.method) ? 'post' : option.method;
            var _animate = tools.isUndefined(option.animate) ? false : option.animate;
            var _checkbox = tools.isUndefined(option.checkbox) ? false : option.checkbox;
            var _cascadeCheck = tools.isUndefined(option.cascadeCheck) ? true : option.cascadeCheck;
            var _onlyLeafCheck = tools.isUndefined(option.onlyLeafCheck) ? false : option.onlyLeafCheck;
            var _lines = tools.isUndefined(option.lines) ? false : option.lines;
            var _dnd = tools.isUndefined(option.dnd) ? false : option.dnd;
            var _data = tools.isUndefined(option.data) ? [] : option.data;
            var _select = tools.isUndefined(option.select) ? function() {} : option.select;
            var _BeforeExpand = tools.isUndefined(option.BeforeExpand) ? function() {} : option.BeforeExpand;
            var _BeforeLoad = tools.isUndefined(option.BeforeLoad) ? function() {} : option.BeforeLoad;
            var _fomatter = tools.isUndefined(option.fomatter) ? function(node) {
                return node.text;
            } : option.fomatter;
            var _loader = tools.isUndefined(option.loader) ? function(param, success, error) {
                var opts = $(this).tree('options');
                if (!opts.url) {
                    return false;
                }
                if (opts.queryParams) {
                    param = $.extend({}, opts.queryParams, param);
                }
                $.ajax({
                    type: opts.method,
                    url: opts.url,
                    data: $.param(param),
                    dataType: 'text',
                    contentType: 'application/json; charset=utf-8', //application/json
                    success: function(data) {
                        success(utils.str2Json(data));
                    },
                    error: function() {
                        error.apply(this, arguments);
                    }
                });
            } : option.loader;
            var _loaderFilter = tools.isUndefined(option.loaderFilter) ? function(data, parent) {
                return data.result;
            } : option.loaderFilter;
            var _setQueryParams = tools.isUndefined(option.setQueryParams) ? function(jq, params) {
                return jq.each(function() {
                    $(this).tree('options').queryParams = params;
                });
            } : option.setQueryParams;
            $("#" + id).tree({
                url: '',
                method: _method,
                animate: _animate,
                checkbox: _checkbox,
                cascadeCheck: _cascadeCheck,
                onlyLeafCheck: _onlyLeafCheck,
                lines: _lines,
                dnd: _dnd,
                formatter: _fomatter,
                loader: _loader,
                loadFilter: _loaderFilter,
                setQueryParams: _setQueryParams,
                onSelect: _select,
                onBeforeExpand: _BeforeExpand,
                onBeforeLoad: _BeforeLoad
            });
            var opts = $('#' + id).tree('options'); //点击查询加载数据
            opts.url = _url;
            $('#' + id).tree('reload');
        }
    };
    return main;
});