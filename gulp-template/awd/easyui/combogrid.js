define(function (require) {
    require('jquery');
    require('easyui');
    var tools = require('awd/jquery/tools');

    var main = {
        initPageClass: function (classid, _url) {
            var select = classid == undefined ? '.awdCombogrid' : classid;
            $(select).each(function (idx, el) {
                var _this = $(el);
                var checkbox = _this.attr('checkBox') == 'true';
                var queryText = _this.attr('queryText');
                var _code = _this.attr('code');
                var queryField = _this.attr('queryField') == undefined ? 'queryParams' : _this.attr('queryField');
                var biaoti = $(this).prev().combobox().prevObject.attr('biaoti');
                var _text = _this.attr('text');
                biaoti = biaoti == undefined ? '内容' : biaoti;
                var idfiled = queryText == true ? 'content' : 'code';
                _this.combogrid({
                    url: '',
                    panelWidth: 500,
                    idField: idfiled,
                    valueField: idfiled,
                    textField: 'content',
                    loadMsg: '加载中',
                    multiple: checkbox,
                    method: 'post',
                    mode: 'remote',
                    pagination: true,
                    rownumbers: true,
                    fit: true,
                    columns: [
                        [{
                            field: 'ck',
                            checkbox: $(this).attr('checkBox') == 'true'
                        },
                        {
                            field: 'fieldName',
                            title: 'xx',
                            width: 80,
                            hidden: true
                        },
                        {
                            field: 'code',
                            title: 'code',
                            width: 150
                        },
                        {
                            field: 'content',
                            title: biaoti,
                            width: 150,
                            formatter: function (value, row, index) {
                                return '<span title=' + (value == null ? "" : value) + '>' + (value == null ? "" : value) + '</span>'
                            }
                        },
                        {
                            field: 'py',
                            title: '拼音',
                            width: 80
                        }
                        ]
                    ],
                    onShowPanel: function () {
                        _this.combogrid('clear')
                        var $grid = _this.combogrid('grid');
                        $grid.datagrid('options').url = _url;
                        $grid.datagrid('load', { fieldname: _code });
                    },
                    loadFilter: function (data) {
                        if (data.result) {
                            return data.result;
                        }
                    },

                    keyHandler: {
                        // 搜索功能
                        query: function (e) {
                            var $grid = _this.combogrid('grid');
                            if (e.trim()) {
                                $grid.datagrid('load', {
                                    queryParams: e.trim(),
                                    fieldname: _code
                                });
                            }

                        }
                    }
                });
                if (!tools.isUndefined(_text)) {
                    _this.combogrid('setText', _text);
                }
            });
        },
        initJstzJshClass: function (classid, _url, ay, hjd, type) {
            //监室调整监室下拉
            var jstzjshselect = classid == undefined ? '.awdCombogridJstzJs' : classid;
            $(jstzjshselect).each(function (idx, el) {
                var _this = $(el);
                var checkbox = _this.attr('checkBox') == 'true';
                var queryText = _this.attr('queryText');
                var _code = _this.attr('code');
                var queryField = _this.attr('queryField') == undefined ? 'queryParams' : _this.attr('queryField');
                var idfiled = queryText == true ? 'jsh' : 'jsh';
                _this.combogrid({
                    url: '',
                    panelWidth: 630,
                    idField: idfiled,
                    valueField: idfiled,
                    textField: 'content',
                    loadMsg: '加载中',
                    multiple: checkbox,
                    method: 'post',
                    mode: 'remote',
                    pagination: false,
                    rownumbers: true,
                    fit: true,
                    columns: [
                        [
                            {
                                field: 'ck',
                                checkbox: $(this).attr('checkBox') == 'true'
                            },
                            {
                                field: 'fieldName',
                                title: 'xx',
                                width: 80,
                                hidden: true
                            },
                            {
                                field: 'jsh',
                                title: '监室号',
                                width: 150
                            },
                            {
                                field: 'rs',
                                title: '人数',
                                width: 150
                            }, {
                                field: 'ayrs',
                                title: '同案由',
                                width: 150
                            },
                            {
                                field: 'hjdrs',
                                title: '同户籍',
                                width: 80
                            }
                        ]
                    ],
                    onShowPanel: function () {
                        var $grid = _this.combogrid('grid');
                        $grid.datagrid('options').url = _url;
                        $grid.datagrid('load', { jsh: "", ay: ay, hjd: hjd, type: type });
                    },
                    loadFilter: function (data) {
                        if (data.result) {
                            return data.result;
                        }
                    },
                    keyHandler: {
                        // 搜索功能
                        query: function (e) {
                            var $grid = _this.combogrid('grid');
                            if (e.trim()) {
                                $grid.datagrid('load', {
                                    jsh: e.trim(),
                                    ay: ay,
                                    hjd: hjd,
                                    type: type,
                                });
                            }

                        }
                    }
                });
            })
        },
        initZxgszClass: function (classid, _url) {
            var select = classid == undefined ? '.awdCombogrid' : classid;
            $(select).each(function () {
                var _this = $(this);
                var checkbox = _this.attr('checkBox') == 'true';
                var queryText = _this.attr('queryText');
                var _code = _this.attr('code');
                var queryField = _this.attr('queryField') == undefined ? 'queryParams' : _this.attr('queryField');
                var biaoti = $(this).prev().combobox().prevObject.attr('biaoti');
                biaoti = biaoti == undefined ? '内容' : biaoti;
                var idfiled = queryText == true ? 'content' : 'code';
                _this.combogrid({
                    url: '',
                    panelWidth: 750,
                    idField: 'jsh',        //ID字段    
                    textField: 'jsmc',
                    loadMsg: '加载中',
                    multiple: checkbox,
                    method: 'post',
                    mode: 'remote',
                    pagination: true,
                    rownumbers: true,
                    fit: true,
                    columns: [
                        [{
                            field: 'ck',
                            checkbox: $(this).attr('checkBox') == 'true'
                        },
                        { field: 'jsh', title: '监室号', width: 50, hidden: true },
                        { field: 'jsmc', title: '监室名称', width: 90, hidden: false },
                        { field: 'jslbString', title: '监室类别', width: 80, hidden: false },
                        { field: 'typeString', title: '监室类型', width: 80, hidden: false },
                        { field: 'innum', title: '人数', width: 80, hidden: false },
                        { field: 'zgmj', title: '主管民警', width: 150 },
                        { field: 'xgmj', title: '协管民警', width: 150 },
                        ]
                    ],
                    onShowPanel: function () {
                        var $grid = _this.combogrid('grid');
                        $grid.datagrid('options').url = _url;
                        $grid.datagrid('load', { fieldname: _code });
                    },
                    loadFilter: function (data) {
                        if (data.result) {
                            return data.result;
                        }
                    },
                    keyHandler: {
                        // 搜索功能
                        query: function (e) {
                            var $grid = _this.combogrid('grid');
                            if (e.trim()) {
                                $grid.datagrid('load', {
                                    queryParams: e.trim(),
                                    fieldname: _code
                                });
                            }

                        }
                    }
                });
            });
        }
    };
    return main;
});