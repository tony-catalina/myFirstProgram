/**
模块名称： 禁闭解除领导审批
开始时间： 2020-3-7
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
    var utils=require('awd/layui/utils');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jb');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbjcLdspForm=require('modules/form/jbjcLdsp');
    var jbxxgrid = require('modules/jbxxgrid');
    var jqtree = require('modules/jqtree');
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
                    {
                        id: 'add',
                        name: '审批',
                        icon: 'icon-jiahao',
                        ryyw:true,
                        fun:function(){
                            var data = grid.getSelected('table')[0];
                            var addData1 = {  ldyj: '同意' };
                            var addData = {};
                            Object.assign(addData, data, addData1);
                            if(data) {
                                jbjcLdspForm.init(url.ldspAddByGj, addData, function() {
                                    grid.reload('table')
                                });
                            }else {
                                utils.alert('请选择人员');
                            }
                        }
                    }
                ]
            });
            linkbar.init({
                links:[
                    {id:'list',name:'数据列选择',icon:'icon-gengduo7',fun:function(){hideshow.show('table');}}
                ]
            });
            searchform.init('search',{
                query:function(param){
                    param=$.extend({},{
                        'taskDefinitionKey':'kss_jbjc_ldsp',
                        'processDefinitionKey':'kss_jbjc'
                    },param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_jbjc_ldsp','processDefinitionKey':'kss_jbjc'},function(rybh) {   //流程中的节点使用这个
            });

            jqtree.init('jqtree', 'table');
            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            //    $('#add').unbind('click').bind('click',function () {
            //          alert(111);
            //    });
            /**事件绑定**/
        }
    };

    /**
     *运行入口
     */
    $(main.init);

});
