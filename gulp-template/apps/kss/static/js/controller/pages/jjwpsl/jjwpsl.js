/**
 * 救济物品申领
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jbxx');
    var clumn1=require('modules/clumn/jjwpsljl');
    var url=require('modules/url');
    var formtpl=require('services/form/_jjpslJjwpsl.html');
    var hideshow=require('modules/showHideClumn');
    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/jjpslJjwpsl');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
    //界面控件
    var main={
        init:function(){
            /**界面初始化**/
            main.layout();
            main.eventBind();
            /**界面初始化**/
        },
        layout:function(){
            /**布局初始化**/
            toolbar.init({
                buttons:[
                    {
                        id: 'add',
                        name: '新增',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                hdpzFormAdd.init(url.jjwpslAdd, data, function() {});
                            } else {
                                utils.alert("请选择人员");
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                query:function(param){
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_jjwpsl_sl',
                        'processDefinitionKey': 'kss_jjwpsl'
                    }, param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initjbxx('table',false,250, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh_eq': rybh,
                });
            },[{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.jjwpslList,
                             fit: false,
                             width: '100%',
                             height: '300',
                             queryParams:{ "rybh_eq": data[0].rybh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['wp','jjrq','jjyy','djr','djsj'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]);

            jqtree.init('jqtree','table');
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
            //                     url: url.jjwpslList,
            //                     fit: false,
            //                     width: '100%',
            //                     height: window.innerHeight - 300,
            //                     firstLoad: false,
            //                     columns: clumn1({
            //                         check: false,
            //                         clumns: ['wp','jjrq','jjyy','djr','djsj'],
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
            hideshow.init('modules/clumn/jbxx',
            ['snbh', 'xm', 'jsh', 'bahjString', 'rsrq', 'gyqx', 'badw', 'xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString'],
            ['xbString', 'dwlxString', 'rsxzString', 'csrq', 'zjlxString', 'zjh', 'hjdString', 'xzdString', 'hyzkString', 'mzString', 'gjString', 'whcdString', 'zyString', 'sfString', 'tssfString', 'jyrq', 'ayString']);
            // grid.init('subtable',{
            //     url: url.jjwpslList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn1( {check:false,
            //         clumns:['wp','jjrq','jjyy','djr','djsj'],
            //         hidden:[]})
            // });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    $(main.init);

});