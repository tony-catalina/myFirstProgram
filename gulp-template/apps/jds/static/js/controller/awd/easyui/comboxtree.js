define(function(require) {
    'use strict';
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var main = {
        comboxInit: function(_element, option) {
            var _url = tools.isUndefined(option.url) ? '' : option.url;
            var _leafcheck = tools.isUndefined(option.leafcheck) ? true : option.leafcheck;
            var _isJqtree = tools.isUndefined(option.jqtree) ? true : option.jqtree;
            _element.combotree({
                url: '',
                method: 'post',
                multiple: option.multiple,
                onBeforeSelect: function(node) {
                    if (!$(this).tree('isLeaf', node.target) && _leafcheck) {
                        return false;
                    }
                },
                onShowPanel: function() {
                    $(this).combotree('options').url = _url;
                    $(this).combotree('reload');
                },
                onBeforeExpand: function(node) {
                    var url='';
                    if(_isJqtree){
                        url = _url.substring(0, _url.indexOf('_'));
                        _element.combotree('tree').tree('options').url = url + '_js/jsCombotree';
                    }else{
                        url = _url.substring(0, _url.indexOf('?'))+'?id='+node.id;
                        _element.combotree('tree').tree('options').url=url;
                    }
                },
                onChange: function(newValue, oldValue) {
                    console.log(newValue, oldValue);
                },
            });

        },
        initBySelect: function(select, url,isjqtree) {
            var isjqtree=tools.isUndefined(isjqtree)?true:false;
            $(select).each(function(idx, el) {
                var $this = $(el);
                var postUrl = tools.isUndefined(url) ? $this.attr('dataurl') : url;
                var checkBox = tools.isUndefined($this.attr('checkBox')) ? false : $this.attr('checkBox');
                var option = {
                    url: postUrl,
                    multiple: checkBox,
                    jqtree:isjqtree
                }
                main.comboxInit($this, option);
            });
        },
        initTagBox: function(select, postUrl) {
            var tagboxs = $(select);
            tagboxs.each(function() {
                var _this = $(this);
                var _code = _this.attr("code");
                var _url = tools.isUndefined(postUrl) ? _this.attr('url') : postUrl;
                _this.tagbox({
                    url: _url + '?node=' + _code,
                    valueField: 'code',
                    textField: 'content',
                    limitToList: true,
                    hasDownArrow: true,
                    onSelect: function(value) {
                        if ($(this).tagbox("getValues").length > 4) {
                            utils.alert('选择不能大于5个');
                            return false;
                        }
                    }
                })

            })
        }
    }
    return main;
});