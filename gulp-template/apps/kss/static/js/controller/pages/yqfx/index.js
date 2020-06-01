/**
模块名称： 狱情分析
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/yqfx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

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
                    {id:'edit',name:'查询结果导出到excel中',icon:'icon-daochu',fun:function(){alert(2);}}
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){ hideshow.show('table'); }},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}},
                    {id:'return',name:'页面返回',icon:'icon-gengduo6',fun:function(){alert(3);}}
                ]
            });
            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name:'rq_$gte',
                        title: '分析日期',
                        type: 'datebox'
                    }, {
                        name:'rq_$lte',
                        title: '至',
                        type: 'datebox'
                    }],
                    more: [
                        [
                            {name:'mjxm$like', title: '民警姓名', type: 'textbox' }
                        ]
                    ]
                }
               ,
                query: function (param) {
                    grid.query('table', param);
                }
            });
            grid.init('table',{
                url: url.cxyqfxList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['mjxm','rq','fxqk','fxsq'],
                    hidden:[]})
            });
            /**布局初始化**/
            hideshow.init('modules/clumn/yqfx',['mjxm','rq','fxqk','fxsq'],[]);
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