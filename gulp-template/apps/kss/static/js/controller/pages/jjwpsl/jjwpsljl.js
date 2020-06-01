/**
 * 救济物品申领
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
    var clumn=require('modules/clumn/jjwpsljl');
    var url=require('modules/url');
    var jbxxgrid = require('modules/jbxxgrid');
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
                ]
            });

            searchform.init('search',{
                pageRender:{
                    primary: [{
                        name: 'blrq_start',
                        title: '登记日期',
                        type: 'datebox'
                    }, {
                        name: 'blrq_end',
                        title: '至',
                        type: 'datebox'
                    }]
                },
                query:function(param){
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.jjwpslList,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                    clumns:['jbxxSnbh','xm','jjyy','jjrq','djr','djsj','wp','ldxm','ldyj','ldpssj'],
                    hidden:[]})
            });

            /**布局初始化**/
        },
        eventBind:function(){
            /**事件绑定**/
            /**事件绑定**/
        }
    };

    $(main.init);

});