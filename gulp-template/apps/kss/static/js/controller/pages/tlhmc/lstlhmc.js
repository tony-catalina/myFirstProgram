/**
模块名称： 业务动态
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var hideshow=require('modules/showHideClumn');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var tree = require('awd/easyui/tree');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/lstlhmc');
    var url = require('modules/url');
    var jbxxgrid=require('modules/jbxxgrid');
    var rightmenu = require("modules/rightmenu");//引入右击菜单
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
                        id: 'add', name: '删除', icon: 'icon-shanchu', fun: function () {
                            var data=grid.getSelected('table')[0];
                            var postData={};
                            postData.id=data.id;

                            util.ajax({
                                url: url.lstlhmcDelete,
                                data: postData,
                                func: function(data) {
                                    if (data.success) {
                                        utils.alert(data.msg);
                                        $('#table').datagrid('reload')
                                        if (tools.isFunction(callback)) {
                                            callback();
                                        }
                                    } else {
                                        utils.alert(data.msg);
                                    }
                                }
                            });
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {  } }
                ]
            });

            searchform.init('search', {
                primary: [{
                    name:'startTime',
                    title: '打印时间',
                    type: 'datebox',
                }, {
                    name:'endTime',
                    title: '至',
                    type: 'datebox'
                }],

                query: function (param) {
                    grid.query('table', param);
                    
                }
            });

            /*jbxxgrid.initjbxx('table',false,500, {},function(rybh) {
                $("#subtable").datagrid('reload', {
                    'rybh': rybh,
                    "bllx_in": "01,03"
                });
            });*/
            grid.init('table', {
                url: url.lstlhmcList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn({
                    check: false,
                    clumns: ['dyrq', 'rs'],
                    hidden: []
                }),
                onSelect: function (rowIndex, rowData) {
                    var rybh = rowData.rybh;
                    $("#subtable").datagrid('reload', {
                        'rybh': rybh,
                    });
                },
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
                            title: "业务信息",
                            area: ['100%', '100%'],
                            zIndex: 1000,
                            maxmin:true,
                            type: 1,
                            content:'<table id="subtable" class="grid"> </table>' ,
                            btn: ['取消'],
                            success: function () {
                                grid.init('subtable', {
                                    url: url.jbxxListWithoutState,
                                    queryParams:{ "rybh": data[0].rybh},
                                    fit: false,
                                    width: '100%',
                                    height: '500px',
                                    firstLoad: true,
                                    columns: clumn({
                                        check: false,
                                        clumns: ['rybh', 'xm', 'jsh'],
                                        hidden: []
                                    })
                                });
                                
                              
                            }
                        });
                        }}
            ]});

            
        },
        eventBind: function () {
            //事件绑定
            $('#return').css('cursor', 'pointer')
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});