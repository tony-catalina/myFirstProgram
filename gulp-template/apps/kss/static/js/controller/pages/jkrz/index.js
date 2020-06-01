/**
模块名称： 监控日志
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_jkrz.html');    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jkrz');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jkrzForm = require('modules/form/jkrz');
    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            //布局初始化
            toolbar.init({
                buttons:[
                    {id:'add',name:'新增',icon:'icon-jiahao',fun:function(){
                            jkrzForm.init(url.jkrzAdd, {}, function() {
                            });
                    }},
                ]
            });

            linkbar.init({
                links:[

                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table'); }},
                    {id:'return',name:'页面返回',icon:'icon-gengduo6',fun:function(){alert(3);}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'kssj',
                        title: '开始时间',
                        type: 'datebox'
                    }, {
                        name:'jssj',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            {name:'jkr', title: '监控人', type: 'textbox' }
                        ]
                    ]
                },
                query:function(param){
                    grid.query('table',param);
                 }
            });

            grid.init('table',{
                url: url.jkrzList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['kssj','jssj','jksc','jkr','jkqk','bz'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/jkrz',['kssj','jssj','jksc','jkr','jkqk','bz'],[]);

        },
        eventBind:function(){
            //事件绑定
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
