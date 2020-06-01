/**
模块名称： 督导辅警工作
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_ddfjgz.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/ddfjgz');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var form = require('modules/form/ddfjgz');
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
                    {id:'add',name:'添加',icon:'icon-jiahao',fun:function(){
                        form.init(url.ddfjgzAdd, {}, function() {
                            grid.reload('table');
                        });
                    }},
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'ddmj',
                        title: '督导民警',
                        type: 'textbox'
                    }]
                },
                query: function(param) {
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.ddfjgzList,
                fit: false,
                width: '100%',
                height: '350',
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['ddmj','fj','ddsj','ddnr','bz'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/ddfjgz',['ddmj','fj','ddsj','ddnr','bz'],[]);
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