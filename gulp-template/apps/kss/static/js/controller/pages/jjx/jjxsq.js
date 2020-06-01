/**
 模块名称： 加减刑-加减刑申请
 开始时间： 2020-3-9
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');


    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_jjxSq.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/jjx');
    var urls = require('modules/url');
    var url = require('modules/url');
    var jjxsqFormAdd = require('modules/form/jjxsqAdd');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');//监区树引用
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
                        id: 'add', name: '办理', icon: 'icon-jiahao', fun: function () {
                            //var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var data = grid.getSelected('table')[0];
                            var url = '';
                            if (data) {
                                var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                                var addData1 = { blrq: currentTime, };
                                var addData = {};
                                Object.assign(addData, data, addData1);
                                var jjxid = data.id;
                                if (data.ldpsxx == null) {
                                    if (urls.jjxAdd) {
                                        url = urls.jjxAdd;
                                    }

                                } else {
                                    url = urls.jjxUpdate;
                                }

                                jjxsqFormAdd.init(url, addData, function () {
                                    //  jjxsqFormAdd.init(url.jjxAdd, addData, function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                utils.alert('请选择人员信息!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                primary: [{
                    name: 'jsh',
                    title: '监室号',
                    type: 'awdCombotree',
                    url: urls.getJqCombotree
                }, {
                    name: 'xm',
                    title: '姓名',
                    type: 'textbox'
                }],

                query: function (param) {
                    grid.query('table', param);
                },
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            }, [{
                id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                    layer.open({
                        title: "业务信息",
                        area: ['90%', '600px'],
                        content: "<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: urls.jjxList,
                                fit: false,
                                width: '100%',
                                height: '450',
                                queryParams: { "rybh": data[0].rybh },
                                firstLoad: true,
                                columns: clumn1({
                                    check: false,
                                    clumns: ['blrq', 'yxmrq', 'jjxq', 'xmsfrq', 'pzr', 'pzwh', 'flagString'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
            }]);

            // grid.init('subtable', {
            //     url: url.jjxList,
            //     fit: false,
            //     width: '100%',
            //     height: '200',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['blrq', 'yxmrq', 'jjxq', 'xmsfrq', 'pzr', 'pzwh', 'flagString'],
            //         hidden: []
            //     })
            // });

            jqtree.init('jqtree', 'table');//有监区树就加，没有不加

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