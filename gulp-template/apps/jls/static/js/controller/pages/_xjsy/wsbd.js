/**
 模块名称: 械具使用
 开始时间: 2020-3-7
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
    var clumn=require('modules/clumn/jj');
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

            searchform.initLc('search',{              
				query:function(param){
					   param=$.extend({}, {
										 'state':'R2'
									}, param);
				    grid.query('table',param);
				 }
            });

            grid.init('table',{
                url: url.jjList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['xm','jsh','cxyyString','syts','xjmcString','kssjString','jbr'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/jj',['xm','jsh','cxyyString','syts','xjmcString','kssjString','jbr'],[]);

           
            glws.init('glws', {
                files:[
                    {name:"使用警械审批表",label:"jls_syjxsqb"}
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