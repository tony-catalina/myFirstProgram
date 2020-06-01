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
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var tree=require('awd/easyui/tree');
    var searchform = require('modules/searchform');
    var hideshow = require('modules/showHideClumn');
    var clumn = require('modules/clumn/jbxx');
    var url = require('modules/url');
    var addForm = require('modules/form/taf');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                        id: 'add', name: '查看', icon: 'icon-jiahao',ryyw:true, fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                addForm.init(url.xyrUpdateById, data, function () {
                                });
                            } else {
                                layer.alert('请选择人员!');
                            }
                        }
                    },
                ]
            });

            linkbar.init({
                links: [
                    { id: 'list', name: '数据列选择', icon: 'icon-gengduo7', fun: function () { hideshow.show('table')} },
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function () {  } }
                ]
            });

            searchform.init('search', {
                query: function (param) {
                    grid.query('table', param);
                }
            });


            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            },[{
                id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                    layer.open({
                        title:"业务信息",
                        area: ['90%', '600px'],
                        content:"<table id='subtable'></table>",
                        btn: ['取消'],
                        success: function () {
                            grid.init('subtable', {
                                url: url.tafList,
                                fit: false,
                                width: '100%',
                                height: '450px',
                                queryParams:{ "rybh": data[0].rybh},
                                firstLoad: true,
                                columns: clumn({
                                    check: false,
                                    clumns: ['snbh', 'xm', 'jsh'],
                                    hidden: []
                                })
                            });

                        }
                    })
                }
            }]);

            jqtree.init('jqtree', 'table');
            
            // grid.init('subtable', {
            //     url: url.tafList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 500,
            //     firstLoad: false,
            //     columns: clumn({
            //         check: false,
            //         clumns: ['snbh', 'xm', 'jsh'],
            //         hidden: []
            //     })
            // });
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