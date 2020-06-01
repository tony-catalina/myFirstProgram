define(function (require) {
    var clumn = require('modules/clumn/jbxx');
    var hideshow = require('modules/showHideClumn');
    var grid = require('awd/easyui/grid');
    var rightmenu = require('modules/rightmenu');
    var url = require('modules/url');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var jbxxclumn = [
        'gcbh',
        'wbrybh',
        'dah',
        'snbh',
        'jsh',
        'xm',
        'bm',
        'mzString',
        'gjString',
        'xbString',
        'csrq',
        'zjlxString',
        'zjh',
        'zzmmString',
        'hyzkString',
        'jgString',
        'hjdString',
        'hjdxz',
        'bahjString',
        'xzdString',
        'xzdxz',
        'rsrq',
        'gyqx',
        'badw',
        'dwlxString',
        'rsxzString',
        'whcdString',
        'zyString',
        'sfString',
        'tssfString',
        'gwzdw',
        'jyrq',
        'ayString',
        'zrdw',
        'sydw',
        'sypzwsh',
        'sypzString',
        'jyrq',
        'gyxq',
        'xhayString',
        'fzjl',
        'bar',
        'bahjString',
        'csyyString',
        'csqx',
        'cssj',
        'cljgString',
    ];
    var jbxxhide = [
        'gcbh',
        'wbrybh',
        'dah',
        'bm',
        'xbString',
        'dwlxString',
        'rsxzString',
        'csrq',
        'zjlxString',
        'zjh',
        'zzmmString',
        'hyzkString',
        'hjdString',
        'jgString',
        'hjdxz',
        'xzdString',
        'mzString',
        'gjString',
        'xzdxz',
        'whcdString',
        'zyString',
        'sfString',
        'tssfString',
        'jyrq',
        'ayString',
        'gwzdw',
        'zrdw',
        'sydw',
        'sypzwsh',
        'sypzString',
        'jyrq',
        'gyxq',
        'xhayString',
        'fzjl',
        'bar',
        'bahjString',
        'csyyString',
        'csqx',
        'cssj',
        'cljgString',
    ];
    var xyrclumn = [
        'xm',
        'bm',
        'xbString',
        'csrq',
        'rsrq',
        'bahjString',
        'ayString',
        'hjdString',
        'xbString',
        'dwlx',
        'rsxzString',
        'csrq',
        'zjlxString',
        'zjh',
        'hjdString',
        'xzdString',
        'mzString',
        'gjString',
        'whcdString',
        'zyString',
        'sfString',
        'tssfString',
        'jyrq',
        'ayString',
    ];
    var xyrhide = [
        'dwlx',
        'bahjString',
        'csrq',
        'zjlxString',
        'hjdString',
        'xzdString',
        'mzString',
        'gjString',
        'whcdString',
        'zyString',
        'sfString',
        'tssfString',
        'jyrq',
        'bm',
    ];

    var main = {
        init: function (
            table,
            listurl,
            checkbox,
            fisrtload,
            height,
            param,
            selectFun,
            rightmenus
        ) {
            var jbxx = grid.init(table, {
                url: listurl,
                queryParams: param,
                fit: false,
                width: '100%',
                method: 'post',
                singleSelect: !checkbox,
                height: window.innerHeight - height,
                firstLoad: fisrtload,
                detailviewshow: true,
                detailFormatter: function (index, data) {
                    return '简要案情:' + data.jyaq;
                },
                rowStyler: function (index, record) {
                    if (record.wxdj == 3) {
                        return 'color:#006e44;';
                    } else if (record.wxdj == 2) {
                        return 'color:#ffdd27;';
                    } else if (record.wxdj == 1) {
                        return 'color:#e91e1b;';
                    }
                },
                columns: clumn({
                    check: checkbox,
                    clumns: jbxxclumn,
                    hidden: jbxxhide,
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                },
                onRowContextMenu: function (e, rowIndex, rowData) {
                    if(!tools.isNull(rowData.rybh)){
                        e.preventDefault(); //阻止浏览器捕获右键事件
                        $(this).datagrid('clearSelections'); //取消所有选中项
                        $(this).datagrid('selectRow', rowIndex); //根据索引选中该行
                        $('#contextMenu').menu('show', {
                            left: e.pageX, //在鼠标点击处显示菜单
                            top: e.pageY,
                        });
                        e.preventDefault(); //阻止浏览器自带的右键菜单弹出
                    }
                }
            });
            if (rightmenus == undefined) {
                rightmenus = [
                    {
                        id: 'rymx',
                        icon: '',
                        name: '人员详情',
                        fun: function (data) {
                            data = data[0];
                            layer.open({
                                title: '人员信息',
                                area: ['100%', '100%'],
                                type: 2,
                                closeBtn: 0,
                                content: '/apps/kss/views/common/jbxxinfo.html',
                                btn: ['取消'],
                                success: function (layero, index) {
                                    var body = layer.getChildFrame('body', index);
                                    var iframe = window[layero.find('iframe')[0]['name']];//拿到iframe元素
                                    // iframe.funrec(JSON.stringify(data));
                                    body.find('input').val(JSON.stringify(data))
                                }
                            });
                        },
                    },
                ];
            }
            rightmenu.init(table, {
                menus: rightmenus,
            });

            hideshow.init('modules/clumn/jbxx', jbxxclumn, jbxxhide);
            return jbxx;
        },
        initjbxx: function (table, checkbox, height, param, selectFun, rightmenus) {
            var jbxx = grid.init(table, {
                url: url.jbxx,
                queryParams: param,
                fit: false,
                width: '100%',
                method: 'post',
                singleSelect: !checkbox,
                height: window.innerHeight - height,
                firstLoad: false,
                detailviewshow: true,
                detailFormatter: function (index, data) {
                    return '简要案情:' + data.jyaq;
                },
                rowStyler: function (index, record) {
                    if (record.wxdj == 3) {
                        return 'color:#006e44;';
                    } else if (record.wxdj == 2) {
                        return 'color:#ffdd27;';
                    } else if (record.wxdj == 1) {
                        return 'color:#e91e1b;';
                    }
                },
                columns: clumn({
                    check: checkbox,
                    clumns: jbxxclumn,
                    hidden: jbxxhide,
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                },

                onRowContextMenu: function (e, rowIndex, rowData) {
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid('clearSelections'); //取消所有选中项
                    $(this).datagrid('selectRow', rowIndex); //根据索引选中该行
                    $('#contextMenu').menu('show', {
                        left: e.pageX, //在鼠标点击处显示菜单
                        top: e.pageY,
                    });
                    e.preventDefault(); //阻止浏览器自带的右键菜单弹出
                },
            });
            var defaultmenu = [];
            defaultmenu = [
                {
                    id: 'rymx',
                    icon: '',
                    name: '人员详情',
                    fun: function (data) {
                        data = data[0];
                        layer.open({
                            title: '人员信息',
                            area: ['100%', '100%'],
                            type: 2,
                            closeBtn: 0,
                            content: '/apps/kss/views/common/jbxxinfo.html',
                            btn: ['取消'],
                            success: function (layero, index) {
                                var body = layer.getChildFrame('body', index);
                                var iframe = window[layero.find('iframe')[0]['name']];//拿到iframe元素
                                // iframe.funrec(JSON.stringify(data));
                                body.find('input').val(JSON.stringify(data))
                                
                            }
                        });
                    }
                },
            ];
            if (rightmenus == undefined) {
                rightmenus=defaultmenu;
            } else {
                rightmenus = defaultmenu.concat(rightmenus);
            }
            rightmenu.init(table, {
                menus: rightmenus,
            });

            hideshow.init('modules/clumn/jbxx', jbxxclumn, jbxxhide);
            return jbxx;
        },
        initJbxxflow: function (
            table,
            checkbox,
            height,
            param,
            selectFun,
            rightmenus
        ) {
            var jbxx = grid.init(table, {
                url: url.processTaskList,
                queryParams: param,
                fit: false,
                width: '100%',
                method: 'post',
                singleSelect: !checkbox,
                height: window.innerHeight - height,
                firstLoad: true,
                detailviewshow: true,
                detailFormatter: function (index, data) {
                    return '简要案情:' + data.jyaq;
                },
                rowStyler: function (index, record) {
                    if (record.wxdj == 3) {
                        return 'color:#006e44;';
                    } else if (record.wxdj == 2) {
                        return 'color:#ffdd27;';
                    } else if (record.wxdj == 1) {
                        return 'color:#e91e1b;';
                    }
                },
                columns: clumn({
                    check: checkbox,
                    clumns: jbxxclumn,
                    hidden: jbxxhide,
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                },
                onRowContextMenu: function (e, rowIndex, rowData) {
                    if(!tools.isNull(rowData.rybh)){
                        e.preventDefault(); //阻止浏览器捕获右键事件
                        $(this).datagrid('clearSelections'); //取消所有选中项
                        $(this).datagrid('selectRow', rowIndex); //根据索引选中该行
                        $('#contextMenu').menu('show', {
                            left: e.pageX, //在鼠标点击处显示菜单
                            top: e.pageY,
                        });
                        e.preventDefault(); //阻止浏览器自带的右键菜单弹出
                    }
                },
            });
            if (rightmenus == undefined) {
                rightmenus = [
                    {
                        id: 'rymx',
                        icon: '',
                        name: '人员详情',
                        fun: function (data) {
                            data = data[0];
                            layer.open({
                                title: '人员信息',
                                area: ['100%', '100%'],
                                type: 2,
                                closeBtn: 0,
                                content: '/apps/kss/views/common/jbxxinfo.html',
                                btn: ['取消'],
                                success: function (layero, index) {
                                    var body = layer.getChildFrame('body', index);
                                    var iframe = window[layero.find('iframe')[0]['name']];//拿到iframe元素
                                    // iframe.funrec(JSON.stringify(data));
                                    body.find('input').val(JSON.stringify(data))
                                }
                            });
                        }
                    }
                ];
            }
            rightmenu.init(table, {
                menus: rightmenus,
            });
            hideshow.init('modules/clumn/jbxx', jbxxclumn, jbxxhide);
            return jbxx;
        },
        initXyrflow: function (table, checkbox, height, param, selectFun) {
            var jbxx = grid.init(table, {
                url: url.processList,
                queryParams: param,
                fit: false,
                width: '100%',
                method: 'post',
                singleSelect: !checkbox,
                height: window.innerHeight - height,
                firstLoad: true,
                columns: clumn({
                    check: checkbox,
                    clumns: xyrclumn,
                    hidden: xyrhide,
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                },
            });
            hideshow.init('modules/clumn/jbxx', xyrclumn, xyrhide);
            return jbxx;
        },
    };
    return main;
});
