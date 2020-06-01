/**
模块名称： 检验凭证
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
    var clumn=require('modules/clumn/jbxx');
    var url=require('modules/url');
    var formtpl=require('services/form/_csglJypz.html');
    var hideshow=require('modules/showHideClumn');
    var tree=require('awd/easyui/tree');
    var jypzFormAdd = require('modules/form/csglJypz');
    var jbxxgrid=require('modules/jbxxgrid');
    var jqtree=require('modules/jqtree');//监区树引用
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
                    {id:'add',name:'检验凭证',icon:'icon-jiahao',ryyw:true,fun:function(){
                            var data = grid.getSelected('table')[0];
                            if(data) {
                                jypzFormAdd.init(url.csglJypz,data, function() {
                                });
                            }else  {
                                utils.alert("请选择人员");
                            }

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
                    param = $.extend({}, {
                        'taskDefinitionKey': 'kss_csgl_jypz',
                        'processDefinitionKey': 'kss_csgl'
                    }, param);
                    grid.query('table', param);
                    grid.query('jqtree', param);
                }
            });

            jbxxgrid.initjbxx('table',false,200, {'taskDefinitionKey': 'kss_csgl_jypz','processDefinitionKey': 'kss_csgl'},function(rybh) {   //流程第一个节点，或不是流程的但是查询的是犯人的基本信息的
                
            });

            jqtree.init('jqtree','table');//有监区树就加，没有不加
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