/**
模块名称： 禁闭解除中队长意见
开始时间： 2020-3-7
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var utils=require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/jb');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var jbjcZdzyjForm=require('modules/form/jbjcZdzyj');
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
                            var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                            var postData = Object.assign({},data,{djsj:currentTime});
                            if(data) {
                                var addData = {};
                                Object.assign(addData, data);
                                jbjcZdzyjForm.init(url.ldspAddByGj, postData, function() {
                                    grid.reload('table');
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
                        'taskDefinitionKey':'kss_jbjc_zdzyj',
                        'processDefinitionKey':'kss_jbjc'
                    },param);
                    grid.query('table',param);
                }
            });

            jbxxgrid.initJbxxflow('table',false,200,{'taskDefinitionKey':'kss_jbjc_zdzyj','processDefinitionKey':'kss_jbjc'},function(rybh) {   //流程中的节点使用这个
            });

            jqtree.init('jqtree', 'table');
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