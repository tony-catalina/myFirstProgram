/**
 * 在押人员发药
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_zyryfyjl.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/zyryfyjl');
    var url = require('modules/url');
    var sgFormModify = require('modules/form/zyryfyFyjl');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    var rightmenu=require('modules/rightmenu');

    //界面控件
    var main = {
        init: function () {
            //界面初始化
            main.layout();
            main.eventBind();

        },
        layout: function () {
            //布局初始化
            toolbar.init({
                buttons: [
                    {
                        id: 'add', name: '发药', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                sgFormModify.init(url.zyryfyjlAdd, data, function () {
                                });
                            }
                        }
                    }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                pageRender:{
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    //获取当前时间
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    if (month < 10) {
                        month = '0' + month;
                    }
                    if (day < 10) {
                        day = '0' + day;
                    }
                    var nowDate = year + '-' + month + '-' + day;
                    var nowDate2 = year + '-' + month + '-' + day + ' 00:00:00';
                    param = $.extend({}, {
                        'sffy': '1',
                        'fyksrq': nowDate,
                        'fyjsrq': nowDate,
                        'param': '',
                        'fyrq': nowDate2,
                        'brsffySelect': '0'
                    }, param);
                    grid.query('table', param);
                }
            });

            grid.init('table', {
                url: url.zyryfyJbxxList,
                fit: false,
                width: '100%',
                height: '350',
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['rybh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'],
                    hidden: ['xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
                }),
                onRowContextMenu:function(e, rowIndex, rowData){
                    e.preventDefault(); //阻止浏览器捕获右键事件
                    $(this).datagrid('clearSelections'); //取消所有选中项
                    $(this).datagrid('selectRow', rowIndex); //根据索引选中该行
                    $('#contextMenu').menu('show', {
                        left: e.pageX,//在鼠标点击处显示菜单
                        top: e.pageY
                    });
                    e.preventDefault();  //阻止浏览器自带的右键菜单弹出
                }
            });
            rightmenu.init('table',{
                menus:[

                    {id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                            layer.open({
                                title:'业务信息',
                                area: ['90%', '600px'],
                                content:"<table id='subtable'></table>",
                                btn: ['取消'],
                                success: function () {
                                    grid.init('subtable', {
                                        url: url.zyryfyjlList,
                                        fit: false,
                                        width: '100%',
                                        height: '450px',
                                        queryParams:{ 'rybh': data[0].rybh},
                                        firstLoad: true,
                                        columns: clumn1({
                                            check: false,
                                            clumns: ['fyr', 'fyrq', 'ypbhString', 'fydwString', 'sl', 'bz'],
                                            hidden: []
                                        })
                                    });

                                }
                            });
                        }}
            ]});
            hideshow.init('modules/clumn/jbxx', ['rybh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw'], ['xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            // grid.init('subtable', {
            //     url: url.zyryfyjlList,
            //     fit: false,
            //     width: '100%',
            //     height: '100',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['fyr', 'fyrq', 'ypbhString', 'fydwString', 'sl', 'bz'],
            //         hidden: []
            //     })
            // });
            jqtree.init('jqtree','table');//有监区树就加，没有不加
        },
        eventBind: function () {
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});