define(function (require) {
    'use strict';
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/easyui/util');
    var main = {
        initGrid: function (id, option) {
            var _title = tools.isUndefined(option.title) ? '' : option.title;
            var _width = tools.isUndefined(option.width) ? 500 : option.width;
            var _height = tools.isUndefined(option.height) ? 200 : option.height;
            var _rownumbers = tools.isUndefined(option.rownumbers) ? true : option.rownumbers;
            var _remoteSort = tools.isUndefined(option.remoteSort) ? false : option.remoteSort;
            var _nowrap = tools.isUndefined(option.nowrap) ? false : option.nowrap;
            var _fitColumns = tools.isUndefined(option.fitColumns) ? true : option.fitColumns;
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _columns = tools.isUndefined(option.columns) ? [] : option.columns;
            var _groupField = tools.isUndefined(option.groupField) ? 'id' : option.groupField;
            var _groupFormatter = tools.isUndefined(option.groupFormatter) ? function (value, rows) {
                return value + ' - ' + rows.length + ' Item(s)';
            } : option.groupFormatter;
            $(id).datagrid({
                title: _title,
                width: _width,
                height: _height,
                rownumbers: _rownumbers,
                remoteSort: _remoteSort,
                nowrap: _nowrap,
                fitColumns: _fitColumns,
                url: _url,
                columns: [_columns],
                groupField: _groupField,
                view: $.fn.propertygrid.defaults.groupView,
                groupFormatter: _groupFormatter
            });
        }
    };
    return main;
});