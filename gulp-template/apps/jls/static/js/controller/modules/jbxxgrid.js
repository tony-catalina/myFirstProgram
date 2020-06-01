define(function (require) {
    var clumn = require('modules/clumn/jbxx');
    var hideshow = require('modules/showHideClumn');
    var grid = require('awd/easyui/grid');
    var url = require('modules/url');
    var tools = require('awd/jquery/tools');
    var rightmenu = require("modules/rightmenu");
    var ryxxTpl = require("services/com/ryxxjbxx.html");//引入人员基本信息模板
    var ajqkTpl = require("services/com/ryxxajqk.html");//引入人员案件情况模板
    var jkqkTpl = require("services/com/ryxxjkqk.html");//引入人员健康情况模板
    
   
    
    var clumnJy = require('modules/clumn/jypz');//就医clumn
    var clumnLshj = require('modules/clumn/lshj');//律师会见clumn
    var clumnTsdj = require('modules/clumn/tsdj');//提审登记clumn
    var clumnDjjl = require('modules/clumn/jstz');//拘室调整clumn
    var main = {
        initjbxx: function (table, checkbox, height, param, selectFun, rightmenus) {
            var jbxx = grid.init(table, {
                url: url.jbxxList,
                queryParams: param,
                fit: false,
                width: '100%',
                height: window.innerHeight - height,
                firstLoad: true,
                detailviewshow: true,
                columns: clumn({
                    check: checkbox,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                    hidden: ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                }, onRowContextMenu: function (e, rowIndex, rowData) {
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid("clearSelections"); //取消所有选中项
                    $(this).datagrid("selectRow", rowIndex); //根据索引选中该行
                    $("#contextMenu").menu("show", {
                        left: e.pageX, //在鼠标点击处显示菜单
                        top: e.pageY,
                    });
                    e.preventDefault(); //阻止浏览器自带的右键菜单弹出
                },
            });
            if (rightmenus == undefined) {
                rightmenus = [
                    {
                        id: 'rymx', icon: '', name: '人员详情',
                        fun: function (data) {
                            console.log(data);
                            data = data[0];
                            var ryxxHtml = ryxxTpl("com/ryxxjbxx", data);
                            var ryxxajqkHtml = ajqkTpl("com/ryxxajqk", data);
                            var jkqkHtml = jkqkTpl("com/ryxxjkqk", data);
                            $.ajax({
                                url: url.jkqkAndTmtzList, type: 'POST', data: { "rybh": data.rybh },
                                success: res => {
                                    console.log(res + 9999999999999999999999);
                                    
                                }
                            })
                            layer.tab({
                                area: ["100%", "690px"],
                                btn: ["取消"],
                                tab: [
                                    {
                                        title: "基本信息",
                                        content: ryxxHtml,

                                    },
                                    {
                                        title: "案件情况",
                                        content: ryxxajqkHtml,
                                    },
                                    {
                                        title: "健康情况",
                                        content: jkqkHtml,
                                    },
                                    {
                                        title: "提审登记",
                                        content: '<table id="tsdjId" class="grid"></table>',
                                    },
                                    {
                                        title: "律师会见",
                                        content: '<table id="lshjId" class="grid"></table>',
                                    },
                                    {
                                        title: "就医信息",
                                        content: '<table id="jyxxId" class="grid"></table>',
                                    },
                                    {
                                        title: "调拘记录",
                                        content: '<table id="djjlId" class="grid"></table>',
                                    }
                                ],
                                success: function () {
                                    $.parser.parse();
                                    $(".layui-layer-title span").each(function () {
                                        $(this).click(function () {
                                            if ('提审登记' == $(this).html()) {
                                                grid.init('tsdjId', {
                                                    url: url.tsdjAndJbxxList,
                                                    fit: false,
                                                    width: '1480px',
                                                    height: '580px',
                                                    queryParams: { "rybh": data.rybh },
                                                    firstLoad: true,
                                                    columns: clumnTsdj({
                                                        check: false,
                                                        clumns: ['dw', 'tszbr', 'zjlxString', 'lfrzjh', 'kssjString', 'jssjString', 'jsr'],
                                                        hidden: []
                                                    })
                                                });
                                            }
                                            if ('律师会见' == $(this).html()) {
                                                grid.init('lshjId', {
                                                    url: url.lshjList,
                                                    fit: false,
                                                    width: '1480px',
                                                    height: '580px',
                                                    queryParams: { "rybh": data.rybh },
                                                    firstLoad: true,
                                                    columns: clumnLshj({
                                                        check: false,
                                                        clumns: ['lsxm', 'zjh', 'dwString', 'rs', 'hjsj'],
                                                        hidden: []
                                                    })
                                                });
                                            }
                                            
                                            if ('就医信息' == $(this).html()) {
                                                grid.init('jyxxId', {
                                                    url: url.snjyList,
                                                    fit: false,
                                                    width: '1480px',
                                                    height: '580px',
                                                    queryParams: { "rybh": data.rybh },
                                                    firstLoad: true,
                                                    columns: clumnJy({
                                                        check: false,
                                                        clumns: ['yyzdsj', 'ysxmString', 'bhlx', 'yyzdjg', 'cljg', 'csjylx'],
                                                        hidden: []
                                                    })
                                                });
                                            }
                                            
                                            if ('调拘记录' == $(this).html()) {
                                                grid.init('djjlId', {
                                                    url: url.jstzList2jbxx,
                                                    fit: false,
                                                    width: '1480px',
                                                    height: '580px',
                                                    queryParams: { "rybh": data.rybh },
                                                    firstLoad: true,
                                                    columns: clumnDjjl({
                                                        check: false,
                                                        clumns: ['yjsh', 'xjsh', 'tjr', 'tzsj'],
                                                        hidden: []
                                                    })
                                                });
                                            }


                                        })
                                    })
                                },
                            });
                        },
                    }
                ]
            }
            rightmenu.init(table, {
                menus: rightmenus
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']);
            return jbxx;
        },
        initJbxxflow: function (table, checkbox, height, param, selectFun, rightmenus) {
            var jbxx = grid.init(table, {
                url: url.processTaskList,
                queryParams: param,
                fit: false,
                width: '100%',
                height: window.innerHeight - height,
                firstLoad: true,
                queryParams: param,
                columns: clumn({
                    check: checkbox,
                    clumns: ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                    hidden: ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq',]
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                }, onRowContextMenu: function (e, rowIndex, rowData) {
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid("clearSelections"); //取消所有选中项
                    $(this).datagrid("selectRow", rowIndex); //根据索引选中该行
                    $("#contextMenu").menu("show", {
                        left: e.pageX, //在鼠标点击处显示菜单
                        top: e.pageY,
                    });
                    e.preventDefault(); //阻止浏览器自带的右键菜单弹出
                },
            });
            if (rightmenus == undefined) {
                rightmenus = [
                    { id: 'rymx', icon: '', name: '人员详情', 
                    fun: function (data) {
                        console.log(data);
                        data = data[0];
                        var ryxxHtml = ryxxTpl("com/ryxxjbxx", data);
                        var ryxxajqkHtml = ajqkTpl("com/ryxxajqk", data);
                        var jkqkHtml = jkqkTpl("com/ryxxjkqk", data);
                        $.ajax({
                            url: url.jkqkAndTmtzList, type: 'POST', data: { "rybh": data.rybh },
                            success: res => {
                                console.log(res + 9999999999999999999999);
                                
                            }
                        })
                        layer.tab({
                            area: ["100%", "690px"],
                            btn: ["取消"],
                            tab: [
                                {
                                    title: "基本信息",
                                    content: ryxxHtml,

                                },
                                {
                                    title: "案件情况",
                                    content: ryxxajqkHtml,
                                },
                                {
                                    title: "健康情况",
                                    content: jkqkHtml,
                                },
                                {
                                    title: "提审登记",
                                    content: '<table id="tsdjId" class="grid"></table>',
                                },
                                {
                                    title: "律师会见",
                                    content: '<table id="lshjId" class="grid"></table>',
                                },
                                {
                                    title: "就医信息",
                                    content: '<table id="jyxxId" class="grid"></table>',
                                },
                                {
                                    title: "调拘记录",
                                    content: '<table id="djjlId" class="grid"></table>',
                                }
                            ],
                            success: function () {
                                $.parser.parse();
                                $(".layui-layer-title span").each(function () {
                                    $(this).click(function () {
                                        if ('提审登记' == $(this).html()) {
                                            grid.init('tsdjId', {
                                                url: url.tsdjAndJbxxList,
                                                fit: false,
                                                width: '1480px',
                                                height: '580px',
                                                queryParams: { "rybh": data.rybh },
                                                firstLoad: true,
                                                columns: clumnTsdj({
                                                    check: false,
                                                    clumns: ['dw', 'tszbr', 'zjlxString', 'lfrzjh', 'kssjString', 'jssjString', 'jsr'],
                                                    hidden: []
                                                })
                                            });
                                        }
                                        if ('律师会见' == $(this).html()) {
                                            grid.init('lshjId', {
                                                url: url.lshjList,
                                                fit: false,
                                                width: '1480px',
                                                height: '580px',
                                                queryParams: { "rybh": data.rybh },
                                                firstLoad: true,
                                                columns: clumnLshj({
                                                    check: false,
                                                    clumns: ['lsxm', 'zjh', 'dwString', 'rs', 'hjsj'],
                                                    hidden: []
                                                })
                                            });
                                        }
                                        
                                        if ('就医信息' == $(this).html()) {
                                            grid.init('jyxxId', {
                                                url: url.snjyList,
                                                fit: false,
                                                width: '1480px',
                                                height: '580px',
                                                queryParams: { "rybh": data.rybh },
                                                firstLoad: true,
                                                columns: clumnJy({
                                                    check: false,
                                                    clumns: ['yyzdsj', 'ysxmString', 'bhlx', 'yyzdjg', 'cljg', 'csjylx'],
                                                    hidden: []
                                                })
                                            });
                                        }
                                        
                                        if ('调拘记录' == $(this).html()) {
                                            grid.init('djjlId', {
                                                url: url.jstzList2jbxx,
                                                fit: false,
                                                width: '1480px',
                                                height: '580px',
                                                queryParams: { "rybh": data.rybh },
                                                firstLoad: true,
                                                columns: clumnDjjl({
                                                    check: false,
                                                    clumns: ['yjsh', 'xjsh', 'tjr', 'tzsj'],
                                                    hidden: []
                                                })
                                            });
                                        }


                                    })
                                })
                            },
                        });
                    },
                    }
                ]
            }
            rightmenu.init(table, {
                menus: rightmenus
            });
            hideshow.init('modules/clumn/jbxx',
                ['xm', 'jsh', 'bm', 'xbString', 'rsrq', 'rsxzString', 'ayString', 'badw', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'gyts', 'jlrq', 'gyqx'],
                ['xbString', 'rsxzString', 'bar', 'bardh', 'hjdString', 'hyzkString', 'mzString', 'jlrq']);
            return jbxx;
        },
        initXyrflow: function (table, checkbox, height, param, selectFun) {
            var jbxx = grid.init(table, {
                url: url.xyrList,
                queryParams: param,
                fit: false,
                width: '100%',
                height: window.innerHeight - height,
                firstLoad: true,
                columns: clumn({
                    check: checkbox,
                    clumns: ['xm', 'bm', 'xbString', 'csrq', 'rsrq', 'bahjString', 'ayString', 'hjdString', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
                    hidden: ['xbString', 'dwlx', 'bahjString', 'csrq', 'zjlxString', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'bm']
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    if (!tools.isUndefined(selectFun)) {
                        selectFun(rybh);
                    }
                },
                onDblClickRow: function (rowIndex, rowData) {
                    $(this).datagrid('unselectRow', rowIndex);
                },
            });
            hideshow.init('modules/clumn/jbxx', ['xm', 'bm', 'xbString', 'csrq', 'rsrq', 'bahjString', 'ayString', 'hjdString', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'], ['bm', 'xbString', 'dwlx', 'csrq', 'zjlxString', 'hjdString', 'xzdString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq']);
            return jbxx;
        }
    };
    return main;
});