-/**
 * 业务动态 页面入口
 */
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var utils = require('awd/layui/utils');
    var grid = require('awd/easyui/grid');
    var tree = require('awd/easyui/tree');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var zyafclumn = require('modules/clumn/zyaf');
    var url = require('modules/url');
    var formtpl = require('services/form/_zyafXz.html');
    var hideshow = require('modules/showHideClumn');
    var zyafForm = require('modules/form/zyaf');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    var zyafFormx = require('modules/form/zyafxg');
    var jqtree = require('modules/jqtree'); //监区树引用
    
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
                buttons: [{

                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw: true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            
                            if (data) {
                                if(data.zyaf == 1){
                                    zyafForm.init(url.zyafAdd, data, function () {
                                        grid.reload('table');
                                    });
                                }else{
                                    utils.alert('请选择非重要案犯!');
                                }
                                
                            } else {
                                utils.alert('请选择人员!');
                            }
                        }
                    }
                    // {
                    //     id: 'edit',
                    //     name: '修改',
                    //     icon: 'icon-jiahao',
                    //     ryyw: true,
                    //     fun: function () {

                    //         var ywdata = grid.getSelected('subtable')[0];
                    //         if (ywdata) {
                    //             var up = grid.getSelected('table')[0];
                    //             var addData = {};
                    //             Object.assign(addData, up, ywdata);
                    //             zyafFormx.init(url.zyafUpdate, addData, ywdata, function () {
                    //                 grid.reload('table');
                    //             });
                    //         } else {
                    //             utils.alert('请选择要修改的记录!');
                    //         }
                    //     }
                    // }
                ]
            });

            linkbar.init({
                links: [{
                    id: 'list',
                    name: '数据列选择',
                    icon: 'icon-gengduo7',
                    fun: function () {
                        hideshow.show('table');
                    }
                }]
            });

            searchform.init('search', {
                pageRender: {
                    primary: [{
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }, {
                        name: 'jsh',
                        title: '监室号',
                        type: 'awdCombotree',
                        url: url.getJqCombotree
                    }]
                },
                query: function (param) {

                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     zIndex: 100,
                     type:1,
                     content:'<div class="section-container">' +
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
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.zyafList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: zyafclumn({
                                 check: false,
                                 clumns: ['createtime', 'zwString', 'ygzdw'],
                                 hidden: []
                             })
                         });
                         $('#edit').on('click', function () {
                            var ywdata = grid.getSelected('subtable')[0];
                            if (ywdata) {
                                var up = grid.getSelected('table')[0];
                                var addData = {};
                                Object.assign(addData, up, ywdata);
                                zyafFormx.init(url.zyafUpdate, addData, ywdata, function () {
                                    grid.reload('subtable');
                                });
                            } else {
                                utils.alert('请选择要修改的记录!');
                            }
                        })

                     }
                 })
             }
         }
         ]);

            // grid.init('subtable', {
            //     url: url.zyafList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 250,
            //     firstLoad: false,
            //     columns: zyafclumn({
            //         check: false,
            //         clumns: ['createtime', 'zwString', 'ygzdw'],
            //         hidden: []
            //     })
            // });

            jqtree.init('jqtree', 'table'); //有监区树就加，没有不加

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