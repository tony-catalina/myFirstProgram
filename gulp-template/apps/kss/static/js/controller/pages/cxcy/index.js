/**
模块名称： 抽血采样
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_cxcy.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree')
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/cxcy');
    var url = require('modules/url');
    var cxcyForm = require('modules/form/cxcy');
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
                        id: 'add', name: '新增', icon: 'icon-jiahao', fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                cxcyForm.init(url.cxcyAdd, data, function () {
                                });
                            } else {
                                utils.alert('必须选中一个人来办理');
                            }
                        }
                    },
                    // { id: 'edit', name: '修改', icon: 'icon-jiahao', fun: function () { 
                    //     var data = grid.getSelected('subtable')[0];
                    //     var data1 = grid.getSelected('table')[0];
                    //     if(data) {
                    //         console.log(data);
                    //         var addData = { snbh:data1.snbh,jsh:data1.jsh,xm:data1.xm,rybh:data1.rybh,cxcyId:data.id,cxcyBz:data.bz};
                    //         var dataall={};
                    //         Object.assign(dataall, addData,data);
                    //         cxcyForm.init(url.cxcyUpdate, dataall, function() {
                    //         });
                    //     }else {
                    //         utils.alert('请选择一条记录');
                    //     }
                    //  } },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'param',
                        title: '姓名',
                        type: 'textbox'
                    }],
                    more: [
                        [
                            { name: 'sfcxcy', title: '是否采样', type: 'combotree' },
                        ]
                    ]
                },
                query: function (param) {
                    // param = $.extend({}, {
                    //     // 'param': '',

                    // }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh
                });
            },
                [{
                    id: 'ywmx', icon: '', name: '业务详情', fun: function (data) {
                        layer.open({
                            title: "业务信息",
                            area: ['90%', '600px'],
                            type: 1,
                            zIndex: 100,
                            //  content:"<table id='subtable'></table>",
                            content: '<div class="section-container">' +
                                '<div class="section-item section-item-one section-item-padding">' +
                                '<div class="section-header" style="margin-bottom:1%;">' +
                                '<div class="section-controls single-colors" id="tools">' +
                                '<button type="button" id="modify">' +
                                '<span class="iconfont icon-jiahao"></span>修改' +
                                '</button>' +
                                '</div>' +
                                ' </div>' +
                                ' <div class="section-item-content border-top">' +
                                '<form id="search" class="search-form"></form>' +
                                '<table id="subtable" ></table>' +
                                '</div>' +
                                '</div>' +
                                ' </div> ',
                            maxmin: true,
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.cxcyList,
                                    fit: false,
                                    width: '100%',
                                    height: '450',
                                    queryParams: { "rybh": data[0].rybh },
                                    firstLoad: true,
                                    columns: clumn1({
                                        check: false,
                                        clumns: ['cylxString', 'csrq', 'rssj', 'hjdString', 'cxsj'],
                                        hidden: []
                                    })

                                });
                                $('#modify').on('click', function () {
                                    var data = grid.getSelected('subtable')[0];
                                    var data1 = grid.getSelected('table')[0];
                                    if (data) {
                                        console.log(data);
                                        var addData = { snbh: data1.snbh, jsh: data1.jsh, xm: data1.xm, rybh: data1.rybh, cxcyId: data.id, cxcyBz: data.bz };
                                        var dataall = {};
                                        Object.assign(dataall, addData, data);
                                        cxcyForm.init(url.cxcyUpdate, dataall, function () {
                                            grid.reload('subtable');
                                        });
                                    } else {
                                        utils.alert('请选择一条记录');
                                    }

                                })

                            }
                        })
                    }
                }
                ]
            );

            // grid.init('subtable', {
            //     url: url.cxcyList,
            //     fit: false,
            //     width: '100%',
            //     height: '100',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['cylxString', 'csrq', 'rssj', 'hjdString', 'cxsj'],
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
