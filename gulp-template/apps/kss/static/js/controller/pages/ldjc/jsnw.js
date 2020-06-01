/**
模块名称： 领导审批-监室内务
开发时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_ldjcJsnw.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jsnw');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/ldjcJsnw');
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
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var addData1 = {jcsj: currentTime };
                        hdpzFormAdd.init(url.jsnwAdd, addData1, function() {
                            grid.reload('table');
                        });
                    }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'jcsj$gte',
                        title: '检查时间',
                        type: 'datebox'
                    }, {
                        name: 'jcsj$lte',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            { name: 'czr$like', title: '操作人', type:'textbox'}
                        ]
                    ]   
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jsnwList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jsh','jcnr','jcsj','ztpj'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/jsnw',['jsh','jcnr','jcsj','ztpj'],[]);
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
