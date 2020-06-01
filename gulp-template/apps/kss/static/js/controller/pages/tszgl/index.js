/**
 模块名称： 提审证管理
 开始时间： 2020-3-7
 */
define(function(require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var tszClumn = require('modules/clumn/tszgl');
    var url = require('modules/url');
    var hideshow = require('modules/showHideClumn');
    var tszForm = require('modules/form/tszgl');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    //界面控件
    var main = {
        init: function() {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function() {
            /**布局初始化**/
            toolbar.init({
                buttons: [{
                    id: 'add',
                    name: '新增',
                    icon: 'icon-jiahao',
                    ryyw:true,
                    fun: function() {
                        var data = grid.getSelected('table')[0];
                        if (data) {
                            tszForm.init(url.tszglAdd, data, false, function() {
                                grid.reload('subtable');
                            });
                        } else {
                            utils.alert('请选择人员!');
                        }
                    }
                },
                    // {
                    //     id: 'update',
                    //     name: '修改',
                    //     icon: 'icon-jiahao',
                    //     fun: function() {
                    //         var data = grid.getSelected('table')[0];
                    //         var jl = grid.getSelected('subtable')[0];
                    //         console.log(jl);
                    //         if (jl) {
                    //             tszForm.init(url.tszglAdd, data, jl, function() {
                    //                 grid.reload('subtable');
                    //             });
                    //         } else {
                    //             utils.alert('请选择修改的记录!');
                    //         }
                    //     }
                    // }
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function() { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() {} }
                ]
            });

            searchform.init('search', {
                query: function(param) {
                    param = $.extend({}, {state:'R8'}, param);
                    grid.query('table', param);
                },
            });
            jbxxgrid.initjbxx('table', false, 200, { 'taskDefinitionKey': 'kss_txzgl', 'processDefinitionKey': 'kss_txzgl' },
                function (rybh) {
                $("#subtable").datagrid('reload', {
                    // 'state':'R2',
                    'rybh': rybh
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                        layer.open({
                            title:"业务信息",
                            area: ['90%', '600px'],
                            zIndex:1000,
                          //  content:"<table id='subtable'></table>",
                            content:  '<div class="section-container">' +
                            '<div class="section-item section-item-one section-item-padding">' +
                            '<div class="section-header" style="margin-bottom:1%;">' +
                            '<div class="section-controls single-colors" id="tools">' +
                            '<button type="button" id="edit">' +
                            '<span class="iconfont icon-jiahao"></span>修改' +
                            '</button>' +
                            '</div>' +
                            ' </div>' +
                            ' <div class="section-item-content border-top"  style="z-index:999">' +
                            '<form id="search" class="search-form"></form>' +
                            '<table id="subtable" ></table>' +
                            '</div>' +
                            '</div>' +
                            ' </div> ',
                            maxmin: true,
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.tszglList,
                                    fit: false,
                                    width: '100%',
                                    height: "300",
                                    queryParams:{ "rybh": data[0].rybh},
                                    firstLoad: true,
                                    columns: tszClumn({
                                        check: false,
                                        clumns: ['tszh','badw','bar','yxbsString','fzrq','blr'],
                                        hidden: []
                                    })
                                });
                                // $("#subtable").datagrid('reload', {
                                //     "rybh": rowData.rybh
                                // });
                                $('#edit').on('click', function () {
                                    var data = grid.getSelected('table')[0];
                                    var jl = grid.getSelected('subtable')[0];
                                    console.log(jl);
                                    if (jl) {
                                        tszForm.init(url.tszglAdd, data, jl, function() {
                                            grid.reload('subtable');
                                        });
                                    } else {
                                        utils.alert('请选择修改的记录!');
                                    }})
                            }
                        })
                    }}
            ]);
            // grid.init('subtable', {
            //     url: url.tszglList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: tszClumn({
            //         check: false,
            //         clumns: ['tszh', 'badw', 'bar', 'fzrq', 'blr', 'yxbsString'],
            //         hidden: ['sykzrq', 'xbString', 'dwlx', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
            //     })
            // });
            jqtree.init('jqtree','table');//有监区树就加，没有不加
            /**布局初始化**/
        },
        eventBind: function() {
            /**事件绑定**/

            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
