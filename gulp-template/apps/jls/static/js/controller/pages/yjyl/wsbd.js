/**
 模块名称: 文书补打
 开始时间: 2020-3-12
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
    var glws=require('modules/glws');
    var clumn=require('modules/clumn/yjyayl');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');

    //界面控件
    var main={
        init:function(){
            //界面初始化
            main.layout();
            main.eventBind();
        },
        layout:function(){
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });

            searchform.init('search',{
               pageRender:{
                primary: [
                    { name: 'kssjStart', title: '应急预演时间始', type: 'datebox' },
                    { name: 'kssjEnd', title: '至', type: 'datebox' },
                ],
                more: [
                    [
                        { name: 'jssjStart', title: '应急预演时间止', type: 'datebox' },
                        { name: 'jssjEnd', title: '至', type: 'datebox' },
                    ]
                ],
               },
                query: function (param) {
                    param = $.extend({}, {
                        'state': 'R2',
                        'dqjd': '3'
                    }, param);
                    grid.query('table', param);
                }
            });
            grid.init('table', {
                url: url.yjyllist,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['kssj','jssj','zzzhz','yllb','zcld','hyjlr'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/yjyayl', ['kssj','jssj','zzzhz','yllb','zcld','hyjlr'],[]);
           
            glws.init('glws', {
                files:[
                    {name:"应急预案演练记录",label:"jls_txhjsp"},

                ]
            });

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