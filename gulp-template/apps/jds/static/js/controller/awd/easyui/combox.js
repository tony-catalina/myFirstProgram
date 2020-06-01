define(function(require) {
    'use strict';
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');
    var easyutil = require('awd/easyui/util');

    var main = {
        comboxInit: function(_element, option) {
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _code = tools.isUndefined(option.code) ? 'code' : option.code;
            var _content = tools.isUndefined(option.content) ? 'content' : option.content;
            var _multiple = tools.isUndefined(option.multiple) ? 'false' : option.multiple;
            var _remote = tools.isUndefined(option.remote) ? 'local' : 'remote';
            var _text=_element.attr('text');
            var _formate = tools.isUndefined(option.formatter) ? function(row) {
                return row[_content];
            } : option.formatter;
            var _loadFilter = tools.isUndefined(option.loadFilter) ? function(data) {
                return data;
            } : option.loadFilter;
            _element.combobox({
                url: '',
                method: 'post',
                valueField: _code,
                textField: _content,
                multiple: _multiple,
                mode: _remote,
                loadFilter: _loadFilter,
                formatter: _formate,
                onShowPanel: function() {
                    var s = $(this).combobox('getData')
                    if (s.length == 0) {
                        $(this).combobox('options').url = _url;
                        $(this).combobox('reload');
                    }
                }
            });
            if(!tools.isUndefined(_text)){
                _element.combobox('setText',_text);
            }

        },
        comboxInitCache: function(_element, option) {
            var _data = tools.isUndefined(option.data) ? [] : option.data;
            var _code = tools.isUndefined(option.code) ? 'code' : option.code;
            var _content = tools.isUndefined(option.content) ? 'content' : option.content;
            var _multiple = tools.isUndefined(option.multiple) ? 'false' : option.multiple;
            var _remote = tools.isUndefined(option.remote) ? 'local' : 'remote';
            var _formate = tools.isUndefined(option.formatter) ? function(row) {
                var opts = $(this).combobox('options');
                return row[opts.textField];
            } : option.formatter;
            var _loadFilter = tools.isUndefined(option.loadFilter) ? function(data) {
                return data;
            } : option.loadFilter;
            _element.combobox({
                data: _data,
                method: 'post',
                valueField: _code,
                textField: _content,
                multiple: _multiple,
                mode: _remote,
                loadFilter: _loadFilter,
                formatter: _formate
            });
        },
        initBySelect: function(select, url) {
            var comboxs = $(select);
            comboxs.each(function(idx, el) {
                var $this = $(el);
                var checkBox = $this.attr('checkBox') == 'true';
                var postUrl;
                if (url) {
                    var code =  $this.attr('code');
                    postUrl = url + "?node=" + code;
                } else {
                    postUrl =  $this.attr('dataurl');
                }
                var option = {
                    url: postUrl,
                    multiple: checkBox
                };
                main.comboxInit($this, option);
            })
        },
        initDefault: function() {
            main.initBySelect('.awdCombox');
        }
    };
    return main;
});