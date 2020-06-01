/**
模块名称： 领导审批-相关工作要求
开发时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');

    require('layer.config');
    var utils=require('awd/layui/utils');
    var add = require('services/form/_ldjcXggzyq.html');

    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');

    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/_xggzyq');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

    require('layer.config');
    var utils = require('awd/layui/utils');
    var combox = require('awd/easyui/combox');
    var hdpzFormAdd = require('modules/form/ldjcXggzyq');
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
                            var addData1 = {fksj: currentTime };
                        hdpzFormAdd.init(url.xggzyqAdd, addData1, function() {});
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
                        name: 'fksj_start',
                        title: '记录时间',
                        type: 'datebox'
                    }, {
                        name: 'fksj_end',
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
                url: url.xggzyqList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jqh','yqqk','yqnr','yqfkString','fkr'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/_xggzyq',['jqh','yqqk','yqnr','yqfkString','fkr'],[]);
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
