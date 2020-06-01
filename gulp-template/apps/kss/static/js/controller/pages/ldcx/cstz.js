/**
模块名称： 领导查询-出所台账
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var hideshow=require('modules/showHideClumn');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/clcs');
    var url=require('modules/url');

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

            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}},
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.init('search',{
                primary: [{
                    name: 'cssj_start',
                    title: '出所时间',
                    type: 'datebox'
                }, {
                    name: 'cssj_end',
                    title: '至',
                    type: 'datebox'
                }],
				more: [
					[
						{name: 'jsh', title: '监室号', type: 'awdCombotree', url:url.getJqCombotree}
					]
				],
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.cstzList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['snbh','xm','jsh','csyyString','cssjString'],
                    hidden:[,'csqx','pzdw']})
            });
            hideshow.init('modules/clumn/clcs',['snbh','xm','jsh','csyyString','cssjString'],['csqx','pzdw']);
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