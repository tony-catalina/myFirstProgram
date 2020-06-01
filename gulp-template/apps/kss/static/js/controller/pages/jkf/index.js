/**
模块名称： 加扣分
开始时间： 2020-2-29
*/
define(function (require) {
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    require('modules/commFun');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var tools = require('awd/jquery/tools');
    var util = require('awd/easyui/util');
    var grid = require('awd/easyui/grid');
    var toolbar = require('modules/toolbar');
    var linkbar = require('modules/linkbar');
    var searchform = require('modules/searchform');
    var clumn = require('modules/clumn/jbxx');
    var clumn1 = require('modules/clumn/jkfjl');
    var url = require('modules/url');
    var add = require('services/form/_jkf.html');
    var tree = require('awd/easyui/tree');
    var jkfblForm= require('modules/form/jkf_jkfbl');
    var jbxxgrid = require('modules/jbxxgrid');
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
                        id: 'edit',
                        name: '加扣分办理',
                        icon: 'icon-jiahao',
                        fun: function () {
                            var data = grid.getSelected('table')[0];
                            if (data) {
                                jkfblForm.init(url.jkfjlAdd, data, function () {

                                });
                            } else {
                                utils.alert('请选择要修改的人员记录!');
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
                pageRender: {
                    primary: [{
                        name: 'jh',
                        title: '警号',
                        type: 'textbox'
                    }, {
                        name: 'xm',
                        title: '姓名',
                        type: 'textbox'
                    }]
                },
                query: function (param) {

                    param = $.extend({}, {
                        'taskDefinitionKey': '',
                        'processDefinitionKey': ''
                    }, param);
                    grid.query('table', param);
                }
            });

            jbxxgrid.initjbxx('table', false, 200, {}, function (rybh) {
                $("#subtable").datagrid('reload', {
                    "rybh": rybh
                });
            },
            [{id:'ywmx',icon:'',name:'业务详情',fun:function(data){
                 layer.open({
                     title:"业务信息",
                     area: ['90%', '600px'],
                     content:"<table id='subtable'></table>",
                     btn: ['取消'],
                     success: function () {
                         grid.init('subtable', {
                             url: url.jkfjlList,
                             fit: false,
                             width: '100%',
                             height: '450px',
                             queryParams:{ "rybh": data[0].rybh},
                             firstLoad: true,
                             columns: clumn1({
                                 check: false,
                                 clumns: ['typeString', 'szrqString', 'jkffs', 'jkfsy', 'state'],
                                 hidden: []
                             })
                         });

                     }
                 })
             }}
         ]
            );

            // grid.init('subtable', {
            //     url: url.jkfjlList,
            //     fit: false,
            //     width: '100%',
            //     height: window.innerHeight - 300,
            //     firstLoad: false,
            //     columns: clumn1({
            //         check: false,
            //         clumns: ['typeString', 'szrqString', 'jkffs', 'jkfsy', 'state'],
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