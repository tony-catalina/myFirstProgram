/**
模块名称： 文明个人查询
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
    var clumn=require('modules/clumn/wmpb');
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
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                     {id:'color',name:'分色示例',icon:'icon-gengduo1'}
                ]
            });
            searchform.initLc('search',{
				query:function(param){
					   param=$.extend({}, {
										 'state': 'R2',
										 'bllx': '01',
										 'pblx':'01',
										 'jbxx_state':'R8',
										 'processDefinitionKey': 'jls_wmpb',
										 'taskDefinitionKey': 'jls_wmpb_wmgrcx'
									}, param);
				    grid.query('table',param);
				 }
            });
            grid.init('table',{
                url: url.wmpbList2jbxx,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['xm','jsh','xbString','gjmj','jlcs','psr','pxsjString','pxyy'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/wmpb',['xm','jsh','xbString','gjmj','jlcs','psr','pxsjString','pxyy'],[]);

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