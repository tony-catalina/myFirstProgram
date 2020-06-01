/**
模块名称： 业务台账
开始时间： 2020-2-25
*/
define(function(require){
    //公共控件、组件、工具导入
    require('jquery');
    require('easyui');
    var tools=require('awd/jquery/tools');
    var util= require('awd/easyui/util');
    var utils = require('awd/layui/utils');
    var hideshow = require('modules/showHideClumn');
    var grid=require('awd/easyui/grid');
    var toolbar=require('modules/toolbar');
    var linkbar=require('modules/linkbar');
    var searchform=require('modules/searchform');
    var clumn=require('modules/clumn/zdry');
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
        	toolbar.init({
                buttons:[
                	{id:'print',name:'台账d打印',icon:'icon-iconSVG-'},
                    {id:'excel',name:'导出excel',icon:'icon-daochu'},
                ]
            });

            linkbar.init({
                links:[
                    {id:'color',name:'分色示例',icon:'icon-gengduo1',fun:function(){}}
                ]
            });

            searchform.initYwtz('search',{
                query:function(param){
                    param = $.extend({}, {
                        'state': 'R2'
                    }, param);
                    grid.query('table',param);
                }
            });

            grid.init('table',{
                url: url.zdryYwtz,
                fit: false,
                width: '100%',
                height: window.innerHeight - 200,
                firstLoad: false,
                columns: clumn( {check:false,
                                 clumns:['jbxx_xm','jsh','xbString','csrqString','jbxx_sxzm','rygllbString','blrqString'],
                                 hidden:[]})
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