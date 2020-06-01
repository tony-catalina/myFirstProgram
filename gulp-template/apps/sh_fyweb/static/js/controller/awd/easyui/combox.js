define(function (require) {
    'use strict';
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var easyutil = require('awd/easyui/util');

    var main = {
        comboxInit: function (_element, option) {
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _code = tools.isUndefined(option.code) ? 'code' : option.code;
            var _content = tools.isUndefined(option.content) ? 'content' : option.content;
            var _multiple = tools.isUndefined(option.multiple) ? 'false' : option.multiple;
            var _remote = tools.isUndefined(option.remote) ? 'local' : 'remote';
            var _formate = tools.isUndefined(option.formatter) ? function (row) {
                var opts = $(this).combobox('options');
                return row[opts.textField];
            } : option.formatter;
            var _loadFilter=tools.isUndefined(option.loadFilter)?function(data){
                return data;
                }:option.loadFilter;
            _element.combobox({
                url: '',
                method: 'get',
                valueField: _code,
                textField: _content,
                multiple: _multiple,
                mode: _remote,
                loadFilter:_loadFilter,
                formatter:_formate,
                onShowPanel: function () {
                    _element.combobox('reload', _url);
                }
            });
        },
        comboxInitCache: function (_element, option) {
            var _data = tools.isUndefined(option.data) ? [] : option.data;
            var _code = tools.isUndefined(option.code) ? 'code' : option.code;
            var _content = tools.isUndefined(option.content) ? 'content' : option.content;
            var _multiple = tools.isUndefined(option.multiple) ? 'false' : option.multiple;
            var _remote = tools.isUndefined(option.remote) ? 'local' : 'remote';
            var _formate = tools.isUndefined(option.formatter) ? function (row) {
                var opts = $(this).combobox('options');
                return row[opts.textField];
            } : option.formatter;
            var _loadFilter=tools.isUndefined(option.loadFilter)?function(data){
                return data;
            }:option.loadFilter;
            _element.combobox({
                data: _data,
                method: 'get',
                valueField: _code,
                textField: _content,
                multiple: _multiple,
                mode: _remote,
                loadFilter:_loadFilter,
                formatter:_formate
            });
        },
        initBySelect: function (select) {
            var comboxs = $(select);
            comboxs.each(function () {
                var checkBox = $(this).attr('checkBox') == 'true';
                var url = $(this).attr('url');
                var option = {
                    url: url,
                    multiple: checkBox
                };
                main.comboxInit($(this), option);
            });
        },
        initDefault: function () {
            main.initBySelect('.awdCombox');
        }
    };
    return main;
});
