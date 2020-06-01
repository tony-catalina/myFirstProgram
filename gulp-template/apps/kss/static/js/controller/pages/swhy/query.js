/**
 * 业务台账 页面入口
 */
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/swhy');
    var hideshow=require('modules/showHideClumn');
    var url=require('modules/url');

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
                    {id:'excel',name:'查询结果导出到excel表',icon:'icon-daochu'}
                ]
            });

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table')}},
                    { id: 'color', name: '分色示例', icon: 'icon-gengduo1', fun: function() { } }
                ]
            });

            searchform.init('search',{
                primary: [{
                    title: '会议时间',
                    name:'swhysj_start',
                    type: 'datebox'
                }, {
                    title: '至',
                    name:'swhysj_end',
                    type: 'datebox'
                }],
                query: function (param) {
                    param = $.extend({}, param);
                    grid.query('table', param);
                }
            });

            grid.init('table',{
                url: url.cxswhyList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['swhysj','hydd','hyzcr','hyjlr','cjhyry','hynr'],
                    hidden:[]})
            });
            hideshow.init('modules/clumn/swhy',[ 'swhysj', 'hydd', 'hyzcr', 'hyjlr', 'cjhyry','hynr'],[]);

          
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