/**
模块名称： 值班登记
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils=require('awd/layui/utils');
    var toolbar=require('modules/toolbar');
    var searchform=require('modules/searchform');
    var grid = require('awd/easyui/grid');
    var add = require('services/form/_zbapxzap.html');
    var url = require('modules/url');
    var form = require('modules/form/_zbapxzap');
    var popwin = '';
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
                        name: '新增值日安排',
                        icon: 'icon-jiahao',
                        fun: function () {

                            form.init('/', {}, function () {
                                grid.reload('table');
                            })


                        }
                    },
                    {
                        id: 'print',
                        name: '打印值日安排',
                        icon: 'icon-jiahao'
                    },
                ]
            });
            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'blrq_start',
                        title: '监室号',
                        type: 'awdCombotree', url: url.getJqCombotree
                    }, {
                        name: 'blrq_end',
                        title: '时间',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });
            $('#table').datagrid({
                url:url.zrapList,
                method:'post',
                width:'70%',
                fit: false,
                firstLoad: false,
                // height:window.innerHeight - 200,
                columns:[[
                    {field:'week',title:'日期/时间',width:120,align:'center'},
                    {field:'zbr1',title:'12:00-14:30',width:150,align:'center'},
                    {field:'zbr2',title:'22:30-00:30',width:150,align:'center'},
                    {field:'zbr3',title:'00:30-02:30',width:150,align:'center'},
                    {field:'zbr4',title:'02:30-04:30',width:150,align:'center'},
                    {field:'zbr5',title:'04:30-06:30',width:150,align:'center'},
                ]]
            });
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});