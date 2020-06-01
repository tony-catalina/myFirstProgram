/**
模块名称： 严管设置
开始时间： 2020-2-25
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    require('modules/commFun');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var tree=require('awd/easyui/tree');
    var clumn1=require('modules/clumn/ygry');
    var url=require('modules/url');
    var ygryszAddForm=require('modules/form/_ygryYgsz');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
    var combox = require('awd/easyui/combox');
    //界面控件
    var main = {
        init: function () {
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout: function () {
            /**布局初始化**/
            toolbar.init({
                buttons: [
                    {
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            console.log(data);
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var postData = Object.assign({}, data, { kssj: currentTime, blrq: currentTime });
                            if (data) {
                                
                                ygryszAddForm.init(url.ygryszAdd, postData ,function() {
                                    grid.reload('subtable');
                                });
                            } else {
                                utils.alert("请选择人员!");
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
                query: function (param) {
                    param = $.extend({}, {
                        'ygry': '01',
                        'processDefinitionKey': 'kss_ygsz',
                        'taskDefinitionKey': 'kss_ygsz_sz'
                    }, param);
                    grid.query('table', param);
                }
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
            // grid.init('table', {
            //     url: url.jbxx,
            //     fit: false,
            //     width: '100%',
            //     method: 'post',
            //     height: window.innerHeight - 200,
            //     firstLoad: true,
            //     columns: clumn({
            //         clumns: ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            //         hidden: ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']
            //     }),
            //     onRowContextMenu: function (e, rowIndex, rowData) {
            //         e.preventDefault();
            //         var popwin = layer.open({
            //             title: '业务信息',
            //             area: ['90%', '600px'],
            //             content: '<table id="subtable"></table>',
            //             maxmin: true,
            //             btn: ['取消'],
            //             success: function () {
            //                 grid.init('subtable', {
            //                     url: url.ygryszList,
            //                     fit: false,
            //                     width: '100%',
            //                     height: window.innerHeight - 300,
            //                     firstLoad: false,
            //                     columns: clumn1({
            //                         check: false,
            //                         clumns: ['lyString', 'blr', 'blrq', 'kssj', 'jssj', 'bllxString', 'ldyj'],
            //                         hidden: []
            //                     })
            //                 });
            //                 $("#subtable").datagrid('reload', {
            //                     "rybh": rowData.rybh
            //                 });
            //             },
            //         })
            //     }
            // });
            // hideshow.init('modules/clumn/jbxx',
            // ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            // ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                    'state':'R2',
                    'bllx_in':'1',
                    'pastable':'1'

                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                layer.open({
                    title:"业务信息",
                    area: ['90%', '600px'],
                    content:"<table id='subtable'></table>",
                    btn: ['取消'],
                    success: function () {
                        grid.init('subtable', {
                            url: url.ygryszList,
                            fit: false,
                            width: '100%',
                            height: '300',
                            queryParams:{ "rybh": data[0].rybh},
                            firstLoad: true,
                            columns: clumn1({
                                check: false,
                                clumns:['lyString', 'blr', 'blrq', 'kssj', 'jssj', 'bllxString', 'ldyj'],
                                hidden: []
                            })
                        });
                    }
                })
            }}
          ]);

            // grid.init('subtable', {
            //     url: url.ygryszList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['lyString', 'blr', 'blrq', 'kssj', 'jssj', 'bllxString', 'ldyj'],
            //         hidden: []
            //     })
            // });
            /**布局初始化**/
        },
        eventBind: function () {
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
