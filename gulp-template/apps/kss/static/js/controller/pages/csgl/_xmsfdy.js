/**
模块名称： 安全检查
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
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbxxgrid=require('modules/jbxxgrid');
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
                    {id:'add',name:'打印刑满释放证',icon:'icon-jiahao',fun:function(){
                        layer.confirm('您确定要打印刑满释放证吗？', {
                            btn: ['确定','取消'] //按钮
                          }, function(){
                            layer.msg(
                                '打印失败', {icon: 5});
                          }, function(){
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
            	query:function(param){
            		   param=$.extend({}, {
            							'taskDefinitionKey':'kss_csgl_xmsfzdy',
                                        'processDefinitionKey':'kss_csgl'
            						}, param);
            	    grid.query('table',param);
            	 }
            });
            jbxxgrid.initJbxxflow('table',false,200, {
                'taskDefinitionKey': 'kss_csgl_xmsfzdy',
                'processDefinitionKey': 'kss_csgl'
            },function(rybh) {
                console.log(rybh);
            });
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