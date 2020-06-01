/**
模块名称： 医生巡诊
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var add = require('services/form/_ysxz.html');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/ysxz');
    var url = require('modules/url');
    var ysxzAddForm=require('modules/form/ysxzAddForm');
    var ysxzFormModify=require('modules/form/ysxzModifyForm');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function() {
                            var data = grid.getSelected('table')[0];
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData = { xzrq: currentTime };
                            var dataall = {};
                            Object.assign(dataall, addData, data);
                            if (data) {
                                ysxzAddForm.init(url.ysxzAdd, dataall, function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                utils.alert('请选择人员!');
                            }

                        }
                    },
                    // {
                    //     id: 'edit',
                    //     name: '修改',
                    //     icon: 'icon-jiahao',
                    //     fun: function () {
                    //         var data = grid.getSelected('subtable')[0];
                    //         var data1 = grid.getSelected('table')[0];
                    //         var addData = { snbh: data1.snbh, jsh: data1.jsh, xm: data1.xm };
                    //         var dataall = {};
                    //         Object.assign(dataall, addData, data);
                    //         if (data) {
                    //             ysxzFormModify.init(url.ysxzUpdate, dataall, function () {

                    //             });
                    //         } else {
                    //             utils.alert('请选择要修改的记录!');
                    //         }
                    //     }
                    // }
             ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table'); } },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () { } },
                    { id: 'return', name: '页面返回', icon: 'icon-gengduo6', fun: function () { alert(3); } }
                ]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R8'
                    }, param);
                    grid.query('table', param);
                }

            });

            jbxxgrid.initjbxx('table',false,200, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     zIndex: 100,
                     content: '<div class="section-container">' +
                                     '<div class="section-item section-item-one section-item-padding">' +
                                     '<div class="section-header" style="margin-bottom:1%;">' +
                                     '<div class="section-controls single-colors" id="tools">' +
                                     '<button type="button" id="edit">' +
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
                     //content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.ysxzList,
                             fit: false,
                             width: '100%',
                             height: '450',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['xzrq', 'xy', 'xl', 'jbmcString', 'zz'],
                                 hidden: []
                             })
                         },
                         );
                         $('#edit').on('click', function () {
                            var data = grid.getSelected('subtable')[0];
                            var data1 = grid.getSelected('table')[0];
                                var addData = { snbh: data1.snbh, jsh: data1.jsh, xm: data1.xm };
                                var dataall = {};
                                Object.assign(dataall, addData, data);
                                if (data) {
                            ysxzFormModify.init(url.ysxzUpdate, dataall, function () {
                                    });
                                } else {
                                    utils.alert('请选择要修改的记录!');
                                }
                            })
                     },
                     
                 })
             }}
         ]);
            hideshow.init('modules/clumn/jbxx',
            ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);

            // grid.init('subtable', {
            //     url: url.ysxzList,
            //     fit: false,
            //     width: '100%',
            //     height: '300',
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['xzrq', 'xy', 'xl', 'jbmcString', 'zz'],
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
