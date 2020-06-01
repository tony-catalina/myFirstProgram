/**
模块名称： 设置 所领导意见
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    require('layer.config');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/_xj');
    var url=require('modules/url');
    var hideshow=require('modules/showHideClumn');
    var zcjcxjsyForm = require('modules/form/zcjcxjsy');
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
                    {id:'add',name:'解除械具',icon:'icon-jiahao',ryyw:true,fun:function(){
                        var data = grid.getSelected('table')[0];
                        if(data) {
                            zcjcxjsyForm.init(url.xjzcjc, data, function() {

                            });
                        }else {
                            utils.alert('请选择人员!');
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
                    param=$.extend({},{
                        'jj':'02',
                        'xjjssj': (new Date()).Format('yyyy-MM-dd')+' 23:59:59',
                        'xjjcsjBz':true,
                        'jssj_star':(new Date()).Format('yyyy-MM-dd'),
                        'jssj_end':(new Date()).Format('yyyy-MM-dd')
                    },param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.xjYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jbxx_xm','jbxx_jsh','jbxx_bahjString','xjmcString','kssjString','jssjString'],
                                 hidden:[]})
            });
            hideshow.init('modules/clumn/_xj',['jbxx_xm','jbxx_jsh','jbxx_bahjString','xjmcString','kssjString','jssjString'],[]);
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
